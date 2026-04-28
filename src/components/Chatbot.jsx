import { useState, useRef, useEffect } from "react";
import { askGemini } from "../api/chat";

const SUGGESTED_QUESTIONS = [
  "What are Aparna's skills?",
  "Tell me about her experience",
  "What projects has she built?",
  "Is she available for work?"
];

export default function Chatbot() {
  const [isOpen, setIsOpen]     = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hi! I'm Aparna's portfolio assistant. Ask me anything about her skills, experience, or projects!"
    }
  ]);
  const [input, setInput]       = useState("");
  const [loading, setLoading]   = useState(false);
  const bottomRef               = useRef(null);

  
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  async function sendMessage(text) {
    const userText = text || input.trim();
    if (!userText || loading) return;

    // Add user message to UI
    const updatedMessages = [...messages, { role: "user", content: userText }];
    setMessages(updatedMessages);
    setInput("");
    setLoading(true);

    try {
      // Build history for API (exclude the initial greeting)
      const history = updatedMessages.slice(1).map(m => ({
        role: m.role,
        content: m.content
      }));

      const reply = await askClaude(userText, history.slice(0, -1));
      setMessages(prev => [...prev, { role: "assistant", content: reply }]);
    } catch (error) {
      setMessages(prev => [...prev, {
        role: "assistant",
        content: "Sorry, I ran into an issue. Please try again or contact directly!"
      }]);
    } finally {
      setLoading(false);
    }
  }

  function handleKeyDown(e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  }

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-blue-600 hover:bg-blue-700 
                   text-white rounded-full shadow-lg flex items-center justify-center 
                   text-2xl z-50 transition-all duration-200"
        aria-label="Open chat"
      >
        {isOpen ? "✕" : "💬"}
      </button>

      {/* Chat window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 sm:w-96 bg-white border 
                        border-gray-200 rounded-2xl shadow-xl z-50 flex flex-col"
             style={{ height: "480px" }}>

          {/* Header */}
          <div className="bg-blue-600 text-white p-4 rounded-t-2xl">
            <p className="font-semibold text-sm">Ask about Aparna</p>
            <p className="text-xs text-blue-200 mt-0.5">Powered by Gemini AI</p>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((msg, i) => (
              <div key={i}
                   className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[80%] px-3 py-2 rounded-xl text-sm leading-relaxed
                  ${msg.role === "user"
                    ? "bg-blue-600 text-white rounded-br-sm"
                    : "bg-gray-100 text-gray-800 rounded-bl-sm"}`}>
                  {msg.content}
                </div>
              </div>
            ))}

            {/* Loading dots */}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-gray-100 px-4 py-2 rounded-xl rounded-bl-sm">
                  <span className="flex gap-1">
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{animationDelay:"0ms"}}></span>
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{animationDelay:"150ms"}}></span>
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{animationDelay:"300ms"}}></span>
                  </span>
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Suggested questions — show only at start */}
          {messages.length === 1 && (
            <div className="px-4 pb-2 flex flex-wrap gap-1">
              {SUGGESTED_QUESTIONS.map((q, i) => (
                <button key={i} onClick={() => sendMessage(q)}
                        className="text-xs bg-blue-50 text-blue-700 border border-blue-200 
                                   px-2 py-1 rounded-full hover:bg-blue-100 transition-colors">
                  {q}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div className="p-3 border-t border-gray-100 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask me anything..."
              className="flex-1 text-sm border text-black border-gray-200 rounded-lg px-3 py-2 
                         focus:outline-none focus:border-blue-400"
            />
            <button onClick={() => sendMessage()}
                    disabled={loading || !input.trim()}
                    className="bg-blue-600 text-white px-3 py-2 rounded-lg text-sm 
                               hover:bg-blue-700 disabled:opacity-40 transition-colors">
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}