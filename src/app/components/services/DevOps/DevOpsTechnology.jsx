import React from "react";
import Image from "next/image";
import { Sparkles } from "lucide-react";

export default function DevOpsTechnology() {
  const techGroups = [
    {
      title: "Cloud Platforms",
      topClass: "top-24 sm:top-28",
      zIndex: "z-10",
      items: [
        {
          name: "AWS",
          description: "Scalable cloud infrastructure and services",
          icon: "/images/services/DevOps/aws.png",
        },
        {
          name: "Microsoft Azure",
          description: "Enterprise cloud computing services",
          icon: "/images/services/DevOps/microsoft_azure.png",
        },
        {
          name: "Google Cloud (GCP)",
          description: "Flexible and high-performance cloud tools",
          icon: "/images/services/DevOps/google_cloud_platform.png",
        },
      ],
    },
    {
      title: "CI/CD & Automation",
      topClass: "top-32 sm:top-36",
      zIndex: "z-20",
      items: [
        {
          name: "Jenkins",
          description: "Open-source automation server for CI/CD pipelines",
          icon: "/images/services/DevOps/jenkins.png",
        },
        {
          name: "GitHub Actions",
          description: "Integrated workflow automation directly in GitHub",
          icon: "/images/services/DevOps/github_actions.png",
        },
        {
          name: "GitLab CI/CD",
          description: "Built-in continuous integration and deployment",
          icon: "/images/services/DevOps/gitlab_ci_cd.png",
        },
        {
          name: "Argo CD",
          description: "Declarative continuous delivery for Kubernetes",
          icon: "/images/services/DevOps/argo.png",
        },
      ],
    },
    {
      title: "Containers & Orchestration",
      topClass: "top-40 sm:top-44",
      zIndex: "z-30",
      items: [
        {
          name: "Docker",
          description: "Containerization platform for consistent deployments",
          icon: "/images/services/DevOps/docker.png",
        },
        {
          name: "Kubernetes",
          description: "Automated container orchestration at scale",
          icon: "/images/services/DevOps/kubernetes.png",
        },
        {
          name: "Helm",
          description: "Package manager for Kubernetes applications",
          icon: "/images/services/DevOps/helm.png",
        },
      ],
    },
    {
      title: "Infrastructure as Code",
      topClass: "top-48 sm:top-52",
      zIndex: "z-40",
      items: [
        {
          name: "Terraform",
          description: "Declarative infrastructure provisioning tool",
          icon: "/images/services/DevOps/terraform.png",
        },
        {
          name: "Ansible",
          description: "Automation engine for configuration management",
          icon: "/images/services/DevOps/ansible.png",
        },
      ],
    },
    {
      title: "Monitoring & Observability",
      topClass: "top-56 sm:top-60",
      zIndex: "z-50",
      items: [
        {
          name: "Prometheus",
          description: "Monitoring and alerting toolkit for systems and services",
          icon: "/images/services/DevOps/prometheus.png",
        },
        {
          name: "Grafana",
          description: "Data visualization and analytics platform",
          icon: "/images/services/DevOps/grafana.png",
        },
        {
          name: "ELK Stack",
          description: "Search, analyze, and visualize log data in real time",
          icon: "/images/services/DevOps/elk_stack.png",
        },
      ],
    },
    {
      title: "Version Control",
      topClass: "top-64 sm:top-68",
      zIndex: "z-60",
      items: [
        {
          name: "Git",
          description: "Distributed version control system",
          icon: "/images/services/DevOps/git.png",
        },
        {
          name: "GitHub",
          description: "Cloud-based Git repository hosting service",
          icon: "/images/services/DevOps/github.png",
        },
        {
          name: "GitLab",
          description: "Complete DevOps platform built for developers",
          icon: "/images/services/DevOps/gitlab.png",
        },
      ],
    },
    {
      title: "Security & DevSecOps",
      topClass: "top-72 sm:top-76",
      zIndex: "z-70",
      items: [
        {
          name: "SonarQube",
          description: "Continuous inspection of code quality and security",
          icon: "/images/services/DevOps/sonarqube.png",
        },
        {
          name: "HashiCorp Vault",
          description: "Secure secrets management and data protection",
          icon: "/images/services/DevOps/hashicorp_vault.png",
        },
      ],
    },
    {
      title: "Servers & Operating Systems",
      topClass: "top-80 sm:top-84",
      zIndex: "z-80",
      items: [
        {
          name: "Linux",
          description: "Reliable and secure operating system foundation",
          icon: "/images/services/DevOps/linux.png",
        },
        {
          name: "Nginx",
          description: "High-performance web server and reverse proxy",
          icon: "/images/services/DevOps/nginx.png",
        },
      ],
    },
  ];

  return (
    <section className="relative w-full bg-slate-50 py-20 text-slate-950 sm:py-24 lg:py-28">
      {/* Background Glows & Pattern */}
      <div className="pointer-events-none absolute right-0 top-0 h-[700px] w-[800px] -translate-y-1/4 rounded-full bg-blue-100/60 blur-[160px]" />
      <div className="pointer-events-none absolute left-1/4 top-[35%] h-[600px] w-[700px] rounded-full bg-sky-100/50 blur-[150px]" />
      <div className="pointer-events-none absolute right-[10%] top-[70%] h-[700px] w-[800px] rounded-full bg-blue-100/50 blur-[160px]" />
      
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.20]"
        style={{
          backgroundImage: `radial-gradient(#94a3b8 1.2px, transparent 1.2px)`,
          backgroundSize: `24px 24px`,
        }}
      />

      <div className="relative z-10 w-full px-6 sm:px-12 md:px-16 lg:px-20 xl:px-28">
        {/* Header split layout: Heading on left, Description on right */}
        <div className="mb-16 grid w-full gap-8 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-blue-600 backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5 text-blue-500" />
              <span>Technology Stack</span>
            </div>

            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
              <span className="block text-slate-900">Technologies Powering Our</span>
              <span className="block bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                DevOps Services
              </span>
            </h2>
          </div>

          <div className="lg:col-span-7 lg:pl-8 lg:pt-2 flex flex-col gap-4">
            <p className="text-sm font-normal leading-relaxed text-slate-600 antialiased sm:text-base lg:text-lg">
              We combine leading cloud platforms, automation tools, containerization, infrastructure-as-code, and monitoring technologies to build reliable and scalable DevOps environments. Our technology choices are tailored to each project&apos;s infrastructure, deployment, security, and scalability requirements.
            </p>
            <p className="text-sm font-normal leading-relaxed text-slate-600 antialiased sm:text-base lg:text-lg">
              We leverage AWS, Azure, and Google Cloud alongside Docker, Kubernetes, Terraform, Jenkins, GitHub Actions, Prometheus, Grafana, and other proven technologies to automate software delivery, strengthen infrastructure, improve visibility, and support reliable application operations.
            </p>
          </div>
        </div>

        <div className="mb-12 h-px w-full bg-slate-200/80" />

        {/* Tech Groups - Compact Stacking Stair Step Layout with sticky effect working */}
        <div className="relative flex w-full flex-col gap-6 pb-24">
          {techGroups.map((group, groupIdx) => (
            <div
              key={groupIdx}
              className={`sticky ${group.topClass} ${group.zIndex} box-border flex flex-col w-full rounded-3xl border border-blue-200/60 bg-white/95 p-5 sm:p-6 shadow-xl shadow-blue-500/5 backdrop-blur-xl transition-all duration-300 hover:border-blue-400`}
            >
              <div className="mb-4 flex items-center justify-between border-b border-slate-100 pb-3">
                <h3 className="text-sm font-bold uppercase tracking-widest text-blue-600 sm:text-base">
                  {group.title}
                </h3>
                <span className="rounded-full border border-blue-100 bg-blue-50/50 px-2.5 py-0.5 text-xs font-medium text-blue-600">
                  {group.items.length} {group.items.length === 1 ? "Tech" : "Techs"}
                </span>
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {group.items.map((item, itemIdx) => (
                  <div
                    key={itemIdx}
                    className="group/card relative flex items-center gap-4 overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-50/50 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:bg-white hover:shadow-xl hover:shadow-blue-500/10"
                  >
                    <div className="absolute -right-8 -top-8 h-20 w-20 rounded-full bg-blue-500/10 opacity-0 blur-xl transition-opacity duration-300 group-hover/card:opacity-100" />

                    {/* Left Side: Clean large icon without background card boxes */}
                    <div className="relative flex h-20 w-20 sm:h-24 sm:w-24 shrink-0 items-center justify-center p-1 transition-all duration-300 group-hover/card:scale-105">
                      <Image
                        src={item.icon}
                        alt={item.name}
                        width={96}
                        height={96}
                        className="h-full w-full object-contain filter drop-shadow-md"
                        loading="lazy"
                      />
                    </div>

                    {/* Right Side: Name & Description */}
                    <div className="flex flex-col justify-center min-w-0">
                      <h4 className="text-base sm:text-lg font-bold text-slate-900 transition-colors duration-300 group-hover/card:text-blue-600 mb-1 truncate">
                        {item.name}
                      </h4>
                      <p className="text-xs sm:text-sm font-normal leading-relaxed text-slate-600 line-clamp-2">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}