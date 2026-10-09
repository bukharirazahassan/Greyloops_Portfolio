// src/app/lib/erpBlogData.js
import {
  Layers,
  FileText,
  Workflow,
  BarChart3,
  Cog,
  Users,
  BrainCircuit,
  TrendingUp,
  Bot,
  Lightbulb,
  Network,
  Cloud,
  Zap,
  Activity,
  Link2,
  ShieldCheck,
  MessageSquare,
  Info,
  ArrowRight,
  Sparkles,
  LineChart,
  MessageCircle,
  AlertTriangle,
  Compass,
  CheckCircle2,
  Server,
  Scale,
  Globe2,
  Network as NetworkIcon,
  Lock,
  CheckSquare,
  DollarSign,
  PieChart,
  LayoutDashboard,
  Boxes,
  Cpu,
  ShoppingBag,
} from "lucide-react";

export const erpCapabilities = [
  "AI-Powered ERP Systems",
  "Cloud ERP & Modernization",
  "Intelligent Automation",
  "Real-Time Data & Analytics",
];

export const erpTakeAways = [
  { label: "Key Takeaways", href: "#key-takeaways", id: "key-takeaways" },
  { label: "Traditional vs. Modern ERP", href: "#traditional-vs-modern", id: "traditional-vs-modern" },
  { label: "Key Differences", href: "#key-differences", id: "key-differences" },
  { label: "What Makes an ERP Modern", href: "#modern-pillars", id: "modern-pillars" },
  { label: "An Important Point", href: "#important-point", id: "important-point" },
  { label: "AI-Powered ERP Systems", href: "#ai-powered-erp", id: "ai-powered-erp" },
  { label: "Cloud ERP & Hybrid Solutions", href: "#cloud-erp-hybrid", id: "cloud-erp-hybrid" },
  { label: "ERP Automation & Workflows", href: "#erp-automation", id: "erp-automation" },
  { label: "Real-Time Analytics & BI", href: "#realtime-analytics", id: "realtime-analytics" },
  { label: "ERP Integration & Connected Systems", href: "#erp-integration", id: "erp-integration" },
];

export const erpKeyTakeaways = [
  "AI is making ERP systems more intelligent by supporting forecasting, insights, and data-driven decisions.",
  "Cloud ERP provides flexible access, easier scalability, and more adaptable deployment options.",
  "Automation reduces repetitive work, improves process consistency, and increases operational efficiency.",
  "Real-time analytics helps businesses monitor performance and respond to changing conditions faster.",
  "ERP integration connects finance, supply chain, inventory, HR, sales, and other business functions.",
  "Security, data quality, and a clear implementation strategy remain essential for successful ERP modernization.",
];

export const aiPoweredErpPoints = [
  {
    title: "Intelligent Forecasting",
    description: "AI analyzes historical data, sales trends, and operational patterns to forecast demand, estimate inventory requirements, support financial planning, and improve resource allocation.",
    Icon: LineChart,
    tint: "bg-[#007AFF]/10 text-[#007AFF]",
  },
  {
    title: "AI Assistants",
    description: "AI assistants allow employees to interact with ERP data using natural-language questions. They can help retrieve information, summarize reports, answer business queries, and support routine workflows.",
    Icon: MessageCircle,
    tint: "bg-[#AF52DE]/10 text-[#AF52DE]",
  },
  {
    title: "Predictive Insights",
    description: "Predictive analytics helps identify potential risks, unusual transactions, supply chain disruptions, and operational inefficiencies. These insights allow teams to investigate issues earlier and take preventive action.",
    Icon: AlertTriangle,
    tint: "bg-[#34C759]/12 text-[#28A745]",
  },
  {
    title: "Decision Support",
    description: "AI-powered decision support helps managers evaluate business performance, compare scenarios, and assess recommendations using available data. Human oversight remains important for validating insights and making critical business decisions.",
    Icon: Compass,
    tint: "bg-[#FF9500]/12 text-[#F08000]",
  },
  {
    title: "Business Benefits of AI-Powered ERP",
    description: "When implemented effectively, AI-powered ERP can improve forecasting, reduce repetitive work, strengthen operational visibility, support faster decisions, and help organizations respond more effectively to changing business needs.",
    Icon: CheckCircle2,
    tint: "bg-[#FF2D55]/10 text-[#FF2D55]",
  },
];

export const cloudErpHybridPoints = [
  {
    title: "Cloud-Based Deployment",
    description: "Cloud ERP allows businesses to access enterprise applications and data through internet-connected services. Depending on the deployment model, infrastructure maintenance, updates, and system management may be handled by the cloud provider or shared with the organization.",
    Icon: Cloud,
    tint: "bg-[#007AFF]/10 text-[#007AFF]",
  },
  {
    title: "Scalability & Performance",
    description: "Cloud infrastructure allows organizations to adjust computing resources as transaction volumes, users, and business demands grow. Proper capacity planning and monitoring help maintain application performance while supporting future expansion.",
    Icon: Scale,
    tint: "bg-[#AF52DE]/10 text-[#AF52DE]",
  },
  {
    title: "Flexibility & Accessibility",
    description: "Cloud ERP supports access to business systems across locations, helping distributed teams collaborate and manage operations. Integration capabilities also allow organizations to connect ERP platforms with other business applications and digital services.",
    Icon: Globe2,
    tint: "bg-[#34C759]/12 text-[#28A745]",
  },
  {
    title: "Hybrid ERP Environments",
    description: "Hybrid ERP combines cloud-based services with on-premises systems. This approach helps organizations modernize selected business functions while retaining existing infrastructure where required for legacy applications, data control, compliance, or operational needs.",
    Icon: NetworkIcon,
    tint: "bg-[#FF9500]/12 text-[#F08000]",
  },
  {
    title: "Security & Business Continuity",
    description: "Cloud ERP security depends on appropriate access controls, data encryption, monitoring, backup strategies, and clearly defined responsibilities between the organization and its provider. A well-planned deployment helps support data protection, system availability, and recovery from disruptions.",
    Icon: Lock,
    tint: "bg-[#FF2D55]/10 text-[#FF2D55]",
  },
];

export const erpAutomationPoints = [
  {
    title: "Automated Approvals",
    description: "Automated approval workflows route purchase requests, expenses, invoices, and other business documents to the appropriate people based on predefined rules, approval limits, and organizational policies.",
    Icon: CheckSquare,
    tint: "bg-[#007AFF]/10 text-[#007AFF]",
  },
  {
    title: "Financial Process Automation",
    description: "ERP systems automate repetitive financial activities such as invoice processing, transaction reconciliation, expense management, and payment tracking. This helps reduce manual effort and improve financial accuracy.",
    Icon: DollarSign,
    tint: "bg-[#AF52DE]/10 text-[#AF52DE]",
  },
  {
    title: "Automated Reporting",
    description: "Automated reporting generates scheduled business and financial reports using updated system data. Teams can access relevant information more efficiently without repeatedly compiling reports manually.",
    Icon: FileText,
    tint: "bg-[#34C759]/12 text-[#28A745]",
  },
  {
    title: "Routine Operations",
    description: "Automation supports everyday activities such as inventory updates, order processing, employee onboarding, procurement, and notifications. This allows employees to focus on more complex tasks and business priorities.",
    Icon: Zap,
    tint: "bg-[#FF9500]/12 text-[#F08000]",
  },
];

export const realtimeAnalyticsPoints = [
  {
    title: "Interactive Dashboards",
    description: "ERP dashboards present key business information through charts, summaries, and performance indicators. Users can monitor sales, finances, inventory, procurement, and other operational activities from a centralized view.",
    Icon: LayoutDashboard,
    tint: "bg-[#007AFF]/10 text-[#007AFF]",
  },
  {
    title: "Operational Visibility",
    description: "Connected ERP data provides a clearer picture of activities across departments. Teams can monitor workflows, identify delays, track resource usage, and understand how different business functions affect one another.",
    Icon: Activity,
    tint: "bg-[#AF52DE]/10 text-[#AF52DE]",
  },
  {
    title: "Performance Tracking",
    description: "Key performance indicators (KPIs) help organizations measure progress against business goals. Regular tracking of costs, revenue, productivity, inventory, and delivery performance helps identify areas that require improvement.",
    Icon: PieChart,
    tint: "bg-[#34C759]/12 text-[#28A745]",
  },
  {
    title: "Data-Driven Decisions",
    description: "Business intelligence tools help managers analyze trends, compare results, and evaluate business performance. Reliable insights support more informed decisions about resource allocation, operational priorities, and future planning.",
    Icon: BarChart3,
    tint: "bg-[#FF9500]/12 text-[#F08000]",
  },
];

export const erpIntegrationPoints = [
  {
    title: "API-Based Integration",
    description: "Application Programming Interfaces (APIs) allow ERP systems to exchange data with external applications and services. Properly designed integrations help synchronize information, automate workflows, and reduce duplicate data entry.",
    Icon: Network,
    tint: "bg-[#007AFF]/10 text-[#007AFF]",
  },
  {
    title: "CRM Integration",
    description: "Connecting ERP with Customer Relationship Management (CRM) systems links customer information with sales orders, billing, inventory, and financial records. This helps teams maintain consistent information throughout the customer lifecycle.",
    Icon: Users,
    tint: "bg-[#AF52DE]/10 text-[#AF52DE]",
  },
  {
    title: "Supply Chain & Inventory Integration",
    description: "Integration with procurement, warehouse, logistics, and supplier systems improves visibility into stock levels, purchase orders, deliveries, and supply chain activities.",
    Icon: Boxes,
    tint: "bg-[#34C759]/12 text-[#28A745]",
  },
  {
    title: "HR & Workforce Systems",
    description: "ERP integration with Human Resources platforms connects employee records, payroll, attendance, benefits, and workforce planning with relevant organizational processes.",
    Icon: Cpu,
    tint: "bg-[#FF9500]/12 text-[#F08000]",
  },
  {
    title: "E-Commerce & Enterprise Platforms",
    description: "Connecting ERP with e-commerce platforms, payment services, and other enterprise applications helps synchronize orders, product information, customer records, and financial transactions, supporting more coordinated business operations.",
    Icon: ShoppingBag,
    tint: "bg-[#FF2D55]/10 text-[#FF2D55]",
  },
];

export const traditionalPoints = [
  {
    icon: Layers,
    title: "Process Management",
    text: "Manages core business operations through predefined workflows.",
  },
  {
    icon: FileText,
    title: "Data & Reporting",
    text: "Records transactions and generates standard reports.",
  },
  {
    icon: Cog,
    title: "Rule-Based Automation",
    text: "Executes tasks based on configured rules and conditions.",
  },
  {
    icon: BarChart3,
    title: "Decision Support",
    text: "Provides information for employees and managers to analyze.",
  },
  {
    icon: Users,
    title: "Operational Control",
    text: "Helps maintain consistency across business departments.",
  },
];

export const modernPoints = [
  {
    icon: BrainCircuit,
    title: "AI-Powered Insights",
    text: "Analyzes business data to identify patterns and opportunities.",
  },
  {
    icon: TrendingUp,
    title: "Predictive Analytics",
    text: "Helps forecast demand, inventory needs, and potential risks.",
  },
  {
    icon: Workflow,
    title: "Intelligent Automation",
    text: "Supports workflows that involve data analysis and contextual recommendations.",
  },
  {
    icon: Lightbulb,
    title: "AI-Assisted Decisions",
    text: "Provides recommendations to help teams evaluate business options.",
  },
  {
    icon: Network,
    title: "Connected Operations",
    text: "Integrates business applications, data sources, and workflows for better visibility.",
  },
];

export const differences = [
  {
    icon: BarChart3,
    capability: "Data analysis",
    traditional: "Standard reports",
    modern: "AI-assisted analysis and insights",
  },
  {
    icon: TrendingUp,
    capability: "Forecasting",
    traditional: "Basic methods or predefined rules",
    modern: "Machine learning-based predictions",
  },
  {
    icon: Workflow,
    capability: "Automation",
    traditional: "Rule-based tasks",
    modern: "Rule-based and AI-assisted workflows",
  },
  {
    icon: Lightbulb,
    capability: "Decision support",
    traditional: "Historical data and reports",
    modern: "Predictive insights and recommendations",
  },
  {
    icon: MessageSquare,
    capability: "User interaction",
    traditional: "Forms, menus, and dashboards",
    modern: "May include conversational AI assistants",
  },
  {
    icon: Cog,
    capability: "Business operations",
    traditional: "Manages established processes",
    modern: "Can help optimize processes using data-driven insights",
  },
];

export const modernPillars = [
  {
    icon: Cloud,
    title: "Cloud Computing",
    text: "Enables flexible access and scalable infrastructure.",
  },
  {
    icon: BrainCircuit,
    title: "Artificial Intelligence",
    text: "Supports forecasting, recommendations, and data analysis.",
  },
  {
    icon: Zap,
    title: "Intelligent Automation",
    text: "Reduces repetitive work and streamlines business workflows.",
  },
  {
    icon: Activity,
    title: "Real-Time Analytics",
    text: "Improves visibility into operational performance.",
  },
  {
    icon: Link2,
    title: "System Integration",
    text: "Connects ERP with CRM, supply chain, e-commerce, and other enterprise applications.",
  },
  {
    icon: ShieldCheck,
    title: "Data Security & Governance",
    text: "Supports controlled access, data protection, and responsible information management.",
  },
];