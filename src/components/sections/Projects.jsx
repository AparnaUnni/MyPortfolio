
import { useState } from "react";
import { Github, ArrowRight, Link2 } from "lucide-react";
import { RevealOnScroll } from "../RevealOnScroll";


const projects = [
  // OFFICE PROJECTS
  {
    id: 1,
    type: "office",
    title: "Centralized Test Management Tool",
    description:
      "End-to-end test management tool for requirement analysis, test execution and report generation.",
    tags: ["React", "CSS", "C#", "MongoDB", "Python"],
  },
  {
    id: 2,
    type: "office",
    title: "Automation Tool",
    description:
      "Automation tool using Python for creating Gherkin based test cases directly from requirements.",
    tags: ["Python"],
  },

  // WEB DEVELOPMENT PROJECTS

    {
    id: 3,
    type: "web",
    title: "Memoria - E-commerce Gift Store",
    description:
      "Full-featured e-commerce platform for category browsing and product ordering.",
    image: "/projects/memoria.png",
    tags: ["Next.js", "React", "Express.js", "MongoDB", "Tailwind CSS","JWT Authentication"],
    githubUrl: "https://github.com/AparnaUnni/OnlineGiftStore",
  },
  {
    id: 4,
    type: "web",
    title: "Personal Portfolio Website",
    description:
      "Created a portfolio website using React.js and Tailwind CSS to showcase projects and skills.",
    image: "/projects/portfolio.png",
    tags: ["React.js", "Tailwind CSS"],
    githubUrl: "https://github.com/AparnaUnni/DemoPortfolio",
  },
  {
    id: 5,
    type: "web",
    title: "Weather App",
    description:
      "Built a responsive weather application with real-time updates.",
    image: "/projects/weather.png",
    tags: ["React.js", "OpenWeatherMap API", "CSS"],
    githubUrl: "https://github.com/AparnaUnni/WeatherApp",
  },
  {
    id: 6,
    type: "web",
    title: "To-Do List Application",
    description:
      "Created To-Do App with CRUD operations and local storage persistence.",
    image: "/projects/todolist.png",
    tags: ["React.js", "JavaScript"],
    githubUrl: "https://github.com/AparnaUnni/ToDoList",
  },

  // FIGMA PROJECTS
  {
    id: 7,
    type: "figma",
    title: "Cafe Webpage Design",
    image: "/projects/myweb.png", 
    figmaUrl: "https://www.figma.com/proto/OhOLraiYdxwtXKixPCUU4y/Coffee-Cafe?node-id=2-2&p=f&t=MBEY3BYJUJ5ezmx1-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2%3A2",
  },
  {
    id: 8,
    type: "figma",
    title: "ToDo Mobile App Design",
    image: "/projects/mymobile.png", 
    figmaUrl: "https://www.figma.com/proto/b9PhUnwYpJc0IduTdb6F8U/Figma-Mobile-Design?node-id=1-3&p=f&t=G0QyEK4RisNR4Tbj-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A3",
  },
];


const filters = [
  { label: "All", value: "all" },
  { label: "Professional Projects", value: "office" },
  { label: "Web Development", value: "web" },
  { label: "Figma Designs", value: "figma" },
];


const OfficeProjectCard = ({ project }) => (
  <div className="p-6 rounded-xl border border-white/10 hover:border-blue-500/30 transition">
    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
    <p className="text-gray-400 mb-4">{project.description}</p>

    <div className="flex flex-wrap gap-2">
      {project.tags.map((tech, i) => (
        <span
          key={i}
          className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm"
        >
          {tech}
        </span>
      ))}
    </div>
  </div>
);

const WebProjectCard = ({ project }) => (
  <div className="p-6 rounded-xl border border-white/10 hover:border-blue-500/30 transition">
    <h3 className="text-xl font-bold mb-2">{project.title}</h3>

    <img
      src={project.image}
      alt={project.title}
      className="mb-4 rounded-md"
    />

    <p className="text-gray-400 mb-4">{project.description}</p>

    <div className="flex flex-wrap gap-2 mb-4">
      {project.tags.map((tech, i) => (
        <span
          key={i}
          className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm"
        >
          {tech}
        </span>
      ))}
    </div>

    {project.githubUrl && (
      <a
        href={project.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 hover:text-blue-300"
      >
        <Github />
      </a>
    )}
  </div>
);

const FigmaProjectCard = ({ project }) => (
  <div className="rounded-xl border border-white/10 overflow-hidden hover:border-blue-500/30 transition">
    {project.image && (
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover"
      />
    )}
    <div className="p-4">
      <h3 className="text-lg font-semibold">{project.title}</h3>
      {project.figmaUrl && (
      <a
        href={project.figmaUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 hover:text-blue-300 h-12 w-10"
      >
        <Link2 />
      </a>
    )}
    </div>
    
  </div>
);


export const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.type === activeFilter);

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>

          {/* FILTER TABS */}
          <div className="flex justify-center gap-3 mb-10 flex-wrap">
            {filters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                className={`px-4 py-2 rounded-full text-sm transition
                  ${
                    activeFilter === filter.value
                      ? "bg-blue-500 text-white"
                      : "bg-white/5 text-gray-300 hover:bg-white/10"
                  }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredProjects.map((project) => {
              if (project.type === "office")
                return (
                  <OfficeProjectCard key={project.id} project={project} />
                );

              if (project.type === "web")
                return (
                  <WebProjectCard key={project.id} project={project} />
                );

              if (project.type === "figma")
                return (
                  <FigmaProjectCard key={project.id} project={project} />
                );

              return null;
            })}
          </div>

          
          <div className="text-center mt-12">
            <a
              href="https://github.com/AparnaUnni"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 text-white py-2 px-4 rounded-lg inline-flex items-center gap-2"
            >
              Check My GitHub <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

