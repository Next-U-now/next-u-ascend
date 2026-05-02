import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import mascota from "@/assets/mascota-nextu.jpg";

interface Message {
  role: "bot" | "user";
  text: string;
}

const defaultResponses = [
  "¡Hola! 👋 Soy la mascota de Next U. Por ahora mis respuestas son limitadas, pero pronto tendré IA para ayudarte mejor.",
  "Puedes contactarnos por WhatsApp para una atención personalizada: wa.me/593998575218",
  "Ofrecemos paquetes desde $50 con consultoría IA incluida. ¡Revisa nuestros planes!",
  "¿Te interesa saber más? Escríbenos y te asesoramos sin compromiso 🚀",
];

const ChatBot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "bot", text: "¡Hola! 👋 Soy la mascota de Next U. ¿En qué puedo ayudarte?" },
  ]);
  const [input, setInput] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg: Message = { role: "user", text: input.trim() };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    setTimeout(() => {
      const reply = defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
      setMessages((prev) => [...prev, { role: "bot", text: reply }]);
    }, 800);
  };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full overflow-hidden border-2 border-primary shadow-lg hover:scale-110 transition-transform duration-300"
        aria-label="Abrir chat"
      >
        {open ? (
          <div className="w-full h-full bg-card flex items-center justify-center">
            <X className="w-6 h-6 text-primary" />
          </div>
        ) : (
          <img src={mascota} alt="Mascota Next U" className="w-full h-full object-cover" />
        )}
      </button>

      {/* Chat window */}
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-80 max-h-[420px] rounded-2xl border border-border bg-card shadow-2xl flex flex-col overflow-hidden animate-scale-in">
          {/* Header */}
          <div className="flex items-center gap-3 p-3 border-b border-border bg-secondary/50">
            <img src={mascota} alt="Mascota" className="w-8 h-8 rounded-full object-cover" />
            <div>
              <p className="text-sm font-bold">Next U Bot</p>
              <p className="text-[10px] text-muted-foreground">Responde al instante</p>
            </div>
            <MessageCircle className="w-4 h-4 text-primary ml-auto" />
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-3 space-y-2 min-h-[200px]">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[85%] px-3 py-2 rounded-xl text-xs ${
                    msg.role === "user"
                      ? "bg-primary text-primary-foreground rounded-br-sm"
                      : "bg-secondary text-foreground rounded-bl-sm"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className="flex items-center gap-2 p-2 border-t border-border">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Escribe un mensaje..."
              className="flex-1 bg-secondary rounded-full px-3 py-2 text-xs text-foreground placeholder:text-muted-foreground outline-none focus:ring-1 focus:ring-primary"
            />
            <button onClick={handleSend} className="w-8 h-8 rounded-full bg-primary flex items-center justify-center hover:opacity-90 transition-opacity">
              <Send className="w-3.5 h-3.5 text-primary-foreground" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;
