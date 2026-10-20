// src/app/lib/faqData.js

export const CATEGORIES = [
  "All",
  "General",
  "Services",
  "Process & Pricing",
  "Security & Quality",
  "AI & Modernization",
  "Support & Engagement",
];

export const FAQS = [
  /* ───────────── General ───────────── */
  {
    category: "General",
    question: "Where is Greyloops based and which regions do you serve?",
    intro: [
      "Greyloops is headquartered in Dubai, UAE, with an engineering hub in Lahore, Pakistan, and a business team in Australia. This international setup lets us support clients across the Middle East, Asia-Pacific, and beyond while keeping delivery close to the people building your product.",
    ],
  },
  {
    category: "General",
    question: "Which industries does Greyloops work with?",
    intro: [
      "We build tailored software for organizations across healthcare, fintech, eCommerce, logistics, education, manufacturing, and real estate. Each engagement starts with understanding your industry&apos;s workflows, compliance needs, and customers, so the solution fits how your business actually operates.",
    ],
  },
  {
    category: "General",
    question: "What types of organizations does Greyloops typically work with?",
    intro: [
      "We work with startups building their first product, growing businesses scaling existing platforms, and established enterprises modernizing core systems. Our approach adapts to your size, budget, and goals, whether you need a full team or specialized expertise for a specific challenge.",
    ],
  },

  /* ───────────── Services ───────────── */
  {
    category: "Services",
    question: "What Digital Product Engineering Services Does Greyloops Offer?",
    intro: [
      "Greyloops delivers end-to-end digital product engineering services that help businesses transform ideas into secure, scalable, and high-performing digital solutions. From technology consulting and product strategy to development, integration, and continuous improvement, we align engineering expertise with business objectives.",
    ],
    listTitle: "Our core services include:",
    items: [
      {
        label: "AI & Intelligent Automation",
        text: "We integrate AI, machine learning, and intelligent automation to streamline operations, enhance decision-making, and unlock new business opportunities.",
      },
      {
        label: "Digital Product Development",
        text: "We design, develop, and optimize custom digital products through user-focused design, modern engineering, and continuous quality assurance.",
      },
      {
        label: "Digital Transformation",
        text: "We modernize legacy systems and connect business operations through scalable applications, cloud technologies, and integrated digital platforms.",
      },
      {
        label: "Technology Consulting",
        text: "We help businesses define technology strategies, select the right solutions, and align engineering investments with their long-term goals.",
      },
      {
        label: "Data Engineering & Analytics",
        text: "We build reliable data pipelines and analytics solutions that turn business data into actionable insights and support informed decisions.",
      },
    ],
  },
  {
    category: "Services",
    question: "Can Greyloops design and build both web and mobile applications?",
    intro: [
      "Yes. Our teams cover UX/UI design, frontend and backend development, SaaS platforms, web applications, and mobile apps for iOS and Android, so a single partner can take your product from concept to launch.",
    ],
  },
  {
    category: "Services",
    question: "Which technologies and platforms does Greyloops work with?",
    intro: [
      "Our engineers work across modern web, mobile, and data technologies, and we choose the stack that best fits your requirements rather than forcing a one-size-fits-all approach.",
    ],
    listTitle: "Our core technologies include:",
    items: [
      { label: "Frontend", text: "React, Next.js, Angular, and Vue.js." },
      { label: "Backend", text: "Node.js, NestJS, Python, .NET Core, and GraphQL." },
      { label: "Mobile", text: "React Native, Android Studio, and native iOS and Android development." },
      { label: "Databases", text: "MongoDB and MySQL." },
      { label: "Monitoring", text: "Grafana for monitoring and observability." },
    ],
  },
  {
    category: "Services",
    question: "Does Greyloops build industry-specific ERP solutions?",
    intro: [
      "Yes. Greyloops delivers tailored ERP and enterprise technology solutions that help organizations streamline industry-specific processes, connect business systems, and improve operational efficiency.",
      "We combine enterprise application development, AI and data analytics, cloud infrastructure, system integration, cybersecurity, and automation to build secure, scalable solutions aligned with each industry&apos;s operational requirements and business goals.",
    ],
  },
  {
    category: "Services",
    question: "Does Greyloops offer cloud, DevOps, and cybersecurity services?",
    intro: [
      "Yes. Alongside product development, we provide DevOps services, infrastructure design, and cybersecurity to help your applications run reliably, scale smoothly, and stay protected. These services can support a brand-new build or strengthen a system you already operate.",
    ],
  },

  /* ───────────── Process & Pricing ───────────── */
  {
    category: "Process & Pricing",
    question: "How does Greyloops approach a new project?",
    intro: [
      "Every engagement follows a structured path so you always know what is happening and what comes next.",
    ],
    listTitle: "Our typical project journey:",
    items: [
      { label: "Discovery & Consultation", text: "We learn about your goals, users, and constraints." },
      { label: "Scope & Roadmap", text: "Requirements, milestones, and priorities are defined together." },
      { label: "Design", text: "User-focused UX/UI design validates the experience early." },
      { label: "Development & Testing", text: "Features are built and tested continuously with quality assurance." },
      { label: "Launch & Support", text: "We deploy your product and support it after go-live." },
    ],
  },
  {
    category: "Process & Pricing",
    question:
      "How Much Does It Cost to Build an Enterprise-Grade Digital Product, and How Long Does It Take?",
    intro: [
      "The cost and timeline of digital product engineering depend on your business objectives, project scope, technical complexity, and required features. Greyloops takes a requirement-driven approach to project planning, evaluating factors such as system architecture, integrations, security, scalability, and performance to determine the most suitable development strategy.",
      "Before development begins, we work with you to define project requirements, establish clear milestones, and provide a tailored cost and timeline estimate. This approach ensures transparency, aligns expectations, and helps deliver a solution that meets your business needs and long-term goals.",
      "Contact Greyloops to discuss your requirements and receive a project estimate tailored to your needs.",
    ],
  },
  {
    category: "Process & Pricing",
    question: "How Long Does a Typical Software Development Project Take?",
    intro: [
      "The timeline for a software development project depends on its scope, technical complexity, required features, integrations, and business objectives. At Greyloops, we follow a structured development approach that begins with understanding your requirements and defining clear project milestones.",
      "Depending on your goals, we can develop a Minimum Viable Product (MVP) to validate core functionality and gather early user feedback, or a Proof of Concept (PoC) to evaluate technical feasibility before moving toward full-scale development.",
      "We establish a realistic delivery timeline based on project requirements, development priorities, and testing needs, helping you plan effectively while maintaining a focus on quality, scalability, and long-term business value.",
    ],
  },
  {
    category: "Process & Pricing",
    question: "How will I stay informed about progress during development?",
    intro: [
      "We keep communication structured and transparent. Projects are organized around clear milestones, and you receive regular updates on progress, upcoming work, and any decisions that need your input.",
      "The format and frequency of updates, such as review calls and shared progress boards, are agreed at the start so they fit the way your team works.",
    ],
  },
  {
    category: "Process & Pricing",
    question: "Can Greyloops work with our existing team or take over an existing project?",
    intro: [
      "Yes. Greyloops can collaborate with your in-house developers, designers, and stakeholders, or take over a project that is already in progress. We begin with a review of the current codebase, architecture, and requirements so we can recommend the most effective next steps.",
    ],
  },

  /* ───────────── Security & Quality ───────────── */
  {
    category: "Security & Quality",
    question: "How does Greyloops ensure security, quality, and compliance?",
    intro: [
      "Security and quality are built into every stage of delivery rather than added at the end.",
    ],
    listTitle: "Our approach includes:",
    items: [
      { label: "Secure Architecture", text: "Secure system design, access controls, and data protection from the start." },
      { label: "Quality Engineering", text: "Functional, integration, performance, and security testing." },
      { label: "Compliance Alignment", text: "Solutions shaped around the regulatory needs of your industry." },
      { label: "Audit Readiness", text: "Identity management, audit trails, and documentation that support reviews." },
    ],
  },
  {
    category: "Security & Quality",
    question: "How do you test software before it goes live?",
    intro: [
      "Quality assurance runs throughout development, not just at the end. We combine functional, integration, performance, and security testing, supported by automated testing and CI/CD pipelines where appropriate, so issues are caught early and releases are dependable.",
    ],
  },
  {
    category: "Security & Quality",
    question: "Will my project information and ideas remain confidential?",
    intro: [
      "We treat client information and project details as confidential. Confidentiality, NDA, and intellectual property terms can be discussed and agreed before any project work begins.",
    ],
  },

  /* ───────────── AI & Modernization ───────────── */
  {
    category: "AI & Modernization",
    question: "How can AI be used in our business?",
    intro: [
      "AI can support areas such as forecasting, intelligent automation, data analysis, and decision support. Greyloops integrates AI, machine learning, and automation where they deliver measurable business value, starting with the use cases that matter most to your operations.",
    ],
  },
  {
    category: "AI & Modernization",
    question: "How Does Greyloops Help Businesses Scale Digital Products?",
    intro: [
      "Greyloops helps businesses scale existing digital products by optimizing performance, modernizing architecture, and improving system reliability. We combine cloud technologies, data-driven optimization, and automation to ensure applications adapt to growing users, workloads, and business demands.",
    ],
    listTitle: "We improve scalability through:",
    items: [
      "Cloud Migration & Microservices Architecture",
      "Performance Engineering & Optimization",
      "AI-Powered Monitoring & Predictive Analytics",
      "Modular UI/UX & API Integration",
      "Automated Testing & CI/CD Pipelines",
    ],
    outro: [
      "Our approach helps businesses build on existing investments, improve application performance, and support sustainable growth without compromising security or stability.",
    ],
  },
  {
    category: "AI & Modernization",
    question:
      "How Does Greyloops Modernize Legacy Systems with AI-Driven Engineering?",
    intro: [
      "Greyloops helps businesses modernize legacy systems by combining AI, modern software architecture, and automation to improve performance, streamline operations, and support long-term growth. We assess existing systems, identify inefficiencies, and develop a phased modernization strategy that preserves valuable business logic while upgrading outdated components and connecting disconnected platforms.",
      "Our approach integrates AI, machine learning, predictive analytics, and intelligent automation where they deliver measurable business value. We prioritize secure system design, reliable data integration, and continuous testing to ensure every solution remains scalable, maintainable, and aligned with business objectives.",
      "The result is a modern, AI-ready technology foundation that reduces operational complexity, improves decision-making, and prepares businesses for future innovation.",
    ],
  },
  {
    category: "AI & Modernization",
    question: "Can Greyloops build data pipelines and analytics solutions?",
    intro: [
      "Yes. We build reliable data pipelines and analytics solutions that turn business data into actionable insights and support informed decisions, from data engineering and reporting to AI-assisted forecasting.",
    ],
  },

  /* ───────────── Support & Engagement ───────────── */
  {
    category: "Support & Engagement",
    question:
      "Can Greyloops Provide Dedicated Developers or Team Augmentation for Projects?",
    intro: [
      "Yes. Greyloops offers flexible engagement models to help businesses extend their development capabilities, access specialized technical expertise, and manage changing project requirements. Whether you need additional developers for an existing team or a dedicated team to build a digital product, we align our approach with your goals, project scope, and delivery needs.",
    ],
    listTitle: "Our engagement options include:",
    items: [
      { label: "Dedicated Development Teams", text: "A team focused on your project&apos;s objectives and development requirements." },
      { label: "Staff Augmentation", text: "Skilled professionals who integrate with your existing team to fill technical or resource gaps." },
      { label: "Project-Based Engagement", text: "Development services organized around defined deliverables, scope, and milestones." },
      { label: "Hybrid Engagement Models", text: "A combination of internal resources and external expertise based on your project needs." },
    ],
    outro: [
      "Our goal is to provide the right technical capabilities, maintain effective collaboration, and support efficient project delivery.",
    ],
  },
  {
    category: "Support & Engagement",
    question: "Does Greyloops Provide SLAs and Post-Launch Support?",
    intro: [
      "Greyloops provides ongoing support and maintenance options to help businesses maintain the reliability, security, and performance of their digital products after deployment. Support arrangements are tailored to the system&apos;s complexity, operational requirements, and agreed service levels.",
    ],
  },
  {
    category: "Support & Engagement",
    question: "How do I get started with Greyloops?",
    intro: [
      "Share your requirements through our contact form or by email, and our team will get back to you within 24 hours to schedule a free consultation. In that conversation we discuss your goals, answer your questions, and outline the best path forward.",
    ],
  },
].map((f, i) => ({ ...f, id: i }));