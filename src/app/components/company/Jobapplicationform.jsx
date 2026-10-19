// src/app/components/company/JobApplicationForm.jsx
"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Briefcase,
  Check,
  CheckCircle2,
  Code2,
  FileText,
  GraduationCap,
  Link2,
  Mail,
  SlidersHorizontal,
  User,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/* Option lists                                                        */
/* ------------------------------------------------------------------ */
const POSITIONS = [
  "Web Developer",
  "App Developer",
  "SEO Specialist",
  "Graphic Designer",
  "Digital Marketing Specialist",
  "UI/UX Designer",
  "Full Stack Developer",
  "Frontend Developer",
  "Backend Developer",
  "Content Writer",
  "Social Media Manager",
  "Project Manager",
  "Business Development Executive",
  "Quality Assurance",
  "Data Analyst",
  "AI Engineer",
  "Machine Learning Engineer",
  "Data Scientist",
  "AI/ML Specialist",
  "NLP Engineer",
  "Computer Vision Engineer",
  "AI Researcher",
  "Deep Learning Engineer",
  "AI Prompt Engineer",
  "LLM Developer",
  "Generative AI Specialist",
  "Other",
];

const EXPERIENCE = [
  "Fresher (0 years)",
  "0-1 years",
  "1-2 years",
  "2-3 years",
  "3-5 years",
  "5-7 years",
  "7-10 years",
  "10+ years",
];

const EMPLOYMENT = [
  "Full-Time Employed",
  "Part-Time Employed",
  "Self-Employed / Freelancer",
  "Contract / Temporary",
  "Internship",
  "Unemployed (Actively Looking)",
  "Unemployed (Not Looking)",
  "Fresher / No Experience",
  "Student",
  "Between Jobs",
];

const EXPERTISE = [
  "Frontend Development",
  "Backend Development",
  "Full Stack Development",
  "Mobile App Development",
  "UI/UX Design",
  "Graphic Design",
  "SEO & Digital Marketing",
  "Content Writing",
  "Project Management",
  "Data Analysis",
  "Artificial Intelligence",
  "Machine Learning",
  "Deep Learning",
  "Natural Language Processing",
  "Computer Vision",
  "Data Science",
  "AI/ML Engineering",
  "Generative AI",
  "Other",
];

const LANGUAGES = ["English", "Urdu", "Sindhi", "Punjabi", "Arabic", "Other"];

const QUALIFICATIONS = [
  "Matriculation",
  "Intermediate",
  "Bachelor's Degree",
  "Master's Degree",
  "PhD",
  "Diploma",
  "Professional Certification",
];

const SKILL_SUGGESTIONS = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Python",
  "Java",
  "PHP",
  "Laravel",
  "Flutter",
  "SQL",
  "MongoDB",
];

const TOOL_SUGGESTIONS = [
  "VS Code",
  "Git",
  "GitHub",
  "Figma",
  "Postman",
  "Docker",
  "Jira",
  "Photoshop",
  "Illustrator",
  "Slack",
];

const FIELD_OF_STUDY = [
  "Computer Science",
  "Software Engineering",
  "Information Technology",
  "Data Science",
  "Artificial Intelligence",
  "Electrical Engineering",
  "Business Administration",
  "Graphic Design",
  "Media Sciences",
  "Mathematics",
];

/* ------------------------------------------------------------------ */
/* Form definition – every section and field                           */
/* ------------------------------------------------------------------ */
const SECTIONS = [
  {
    id: "personal",
    icon: User,
    title: "Personal Information",
    description:
      "Help us get to know you. Provide your basic information so we can identify your application and understand your background.",
    fields: [
      { name: "fullName", label: "Full Name", type: "text", required: true, placeholder: "Enter your full name" },
      { name: "dateOfBirth", label: "Date of Birth (optional)", type: "date" },
      { name: "nationality", label: "Nationality (optional)", type: "text", placeholder: "e.g., Pakistani" },
    ],
  },
  {
    id: "contact",
    icon: Mail,
    title: "Contact Information",
    description:
      "Provide your contact details so our recruitment team can reach you regarding your application and potential opportunities.",
    fields: [
      { name: "email", label: "Email Address", type: "email", required: true, placeholder: "your.email@example.com" },
      { name: "phone", label: "Phone Number", type: "tel", required: true, placeholder: "+92 300 1234567" },
      { name: "whatsapp", label: "WhatsApp Number", type: "tel", placeholder: "+92 300 1234567" },
      { name: "city", label: "City", type: "text", required: true, placeholder: "e.g., Lahore" },
      { name: "province", label: "Province/State", type: "text", placeholder: "e.g., Punjab" },
    ],
  },
  {
    id: "experience",
    icon: Briefcase,
    title: "Position & Professional Experience",
    description:
      "Tell us which role interests you and share your experience, current employment status, and professional background.",
    fields: [
      { name: "position", label: "Position Applying For", type: "select", required: true, options: POSITIONS, placeholder: "Select position" },
      { name: "experienceLevel", label: "Experience Level", type: "select", required: true, options: EXPERIENCE, placeholder: "Select experience" },
      { name: "employmentStatus", label: "Employment Status", type: "select", required: true, options: EMPLOYMENT, placeholder: "Select employment status" },
      { name: "currentCompany", label: "Current Company", type: "text", placeholder: "Company name" },
      { name: "currentDesignation", label: "Current Designation", type: "text", placeholder: "Your current position" },
      { name: "currentSalary", label: "Current Salary (optional, PKR per month)", type: "number", placeholder: "e.g., 40000", min: 0 },
      { name: "workHistory", label: "Work History", type: "textarea", wide: true, rows: 4, placeholder: "Summarise your previous roles, companies, and responsibilities" },
      { name: "reasonForApplying", label: "Reason for Applying", type: "textarea", wide: true, rows: 3, placeholder: "Why are you looking for a new opportunity?" },
    ],
  },
  {
    id: "skills",
    icon: Code2,
    title: "Skills & Technical Expertise",
    description:
      "Highlight your core competencies, technical capabilities, and tools that demonstrate how you can contribute to Greyloops projects and teams.",
    fields: [
      { name: "technicalSkills", label: "Technical Skills", type: "text", required: true, wide: true, placeholder: "e.g., JavaScript, Python, React", hint: "Separate multiple skills with commas", suggestions: SKILL_SUGGESTIONS },
      { name: "primaryExpertise", label: "Primary Expertise", type: "select", options: EXPERTISE, placeholder: "Select area" },
      { name: "tools", label: "Software & Tools", type: "text", placeholder: "e.g., VS Code, Git, Figma", hint: "Separate multiple tools with commas", suggestions: TOOL_SUGGESTIONS },
      { name: "certifications", label: "Certifications", type: "text", wide: true, placeholder: "List any relevant certifications, courses, or training programs" },
      { name: "languages", label: "Languages Known", type: "checkboxes", required: true, wide: true, options: LANGUAGES, hint: "Select at least one language" },
    ],
  },
  {
    id: "education",
    icon: GraduationCap,
    title: "Educational Background",
    description:
      "Share your academic qualifications and relevant education to help us understand your learning background and professional preparation.",
    fields: [
      { name: "qualification", label: "Highest Qualification", type: "select", required: true, options: QUALIFICATIONS, placeholder: "Select qualification" },
      { name: "fieldOfStudy", label: "Field of Study", type: "text", required: true, placeholder: "e.g., Computer Science", datalist: FIELD_OF_STUDY },
      { name: "university", label: "University/Institute", type: "text", placeholder: "Name of university or institute" },
      { name: "yearOfPassing", label: "Year of Passing", type: "number", placeholder: "e.g., 2022", min: 1980, max: 2035 },
      { name: "cgpa", label: "CGPA/Percentage", type: "text", placeholder: "e.g., 3.5 / 75%" },
    ],
  },
  {
    id: "portfolio",
    icon: Link2,
    title: "Portfolio & Professional Profiles",
    description:
      "Showcase your work, projects, and professional presence so our team can better understand your skills and achievements.",
    fields: [
      { name: "portfolio", label: "Portfolio URL", type: "url", placeholder: "https://yourportfolio.com" },
      { name: "linkedin", label: "LinkedIn Profile", type: "url", placeholder: "https://linkedin.com/in/yourprofile" },
      { name: "github", label: "GitHub Profile", type: "url", placeholder: "https://github.com/yourprofile" },
      { name: "behance", label: "Behance/Dribbble", type: "url", placeholder: "https://behance.net/yourprofile" },
      { name: "projects", label: "Projects & Achievements", type: "textarea", wide: true, rows: 4, placeholder: "Describe your key projects, achievements, or contributions" },
    ],
  },
  {
    id: "preferences",
    icon: SlidersHorizontal,
    title: "Work Preferences & Availability",
    description:
      "Let us know your preferred working arrangement, availability, and expectations so we can assess alignment with the opportunity.",
    fields: [
      { name: "workType", label: "Work Type", type: "select", required: true, options: ["Onsite", "Remote", "Hybrid", "Any"], placeholder: "Select type" },
      { name: "preferredShift", label: "Preferred Shift", type: "select", options: ["Day Shift", "Night Shift", "Flexible"], placeholder: "Select shift" },
      { name: "noticePeriod", label: "Notice Period", type: "select", required: true, options: ["Immediate", "1 week", "2 weeks", "1 month", "2 months", "3 months"], placeholder: "Select notice period" },
      { name: "expectedSalary", label: "Expected Salary (PKR per month)", type: "number", required: true, placeholder: "e.g., 50000", min: 0 },
      { name: "relocation", label: "Relocation Preference", type: "select", options: ["Yes", "No", "Depends on Opportunity"], placeholder: "Select option" },
      { name: "interviewAvailability", label: "Interview Availability", type: "radios", required: true, wide: true, options: ["Immediately", "Within a Week", "After Notice Period"] },
    ],
  },
  {
    id: "additional",
    icon: FileText,
    title: "Additional Information",
    description:
      "Tell us why you would like to work with Greyloops, what motivates you, and how your experience aligns with our team and projects.",
    fields: [
      { name: "coverLetter", label: "Cover Letter", type: "textarea", required: true, wide: true, rows: 5, placeholder: "Tell us why you'd be a great fit for Greyloops and what motivates you to join our team..." },
      { name: "whyGreyloops", label: "Why Greyloops?", type: "textarea", wide: true, rows: 4, placeholder: "What attracts you to Greyloops, our projects, and our team?" },
      { name: "source", label: "How You Heard About Us", type: "select", wide: true, options: ["Company Website", "LinkedIn", "Facebook", "Instagram", "Job Portal", "Referral from Friend/Employee", "University/College", "Other"], placeholder: "Select source" },
    ],
  },
];

const ALL_FIELDS = SECTIONS.flatMap((s) => s.fields);
const INITIAL = Object.fromEntries(
  ALL_FIELDS.map((f) => [f.name, f.type === "checkboxes" ? [] : ""])
);

const inputClass =
  "w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 shadow-xs transition-all focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-100";

const pad = (n) => String(n).padStart(2, "0");

export default function JobApplicationForm() {
  const [data, setData] = useState(INITIAL);
  const [errors, setErrors] = useState({});
  const [active, setActive] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Highlight the section currently in view
  useEffect(() => {
    if (isSubmitted) return;
    const els = SECTIONS.map((s) => document.getElementById(`apply-${s.id}`)).filter(Boolean);
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(Number(e.target.dataset.index));
        }),
      { rootMargin: "-30% 0px -55% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [isSubmitted]);

  const setValue = (name, value) => {
    setData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const toggleCheckbox = (name, option) => {
    const current = data[name];
    setValue(
      name,
      current.includes(option) ? current.filter((o) => o !== option) : [...current, option]
    );
  };

  const addSuggestion = (name, item) => {
    const items = data[name].split(",").map((s) => s.trim()).filter(Boolean);
    if (!items.map((i) => i.toLowerCase()).includes(item.toLowerCase())) {
      setValue(name, [...items, item].join(", "));
    }
  };

  const phoneOk = (v) => /^[0-9]{7,15}$/.test(v.replace(/[\s\-()+]/g, ""));

  const validate = () => {
    const next = {};
    if (!phoneOk(data.phone)) next.phone = "Please enter a valid phone number (7 to 15 digits).";
    if (data.whatsapp && !phoneOk(data.whatsapp)) next.whatsapp = "Please enter a valid WhatsApp number.";
    if (data.languages.length === 0) next.languages = "Please select at least one language.";
    if (!data.interviewAvailability) next.interviewAvailability = "Please choose your interview availability.";
    return next;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const found = validate();
    setErrors(found);
    const first = Object.keys(found)[0];
    if (first) {
      document
        .querySelector(`[data-field="${first}"]`)
        ?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    setIsSubmitting(true);
    try {
      // Sends the application to src/app/api/careers/route.js (emails the HR team)
      const response = await fetch("/api/careers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json().catch(() => ({}));
      if (response.ok && result.success) {
        setIsSubmitted(true);
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        alert(result.error || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Application error:", error);
      alert("Failed to submit. Please check your network connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const goTo = (id) =>
    document.getElementById(`apply-${id}`)?.scrollIntoView({ behavior: "smooth", block: "start" });

  const renderField = (f) => {
    const id = `field-${f.name}`;
    const value = data[f.name];
    const err = errors[f.name];

    let control = null;

    if (["text", "email", "tel", "date", "number", "url"].includes(f.type)) {
      control = (
        <>
          <input
            id={id}
            type={f.type}
            name={f.name}
            value={value}
            required={f.required}
            placeholder={f.placeholder}
            min={f.min}
            max={f.max}
            list={f.datalist ? `${id}-list` : undefined}
            onChange={(e) => setValue(f.name, e.target.value)}
            className={`${inputClass} ${err ? "border-red-500 focus:border-red-500 focus:ring-red-100" : ""}`}
          />
          {f.datalist && (
            <datalist id={`${id}-list`}>
              {f.datalist.map((o) => (
                <option key={o} value={o} />
              ))}
            </datalist>
          )}
          {f.suggestions && (
            <div className="mt-2 flex flex-wrap gap-1.5">
              {f.suggestions.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => addSuggestion(f.name, s)}
                  className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-600 transition-colors hover:bg-blue-50 hover:text-blue-600"
                >
                  + {s}
                </button>
              ))}
            </div>
          )}
        </>
      );
    } else if (f.type === "select") {
      control = (
        <select
          id={id}
          name={f.name}
          value={value}
          required={f.required}
          onChange={(e) => setValue(f.name, e.target.value)}
          className={`${inputClass} cursor-pointer`}
        >
          <option value="" disabled={f.required}>
            {f.placeholder}
          </option>
          {f.options.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      );
    } else if (f.type === "textarea") {
      control = (
        <textarea
          id={id}
          name={f.name}
          value={value}
          required={f.required}
          rows={f.rows || 3}
          placeholder={f.placeholder}
          onChange={(e) => setValue(f.name, e.target.value)}
          className={`${inputClass} resize-none`}
        />
      );
    } else if (f.type === "checkboxes" || f.type === "radios") {
      const isCheck = f.type === "checkboxes";
      control = (
        <div className="flex flex-wrap gap-2.5" role={isCheck ? "group" : "radiogroup"}>
          {f.options.map((o) => {
            const checked = isCheck ? value.includes(o) : value === o;
            return (
              <label key={o} className="cursor-pointer">
                <input
                  type={isCheck ? "checkbox" : "radio"}
                  name={f.name}
                  value={o}
                  checked={checked}
                  onChange={() => (isCheck ? toggleCheckbox(f.name, o) : setValue(f.name, o))}
                  className="peer sr-only"
                />
                <span className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 shadow-xs ring-1 ring-slate-200 transition-all peer-checked:bg-blue-600 peer-checked:text-white peer-checked:ring-blue-600 peer-focus-visible:ring-2 peer-focus-visible:ring-blue-500 hover:ring-blue-300">
                  {checked && <Check className="h-3.5 w-3.5" strokeWidth={3} />}
                  {o}
                </span>
              </label>
            );
          })}
        </div>
      );
    }

    return (
      <div key={f.name} data-field={f.name} className={f.wide ? "sm:col-span-2" : ""}>
        <label htmlFor={id} className="mb-1.5 block text-xs font-semibold text-slate-700">
          {f.label}
          {f.required && <span className="ml-0.5 text-red-500">*</span>}
        </label>
        {control}
        {f.hint && !err && <p className="mt-1.5 text-xs text-slate-500">{f.hint}</p>}
        {err && <p className="mt-1.5 text-xs font-medium text-red-500">{err}</p>}
      </div>
    );
  };

  return (
    <section className="relative w-full overflow-clip bg-slate-50 pb-16 pt-6 lg:pb-24 lg:pt-4">
      {/* Background dots pattern */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(#cbd5e1_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-60" />

      {/* Glowing background circles */}
      <div className="pointer-events-none absolute left-0 top-[8%] h-96 w-96 rounded-full bg-blue-400/20 blur-[120px]" />
      <div className="pointer-events-none absolute right-0 top-[35%] h-80 w-80 rounded-full bg-indigo-400/15 blur-[120px]" />
      <div className="pointer-events-none absolute left-0 top-[62%] h-96 w-96 rounded-full bg-blue-400/15 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-indigo-400/15 blur-[120px]" />

      <div className="relative z-10 mx-auto grid w-full max-w-[120rem] grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-12 lg:px-8">
        {/* ───────── Left: heading + step navigator (sticky on desktop) ───────── */}
        <div className="px-2 sm:px-4 lg:col-span-4 lg:self-start lg:sticky lg:top-24">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3.5 py-1 text-xs font-semibold text-blue-700 shadow-sm ring-1 ring-blue-100 backdrop-blur-md sm:text-sm"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-blue-600" />
            Careers
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-4xl xl:text-[2.75rem] 2xl:text-6xl"
          >
            <span className="block text-slate-900">Your Future.</span>
            <span className="block text-blue-600">Our Innovation.</span>
          </motion.h2>

          <motion.span
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-5 block h-1 w-14 origin-left rounded-full bg-blue-600"
          />

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-5 max-w-md text-base font-medium leading-relaxed text-slate-600 sm:text-lg"
          >
            Complete the application below and our recruitment team will review it. Fields marked with <span className="font-bold text-red-500">*</span> are required.
          </motion.p>

          {/* Step navigator */}
          <nav aria-label="Application sections" className="mt-8 hidden lg:block">
            <ol className="relative space-y-1">
              <span className="pointer-events-none absolute bottom-4 left-[1.1rem] top-4 w-px bg-slate-200" />
              {SECTIONS.map((s, i) => {
                const isActive = i === active;
                const isDone = i < active;
                return (
                  <li key={s.id}>
                    <button
                      type="button"
                      onClick={() => goTo(s.id)}
                      className="group relative flex w-full items-center gap-3.5 rounded-xl px-1 py-2 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                    >
                      <span
                        className={`relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-bold transition-all duration-300 ${
                          isActive
                            ? "bg-blue-600 text-white shadow-md shadow-blue-600/30"
                            : isDone
                            ? "bg-blue-100 text-blue-600"
                            : "bg-white text-slate-400 ring-1 ring-slate-200 group-hover:text-blue-600"
                        }`}
                      >
                        {isDone ? <Check className="h-4 w-4" strokeWidth={3} /> : pad(i + 1)}
                      </span>
                      <span
                        className={`text-sm font-semibold transition-colors duration-300 ${
                          isActive ? "text-slate-900" : "text-slate-500 group-hover:text-slate-800"
                        }`}
                      >
                        {s.title}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ol>
          </nav>
        </div>

        {/* ───────── Right: the form ───────── */}
        <div className="px-2 sm:px-4 lg:col-span-8">
          <AnimatePresence mode="wait">
            {isSubmitted ? (
              <motion.div
                key="done"
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center rounded-3xl bg-white/80 px-6 py-20 text-center shadow-[0_20px_50px_rgba(15,23,42,0.08)] ring-1 ring-white/80 backdrop-blur-xl"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 ring-8 ring-emerald-50/50">
                  <CheckCircle2 className="h-10 w-10" />
                </div>
                <h3 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
                  Application submitted
                </h3>
                <p className="mt-2 max-w-md text-base font-medium text-slate-600">
                  Thank you for applying to Greyloops. Our recruitment team will review your application and get in touch soon.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setData(INITIAL);
                    setErrors({});
                    setIsSubmitted(false);
                  }}
                  className="mt-8 rounded-xl bg-slate-100 px-6 py-2.5 text-xs font-bold text-slate-700 transition-colors hover:bg-slate-200"
                >
                  Submit another application
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-6"
              >
                {SECTIONS.map((section, i) => {
                  const Icon = section.icon;
                  return (
                    <motion.section
                      key={section.id}
                      id={`apply-${section.id}`}
                      data-index={i}
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.1 }}
                      transition={{ duration: 0.5 }}
                      className="relative scroll-mt-28 overflow-hidden rounded-3xl bg-white/80 p-6 shadow-[0_20px_50px_rgba(15,23,42,0.08)] ring-1 ring-white/80 backdrop-blur-xl sm:p-8"
                    >
                      <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-blue-400/10 blur-3xl" />

                      <div className="relative flex items-start gap-4">
                        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-md shadow-blue-600/25">
                          <Icon className="h-6 w-6" strokeWidth={1.75} />
                        </span>
                        <div>
                          <p className="font-mono text-xs font-semibold text-blue-600">
                            {pad(i + 1)}
                          </p>
                          <h3 className="text-xl font-extrabold tracking-tight text-slate-900 sm:text-2xl">
                            {section.title}
                          </h3>
                          <p className="mt-1.5 max-w-2xl text-sm font-medium leading-relaxed text-slate-600">
                            {section.description}
                          </p>
                        </div>
                      </div>

                      <div className="relative mt-6 grid grid-cols-1 gap-x-5 gap-y-5 sm:grid-cols-2">
                        {section.fields.map(renderField)}
                      </div>
                    </motion.section>
                  );
                })}

                <div className="flex justify-end pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group inline-flex h-11 items-center justify-center gap-2.5 rounded-xl bg-blue-600 pl-6 pr-3 text-sm font-semibold text-white shadow-md shadow-blue-600/25 ring-1 ring-white/10 transition-all duration-300 hover:bg-blue-500 hover:shadow-blue-500/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    <span>{isSubmitting ? "Submitting..." : "Submit Application"}</span>
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/15 transition-all duration-300 group-hover:translate-x-0.5 group-hover:bg-white/25">
                      <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} />
                    </span>
                  </button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}