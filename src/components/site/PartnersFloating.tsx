import { Handshake } from "lucide-react";

const PARTNERS: { name: string; tag: string; tone: "primary" | "gold" | "muted" }[] = [
  { name: "BAETE", tag: "Accreditation", tone: "primary" },
  { name: "Washington Accord", tag: "Engineering", tone: "primary" },
  { name: "ACBSP", tag: "Business", tone: "gold" },
  { name: "ICAB", tag: "Chartered Accountants", tone: "muted" },
  { name: "ICMAB", tag: "Cost & Mgmt", tone: "muted" },
  { name: "ACCA", tag: "UK Charter", tone: "gold" },
  { name: "BIOM", tag: "Education", tone: "primary" },
  { name: "ICSB", tag: "Governance", tone: "muted" },
  { name: "Banglalink", tag: "Industry", tone: "gold" },
  { name: "Macquarie University", tag: "Sydney", tone: "primary" },
  { name: "USAID", tag: "Development", tone: "muted" },
  { name: "Asian Inst. of Technology", tag: "Bangkok", tone: "primary" },
  { name: "CFA Institute", tag: "Affiliation", tone: "gold" },
  { name: "BRAC Bank TARA", tag: "Women in Finance", tone: "muted" },
  { name: "Emporia State University", tag: "USA", tone: "primary" },
];

const TONE_CLS: Record<string, string> = {
  primary: "border-primary/20 bg-primary-soft/30 text-primary-deep",
  gold: "border-gold/40 bg-gold/10 text-foreground",
  muted: "border-border bg-background text-foreground",
};

export function PartnersFloating() {
  return (
    <section className="relative overflow-hidden border-y border-border bg-card">
      {/* Decorative blurred orbs */}
      <div aria-hidden className="pointer-events-none absolute -left-24 top-0 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 text-center">
          <p className="mb-3 inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-primary">
            <Handshake className="h-3.5 w-3.5" /> Partnerships & Affiliates
          </p>
          <h2 className="font-serif text-3xl font-bold leading-tight md:text-4xl text-balance">
            Globally accredited. Locally connected.
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            EWU is recognised by leading professional bodies and partners with universities, regulators and industry across four continents.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          {PARTNERS.map((p, i) => (
            <div
              key={p.name}
              className={`group relative flex min-w-[180px] items-center gap-3 rounded-2xl border px-5 py-4 shadow-sm transition-all hover:-translate-y-1 hover:shadow-brick ${TONE_CLS[p.tone]}`}
              style={{
                animation: `partner-float 6s ease-in-out ${(i % 5) * 0.4}s infinite`,
              }}
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-background/80 font-serif text-sm font-bold text-primary shadow-sm">
                {p.name.split(" ").map((w) => w[0]).slice(0, 2).join("")}
              </span>
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold leading-tight">{p.name}</p>
                <p className="text-[10px] uppercase tracking-wider opacity-70">{p.tag}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes partner-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
      `}</style>
    </section>
  );
}
