import { RevealOnScroll } from "../RevealOnScroll";
import { ArrowRight, ExternalLink, Github } from "lucide-react";



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

              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
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
              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
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
              <h3 className="text-xl font-bold mb-2">Personal Portfolio Website</h3>
              <img
  src="/projects/weather.png"
  alt="project"
  className="mb-4"
/>
              <p className="text-gray-400 mb-4">
                Created a portfolio website using React.js and Tailwind CSS to showcase projects and skills.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React.js","Tailwind CSS"].map(
                  (tech) => (
                    <span
                      key={tech}
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
                  )
                )}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            {/* <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">Real-Time Chat App</h3>
              <p className="text-gray-400 mb-4">
                Scalable chat platform supporting real-time messaging, presence,
                and group chat features.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Socket.IO", "Express", "React", "Redis"].map((tech, key) => (
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
              <div className="flex justify-between items-center ">
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div> */}
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


// import { ArrowRight, ExternalLink, Github } from "lucide-react";

// const projects = [
//   {
//     id: 1,
//     title: "SaaS Landing Page",
//     description: "A beautiful landing page app using React and Tailwind.",
//     image: "/projects/project1.png",
//     tags: ["React", "TailwindCSS", "Supabase"],
//     demoUrl: "#",
//     githubUrl: "#",
//   },
//   {
//     id: 2,
//     title: "Orbit Analytics Dashboard",
//     description:
//       "Interactive analytics dashboard with data visualization and filtering capabilities.",
//     image: "/projects/project2.png",
//     tags: ["TypeScript", "D3.js", "Next.js"],
//     demoUrl: "#",
//     githubUrl: "#",
//   },
//   {
//     id: 3,
//     title: "Weather App",
//     description:
//       "Full-featured e-commerce platform with user authentication and payment processing.",
//     image: "/weather-app.png",
//     tags: ["React", "Node.js", "Stripe"],
//     demoUrl: "#",
//     githubUrl: "#",
//   },
// ];

// export const Projects = () => {
//   return (
//     <section id="projects" className="py-24 px-4 relative">
//       <div className="container mx-auto max-w-5xl">
//         <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
//           {" "}
//           Featured <span className="text-primary"> Projects </span>
//         </h2>

//         <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
//           Here are some of my recent projects. Each project was carefully
//           crafted with attention to detail, performance, and user experience.
//         </p>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {projects.map((project, key) => (
//             <div
//               key={key}
//               className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
//             >
//               <div className="h-48 overflow-hidden">
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                 />
//               </div>

//               <div className="p-6">
//                 <div className="flex flex-wrap gap-2 mb-4">
//                   {project.tags.map((tag) => (
//                     <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
//                       {tag}
//                     </span>
//                   ))}
//                 </div>

//                 <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
//                 <p className="text-muted-foreground text-sm mb-4">
//                   {project.description}
//                 </p>
//                 <div className="flex justify-between items-center">
//                   <div className="flex space-x-3">
//                     <a
//                       href={project.demoUrl}
//                       target="_blank"
//                       className="text-foreground/80 hover:text-primary transition-colors duration-300"
//                     >
//                       <ExternalLink size={20} />
//                     </a>
//                     <a
//                       href={project.githubUrl}
//                       target="_blank"
//                       className="text-foreground/80 hover:text-primary transition-colors duration-300"
//                     >
//                       <Github size={20} />
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="text-center mt-12">
//           <a
//             className="cosmic-button w-fit flex items-center mx-auto gap-2"
//             target="_blank"
//             href="https://github.com/machadop1407"
//           >
//             Check My Github <ArrowRight size={16} />
//           </a>
//         </div>
//       </div>
//       <div>
// <img
//   src="/weather-app.png"  // Absolute from root
//   alt="Weather App"
//   className="w-full h-full object-cover"
// />
//       </div>
//     </section>
//   );
// };