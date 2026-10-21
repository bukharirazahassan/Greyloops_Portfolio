// src/app/components/services/BackendFAQ.jsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqData = [
  {
    id: "faq-1",
    question: "How does back-end development integrate with front-end features?",
    answer: (
      <>
        <p className="mb-3">
          Back-end development provides the necessary data and functionality to the front-end. A back end web developer creates APIs, manages database interactions, and implements server-side logic that allows the front-end to display dynamic content, process user inputs, and offer interactive features.
        </p>
        <p>
          By 2027, the dynamics of back end vs front end web development collaboration will be the key to making sure products evolve quickly without messing with the user’s experience. A backend that is well-organised exposes APIs that are rock solid, data contracts that are easy to predict, and versioning strategies that let frontend teams update things on their own. That makes it so that frontend teams can release changes without having to wait for the backend to get rewritten from scratch — it’s a huge time and risk saver.
        </p>
      </>
    ),
  },
  {
    id: "faq-2",
    question: "How long does back-end development take?",
    answer: (
      <p>
        The timeline for back-end development services depends on the project’s complexity, scope, and team size. To get a precise estimation for your back end for website.
      </p>
    ),
  },
  {
    id: "faq-3",
    question: "Can back-end development improve website performance?",
    answer: (
      <p>
        Yes, back-end development plays a crucial role in enhancing website performance. By optimizing back end system design, including server-side operations, databases, and application logic, back-end development ensures faster loading times, efficient data processing, and overall improved user experience.
      </p>
    ),
  },
  {
    id: "faq-4",
    question: "What are the ongoing maintenance requirements for back-end systems?",
    answer: (
      <p>
        Maintaining back-end systems means regularly updating software and libraries, applying security patches, monitoring servers, optimizing performance, and scaling as your user base and data needs grow. This ensures the system remains efficient, secure, and scalable — thanks to ongoing software developer solutions.
      </p>
    ),
  },
  {
    id: "faq-5",
    question: "How do you choose between monolithic vs microservices architecture for the back-end?",
    answer: (
      <>
        <p className="mb-3">
          A monolith is a good choice for early-stage products or simpler systems because it’s faster to build, easier to deploy, and cheaper to keep up with at first. However, microservices pay off when you have defined domain boundaries, many teams, significant size, or the requirement to deploy components of the system independently. Microservices are more advanced in all respects of performance, stability, and security. The decision is always made depending on the strategic vision and the goals.
        </p>
        <p>
          The choice is really about how big your organisation is, how fast you need to deliver, and how much maturity your ops team has, rather than just going with your gut. Monoliths are great for getting things done fast and with less overhead early on, but as your systems and teams start to grow and get more complicated, service-based architectures become a lot more appealing because they let you release independently, clear up ownership, and scale things as needed. The goal is to pick an architecture that fits with your business plans and how fast you need to go.
        </p>
      </>
    ),
  },
  {
    id: "faq-6",
    question: "What is the cost breakdown for a typical back-end development project?",
    answer: (
      <>
        <p className="mb-3">
          Costs are frequently broken down into discovery and architecture, core development, quality assurance, and DevOps. You should also include ongoing maintenance, cloud infrastructure, and feature evolution, not just the initial build, if you plan for a long run.
        </p>
        <p>
          Backend cost is driven less by code volume and more by architectural decisions, data complexity, and operational requirements. Clear boundaries, reusable components, and automated delivery pipelines reduce long-term engineering effort and infrastructure spend. Transparent cost modeling helps businesses understand where upfront investment lowers future maintenance, scaling, and incident costs.
        </p>
      </>
    ),
  },
  {
    id: "faq-7",
    question: "Which database engine should we use for our back-end (relational vs NoSQL) and why?",
    answer: (
      <p>
        Relational databases (like PostgreSQL or MySQL) are frequently the default choice for most commercial apps because they offer high consistency, powerful querying, and well-understood transaction semantics. When you have a lot of data, flexible and adaptable schemas make sense. While a polyglot architecture, which combines a relational core with specialized stores for certain workloads, works best in many systems. So the final choice is made in consideration of many factors but always to support the main goals.
      </p>
    ),
  },
  {
    id: "faq-8",
    question: "How do you handle scalability and load-balancing in back-end development?",
    answer: (
      <>
        <p className="mb-3">
          We create stateless services where possible, so instances can be scaled horizontally behind a load balancer. The real thing, databases are less stressed with caching, connection pooling, and efficient queries. Moreover, to handle more traffic, we add read replicas, message queues, and asynchronous processing. The method includes monitoring and capacity planning so that we can scale up before disruptions.
        </p>
        <p>
          Scalability is not something you add later on — it’s something you build into your system from the start, through using stateless services, controlling concurrency and making sure your load is distributed in a way that makes sense. That way, when you get a traffic spike or you start to grow in a new region or you need to integrate with someone else, your system can just take it and keep on going without falling over — its good for your customers and it stops your costs from getting out of control.
        </p>
      </>
    ),
  },
];

export default function BackendFAQ() {
  const [openId, setOpenId] = useState(null);

  const toggleFAQ = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="relative w-full overflow-hidden bg-slate-50 py-12 sm:py-16 lg:py-20 text-slate-900 border-t border-slate-200/60">
      {/* Background Dot Pattern matching site theme */}
      <div 
        className="pointer-events-none absolute inset-0 z-0 opacity-40"
        style={{
          backgroundImage: `radial-gradient(#94a3b8 1.2px, transparent 1.2px)`,
          backgroundSize: `24px 24px`,
        }}
      />

      {/* Consistent ambient background glow effects */}
      <div className="pointer-events-none absolute left-10 top-12 z-0 h-96 w-96 rounded-full bg-blue-400/15 blur-[120px]" />
      <div className="pointer-events-none absolute right-12 bottom-12 z-0 h-96 w-96 rounded-full bg-indigo-400/15 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-[88rem] px-6">
        {/* Section Header */}
        <div className="mb-12 text-left max-w-3xl">
          <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-600 backdrop-blur-md">
            <HelpCircle className="h-3.5 w-3.5 text-blue-500" />
            Got Questions?
          </span>

          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl mb-4">
            Frequently asked <span className="text-blue-600">questions</span>
          </h2>
          <p className="max-w-2xl text-base font-medium leading-relaxed text-slate-600 sm:text-lg">
            Find clarity on back-end architecture, performance optimizations, timelines, and technical decisions.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="flex flex-col gap-4">
          {faqData.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="overflow-hidden rounded-3xl border border-white/80 bg-white/80 shadow-[0_10px_30px_rgba(15,23,42,0.05)] backdrop-blur-xl transition-all duration-300 hover:border-blue-200 hover:bg-white hover:shadow-[0_20px_50px_rgba(37,99,235,0.08)]"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(item.id)}
                  className="flex w-full items-center justify-between gap-4 p-6 text-left sm:p-7 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-lg font-bold tracking-tight text-slate-900 sm:text-xl">
                    {item.question}
                  </span>
                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                      isOpen
                        ? "rotate-180 bg-blue-600 text-white shadow-md shadow-blue-600/30"
                        : "bg-blue-50 text-blue-600 ring-1 ring-blue-100"
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" strokeWidth={2.5} />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="border-t border-slate-100/80 px-6 pb-6 pt-4 sm:px-7 sm:pb-7">
                        <div className="text-base font-medium leading-relaxed text-slate-600 sm:text-lg">
                          {item.answer}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}