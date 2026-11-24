import { RevealOnScroll } from "../RevealOnScroll";

const skillGroups = [
  {
    title: "Frontend",
    items: ["React", "Next.js", "JavaScript", "HTML", "CSS", "Tailwind CSS", "Responsive Design"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "Python", "REST APIs", "MongoDB", "MySQL"],
  },
  {
    title: "Tools & Platforms",
    items: ["Git", "GitHub", "Vercel", "Azure", "AWS", "Figma", "Google Analytics 4", "Search Console"],
  },
  {
    title: "AI & Automation",
    items: ["Gemini API", "Groq", "Prompt Engineering", "LLM Integration", "n8n Workflows"],
  },
];

const experience = [
  {
    role: "Full Stack Developer - Clever Wink LLC, Dubai",
    period: "Oct 2026 - Present",
    text: "Built and launched the company website (Next.js, Vercel, 98 mobile / 100 desktop PageSpeed) and the internal Clever Wink OS platform. Set up Search Console, GA4 lead tracking and Google Workspace email authentication, and built two LLM automation pipelines using n8n, Groq, Gmail and Google Sheets APIs.",
  },
  {
    role: "Frontend & Full Stack Developer - Freelance",
    period: "Oct 2025 - Oct 2026",
    text: "Built and deployed AI-powered web applications and client websites, including an e-commerce platform, an employee management dashboard with attendance tracking, and a Gemini API-powered portfolio chatbot with context-scoped prompt engineering.",
  },
  {
    role: "Frontend Developer - Tata Elxsi Limited",
    period: "Mar 2024 - Aug 2025",
    text: "Built a React.js frontend from scratch across 10+ screens, integrated 10+ REST APIs with a Python backend, improved load time by 20% through performance optimisation, and reduced manual QA effort by 40% with a Python automation tool.",
  },
];

const certifications = [
  {
    title: "AI & Prompt Engineering",
    issuer: "Dubai Future Foundation - One Million Prompters",
  },
  {
    title: "AWS Cloud Practitioner Essentials",
    issuer: "AWS via Coursera",
  },
];

const pill =
  "bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition";

const card =
  "rounded-xl border border-white/10 p-5 text-left transition-all hover:-translate-y-1 sm:p-6 lg:p-8";

export const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          {/* INTRO + SKILLS */}
          <div className="rounded-xl p-6 sm:p-8 border border-white/10 hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              I'm an AI-native full stack developer based in Dubai, building
              practical, user-focused web applications with clean interfaces,
              reliable APIs and thoughtful product workflows.
            </p>
            <p className="text-gray-300 mb-6">
              With 2+ years of experience across React, Next.js, Node.js,
              Python, REST APIs and MongoDB, I've worked on dashboards,
              authentication, e-commerce, AI-powered interfaces, workflow
              automation and internal business tools.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skillGroups.map((group) => (
                <div
                  key={group.title}
                  className="rounded-xl p-6 hover:-translate-y-1 transition-all"
                >
                  <h3 className="text-xl font-bold mb-4">{group.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span key={item} className={pill}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 mt-8">
            {/* EDUCATION */}
            <div className={card}>
              <h3 className="text-2xl font-bold mb-4">🏫 Education</h3>
              <p className="font-semibold text-white">
                B.Tech in Computer Science
              </p>
              <p className="text-gray-300">
                APJ Abdul Kalam Technological University (2019-2023)
              </p>
              <p className="text-gray-300">CGPA: 8.43</p>
            </div>

            {/* CERTIFICATIONS */}
            <div className={card}>
              <h3 className="text-2xl font-bold mb-4">🎓 Certifications</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {certifications.map((c) => (
                  <div
                    key={c.title}
                    className="rounded-lg bg-white/5 border border-white/10 p-4"
                  >
                    <p className="font-semibold text-white">{c.title}</p>
                    <p className="text-sm text-gray-400 mt-1">{c.issuer}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* WORK EXPERIENCE */}
            <div className={card}>
              <h3 className="mb-8 text-xl font-bold text-white sm:text-2xl">
                💼 Work Experience
              </h3>

              <div className="relative ml-2 border-l border-blue-500/40 pl-6 sm:ml-3 sm:pl-8">
                {experience.map((job) => (
                  <div key={job.role} className="relative mb-8 last:mb-0">
                    <span className="absolute -left-[33px] top-1 h-4 w-4 rounded-full border-4 border-black bg-blue-500 sm:-left-[41px]" />

                    <h4 className="text-base font-semibold leading-snug text-white sm:text-lg">
                      {job.role}
                    </h4>
                    <p className="mt-1 text-sm font-medium text-blue-400">
                      {job.period}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-gray-300 sm:text-base">
                      {job.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};