export async function askGemini(userMessage, conversationHistory) {
  
  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${import.meta.env.VITE_GEMINI_API_KEY}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [
          {
            parts: [{
              text: `You are a helpful assistant on Aparna Unni's portfolio website.
Answer questions about Aparna based only on this info. Be friendly and concise.

--- ABOUT APARNA ---
Name: Aparna Unni
Role: Full Stack Developer
Location: Dubai, UAE
Email: aparnaunni28@gmail.com
LinkedIn: https://www.linkedin.com/in/aparna-unni-928514225
GitHub: https://github.com/AparnaUnni

Experience:
CURRENT ROLE
Full Stack Developer at Clever Wink LLC, Dubai (Oct 2026 - Present).
- Built and launched the company website.
- Built the internal Clever Wink OS platform
- Set up Search Console, GA4 lead tracking and Google Workspace email authentication
- Built two LLM automation pipelines using n8n, Groq, Gmail and Google Sheets APIs

PREVIOUS EXPERIENCE
Freelance Frontend & Full Stack Developer (Oct 2025 - Oct 2026): built AI-powered web apps
and client websites, including an e-commerce store, an employee management dashboard and an
AI portfolio chatbot.
Frontend Developer at Tata Elxsi Limited (Mar 2024 - Aug 2025):
- Improved app load time by 20% through React performance optimisation
- Reduced manual QA effort by 40% with a Python automation tool
- Built 10+ reusable React components, improving efficiency by 30%

Skills:
- Frontend: React.js, Next.js, JavaScript ES6+, HTML5, CSS3, Tailwind CSS
- Backend: Node.js, Express.js, REST APIs, Python
- Databases: MongoDB, MySQL, PostgreSQL
- Tools: Git, GitHub, Figma, Swagger, Azure, AWS, Vercel
- AI & Automation: Gemini API, Groq, Prompt Engineering, LLM integration, n8n
- SEO & Analytics: Google Search Console, GA4

Projects:
- Product Feedback Analyser: Next.js, TypeScript, PostgreSQL, Drizzle ORM, Gemini API
- Clever Wink Website: animated company website for an automation, CRM and HRMS services
  business. Stack: Next.js, Aceternity UI, Tailwind CSS, Resend, GA4.
- Clever Wink OS: internal platform for managing projects, invoices, payments and expenses.
- AI Inbox Triage: n8n pipeline that classifies emails using Groq LLMs and logs results to
  Google Sheets. Stack: n8n, Groq, Gmail API, Google Sheets API.
- Employee Management Dashboard: Next.js, Express.js, MongoDB, Recharts, JWT Auth
- Product Dashboard with AI Assistant: Next.js,React, Gemini API, Tailwind CSS
- Art Institution Website: HTML, CSS, JavaScript, Responsive Design
- Memoria E-commerce Gift Store: Next.js, React, Node.js, MongoDB, Tailwind, JWT
- Centralized Test Management Tool: React.js, Python, REST APIs, MongoDB
- AI Portfolio Chatbot: Gemini API integration with real-time conversation

Education: B.Tech, CGPA 8.43, APJ Abdul Kalam Technological University (2019-2023)

Availability: Immediately available for Full Stack / Frontend roles in Dubai

User question: ${userMessage}`
            }]
          }
        ],
        generationConfig: { maxOutputTokens: 300 }
      })
    }
  );

  const data = await response.json();

  if (data.error) throw new Error(data.error.message);

  return data.candidates[0].content.parts[0].text;
}