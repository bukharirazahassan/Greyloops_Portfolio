import Image from "next/image";
import { Sparkles, CheckCircle2 } from "lucide-react";

export default function DevOpsSolutionsDeliver() {
  const cicdFocusItems = [
    "Continuous Integration",
    "Continuous Delivery",
    "Build Automation",
    "Release Automation",
  ];

  const iacFocusItems = [
    "Infrastructure Automation",
    "Environment Consistency",
    "Repeatable Deployments",
    "Configuration Management",
  ];

  const cloudFocusItems = [
    "Cloud Infrastructure",
    "CI/CD",
    "Deployment Automation",
    "Infrastructure as Code",
    "Monitoring",
    "Environment Management",
  ];

  const devsecopsFocusItems = [
    "DevSecOps",
    "Security Integration",
    "Access Control",
    "Secrets Management",
    "Vulnerability Management",
    "Secure CI/CD",
  ];

  const monitoringFocusItems = [
    "Application Monitoring",
    "Infrastructure Monitoring",
    "Logging",
    "Metrics",
    "Alerting",
    "Performance Visibility",
    "Incident Response",
  ];

  const consultingFocusItems = [
    "DevOps Assessment",
    "Transformation Strategy",
    "Process Improvement",
    "Cloud Adoption",
    "Automation Roadmap",
    "CI/CD Strategy",
    "Operational Modernization",
  ];

  return (
    <div className="relative w-full overflow-hidden bg-slate-50 text-slate-900">
      {/* ================= UNIFIED CONTINUOUS BACKGROUND (DOTS & BLUE SHADOWS) ================= */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute right-0 top-0 h-[700px] w-[800px] -translate-y-1/4 rounded-full bg-blue-100/60 blur-[160px]" />
        <div className="absolute left-1/4 top-[35%] h-[600px] w-[700px] rounded-full bg-sky-100/50 blur-[150px]" />
        <div className="absolute right-[10%] top-[70%] h-[700px] w-[800px] rounded-full bg-blue-100/50 blur-[160px]" />
        <div className="absolute left-[10%] top-[90%] h-[700px] w-[800px] rounded-full bg-sky-100/50 blur-[160px]" />
        <div className="absolute right-[15%] top-[110%] h-[700px] w-[800px] rounded-full bg-blue-100/50 blur-[160px]" />
        <div className="absolute left-[20%] top-[130%] h-[700px] w-[800px] rounded-full bg-sky-100/50 blur-[160px]" />
        
        <div
          className="absolute inset-0 opacity-[0.20]"
          style={{
            backgroundImage: `radial-gradient(#94a3b8 1.2px, transparent 1.2px)`,
            backgroundSize: `24px 24px`,
          }}
        />

        {/* ================= SVG CURVED CONNECTING LINES BETWEEN SECTIONS ================= */}
        <svg
          className="absolute inset-0 h-full w-full pointer-events-none z-0"
          preserveAspectRatio="none"
          viewBox="0 0 1440 3600"
          fill="none"
        >
          {/* Line from Section 1 (left image area) to Section 2 (right image area) */}
          <path
            d="M 360,560 C 360,790 1080,490 1080,760"
            stroke="#93c5fd"
            strokeWidth="2.5"
            strokeDasharray="6 6"
            className="opacity-70"
          />
          {/* Line from Section 2 (right image area) to Section 3 (left image area) */}
          <path
            d="M 1080,1160 C 1080,1390 360,1090 360,1360"
            stroke="#93c5fd"
            strokeWidth="2.5"
            strokeDasharray="6 6"
            className="opacity-70"
          />
          {/* Line from Section 3 (left image area) to Section 4 (right image area) */}
          <path
            d="M 360,1760 C 360,1990 1080,1690 1080,1960"
            stroke="#93c5fd"
            strokeWidth="2.5"
            strokeDasharray="6 6"
            className="opacity-70"
          />
          {/* Line from Section 4 (right image area) to Section 5 (left image area) */}
          <path
            d="M 1080,2360 C 1080,2590 360,2290 360,2560"
            stroke="#93c5fd"
            strokeWidth="2.5"
            strokeDasharray="6 6"
            className="opacity-70"
          />
          {/* Line from Section 5 (left image area) to Section 6 (right image area, sweeping from left to right) */}
          <path
            d="M 360,2960 C 360,3190 1080,2890 1080,3160"
            stroke="#93c5fd"
            strokeWidth="2.5"
            strokeDasharray="6 6"
            className="opacity-70"
          />
        </svg>
      </div>

      <div className="relative z-10 w-full">
        {/* ================= SECTION 1: CI/CD PIPELINE DEVELOPMENT ================= */}
        <section className="w-full py-16 lg:py-24">
          <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-24">
            {/* Main Section Header */}
            <div className="mx-auto mb-16 max-w-3xl text-center">
              <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-blue-600 backdrop-blur-md">
                <Sparkles className="h-3.5 w-3.5 text-blue-500" />
                DevOps Services & Solutions
              </span>
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
                <span className="block text-slate-900">Reliable DevOps Services and</span>
                <span className="block bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                  Solutions We Deliver
                </span>
              </h2>
            </div>

            {/* Grid: Image Left (col-5), Description Right (col-7) */}
            <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16 xl:gap-20">
              {/* Image Left */}
              <div className="relative lg:col-span-5">
                <div className="relative overflow-hidden rounded-[2rem] bg-white/80 p-3 shadow-xl shadow-blue-500/10 ring-1 ring-blue-200/60 backdrop-blur-xl sm:p-4">
                  <span className="pointer-events-none absolute inset-x-0 top-0 z-20 h-[2px] bg-gradient-to-r from-transparent via-blue-400 to-transparent" />
                  <div className="pointer-events-none absolute right-0 top-0 h-48 w-48 rounded-full bg-blue-50/70 blur-3xl" />
                  
                  <div className="relative aspect-[1200/896] w-full overflow-hidden rounded-[1.5rem] bg-slate-100">
                    <Image
                      src="/images/services/DevOps/CI_CD_pipeline_development.png"
                      alt="CI/CD Pipeline Development"
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 45vw"
                      priority
                    />
                  </div>
                </div>
              </div>

              {/* Description Right */}
              <div className="flex flex-col lg:col-span-7 pt-4 sm:pt-6 lg:pt-8">
                <h3 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl xl:text-4xl">
                  CI/CD Pipeline Development
                </h3>

                <div className="mt-4 space-y-4 text-slate-600 text-base leading-relaxed sm:text-lg sm:leading-8">
                  <p>
                    We establish automated continuous integration and continuous delivery pipelines that create a consistent path for moving application changes from development through testing and deployment. Instead of relying on repetitive manual deployment steps, automated workflows can handle builds, validation, testing, and application releases based on defined processes.
                  </p>
                  <p>
                    Our CI/CD approach is adapted to the application&apos;s architecture, development workflow, release requirements, and deployment environment. This allows teams to deliver updates more consistently while reducing manual effort and improving visibility throughout the release process.
                  </p>
                </div>

                {/* Focus Checklist */}
                <div className="mt-6 border-t border-slate-200/80 pt-6">
                  <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-slate-400">
                    DevOps Focus
                  </p>
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {cicdFocusItems.map((item) => (
                      <div key={item} className="flex items-center gap-3">
                        <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-blue-600" />
                        <span className="text-base font-medium text-slate-800">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 2: INFRASTRUCTURE AS CODE ================= */}
        <section className="w-full py-16 lg:py-24">
          <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-24">
            {/* Grid: Description Left (col-7), Image Right (col-5) */}
            <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16 xl:gap-20">
              {/* Description Left */}
              <div className="flex flex-col lg:col-span-7 order-2 lg:order-1 pt-4 sm:pt-6 lg:pt-8">
                <h3 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl xl:text-4xl">
                  Infrastructure as Code
                </h3>

                <div className="mt-4 space-y-4 text-slate-600 text-base leading-relaxed sm:text-lg sm:leading-8">
                  <p>
                    We manage cloud infrastructure through structured and repeatable configuration rather than relying entirely on manual infrastructure changes. Infrastructure definitions can be maintained alongside application development processes, making environments easier to reproduce, review, update, and manage over time.
                  </p>
                  <p>
                    This approach helps organizations maintain greater consistency between development, staging, and production environments while reducing configuration differences and manual setup. It also makes infrastructure changes more controlled and easier to track as applications evolve.
                  </p>
                </div>

                {/* Focus Checklist */}
                <div className="mt-6 border-t border-slate-200/80 pt-6">
                  <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-slate-400">
                    DevOps Focus
                  </p>
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {iacFocusItems.map((item) => (
                      <div key={item} className="flex items-center gap-3">
                        <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-blue-600" />
                        <span className="text-base font-medium text-slate-800">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Image Right */}
              <div className="relative lg:col-span-5 order-1 lg:order-2">
                <div className="relative overflow-hidden rounded-[2rem] bg-white/80 p-3 shadow-xl shadow-blue-500/10 ring-1 ring-blue-200/60 backdrop-blur-xl sm:p-4">
                  <span className="pointer-events-none absolute inset-x-0 top-0 z-20 h-[2px] bg-gradient-to-r from-transparent via-blue-400 to-transparent" />
                  <div className="pointer-events-none absolute right-0 top-0 h-48 w-48 rounded-full bg-blue-50/70 blur-3xl" />
                  
                  <div className="relative aspect-[1200/896] w-full overflow-hidden rounded-[1.5rem] bg-slate-100">
                    <Image
                      src="/images/services/DevOps/infrastructure_as_code.png"
                      alt="Infrastructure as Code"
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 45vw"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 3: CLOUD & DEVOPS IMPLEMENTATION ================= */}
        <section className="w-full py-16 lg:py-24">
          <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-24">
            {/* Grid: Image Left (col-5), Description Right (col-7) */}
            <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16 xl:gap-20">
              {/* Image Left */}
              <div className="relative lg:col-span-5">
                <div className="relative overflow-hidden rounded-[2rem] bg-white/80 p-3 shadow-xl shadow-blue-500/10 ring-1 ring-blue-200/60 backdrop-blur-xl sm:p-4">
                  <span className="pointer-events-none absolute inset-x-0 top-0 z-20 h-[2px] bg-gradient-to-r from-transparent via-blue-400 to-transparent" />
                  <div className="pointer-events-none absolute right-0 top-0 h-48 w-48 rounded-full bg-blue-50/70 blur-3xl" />
                  
                  <div className="relative aspect-[1200/896] w-full overflow-hidden rounded-[1.5rem] bg-slate-100">
                    <Image
                      src="/images/services/DevOps/cloud_devops_implementation.png"
                      alt="Cloud & DevOps Implementation"
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 45vw"
                      priority
                    />
                  </div>
                </div>
              </div>

              {/* Description Right */}
              <div className="flex flex-col lg:col-span-7 pt-4 sm:pt-6 lg:pt-8">
                <h3 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl xl:text-4xl">
                  Cloud & DevOps Implementation
                </h3>

                <div className="mt-4 space-y-4 text-slate-600 text-base leading-relaxed sm:text-lg sm:leading-8">
                  <p>
                    We implement cloud and DevOps environments that create a reliable foundation for building, deploying, and operating modern applications. Our implementation covers cloud infrastructure setup, development and production environments, deployment workflows, CI/CD pipelines, infrastructure automation, application configuration, monitoring, and operational processes based on the requirements of each project.
                  </p>
                  <p>
                    We establish the required cloud resources and environments, automate application delivery, and connect development workflows with deployment and operational processes. This helps create a consistent path from development to production while making applications easier to deploy, monitor, maintain, and scale as business requirements grow.
                  </p>
                </div>

                {/* Focus Checklist */}
                <div className="mt-6 border-t border-slate-200/80 pt-6">
                  <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-slate-400">
                    DevOps Focus
                  </p>
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {cloudFocusItems.map((item) => (
                      <div key={item} className="flex items-center gap-3">
                        <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-blue-600" />
                        <span className="text-base font-medium text-slate-800">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 4: DEVSECOPS & SECURITY INTEGRATION ================= */}
        <section className="w-full py-16 lg:py-24">
          <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-24">
            {/* Grid: Description Left (col-7), Image Right (col-5) */}
            <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16 xl:gap-20">
              {/* Description Left */}
              <div className="flex flex-col lg:col-span-7 order-2 lg:order-1 pt-4 sm:pt-6 lg:pt-8">
                <h3 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl xl:text-4xl">
                  DevSecOps & Security Integration
                </h3>

                <div className="mt-4 space-y-4 text-slate-600 text-base leading-relaxed sm:text-lg sm:leading-8">
                  <p>
                    We integrate security practices throughout the software delivery lifecycle so security is considered during development, deployment, and ongoing operations rather than treated as a final-stage activity. Our approach covers secure application configuration, access controls, secrets management, infrastructure security, vulnerability checks, and security-focused deployment practices based on the requirements of each project.
                  </p>
                  <p>
                    We work with development and operations teams to identify potential security risks earlier, apply appropriate controls, and establish safer deployment workflows. This helps organizations strengthen their applications and cloud environments while maintaining efficient development and release processes.
                  </p>
                </div>

                {/* Focus Checklist */}
                <div className="mt-6 border-t border-slate-200/80 pt-6">
                  <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-slate-400">
                    DevOps Focus
                  </p>
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {devsecopsFocusItems.map((item) => (
                      <div key={item} className="flex items-center gap-3">
                        <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-blue-600" />
                        <span className="text-base font-medium text-slate-800">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Image Right */}
              <div className="relative lg:col-span-5 order-1 lg:order-2">
                <div className="relative overflow-hidden rounded-[2rem] bg-white/80 p-3 shadow-xl shadow-blue-500/10 ring-1 ring-blue-200/60 backdrop-blur-xl sm:p-4">
                  <span className="pointer-events-none absolute inset-x-0 top-0 z-20 h-[2px] bg-gradient-to-r from-transparent via-blue-400 to-transparent" />
                  <div className="pointer-events-none absolute right-0 top-0 h-48 w-48 rounded-full bg-blue-50/70 blur-3xl" />
                  
                  <div className="relative aspect-[1200/896] w-full overflow-hidden rounded-[1.5rem] bg-slate-100">
                    <Image
                      src="/images/services/DevOps/devsecops_security_integration.png"
                      alt="DevSecOps & Security Integration"
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 45vw"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 5: MONITORING & OBSERVABILITY ================= */}
        <section className="w-full py-16 lg:py-24">
          <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-24">
            {/* Grid: Image Left (col-5), Description Right (col-7) */}
            <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16 xl:gap-20">
              {/* Image Left */}
              <div className="relative lg:col-span-5">
                <div className="relative overflow-hidden rounded-[2rem] bg-white/80 p-3 shadow-xl shadow-blue-500/10 ring-1 ring-blue-200/60 backdrop-blur-xl sm:p-4">
                  <span className="pointer-events-none absolute inset-x-0 top-0 z-20 h-[2px] bg-gradient-to-r from-transparent via-blue-400 to-transparent" />
                  <div className="pointer-events-none absolute right-0 top-0 h-48 w-48 rounded-full bg-blue-50/70 blur-3xl" />
                  
                  <div className="relative aspect-[1200/896] w-full overflow-hidden rounded-[1.5rem] bg-slate-100">
                    <Image
                      src="/images/services/DevOps/monitoring_observability.png"
                      alt="Monitoring & Observability"
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 45vw"
                      priority
                    />
                  </div>
                </div>
              </div>

              {/* Description Right */}
              <div className="flex flex-col lg:col-span-7 pt-4 sm:pt-6 lg:pt-8">
                <h3 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl xl:text-4xl">
                  Monitoring & Observability
                </h3>

                <div className="mt-4 space-y-4 text-slate-600 text-base leading-relaxed sm:text-lg sm:leading-8">
                  <p>
                    We implement monitoring and observability practices that provide visibility into application performance, infrastructure health, system behavior, and operational events. Our approach helps teams understand how applications are performing in real-world environments and identify potential issues before they significantly affect users or business operations.
                  </p>
                  <p>
                    We establish appropriate monitoring, logging, metrics, and alerting processes based on application and infrastructure requirements. This enables development and operations teams to investigate issues more efficiently, track system performance, respond to incidents, and maintain reliable production environments as workloads workloads grow.
                  </p>
                </div>

                {/* Focus Checklist */}
                <div className="mt-6 border-t border-slate-200/80 pt-6">
                  <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-slate-400">
                    DevOps Focus
                  </p>
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {monitoringFocusItems.map((item) => (
                      <div key={item} className="flex items-center gap-3">
                        <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-blue-600" />
                        <span className="text-base font-medium text-slate-800">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 6: DEVOPS CONSULTING & TRANSFORMATION ================= */}
        <section className="w-full py-16 lg:py-24">
          <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-24">
            {/* Grid: Description Left (col-7), Image Right (col-5) */}
            <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16 xl:gap-20">
              {/* Description Left */}
              <div className="flex flex-col lg:col-span-7 order-2 lg:order-1 pt-4 sm:pt-6 lg:pt-8">
                <h3 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl xl:text-4xl">
                  DevOps Consulting & Transformation
                </h3>

                <div className="mt-4 space-y-4 text-slate-600 text-base leading-relaxed sm:text-lg sm:leading-8">
                  <p>
                    We help organizations assess their existing software delivery and operational practices and establish a DevOps approach aligned with their technical environment, development processes, and business objectives. Our consulting covers development workflows, cloud infrastructure, deployment processes, CI/CD, monitoring, security practices, and operational requirements.
                  </p>
                  <p>
                    We identify delivery bottlenecks, manual processes, infrastructure challenges, and gaps between development and operations, then define a practical roadmap for improvement. Our transformation approach focuses on introducing automation, improving collaboration, modernizing infrastructure, and establishing more consistent delivery practices without disrupting critical business operations.
                  </p>
                </div>

                {/* Focus Checklist */}
                <div className="mt-6 border-t border-slate-200/80 pt-6">
                  <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-slate-400">
                    DevOps Focus
                  </p>
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {consultingFocusItems.map((item) => (
                      <div key={item} className="flex items-center gap-3">
                        <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-blue-600" />
                        <span className="text-base font-medium text-slate-800">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Image Right */}
              <div className="relative lg:col-span-5 order-1 lg:order-2">
                <div className="relative overflow-hidden rounded-[2rem] bg-white/80 p-3 shadow-xl shadow-blue-500/10 ring-1 ring-blue-200/60 backdrop-blur-xl sm:p-4">
                  <span className="pointer-events-none absolute inset-x-0 top-0 z-20 h-[2px] bg-gradient-to-r from-transparent via-blue-400 to-transparent" />
                  <div className="pointer-events-none absolute right-0 top-0 h-48 w-48 rounded-full bg-blue-50/70 blur-3xl" />
                  
                  <div className="relative aspect-[1200/896] w-full overflow-hidden rounded-[1.5rem] bg-slate-100">
                    <Image
                      src="/images/services/DevOps/devops_consulting_transformation.png"
                      alt="DevOps Consulting & Transformation"
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 45vw"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}