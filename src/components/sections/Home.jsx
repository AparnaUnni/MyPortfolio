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


import { RevealOnScroll } from "../RevealOnScroll";


export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right">
            Hi, I'm Aparna
          </h1>


          <p className="tex-gray-400 text-sm md:text-lg mb-6 md:mb-8 max-w-lg mx-auto">
            Motivated and technically skilled Front-End Developer with 1.5 years of experience building responsive, user-focused web applications using React, Next.js, and modern CSS frameworks. Passionate about creating intuitive interfaces and contributing to impactful, production-ready projects.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-blue-500 text-white text-sm md:text-base py-2 px-4 md:py-3 md:px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              View Projects
            </a>


            <a
              href="#contact"
             className="border border-blue-500/50 text-blue-500 text-sm md:text-base py-2 px-4 md:py-3 md:px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10"
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
