import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Microscope, FlaskConical, BookOpen, BarChart3, Beaker, Cpu, ArrowUpRight } from "lucide-react";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import { img } from "@/lib/images";

export const Route = createFileRoute("/research")({
  head: () => ({
    meta: [
      { title: "Research, East West University" },
      { name: "description", content: "Research labs, ongoing projects, publications and the EWU research dashboard." },
      { property: "og:title", content: "Research at EWU" },
      { property: "og:description", content: "Research excellence with real-world impact, built for Bangladesh." },
    ],
  }),
  component: ResearchPage,
});

const PUBS_BY_YEAR = [
  { year: "2020", n: 142 }, { year: "2021", n: 168 }, { year: "2022", n: 195 },
  { year: "2023", n: 224 }, { year: "2024", n: 261 }, { year: "2025", n: 298 }, { year: "2026", n: 332 },
];

const FLAGSHIP = [
  { img: "res-1", tag: "AI · Health", title: "Bangla Voice Diagnostics for Rural Clinics", body: "A tablet-based screening tool that lets community health workers triage patients in Bangla, with offline-first models tuned for low-resource clinics." },
  { img: "res-2", tag: "Energy", title: "Solar Mini-Grid Resilience for Coastal Bangladesh", body: "Field-tested storage and failover designs that keep village mini-grids running through Bay of Bengal cyclone events." },
  { img: "res-3", tag: "Economics", title: "Microfinance and Female Labor Participation", body: "A multi-year panel study showing how access to credit reshapes women's workforce decisions across rural districts." },
];

const LABS = [
  { i: Cpu, t: "AI & Bangla NLP Lab", b: "Voice, OCR, search and classification for the Bangla language." },
  { i: FlaskConical, t: "Drug Discovery Lab", b: "Tropical disease pharmacology with icddr,b." },
  { i: Beaker, t: "Sustainable Materials Lab", b: "Low-carbon concrete and recycled polymers." },
  { i: Microscope, t: "Smart Energy Lab", b: "Solar mini-grids and EV charging infrastructure." },
  { i: BookOpen, t: "Development Economics Lab", b: "Microfinance, labor markets, climate adaptation." },
  { i: BarChart3, t: "Fintech & Markets Lab", b: "Digital payments, MFS adoption, financial inclusion." },
];

function ResearchPage() {
  return (
    <div>
      <PageHero
        eyebrow="Research"
        title="Research with real-world impact, built for Bangladesh."
        subtitle="From AI for Bangla healthcare to resilient solar grids and microfinance policy, EWU researchers publish in top venues and partner with national institutions."
        crumbs={[{ to: "/", label: "Home" }, { label: "Research" }]}
      />

      {/* Impact stats */}
      <section className="mx-auto grid max-w-7xl gap-6 px-6 py-12 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { n: "1,820+", l: "Publications" },
          { n: "32", l: "Active research groups" },
          { n: "14", l: "Funded labs" },
          { n: "BDT 18Cr", l: "Research funding 2025" },
        ].map((s) => (
          <div key={s.l} className="rounded-2xl border border-border bg-card p-6">
            <p className="font-serif text-3xl font-bold text-primary">{s.n}</p>
            <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{s.l}</p>
          </div>
        ))}
      </section>

      {/* Flagship projects with visuals */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <h2 className="font-serif text-3xl font-bold">Flagship projects</h2>
        <p className="mt-2 text-muted-foreground">Long-running research with measurable national impact.</p>
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {FLAGSHIP.map((p) => (
            <article key={p.title} className="group overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:border-primary hover:shadow-brick">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img src={img(p.img)} alt={p.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent" />
                <span className="absolute left-3 top-3 rounded-full bg-gold/95 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-gold-foreground">{p.tag}</span>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-lg font-bold leading-tight">{p.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{p.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Dashboard */}
      <section className="bg-card border-y border-border">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid items-end gap-6 md:grid-cols-[1fr_auto]">
            <div>
              <h2 className="font-serif text-3xl font-bold">Research dashboard</h2>
              <p className="mt-2 text-muted-foreground">Publications across all EWU departments, year by year.</p>
            </div>
            <span className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-primary">
              Live data <ArrowUpRight className="h-3.5 w-3.5" />
            </span>
          </div>
          <div className="mt-8 h-72 rounded-2xl border border-border bg-background p-6">
            <ResponsiveContainer>
              <BarChart data={PUBS_BY_YEAR}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                <XAxis dataKey="year" className="text-xs" />
                <YAxis className="text-xs" />
                <Tooltip contentStyle={{ background: "var(--color-popover)", border: "1px solid var(--color-border)", borderRadius: 8 }} />
                <Bar dataKey="n" fill="var(--color-primary)" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      {/* Labs */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="font-serif text-3xl font-bold">Research labs & centres</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {LABS.map((l) => (
            <div key={l.t} className="rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary">
              <l.i className="h-6 w-6 text-primary" />
              <h3 className="mt-3 font-serif text-lg font-bold">{l.t}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{l.b}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Recent publications */}
      <section className="bg-card border-y border-border">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <h2 className="font-serif text-3xl font-bold">Recent publications</h2>
          <div className="mt-8 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-background">
            {[
              { v: "IEEE TNNLS 2026", t: "Low-resource Bangla speech recognition via self-supervised pre-training", a: "Rahman T., Zaman M., Hossain S." },
              { v: "Energy Policy 2026", t: "Resilience of coastal solar mini-grids during Bay cyclone events", a: "Alam K.M., Karim N." },
              { v: "World Development 2025", t: "Microfinance, mobility, and female labor in rural Bangladesh", a: "Akter R., Ahmed F." },
              { v: "J. Med. Chem. 2025", t: "Pyrazoline derivatives as anti-dengue agents, a structure-activity study", a: "Kabir S., Hossain I." },
            ].map((p) => (
              <div key={p.t} className="grid grid-cols-1 gap-2 p-5 sm:grid-cols-[150px_1fr]">
                <span className="text-xs font-semibold uppercase tracking-wider text-primary">{p.v}</span>
                <div>
                  <p className="font-semibold">{p.t}</p>
                  <p className="text-xs text-muted-foreground">{p.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
