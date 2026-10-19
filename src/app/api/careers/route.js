// src/app/api/careers/route.js
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

/* ------------------------------------------------------------------ */
/* Helpers                                                             */
/* ------------------------------------------------------------------ */
const esc = (v) =>
  String(v ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

// Safe for use inside an email header (no line breaks / quotes / angle brackets)
const oneLine = (v) => String(v ?? "").replace(/[\r\n"<>]/g, " ").replace(/\s+/g, " ").trim();

const isHttpUrl = (v) => {
  try {
    const u = new URL(v);
    return u.protocol === "http:" || u.protocol === "https:";
  } catch {
    return false;
  }
};

const MAX_LEN = 5000;

/* ------------------------------------------------------------------ */
/* Every field of the application form, grouped like the form sections */
/* kind: text (default) | long | link | money | list                    */
/* ------------------------------------------------------------------ */
const SECTIONS = [
  {
    title: "Personal Information",
    rows: [
      { label: "Full Name", key: "fullName" },
      { label: "Date of Birth", key: "dateOfBirth" },
      { label: "Nationality", key: "nationality" },
    ],
  },
  {
    title: "Contact Information",
    rows: [
      { label: "Email Address", key: "email", kind: "email" },
      { label: "Phone Number", key: "phone" },
      { label: "WhatsApp Number", key: "whatsapp" },
      { label: "City", key: "city" },
      { label: "Province/State", key: "province" },
    ],
  },
  {
    title: "Position & Professional Experience",
    rows: [
      { label: "Position Applying For", key: "position" },
      { label: "Experience Level", key: "experienceLevel" },
      { label: "Employment Status", key: "employmentStatus" },
      { label: "Current Company", key: "currentCompany" },
      { label: "Current Designation", key: "currentDesignation" },
      { label: "Current Salary (PKR / month)", key: "currentSalary", kind: "money" },
      { label: "Work History", key: "workHistory", kind: "long" },
      { label: "Reason for Applying", key: "reasonForApplying", kind: "long" },
    ],
  },
  {
    title: "Skills & Technical Expertise",
    rows: [
      { label: "Technical Skills", key: "technicalSkills" },
      { label: "Primary Expertise", key: "primaryExpertise" },
      { label: "Software & Tools", key: "tools" },
      { label: "Certifications", key: "certifications" },
      { label: "Languages Known", key: "languages", kind: "list" },
    ],
  },
  {
    title: "Educational Background",
    rows: [
      { label: "Highest Qualification", key: "qualification" },
      { label: "Field of Study", key: "fieldOfStudy" },
      { label: "University/Institute", key: "university" },
      { label: "Year of Passing", key: "yearOfPassing" },
      { label: "CGPA/Percentage", key: "cgpa" },
    ],
  },
  {
    title: "Portfolio & Professional Profiles",
    rows: [
      { label: "Portfolio URL", key: "portfolio", kind: "link" },
      { label: "LinkedIn Profile", key: "linkedin", kind: "link" },
      { label: "GitHub Profile", key: "github", kind: "link" },
      { label: "Behance/Dribbble", key: "behance", kind: "link" },
      { label: "Projects & Achievements", key: "projects", kind: "long" },
    ],
  },
  {
    title: "Work Preferences & Availability",
    rows: [
      { label: "Work Type", key: "workType" },
      { label: "Preferred Shift", key: "preferredShift" },
      { label: "Notice Period", key: "noticePeriod" },
      { label: "Expected Salary (PKR / month)", key: "expectedSalary", kind: "money" },
      { label: "Relocation Preference", key: "relocation" },
      { label: "Interview Availability", key: "interviewAvailability" },
    ],
  },
  {
    title: "Additional Information",
    rows: [
      { label: "Cover Letter", key: "coverLetter", kind: "long" },
      { label: "Why Greyloops?", key: "whyGreyloops", kind: "long" },
      { label: "How You Heard About Us", key: "source" },
    ],
  },
];

const ALL_ROWS = SECTIONS.flatMap((s) => s.rows);

const REQUIRED = [
  ["fullName", "Full Name"],
  ["email", "Email Address"],
  ["phone", "Phone Number"],
  ["city", "City"],
  ["position", "Position Applying For"],
  ["experienceLevel", "Experience Level"],
  ["employmentStatus", "Employment Status"],
  ["technicalSkills", "Technical Skills"],
  ["languages", "Languages Known"],
  ["qualification", "Highest Qualification"],
  ["fieldOfStudy", "Field of Study"],
  ["workType", "Work Type"],
  ["noticePeriod", "Notice Period"],
  ["expectedSalary", "Expected Salary"],
  ["interviewAvailability", "Interview Availability"],
  ["coverLetter", "Cover Letter"],
];

// Keep only known fields and coerce them to safe values
function sanitize(body) {
  const out = {};
  for (const { key, kind } of ALL_ROWS) {
    const raw = body?.[key];
    if (kind === "list") {
      out[key] = Array.isArray(raw)
        ? raw.filter((x) => typeof x === "string").map((x) => x.trim().slice(0, 100)).filter(Boolean)
        : [];
    } else {
      out[key] = raw === undefined || raw === null ? "" : String(raw).trim().slice(0, MAX_LEN);
    }
  }
  return out;
}

const phoneOk = (v) => /^[0-9]{7,15}$/.test(String(v).replace(/[\s\-()+]/g, ""));
const emailOk = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

/* ------------------------------------------------------------------ */
/* Email rendering                                                     */
/* ------------------------------------------------------------------ */
const EMPTY_HTML = '<span style="color:#94a3b8;">Not provided</span>';

function valueText(row, data) {
  const v = data[row.key];
  if (row.kind === "list") return v.length ? v.join(", ") : "";
  if (row.kind === "money" && v !== "") {
    const n = Number(v);
    return Number.isFinite(n) ? `PKR ${n.toLocaleString("en-US")}` : v;
  }
  return v;
}

function valueHtml(row, data) {
  const text = valueText(row, data);
  if (!text) return EMPTY_HTML;
  if (row.kind === "email") {
    return `<a href="mailto:${esc(text)}" style="color:#2563eb;">${esc(text)}</a>`;
  }
  if (row.kind === "link") {
    return isHttpUrl(text)
      ? `<a href="${esc(text)}" style="color:#2563eb;word-break:break-all;">${esc(text)}</a>`
      : esc(text);
  }
  return esc(text);
}

function buildHtml(data) {
  const sectionsHtml = SECTIONS.map((section, i) => {
    const rows = section.rows
      .map((row) => {
        if (row.kind === "long") {
          return `
            <tr>
              <td colspan="2" style="padding:10px 0 4px;font-weight:bold;color:#475569;">${esc(row.label)}</td>
            </tr>
            <tr>
              <td colspan="2" style="padding:0 0 10px;">
                <div style="background:#f8fafc;border-radius:6px;padding:12px 14px;white-space:pre-wrap;line-height:1.6;">${valueHtml(row, data)}</div>
              </td>
            </tr>`;
        }
        return `
            <tr>
              <td style="padding:7px 12px 7px 0;font-weight:bold;color:#475569;width:200px;vertical-align:top;">${esc(row.label)}</td>
              <td style="padding:7px 0;vertical-align:top;">${valueHtml(row, data)}</td>
            </tr>`;
      })
      .join("");

    return `
      <h3 style="color:#2563eb;margin:28px 0 6px;font-size:16px;">
        <span style="color:#94a3b8;font-family:monospace;">${String(i + 1).padStart(2, "0")}</span>&nbsp; ${esc(section.title)}
      </h3>
      <table style="width:100%;border-collapse:collapse;border-top:1px solid #e2e8f0;">${rows}</table>`;
  }).join("");

  return `
    <div style="font-family:Arial,sans-serif;padding:24px;color:#333;max-width:700px;margin:0 auto;border:1px solid #eee;border-radius:8px;">
      <h2 style="color:#2563eb;margin:0 0 4px;">New Job Application</h2>
      <p style="margin:0 0 8px;color:#64748b;">
        <strong>${esc(data.fullName)}</strong> applied for <strong>${esc(data.position)}</strong>
      </p>
      ${sectionsHtml}
      <hr style="margin:28px 0 12px;border:0;border-top:1px solid #eee;" />
      <p style="font-size:12px;color:#94a3b8;margin:0;">Sent from the Greyloops careers page.</p>
    </div>`;
}

function buildText(data) {
  const lines = [`NEW JOB APPLICATION: ${data.fullName} - ${data.position}`, ""];
  SECTIONS.forEach((section, i) => {
    lines.push(`${String(i + 1).padStart(2, "0")}. ${section.title.toUpperCase()}`);
    section.rows.forEach((row) => {
      lines.push(`${row.label}: ${valueText(row, data) || "Not provided"}`);
    });
    lines.push("");
  });
  return lines.join("\n");
}

/* ------------------------------------------------------------------ */
/* POST /api/careers                                                    */
/* ------------------------------------------------------------------ */
export async function POST(req) {
  try {
    const body = await req.json();
    const data = sanitize(body);

    // Server-side validation
    const missing = REQUIRED.filter(([key]) =>
      Array.isArray(data[key]) ? data[key].length === 0 : !data[key]
    ).map(([, label]) => label);

    if (missing.length) {
      return NextResponse.json(
        { error: `Please complete the required fields: ${missing.join(", ")}.` },
        { status: 400 }
      );
    }
    if (!emailOk(data.email)) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }
    if (!phoneOk(data.phone)) {
      return NextResponse.json({ error: "Please enter a valid phone number." }, { status: 400 });
    }

    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      console.error("SMTP Error: GMAIL_USER / GMAIL_APP_PASSWORD are not set.");
      return NextResponse.json(
        { error: "Email service is not configured. Please try again later." },
        { status: 500 }
      );
    }

    // Configure Nodemailer Transporter with Google SMTP
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // SSL
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    const mailOptions = {
      from: `"${oneLine(data.fullName)} (Job Application)" <${process.env.GMAIL_USER}>`,
      to: process.env.CAREERS_TO_EMAIL || "bukharirazahassan@gmail.com",
      replyTo: data.email,
      subject: `New Job Application: ${oneLine(data.fullName)} - ${oneLine(data.position)}`,
      text: buildText(data),
      html: buildHtml(data),
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "Application sent successfully." });
  } catch (error) {
    console.error("SMTP Error:", error);
    return NextResponse.json(
      { error: "Failed to send application. Please try again later." },
      { status: 500 }
    );
  }
}