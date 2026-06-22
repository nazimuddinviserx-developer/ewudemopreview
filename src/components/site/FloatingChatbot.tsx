import * as React from "react";
import { Bot, X, Send, Sparkles } from "lucide-react";

const SUGGESTED = [
  "How do I apply for admission?",
  "What scholarships are available?",
  "Show me the CSE department",
  "Campus emergency contacts",
];

const CANNED: Record<string, string> = {
  admission: "Spring 2027 admission is open through 15 January. Apply via the Admission page — you'll need your SSC/HSC transcripts and a recent photo.",
  scholarship: "EWU offers Merit, Need-based, Sports, and Quota waivers. See the Admission > Scholarships section for eligibility.",
  cse: "The CSE department offers BSc, MSc and PhD with 48 faculty. Visit /departments/cse for details.",
  emergency: "Emergency hotline: +880 1755 587224. Medical Centre operates 24/7 on campus.",
};

function reply(text: string) {
  const k = text.toLowerCase();
  if (k.includes("admiss") || k.includes("apply")) return CANNED.admission;
  if (k.includes("scholar") || k.includes("waiver") || k.includes("financial")) return CANNED.scholarship;
  if (k.includes("cse") || k.includes("computer")) return CANNED.cse;
  if (k.includes("emergency") || k.includes("contact")) return CANNED.emergency;
  return "I can help with admission, scholarships, departments, faculty, facilities and contacts. What would you like to know?";
}

type Msg = { role: "bot" | "user"; text: string };

export function FloatingChatbot() {
  const [open, setOpen] = React.useState(false);
  const [input, setInput] = React.useState("");
  const [msgs, setMsgs] = React.useState<Msg[]>([
    { role: "bot", text: "Hi! I'm EWU Assist. Ask me anything about admission, programs or campus." },
  ]);

  function send(t: string) {
    const q = t.trim();
    if (!q) return;
    setMsgs((m) => [...m, { role: "user", text: q }, { role: "bot", text: reply(q) }]);
    setInput("");
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label="Open EWU Assist"
        className="fixed bottom-6 right-6 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-brick transition-transform hover:scale-105"
      >
        <Bot className="h-6 w-6" />
        <span className="absolute -right-1 -top-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-gold text-[10px] font-bold text-gold-foreground">
          <Sparkles className="h-3 w-3" />
        </span>
      </button>

      {open && (
        <div className="fixed bottom-6 right-6 z-50 flex h-[560px] w-[min(380px,calc(100vw-3rem))] flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-brick">
          <div className="flex items-center justify-between border-b border-border bg-primary px-4 py-3 text-primary-foreground">
            <div className="flex items-center gap-2">
              <div className="grid h-8 w-8 place-items-center rounded-full bg-primary-foreground/15">
                <Bot className="h-4 w-4" />
              </div>
              <div>
                <p className="text-sm font-semibold">EWU Assist</p>
                <p className="text-[10px] opacity-80">AI Admission & Campus Helper</p>
              </div>
            </div>
            <button onClick={() => setOpen(false)} className="rounded p-1 hover:bg-primary-foreground/15">
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="flex-1 space-y-3 overflow-y-auto p-4">
            {msgs.map((m, i) => (
              <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[80%] rounded-2xl px-3 py-2 text-sm ${m.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted text-foreground"}`}>
                  {m.text}
                </div>
              </div>
            ))}
            {msgs.length === 1 && (
              <div className="flex flex-wrap gap-1.5 pt-2">
                {SUGGESTED.map((s) => (
                  <button
                    key={s}
                    onClick={() => send(s)}
                    className="rounded-full border border-border bg-background px-3 py-1 text-xs text-foreground/75 hover:border-primary hover:text-primary"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); send(input); }}
            className="flex items-center gap-2 border-t border-border p-3"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask anything…"
              className="flex-1 rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary"
            />
            <button type="submit" className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-primary text-primary-foreground hover:bg-primary-deep">
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
