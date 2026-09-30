"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import {
  ArrowRight,
  ExternalLink,
  Github,
  X,
} from "lucide-react";

import { RevealOnScroll } from "../RevealOnScroll";

const projects = [
    {
    id: 1,
    title: "Product Feedback Analyser",
    description:
      "AI-powered app that extracts themes, sentiment, and pain points from customer reviews, with evidence-backed feature suggestions and a context-grounded chat assistant.",
    details:
      "An AI-powered app that turns raw customer reviews into structured insights — automatic theme and sentiment extraction, ranked pain points, and evidence-backed feature suggestions, plus a context-grounded chat to ask follow-up questions.",
    image: "/projects/FeedbackAI.png",
    tags: [
      "Next.js","TypeScript","PostgreSQL","Drizzle ORM","Gemini API"
    ],
    githubUrl: "https://github.com/AparnaUnni/ProductFeedbackAnalyzer",
    liveUrl: "https://product-feedback-analyzer-ten.vercel.app/",
  },
  {
    id: 2,
    title: "Employee Management Dashboard",
    description:
      "Secure admin dashboard with JWT authentication, employee and team CRUD management, attendance tracking with check-in/check-out logs, and monthly reports visualised with Recharts.",
    details:
      "A secure dashboard for managing employees and teams. It includes JWT authentication, CRUD operations, attendance tracking, check-in/check-out logs, and monthly reports using Recharts.",
    image: "/projects/EmployeeDashboard.png",
    tags: [
      "Next.js",
      "Express.js",
      "MongoDB",
      "Recharts",
      "JWT Auth",
    ],
    githubUrl: "https://github.com/AparnaUnni/employee-workforce-dashboard",
    liveUrl: "https://employee-workforce-dashboard-teal.vercel.app/",
  },
  {
    id: 3,
    title: "Product Dashboard with AI Assistant",
    description:
      "Next.js admin dashboard with real-time product catalogue and a context-scoped AI assistant.",
    details:
      "A product management dashboard with a context-scoped AI assistant. It uses useReducer for structured state management and dynamic system prompt construction to keep responses relevant to the product catalogue.",
    image: "/projects/ProductDashboard.png",
    tags: [
      "Next.js",
      "React",
      "Gemini API",
      "useReducer",
      "Tailwind CSS",
    ],
    githubUrl: "https://github.com/AparnaUnni/AI-Assisted-Product-Dashboard",
    liveUrl: "",
  },
  {
    id: 4,
    title: "Art Institution Website",
    description:
      "Website for an art and dance institution with sections for programme images, videos, and faculty details.",
    details:
      "A responsive website created for an art and dance institution. The website includes programme sections, images, videos, and faculty details.",
    image: "/projects/Nalanda.png",
    tags: ["HTML", "CSS", "JavaScript","Responsive Design"],
    githubUrl: "https://github.com/AparnaUnni/NalandaArts",
    liveUrl: "https://nalanda-arts.vercel.app/",
  },
  {
    id: 5,
    title: "Memoria - E-commerce Gift Store",
    description:
      "Full-featured e-commerce platform for category browsing and product ordering.",
    details:
      "An e-commerce gift store that allows users to browse products by category, view product information, and place product orders.",
    image: "/projects/memoria.png",
    tags: [
      "Next.js",
      "React",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
    ],
    githubUrl: "https://github.com/AparnaUnni/OnlineGiftStore",
    liveUrl: "",
  },
  {
    id: 6,
    title: "Centralized Test Management Tool",
    description:
      "End-to-end test management tool for requirement analysis, test execution and report generation.",
    details:
      "A centralized test management platform that supports requirement analysis, test case management, test execution, and report generation.(Internal Project)",
    tags: ["React", "CSS", "C#", "MongoDB", "Python"],
  },
  
];

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);

    const previousBodyOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = previousBodyOverflow;
    };
  }, [onClose]);

  const modal = (
    <div
      className="fixed inset-0 z-[9999] grid min-h-[100dvh] place-items-center bg-black/80 p-3 sm:p-6"
      onMouseDown={onClose}
      role="presentation"
    >
      <div
        className="relative flex max-h-[calc(100dvh-1.5rem)] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-2xl sm:max-h-[calc(100dvh-3rem)]"
        onMouseDown={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
      >
        {/* Modal header */}
        <div className="flex shrink-0 items-start justify-between gap-4 border-b border-white/10 p-4 sm:p-6">
          <h2
            id="project-modal-title"
            className="pr-8 text-xl font-bold text-white sm:text-3xl"
          >
            {project.title}
          </h2>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close project details"
            className="shrink-0 rounded-full p-2 text-gray-400 transition hover:bg-white/10 hover:text-white"
          >
            <X size={21} />
          </button>
        </div>

        {/* Modal scrollable content */}
        <div className="min-h-0 overflow-y-auto p-4 sm:p-6">
          {project.image && (
            <div className="overflow-hidden rounded-xl border border-white/10 bg-black/20">
              <img
                src={project.image}
                alt={`${project.title} project screenshot`}
                className="block h-auto max-h-[45vh] w-full "
              />
            </div>
          )}

          <p className="mt-5 text-sm leading-relaxed text-gray-300 sm:text-base">
            {project.details || project.description}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-blue-500/10 px-3 py-1.5 text-xs text-blue-400 sm:text-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-blue-500 px-4 py-2 text-sm text-white transition hover:bg-blue-600"
              >
                <Github size={18} />
                View Code
              </a>
            )}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-blue-500/50 px-4 py-2 text-sm text-blue-400 transition hover:bg-blue-500/10"
              >
                <ExternalLink size={18} />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  // This renders the modal directly under <body>.
  return createPortal(modal, document.body);
};

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="projects"
      className="flex min-h-screen items-center justify-center py-16 sm:py-20"
    >
      <RevealOnScroll>
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <h2 className="mb-10 text-center text-3xl font-bold text-transparent bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text sm:mb-12 sm:text-4xl">
            Featured Projects
          </h2>

          {/* Equal-height responsive cards */}
          <div className="grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.id}
                className="flex h-full flex-col rounded-xl border border-white/10 bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.15)] sm:p-6"
              >
                <div className="flex-1">
                  <h3 className="mb-3 text-lg font-bold text-white sm:text-xl">
                    {project.title}
                  </h3>

                  <p className="mb-5 text-sm leading-relaxed text-gray-400 sm:text-base">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-blue-500/10 px-3 py-1 text-xs text-blue-400 transition hover:bg-blue-500/20 sm:text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card footer */}
                <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="rounded-lg bg-blue-500/10 px-3 py-2 text-sm font-medium text-blue-400 transition hover:bg-blue-500 hover:text-white"
                  >
                    View Details
                  </button>

                  <div className="flex items-center gap-4">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title} source code`}
                        className="text-blue-400 transition hover:text-blue-300"
                      >
                        <Github size={20} />
                      </a>
                    )}

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title} live demo`}
                        className="text-blue-400 transition hover:text-blue-300"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* GitHub button */}
          <div className="mt-10 text-center sm:mt-12">
            <a
              href="https://github.com/AparnaUnni"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-blue-500 px-4 py-2 text-sm text-white transition hover:bg-blue-600 sm:text-base"
            >
              Check My GitHub
              <ArrowRight size={16} />
            </a>
          </div>
        </div>

        {/* Render modal only when a project is selected */}
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </RevealOnScroll>
    </section>
  );
};