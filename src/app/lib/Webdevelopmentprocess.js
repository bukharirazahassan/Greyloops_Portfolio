/**
 * @typedef {Object} ProcessStep
 * @property {string} title - Step name shown as the card heading.
 * @property {string} description - Detailed description of the step.
 * @property {string} image - Path under /public to the step's image
 *   (e.g. "/images/services/process/requirements.png").
 */

/** @type {ProcessStep[]} */
export const steps = [
  {
    title: "Discovery & Requirements",
    description:
      "We begin by developing a clear understanding of your business objectives, target users, existing processes, and application requirements. Our team works closely with stakeholders to understand what the application needs to achieve, the problems it should solve, and how users will interact with it. We analyze functional requirements, business workflows, user roles, data requirements, integrations, technical constraints, and project priorities. This helps us identify the core features needed for the initial release while separating future enhancements from immediate development needs. Based on these discussions, we document the project scope, define priorities, identify dependencies, and establish clear requirements that guide the design and development teams. This early alignment helps reduce ambiguity, minimize unnecessary changes, and provide a solid foundation for planning the development cycles that follow.",
    image: "/images/services/process/requirements.png",
  },
  {
    title: "Planning and Wireframing",
    description:
      "Once the project requirements are established, we translate business needs into a clear application structure and user experience framework. Our team maps the application’s information architecture, navigation, screen hierarchy, user journeys, and key interactions to determine how users will move through each part of the product. We create detailed wireframes for core screens and workflows, defining the placement of content, features, actions, forms, navigation elements, and functional components without focusing on final visual styling. This allows us to validate the product structure early, identify usability gaps, refine workflows, and ensure that every feature has a clear purpose within the overall application. We also consider different user roles, device requirements, business workflows, integrations, and future scalability while developing the wireframe structure. Based on this process, we establish a practical blueprint that guides the UI/UX design and development teams, reduces unnecessary revisions, and creates a strong foundation for building an intuitive and well-organized digital product.",
    image: "/images/services/process/wireframing.png",
  },
  {
    title: "UI/UX Design",
    description:
      "With the application structure and wireframes established, we transform the approved workflows into a complete user interface and experience design. Our team develops visual concepts, interface layouts, typography, color systems, components, forms, navigation elements, and responsive designs that align with the product requirements and brand direction. We design key user journeys across relevant screen sizes and consider how different user roles will interact with the application. Interactive prototypes can be used to demonstrate important workflows and validate navigation, interactions, and overall usability before development begins. The design process focuses on creating consistent experiences across the application while keeping interfaces practical, accessible, and easy to understand. The completed design system provides developers with a clear visual and functional reference for implementing the application accurately and consistently.",
    image: "/images/services/process/design.png",
  },
  {
    title: "Frontend Development",
    description:
      "Once the interface designs are approved, we begin implementing the application's client-side experience and translating the designed screens into functional web interfaces. Our frontend development covers reusable components, responsive layouts, navigation, forms, interactive elements, client-side validation, state management, and communication with backend services. We structure the frontend around the application's requirements so that commonly used interface elements remain consistent and easier to maintain as the product grows. We also account for different screen sizes, browsers, accessibility requirements, and real-world user interactions during implementation. Throughout development, the frontend is progressively connected with available APIs and application functionality, allowing completed features to be reviewed and refined as the product moves through each development cycle.",
    image: "/images/services/process/frontend.png",
  },
  {
    title: "Backend Development",
    description:
      "We develop the server-side foundation responsible for the application's business logic, data processing, authentication, authorization, database operations, and core application functionality. Our team structures backend services around the workflows and requirements identified during the planning stages, ensuring that business rules are implemented consistently and application data is handled appropriately. We design APIs and server-side processes that allow the frontend and other required systems to communicate with the application. Database structures, relationships, validation, permissions, error handling, and application performance are considered as part of the implementation. The backend is developed incrementally alongside frontend functionality so that complete features can be connected, tested, and validated throughout the development process rather than being treated as a separate final stage.",
    image: "/images/services/process/backend.png",
  },
  {
    title: "Integration",
    description:
      "We connect the web application with the external systems and services required to support its business processes and user workflows. Depending on the project, integrations may include CRM and ERP platforms, payment services, authentication providers, communication systems, business APIs, analytics services, or other third-party applications. Our team defines how information should move between systems, implements the required API communication, and handles authentication, data mapping, validation, error conditions, and response handling. We also consider how external service changes or temporary failures can affect application workflows and design integrations accordingly. This approach helps ensure that connected systems communicate consistently and that users can complete business processes without unnecessary manual data transfer or disconnected workflows.",
    image: "/images/services/process/integration.png",
  },
  {
    title: "Cloud Migration",
    description:
      "When cloud infrastructure is required, we plan and execute the application's transition to an appropriate cloud environment based on its technical requirements, workload, data, and operational needs. Our team prepares the required environments, application infrastructure, databases, storage, networking, access controls, and deployment configuration while considering performance, availability, security, and future growth. For applications moving from existing infrastructure, we assess the current environment, identify migration dependencies, and plan the transition to reduce disruption to business operations. We also configure development, staging, and production environments where required so that application changes can be managed through controlled deployment processes. The objective is to establish a practical cloud foundation that supports ongoing application operations and future development.",
    image: "/images/services/process/cloud.png",
  },
  {
    title: "Testing and Quality Assurance",
    description:
      "Our QA specialists evaluate the application throughout the development lifecycle to identify functional issues, inconsistencies, and defects before they reach production. Testing is performed according to the application's requirements and can cover functional behavior, regression scenarios, compatibility, usability, performance, security-focused requirements, forms, workflows, integrations, and different user roles. We combine automated testing where it provides meaningful coverage with detailed manual testing and human validation for complex workflows, business rules, and scenarios that require contextual judgment. Issues identified during testing are documented, investigated, and communicated to the development team for resolution and verification. This continuous QA approach helps ensure that completed features work as intended and that changes introduced during development do not compromise previously implemented functionality.",
    image: "/images/services/process/testing.png",
  },
  {
    title: "Deployment",
    description:
      "Once the application has completed the required development and testing activities, we prepare it for production deployment and launch. Our team reviews the production environment, application configuration, database setup, required infrastructure, domain and DNS configuration, environment variables, access controls, and deployment requirements before release. We establish a controlled deployment process so that the application can be moved from the final development or staging environment into production with appropriate checks in place. Where necessary, we coordinate database migrations, application configuration changes, and release activities to minimize disruption. After deployment, we verify the application's core functionality and production behavior to ensure that the released version is operating correctly and is ready for real users.",
    image: "/images/services/process/deployment.png",
  },
  {
    title: "Maintenance and Support",
    description:
      "After the application is launched, we continue supporting its operation through maintenance, issue resolution, technical updates, and ongoing improvements. Our team can monitor application behavior, investigate production issues, address defects, maintain existing functionality, and implement required updates as the technology and business environment changes. Maintenance activities may include application updates, dependency changes, performance improvements, security-related maintenance, database adjustments, and fixes for issues identified through real-world usage. We work with the application team to prioritize maintenance requirements and address issues according to their impact and urgency. This ongoing support helps keep the application functional, maintainable, and aligned with changing operational requirements after the initial launch.",
    image: "/images/services/process/maintenance.png",
  },
  {
    title: "Optimization and Evaluation",
    description:
      "As the application is used in real business environments, we evaluate its performance, usability, functionality, and alignment with evolving business requirements. Feedback from users and stakeholders helps identify areas where workflows can be simplified, features can be improved, or additional capabilities may provide greater value. We review application behavior, performance considerations, usage patterns, and operational requirements to identify practical opportunities for refinement. Improvements can include optimizing existing functionality, improving user journeys, enhancing application performance, introducing new features, or adjusting workflows as business processes change. This continuous evaluation allows the application to evolve beyond its initial release while remaining aligned with user needs, operational priorities, and the organization's long-term digital goals.",
    image: "/images/services/process/optimization.png",
  },
];

/**
 * Scroll distance (in vh) dedicated to each step's slide-in animation.
 * Larger = slower, more gradual scroll per step. Kept alongside `steps`
 * since it's process-specific tuning, not general component logic.
 */
export const VH_PER_STEP = 85;