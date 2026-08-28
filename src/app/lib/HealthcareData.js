// src/app/lib/HealthcareData.js

export const sectionTitle = "Healthcare Systems";

export const sectionDescription =
  "Healthcare organizations have diverse technology needs, from building new platforms to modernizing legacy systems and integrating disconnected solutions. We deliver scalable, secure, and healthcare-focused software tailored to their operational requirements.";

export const servicesData = [
  {
    id: "01",
    title: "Electronic Health Records (EHR / EMR)",
    badge: "Clinical Management",
    blueCardText:
      "HIPAA-compliant digital medical record systems enabling real-time access to patient diagnostics, treatment histories, and automated clinical documentation.",
    points: [
      {
        heading: "Interoperable Architecture",
        description:
          "Enables seamless data exchange across laboratories, pharmacies, and external provider networks using HL7/FHIR protocols.",
      },
      {
        heading: "Automated Clinical Workflows",
        description:
          "Reduces administrative burden with smart charting templates, e-prescriptions, and automated billing codes.",
      },
    ],
  },
  {
    id: "02",
    title: "Telemedicine Platform",
    badge: "Virtual Care",
    blueCardText:
      "Encrypted video consultations, remote patient monitoring integration, and online appointment scheduling built for modern telehealth delivery.",
    points: [
      {
        heading: "HD Video & Secure Chat",
        description:
          "End-to-end encrypted audio, video, and messaging compliant with global health data privacy regulations.",
      },
      {
        heading: "Virtual Waiting Room",
        description:
          "Integrated triage queue allowing clinic staff to manage patient intake and virtual visit prep efficiently.",
      },
    ],
  },
  {
    id: "03",
    title: "Hospital Management Information System (HMIS)",
    badge: "Operations & Administration",
    blueCardText:
      "All-in-one operational ecosystem managing inpatient/outpatient admissions, bed allocations, operating room schedules, and staff rosters.",
    points: [
      {
        heading: "Bed & Resource Allocation",
        description:
          "Live tracking of ICU beds, ward availability, and critical equipment status across hospital wings.",
      },
      {
        heading: "Staff Duty & Shift Roster",
        description:
          "Automated scheduling engines that balance physician availability, nurse-to-patient ratios, and overtime compliance.",
      },
    ],
  },
  {
    id: "04",
    title: "Medical Billing & Revenue Cycle Management",
    badge: "Financial Health",
    blueCardText:
      "Automated insurance claim processing, real-time eligibility verification, and billing engine designed to maximize clean claim submissions.",
    points: [
      {
        heading: "Claims Engine & Adjudication",
        description:
          "Validates claim data prior to clearinghouse submission to minimize rejections and speed up reimbursement cycles.",
      },
      {
        heading: "Patient Financial Portal",
        description:
          "Clear billing breakdowns, automated payment plan setups, and integrated digital payment gateway options.",
      },
    ],
  },
  {
    id: "05",
    title: "Pharmacy & Medical Supply Management",
    badge: "Inventory & Logistics",
    blueCardText:
      "Barcoded inventory tracking, batch expiration monitoring, and automated reorder triggers for pharmaceuticals and surgical supplies.",
    points: [
      {
        heading: "Batch & Expiration Tracking",
        description:
          "Real-time alerts for expiring drug stocks and strict tracking of controlled substance inventory distribution.",
      },
      {
        heading: "Automated Supplier Reordering",
        description:
          "Smart stock threshold monitoring that automatically triggers purchase orders for high-demand medical consumables.",
      },
    ],
  },
];