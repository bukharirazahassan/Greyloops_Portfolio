"use client";

// src/app/components/ERPSolutions.jsx
import { useState } from "react";
import {
  Factory,
  HeartPulse,
  ShoppingCart,
  Truck,
  Briefcase,
  Landmark,
  GraduationCap,
  HardHat,
  Code2,
  BrainCircuit,
  Cloud,
  Plug,
  ShieldCheck,
  GitBranch,
  BadgeCheck,
  Smartphone,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";

/* ---------------- Industry data ---------------- */
const industries = [
  {
    id: "manufacturing",
    icon: Factory,
    title: "Manufacturing",
    description:
      "Manufacturing ERP connects production planning, inventory, procurement, quality control, and supply chain operations. It helps manufacturers coordinate production activities, manage materials, monitor costs, and improve resource utilization.",
    points: [
      "Production planning and scheduling",
      "Inventory, procurement, and supplier management",
      "Quality assurance and compliance tracking",
      "Equipment maintenance and production monitoring",
      "AI-assisted demand forecasting and resource planning",
      "Integration with manufacturing execution systems (MES) and industrial IoT",
    ],
  },
  {
    id: "healthcare",
    icon: HeartPulse,
    title: "Healthcare",
    description:
      "Healthcare ERP helps healthcare organizations manage administrative, financial, workforce, procurement, and facility operations. Integrations with clinical systems and strong data protection controls are essential where patient-related information is involved.",
    points: [
      "Financial management and billing operations",
      "Medical supplies, inventory, and procurement",
      "Workforce scheduling and resource management",
      "Facility and equipment maintenance",
      "Integration with electronic health records (EHR) and other healthcare systems",
      "Data security, access controls, and regulatory compliance support",
    ],
  },
  {
    id: "retail",
    icon: ShoppingCart,
    title: "Retail & E-Commerce",
    description:
      "Retail ERP connects product management, inventory, sales, purchasing, finance, and online commerce. It helps businesses maintain consistent information across physical stores, e-commerce platforms, warehouses, and sales channels.",
    points: [
      "Product, pricing, and inventory management",
      "Point-of-sale (POS) and order processing",
      "E-commerce and payment gateway integration",
      "Customer and supplier data management",
      "Sales analytics and AI-assisted demand forecasting",
      "Omnichannel order fulfillment and returns management",
    ],
  },
  {
    id: "logistics",
    icon: Truck,
    title: "Logistics & Supply Chain",
    description:
      "Logistics ERP supports the movement of goods, warehouse operations, transportation planning, procurement, and delivery coordination. Integrated systems improve shipment visibility and help organizations manage resources and operational costs.",
    points: [
      "Warehouse and inventory management",
      "Transportation and fleet coordination",
      "Shipment tracking and delivery management",
      "Supplier and procurement workflows",
      "Route planning and logistics performance analytics",
      "Integration with transportation management systems (TMS) and warehouse management systems (WMS)",
    ],
  },
  {
    id: "professional-services",
    icon: Briefcase,
    title: "Professional Services",
    description:
      "Professional services ERP helps consulting firms, IT service providers, engineering companies, and other service-based organizations manage projects, employees, finances, and client engagements.",
    points: [
      "Project planning, budgeting, and resource allocation",
      "Time tracking, billing, and expense management",
      "Contract and client relationship management",
      "Workforce planning and utilization tracking",
      "Project profitability and financial reporting",
      "Integration with CRM, HR, payroll, and project management platforms",
    ],
  },
  {
    id: "financial-services",
    icon: Landmark,
    title: "Financial Services",
    description:
      "Financial services organizations require ERP capabilities that support financial control, budgeting, procurement, workforce management, and operational reporting. Integrations and security controls must align with applicable financial and regulatory requirements.",
    points: [
      "Financial planning, accounting, and budgeting",
      "Expense, procurement, and vendor management",
      "Risk reporting and internal control workflows",
      "AI-assisted anomaly detection and financial forecasting",
      "Identity management, access controls, and audit trails",
      "Integration with banking, payment, and financial reporting systems",
    ],
  },
  {
    id: "education",
    icon: GraduationCap,
    title: "Education",
    description:
      "Educational institutions use ERP systems to coordinate administration, finance, human resources, procurement, facilities, and student-related services. Integration helps maintain consistent information across academic and administrative departments.",
    points: [
      "Student information and enrollment management",
      "Finance, budgeting, and fee administration",
      "HR, payroll, and workforce management",
      "Procurement and campus asset management",
      "Reporting and resource planning",
      "Integration with learning management systems (LMS) and student information systems (SIS)",
    ],
  },
  {
    id: "construction",
    icon: HardHat,
    title: "Construction & Real Estate",
    description:
      "Construction and real estate ERP helps organizations coordinate projects, contracts, budgets, materials, assets, and financial operations across multiple sites and developments.",
    points: [
      "Project costing, budgeting, and financial control",
      "Procurement, materials, and subcontractor management",
      "Equipment, asset, and maintenance tracking",
      "Workforce scheduling and project resource planning",
      "Progress reporting and cost variance analysis",
      "Integration with project management, accounting, and building information modeling (BIM) platforms",
    ],
  },
  {
    id: "technology",
    icon: Code2,
    title: "Technology & IT Services",
    description:
      "Technology companies and IT service providers need ERP capabilities that connect project delivery, finance, workforce, procurement, and service operations. Integration with development and service management platforms can improve visibility across business and technical teams.",
    points: [
      "Project and resource management",
      "Service contracts, billing, and recurring revenue management",
      "Software licensing and technology asset tracking",
      "Financial reporting and workforce utilization",
      "Cloud cost monitoring and operational analytics",
      "Integration with CRM, IT service management (ITSM), DevOps, and project management tools",
    ],
  },
];

/* ---------------- Cross-industry capabilities ---------------- */
const crossIndustry = [
  {
    icon: BrainCircuit,
    title: "AI & Data Analytics",
    text: "Forecasting, intelligent insights, reporting, and decision support.",
  },
  {
    icon: Cloud,
    title: "Cloud & Infrastructure",
    text: "Cloud migration, infrastructure design, scalability, and system reliability.",
  },
  {
    icon: Code2,
    title: "Enterprise Application Development",
    text: "Custom ERP modules, business applications, and workflow solutions.",
  },
  {
    icon: Plug,
    title: "System Integration",
    text: "APIs and connections between ERP, CRM, HR, finance, and other platforms.",
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity & Compliance",
    text: "Identity management, data protection, access controls, risk management, and audit readiness.",
  },
  {
    icon: GitBranch,
    title: "Automation & DevOps",
    text: "Automated workflows, deployment pipelines, monitoring, and operational efficiency.",
  },
  {
    icon: BadgeCheck,
    title: "Quality Engineering",
    text: "Functional, integration, performance, and security testing.",
  },
  {
    icon: Smartphone,
    title: "Mobile Solutions",
    text: "Mobile access to approvals, dashboards, field operations, and business workflows.",
  },
];

export default function ERPSolutions() {
  const [activeId, setActiveId] = useState(industries[0].id);
  const active = industries.find((i) => i.id === activeId);
  const ActiveIcon = active.icon;

  return (
    <section className="relative w-full overflow-hidden bg-slate-50 py-16 lg:py-24">
      {/* Background dots pattern */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(#cbd5e1_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-60" />

      {/* Soft blue shaded glowing circles */}
      <div className="pointer-events-none absolute left-0 top-[4%] h-96 w-96 rounded-full bg-blue-400/20 blur-[120px]" />
      <div className="pointer-events-none absolute right-0 top-[22%] h-80 w-80 rounded-full bg-indigo-400/15 blur-[120px]" />
      <div className="pointer-events-none absolute left-0 top-[50%] h-96 w-96 rounded-full bg-blue-400/20 blur-[120px]" />
      <div className="pointer-events-none absolute right-0 top-[72%] h-80 w-80 rounded-full bg-indigo-400/15 blur-[120px]" />
      <div className="pointer-events-none absolute left-1/4 bottom-0 h-72 w-72 rounded-full bg-blue-400/15 blur-[120px]" />

      <div className="relative z-10 mx-auto w-full max-w-[120rem] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center">
          {/* ================= Heading ================= */}
          <div className="max-w-4xl text-center">
            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Industry-Specific ERP Solutions{" "}
              <span className="text-blue-600">by Greyloops</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg">
              Greyloops delivers tailored ERP and enterprise technology solutions that help organizations streamline industry-specific processes, connect business systems, and improve operational efficiency. We combine enterprise application development, AI and data analytics, cloud infrastructure, system integration, cybersecurity, and automation to build secure, scalable solutions aligned with each industry&apos;s operational requirements and business goals.
            </p>
          </div>

          {/* ================= Image ================= */}
          <div className="mt-12 w-full overflow-hidden rounded-3xl bg-white/80 p-3 shadow-lg ring-1 ring-slate-200/60 backdrop-blur-2xl">
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-slate-100">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/blogs/ERP_Solutions_by_Greyloops.png"
                alt="Industry-Specific ERP Solutions by Greyloops"
                className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
            </div>
          </div>

          {/* ================= Industry explorer ================= */}
          <div className="mt-20 w-full">
            <div className="mx-auto max-w-3xl text-center">
              <h3 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
                ERP built around{" "}
                <span className="text-blue-600">how your industry works</span>
              </h3>
              <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
                Select an industry to see the ERP capabilities and integrations we typically focus on.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
              {/* Industry selector */}
              <div className="lg:col-span-4">
                <div
                  role="tablist"
                  aria-label="Industries"
                  className="-mx-4 flex gap-2.5 overflow-x-auto px-4 pb-2 sm:-mx-6 sm:px-6 lg:mx-0 lg:flex-col lg:gap-2 lg:overflow-visible lg:px-0 lg:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                >
                  {industries.map(({ id, icon: Icon, title }) => {
                    const isActive = id === activeId;
                    return (
                      <button
                        key={id}
                        type="button"
                        role="tab"
                        id={`tab-${id}`}
                        aria-selected={isActive}
                        aria-controls={`panel-${id}`}
                        onClick={() => setActiveId(id)}
                        className={`group flex shrink-0 items-center gap-3 rounded-2xl px-4 py-3 text-left transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 lg:w-full ${
                          isActive
                            ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-600/25"
                            : "bg-white/80 text-slate-800 shadow-xs backdrop-blur-md hover:bg-white hover:shadow-md"
                        }`}
                      >
                        <span
                          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors duration-300 ${
                            isActive
                              ? "bg-white/20 text-white"
                              : "bg-blue-50 text-blue-600 group-hover:bg-blue-100"
                          }`}
                        >
                          <Icon className="h-5 w-5" strokeWidth={2.25} />
                        </span>
                        <span className="whitespace-nowrap text-sm font-bold sm:text-base lg:whitespace-normal">
                          {title}
                        </span>
                        <ChevronRight
                          className={`ml-auto hidden h-5 w-5 shrink-0 transition-all duration-300 lg:block ${
                            isActive
                              ? "translate-x-0 opacity-100"
                              : "-translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-60"
                          }`}
                          strokeWidth={2.5}
                        />
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Industry detail panel */}
              <div
                key={active.id}
                role="tabpanel"
                id={`panel-${active.id}`}
                aria-labelledby={`tab-${active.id}`}
                className="relative overflow-hidden rounded-3xl bg-white/80 p-6 shadow-lg backdrop-blur-xl sm:p-8 lg:col-span-8 lg:p-10"
              >
                <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-400/15 blur-3xl" />

                <div className="relative flex items-start gap-4 sm:gap-5">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-md shadow-blue-600/30">
                    <ActiveIcon className="h-7 w-7" strokeWidth={2} />
                  </span>
                  <div>
                    <h4 className="text-xl font-extrabold tracking-tight text-slate-900 sm:text-2xl">
                      {active.title}
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
                      {active.description}
                    </p>
                  </div>
                </div>

                <div className="relative mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {active.points.map((point) => (
                    <div
                      key={point}
                      className="flex items-start gap-3 rounded-2xl bg-slate-50/90 px-4 py-3.5 transition-all duration-300 hover:bg-blue-50 hover:shadow-sm"
                    >
                      <CheckCircle2
                        className="mt-0.5 h-5 w-5 shrink-0 text-blue-600"
                        strokeWidth={2.25}
                      />
                      <span className="text-sm font-semibold leading-relaxed text-slate-800 sm:text-[0.9375rem]">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ================= Cross-industry capabilities ================= */}
          <div className="mt-24 w-full">
            <div className="mx-auto max-w-3xl text-center">
              <h3 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
                Cross-industry{" "}
                <span className="text-blue-600">technology capabilities</span>
              </h3>
              <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
                Regardless of industry, ERP modernization may involve a combination of technologies and services tailored to organizational needs.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
              {crossIndustry.map(({ icon: Icon, title, text }) => (
                <div
                  key={title}
                  className="group relative overflow-hidden rounded-3xl bg-white/80 p-6 shadow-md backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl hover:shadow-blue-600/10"
                >
                  <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-blue-400/0 blur-2xl transition-all duration-300 group-hover:bg-blue-400/20" />
                  <span className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-md group-hover:shadow-blue-600/30">
                    <Icon className="h-6 w-6" strokeWidth={2} />
                  </span>
                  <h4 className="relative mt-5 text-base font-bold leading-snug text-slate-900 sm:text-lg">
                    {title}
                  </h4>
                  <p className="relative mt-2 text-sm leading-relaxed text-slate-600">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}