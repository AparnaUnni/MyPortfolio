import { RevealOnScroll } from "../RevealOnScroll";
import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Personal Portfolio Website",
    description:
      "Created a portfolio website using React.js and Tailwind CSS to showcase projects and skills.",
    image: "/projects/portfolio.png",
    tags: ["React.js","Tailwind CSS"],
    githubUrl: "https://github.com/AparnaUnni/DemoPortfolio",
  },
  {
    id: 2,
    title: "Weather App",
    description:
      "Built a responsive weather application with real-time updates for both current location and user-searched cities.",
    image: "/projects/weather.png",
    tags: ["React.js", "OpenWeatherMap API", "Geolocation", "CSS"],
    githubUrl: "https://github.com/AparnaUnni/WeatherApp",
  },
  {
    id: 3,
    title: "To-Do List Application",
    description:
      "Created To-Do App with CRUD, Task Counters, Local Storage persistence",
    image: "/projects/todolist.png",
    tags: ["React.js","JavaScript"],
    githubUrl: "https://github.com/AparnaUnni/ToDoList",
  },
  {
    id: 4,
    title: "Memoria - E-commerce Gift Store",
    description:
      "Full-featured e-commerce platform for category browsing and product ordering.",
    image: "/projects/memoria.png",
    tags: ["Next.js", "React", "Express.js", "MongoDB", "Tailwind CSS"],
    githubUrl: "https://github.com/AparnaUnni/OnlineGiftStore",
  },
];

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2"> Centralized Test Management Tool</h3>
              <p className="text-gray-400 mb-4">
                A tool which is an end to end test management tool for requirement
                analysis, test execution and report generation.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "CSS", "C#", "MongoDB","Python"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              
            </div>
            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">Automation Tool</h3>
              <p className="text-gray-400 mb-4">
                An automation tool using Python for creating Gherkin based test cases
directly from requirement.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Python"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
            </div>
          
            {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2"> {project.title}</h3>
              <img
                src={project.image}
                alt=""
                className="mb-4"
              />
              <p className="text-gray-400 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href={project.githubUrl}
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  <Github/>
                </a>
              </div>
            </div>
            
          </div>
          ))}
          </div>
        </div>
        <div className="text-center mt-12">
          <a
            className="bg-blue-500 text-white py-2 px-4 rounded-lg w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/AparnaUnni"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
                      
      </RevealOnScroll>
    </section>
  );
};
