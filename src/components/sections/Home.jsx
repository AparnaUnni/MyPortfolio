// import { RevealOnScroll } from "../RevealOnScroll";

// export const Home = () => {
//   return (
//     <section
//       id="home"
//       className="min-h-screen flex items-center justify-center relative"
//     >
//       <RevealOnScroll>
//         <div className="text-center z-10 px-4">
//           {/* Smaller on mobile, bigger from md up */}
//           <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-tight">
//             Hi, I'm Aparna
//           </h1>

//           {/* Fix typo tex-gray -> text-gray and shrink on mobile */}
//           <p className="text-sm md:text-base text-gray-400 mb-6 md:mb-8 max-w-2xl mx-auto">
//             Motivated and technically skilled Front-End Developer with 1.5 years of experience building responsive, user-focused web applications using React, Next.js, and modern CSS frameworks. Passionate about creating intuitive interfaces and contributing to impactful, production-ready projects.
//           </p>

//           <div className="flex justify-center space-x-3 md:space-x-4">
//             {/* Buttons: smaller padding & text on mobile, larger on md+ */}
//             <a
//               href="#projects"
//               className="bg-blue-500 text-white text-sm md:text-base py-2 px-4 md:py-3 md:px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
//             >
//               View Projects
//             </a>

//             <a
//               href="#contact"
//               className="border border-blue-500/50 text-blue-500 text-sm md:text-base py-2 px-4 md:py-3 md:px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10"
//             >
//               Contact Me
//             </a>
//           </div>
//         </div>
//       </RevealOnScroll>
//     </section>
//   );
// };


// import { RevealOnScroll } from "../RevealOnScroll";


// export const Home = () => {
//   return (
//     <section
//       id="home"
//       className="min-h-screen flex items-center justify-center relative"
//     >
//       <RevealOnScroll>
//         <div className="text-center z-10 px-4">
//           <h1 className="text-5xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right">
//             Hi, I'm Aparna
//           </h1>


//           <p className="tex-gray-400 text-sm md:text-lg mb-6 md:mb-8 max-w-lg mx-auto">
// Frontend & Full Stack Developer with 2+ years of 
// experience building web applications, internal 
// dashboards, and AI-powered interfaces using React, 
// Next.js, Node.js, and Python.          </p>


//           <div className="flex justify-center space-x-4">
//             <a
//               href="#projects"
//               className="bg-blue-500 text-white text-sm md:text-base py-2 px-4 md:py-3 md:px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
//             >
//               View Projects
//             </a>


//             <a
//               href="#contact"
//              className="border border-blue-500/50 text-blue-500 text-sm md:text-base py-2 px-4 md:py-3 md:px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10"
//             >
//               Contact Me
//             </a>
//           </div>
//         </div>
//       </RevealOnScroll>
//     </section>
//   );
// };


import { Github, Linkedin } from "lucide-react";
import { RevealOnScroll } from "../RevealOnScroll";

const stats = [
  { value: "2+", label: "Years Experience" },
  { value: "8+", label: "Projects Built" },
  { value: "3", label: "Companies" },
];

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative pt-24 pb-12"
    >
      <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* PHOTO (first on mobile, right on desktop) */}
          <div className="flex justify-center md:order-2">
            <div className="w-56 h-66 md:w-80 md:h-100 rounded-full bg-white/5 border border-white/10 overflow-hidden flex items-end justify-center">
              <img
                src="/profile.jpeg"
                alt="Aparna"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* TEXT */}
          <div className="text-center md:text-left md:order-1">
            <p className="text-gray-400 text-sm md:text-base">Hi, I am</p>
            <h2 className="text-xl md:text-3xl text-white font-medium mb-2">
              Aparna Unni
            </h2>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-tight">
              Full Stack Developer
            </h1>

            <p className="text-gray-400 text-sm md:text-lg mb-6 max-w-lg mx-auto md:mx-0">
              Frontend & Full Stack Developer building web applications,
              internal dashboards, and AI-powered interfaces using React,
              Next.js, Node.js, and Python.
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex justify-center md:justify-start gap-3 mb-6">
              <a
                href="https://github.com/AparnaUnni"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/5 text-gray-300 hover:text-blue-400 hover:bg-white/10 transition"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/your-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/5 text-gray-300 hover:text-blue-400 hover:bg-white/10 transition"
              >
                <Linkedin size={18} />
              </a>
            </div>

            {/* BUTTONS */}

            <div className="flex justify-center md:justify-start gap-4 mb-10">
              <a
                href="#projects"
                className="bg-blue-500 text-white text-sm md:text-base py-2 px-4 md:py-3 md:px-6 rounded font-medium transition hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="border border-blue-500/50 text-blue-500 text-sm md:text-base py-2 px-4 md:py-3 md:px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-500/10"
              >
                Contact
              </a>
            </div>
 

            
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};