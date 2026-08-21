import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "React",
    "Next JS",
    "JavaScript",
    "HTML",
    "CSS",
    "TailwindCSS",
    "Responsive Design",
    
  ];

  const backendSkills = ["Node.js", "Express.js","Python", "REST API","MongoDB", "MySQL"];
  const tools = ["Git","Github","Azure","Figma","Vercel"];
  const ai = ["Gemini API","Prompt Engineering","LLM Integration"]

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center"
    >
      <RevealOnScroll>
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              I build practical, user-focused web applications that combine clean interfaces, reliable APIs, and thoughtful product workflows.
            </p>
            <p className="text-gray-300 mb-6">
              My experience spans React, Next.js, Node.js, Python, REST APIs, MongoDB, and MySQL, with hands-on work across dashboards, authentication, e-commerce, AI-powered interfaces, and internal business tools
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Tools & Platforms</h3>
                <div className="flex flex-wrap gap-2">
                  {tools.map((tool, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> AI</h3>
                <div className="flex flex-wrap gap-2">
                  {ai.map((ai, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {ai}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>

          <div className="grid grid-cols-1  gap-6 mt-8">
            <div className="rounded-xl border border-white/10 p-5 text-left transition-all hover:-translate-y-1 sm:p-6 lg:p-8">
              <h3 className="text-2xl font-bold mb-4"> 🏫 Education </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong> BTech in Computer Science </strong> <br/>
                  APJ Abdul Kalam Technological University
                  (2019-2023)<br/>
                  CGPA:8.43
                </li>
                
              </ul>
            </div>
           <div className="rounded-xl border border-white/10 p-5 text-left transition-all hover:-translate-y-1 sm:p-6 lg:p-8">
             <h3 className="mb-8 text-xl font-bold text-white sm:text-2xl">
               💼 Work Experience
             </h3>
           
             <div className="relative ml-2 border-l border-blue-500/40 pl-6 sm:ml-3 sm:pl-8">
               {/* Experience 1 */}
               <div className="relative mb-8 last:mb-0">
                 {/* Timeline dot on the left */}
                 <span className="absolute -left-[33px] top-1 h-4 w-4 rounded-full border-4 border-black bg-blue-500 sm:-left-[41px]" />
           
                 <h4 className="text-base font-semibold leading-snug text-white sm:text-lg">
                   Front-end & Full Stack Developer - Freelance
                 </h4>
           
                 <p className="mt-1 text-sm font-medium text-blue-400">
                   2025–Present
                 </p>
           
                 <p className="mt-3 text-sm leading-relaxed text-gray-300 sm:text-base">
                   Built and deployed AI-powered web applications and client websites including an e-commerce platform, an employee management dashboard with attendance tracking, and a Gemini API-powered portfolio chatbot with context-scoped prompt engineering.
                 </p>
               </div>
           
               {/* Experience 2 */}
               <div className="relative last:mb-0">
                 {/* Timeline dot on the left */}
                 <span className="absolute -left-[33px] top-1 h-4 w-4 rounded-full border-4 border-black bg-blue-500 sm:-left-[41px]" />
           
                 <h4 className="text-base font-semibold leading-snug text-white sm:text-lg">
                   Front-end Developer at Tata Elxsi Limited
                 </h4>
           
                 <p className="mt-1 text-sm font-medium text-blue-400">
                   2024-2025
                 </p>
           
                 <p className="mt-3 text-sm leading-relaxed text-gray-300 sm:text-base">
                   Built React.js frontend from scratch across 10+ 
screens, integrated 10+ REST APIs with a Python 
backend, improved application load time by 20% 
through performance optimisation, and reduced 
manual QA effort by 40% through a Python 
automation tool.
                 </p>
               </div>
             </div>
           </div>
</div>

        </div>
      </RevealOnScroll>
    </section>
  );
};
