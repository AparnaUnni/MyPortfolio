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
- 1.5+ years at Tata Elxsi Limited as Frontend Developer (Mar 2024 - Aug 2025)
- Improved app load time by 20% through React performance optimisation
- Reduced manual QA effort by 40% through Python automation tool
- Built 10+ reusable React components improving efficiency by 30%

Skills:
- Frontend: React.js, Next.js, JavaScript ES6+, HTML5, CSS3, Tailwind CSS
- Backend: Node.js, Express.js, REST APIs, Python
- Databases: MongoDB, MySQL, PostgreSQL
- Tools: Git, GitHub, Figma, Swagger, Azure, AWS
- AI: Gemini API, Prompt Engineering, LLM integration

Projects:
- Centralized Test Management Tool: React.js, Python, REST APIs, MongoDB
- Memoria E-commerce Gift Store: Next.js, React, Node.js, MongoDB, Tailwind, JWT
- Project Expense Tracker: Full-stack budget management app
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