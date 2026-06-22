import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/site/PageHero";
import {
  Microscope,
  FlaskConical,
  BookOpen,
  BarChart3,
  Beaker,
  Cpu,
  ArrowUpRight,
  HeartPulse,
  Leaf,
  Building2,
  Award,
  Search,
  ArrowRight,
  Newspaper,
  Calendar,
  Users,
  FileText,
  GraduationCap,
  Sparkles,
} from "lucide-react";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import { img } from "@/lib/images";
import { FACULTY } from "@/lib/site-data";
import researchHeroAsset from "@/assets/research-hero.jpg.asset.json";

export const Route = createFileRoute("/research")({
  head: () => ({
    meta: [
      { title: "Research, East West University" },
      { name: "description", content: "Research themes, centres, impact, funding, student opportunities and faculty directory at EWU." },
      { property: "og:title", content: "Research at EWU" },
      { property: "og:description", content: "Research excellence with real-world impact, built for Bangladesh." },
      { property: "og:image", content: researchHeroAsset.url },
      { name: "twitter:image", content: researchHeroAsset.url },
    ],
  }),
  component: ResearchPage,
});

const PUBS_BY_YEAR = [
  { year: "2020", n: 142 }, { year: "2021", n: 168 }, { year: "2022", n: 195 },
  { year: "2023", n: 224 }, { year: "2024", n: 261 }, { year: "2025", n: 298 }, { year: "2026", n: 332 },
];

const THEMES = [
  { icon: HeartPulse, tag: "Health Sciences", title: "Health & Pharmacology", body: "Tropical disease pharmacology, public-health policy and digital diagnostics for rural Bangladesh." },
  { icon: Cpu, tag: "AI & Tech", title: "AI, Data & Bangla NLP", body: "Voice, OCR, search and LLMs tuned for low-resource South Asian languages." },
  { icon: Leaf, tag: "Sustainability", title: "Climate & Energy", body: "Coastal resilience, solar mini-grids and low-carbon construction materials." },
  { icon: BarChart3, tag: "Economy", title: "Development Economics", body: "Microfinance, female labour, financial inclusion and rural markets." },
  { icon: Building2, tag: "Society", title: "Urban Futures", body: "Seismic retrofit, transport planning and inclusive city design for Dhaka." },
  { icon: BookOpen, tag: "Humanities", title: "Language, Law & Culture", body: "Post-colonial literature, constitutional law and Bengali diaspora studies." },
];

const CENTRES = [
  { i: Cpu, t: "Centre for AI & Language Technology", b: "Bangla NLP, voice and OCR research with national partners." },
  { i: FlaskConical, t: "Institute for Drug Discovery", b: "Tropical disease pharmacology in partnership with icddr,b." },
  { i: Beaker, t: "Centre for Sustainable Materials", b: "Low-carbon concrete and recycled polymers." },
  { i: Microscope, t: "Smart Energy Research Centre", b: "Solar mini-grids and EV charging infrastructure." },
  { i: BarChart3, t: "Centre for Development Economics", b: "Microfinance, labor markets and climate adaptation." },
  { i: HeartPulse, t: "Public Health Innovation Lab", b: "Digital diagnostics and rural health systems." },
];

const IMPACT = [
  { img: "res-1", tag: "AI · Health", title: "Bangla Voice Diagnostics for Rural Clinics", body: "A tablet-based screening tool that lets community health workers triage patients in Bangla." },
  { img: "res-2", tag: "Energy", title: "Solar Mini-Grid Resilience for Coastal Bangladesh", body: "Storage and failover designs keeping village mini-grids running through Bay cyclone events." },
  { img: "res-3", tag: "Economics", title: "Microfinance & Female Labor Participation", body: "A multi-year panel study on how credit reshapes women's workforce decisions." },
];

const FUNDING = [
  { title: "Internal Seed Grants", body: "Up to BDT 5 lakh for early-stage faculty research with rolling deadlines.", tag: "Faculty" },
  { title: "UGC Research Grants", body: "Competitive national funding co-administered by EWU's Research Office.", tag: "Faculty" },
  { title: "Industry Partnerships", body: "Co-funded R&D with bKash, IDCOL, Grameenphone and Banglalink.", tag: "Faculty" },
  { title: "International Calls", body: "Proposal support for World Bank, IDRC, Newton Fund and Erasmus+.", tag: "Faculty" },
];

const STUDENT_PATHS = [
  { icon: GraduationCap, title: "Undergraduate Research Assistantship", body: "Join an active lab in your third or fourth year, paid stipend, course credit and conference travel.", cta: "Apply (UG)" },
  { icon: BookOpen, title: "Graduate Thesis Track", body: "MSc and MA students pair with a principal investigator for an 18-month thesis project.", cta: "Find an advisor" },
  { icon: Sparkles, title: "Summer Research Fellowship", body: "Eight-week, fully funded summer programme open across all faculties.", cta: "View 2027 cohort" },
];

const NEWS = [
  { tag: "Announcement", date: "12 Jun 2026", title: "EWU wins BDT 2.4 crore UGC grant for Bangla LLM research" },
  { tag: "Event", date: "22 Jul 2026", title: "Research Symposium 2026, call for posters now open" },
  { tag: "Publication", date: "03 Aug 2026", title: "Nature Energy features EWU work on coastal solar resilience" },
  { tag: "Lecture", date: "18 Aug 2026", title: "Public lecture: 'The Future of Microfinance in South Asia'" },
];

function ResearchPage() {
  const [query, setQuery] = useState("");
  const filtered = FACULTY.filter((f) =>
    (f.name + " " + f.dept + " " + f.interests.join(" ")).toLowerCase().includes(query.toLowerCase())
  ).slice(0, 6);

  return (
    <div>
      <PageHero
        eyebrow="Research"
        title="Research with real-world impact, built for Bangladesh."
        subtitle="From AI for Bangla healthcare to resilient solar grids and microfinance policy, EWU researchers publish in top venues and partner with national institutions."
        crumbs={[{ to: "/", label: "Home" }, { label: "Research" }]}
        image={researchHeroAsset.url}
        imageAlt="EWU researchers at work"
      />

      {/* IMPACT STATS */}
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

      {/* RESEARCH THEMES */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-primary">Research Areas</p>
        <h2 className="font-serif text-3xl font-bold md:text-4xl">Six themes shaping our work</h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Categorised focus areas that span every faculty, pick a theme to explore the labs, projects and people behind it.
        </p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {THEMES.map((t) => (
            <div key={t.title} className="group rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-primary hover:shadow-brick">
              <div className="flex items-center justify-between">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary">
                  <t.icon className="h-5 w-5" />
                </span>
                <span className="rounded-full bg-gold/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-gold">{t.tag}</span>
              </div>
              <h3 className="mt-4 font-serif text-lg font-bold">{t.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{t.body}</p>
              <Link to="/faculty" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                Explore <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* CENTRES & INSTITUTES */}
      <section className="border-y border-border bg-card">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-primary">Centres & Institutes</p>
          <h2 className="font-serif text-3xl font-bold md:text-4xl">Specialised hubs for deep work</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {CENTRES.map((c) => (
              <div key={c.t} className="rounded-2xl border border-border bg-background p-6 transition hover:border-primary">
                <c.i className="h-6 w-6 text-primary" />
                <h3 className="mt-3 font-serif text-lg font-bold">{c.t}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{c.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMPACT & HIGHLIGHTS */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-primary">Impact & Highlights</p>
        <h2 className="font-serif text-3xl font-bold md:text-4xl">Breakthroughs that left the lab</h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">Long-running research with measurable national impact.</p>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {IMPACT.map((p) => (
            <article key={p.title} className="group overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:border-primary hover:shadow-brick">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img src={img(p.img)} alt={p.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
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

      {/* PUBLICATIONS DASHBOARD */}
      <section className="border-y border-border bg-card">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid items-end gap-6 md:grid-cols-[1fr_auto]">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-primary">Output</p>
              <h2 className="font-serif text-3xl font-bold">Research output, year by year</h2>
              <p className="mt-2 text-muted-foreground">Publications across all EWU departments.</p>
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

      {/* FUNDING & GRANTS */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-primary">Funding & Grants</p>
        <h2 className="font-serif text-3xl font-bold md:text-4xl">Support for principal investigators</h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          The Research Office helps faculty find the right funding source and supports every stage of proposal development.
        </p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {FUNDING.map((f) => (
            <div key={f.title} className="rounded-2xl border border-border bg-card p-6 transition hover:border-primary hover:shadow-brick">
              <Award className="h-6 w-6 text-gold" />
              <span className="mt-3 inline-block text-[10px] font-bold uppercase tracking-wider text-primary">{f.tag}</span>
              <h3 className="mt-1 font-serif text-base font-bold">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-4 rounded-2xl border border-border bg-card p-6">
          <FileText className="h-8 w-8 text-primary" />
          <div className="flex-1 min-w-[200px]">
            <h3 className="font-semibold">Proposal support, every step</h3>
            <p className="text-sm text-muted-foreground">From idea framing to budgeting, ethics review and grant management.</p>
          </div>
          <button className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary-deep">
            Book a consultation <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </section>

      {/* STUDENT OPPORTUNITIES */}
      <section className="relative overflow-hidden border-y border-border bg-primary">
        <img src={img("hero-4")} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
        <div className="absolute inset-0 hero-overlay" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-deep/70 via-primary-deep/30 to-transparent" />
        <div className="relative mx-auto max-w-7xl px-6 py-16 text-primary-foreground">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-gold">Student Opportunities</p>
          <h2 className="font-serif text-3xl font-bold md:text-4xl">Join an active research project</h2>
          <p className="mt-3 max-w-2xl text-primary-foreground/85">
            Three structured pathways for undergraduate and graduate students to get hands-on with real research.
          </p>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {STUDENT_PATHS.map((s) => (
              <div key={s.title} className="rounded-2xl border border-primary-foreground/20 bg-primary-foreground/10 p-6 backdrop-blur transition hover:bg-primary-foreground/15">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-gold text-gold-foreground">
                  <s.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-serif text-lg font-bold">{s.title}</h3>
                <p className="mt-2 text-sm text-primary-foreground/85">{s.body}</p>
                <button className="mt-4 inline-flex items-center gap-2 rounded-md bg-primary-foreground px-4 py-2 text-sm font-semibold text-primary hover:bg-primary-foreground/90">
                  {s.cta} <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FACULTY DIRECTORY */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-primary">Faculty Directory</p>
        <h2 className="font-serif text-3xl font-bold md:text-4xl">Find a principal investigator</h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Search by name, department or research interest to connect with EWU experts.
        </p>
        <div className="mt-6 flex items-center gap-2 rounded-xl border border-border bg-card p-2 max-w-xl">
          <Search className="ml-2 h-4 w-4 text-muted-foreground" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Try 'Bangla NLP', 'microfinance' or 'pharmacology'"
            className="flex-1 bg-transparent px-2 py-2 text-sm outline-none"
          />
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((f) => (
            <Link
              key={f.id}
              to="/faculty/$id"
              params={{ id: f.id }}
              className="group flex gap-4 rounded-2xl border border-border bg-card p-4 transition hover:-translate-y-0.5 hover:border-primary hover:shadow-brick"
            >
              <img src={img(f.img)} alt={f.name} className="h-20 w-20 shrink-0 rounded-xl object-cover" loading="lazy" />
              <div className="min-w-0">
                <h3 className="font-serif text-base font-bold leading-tight">{f.name}</h3>
                <p className="text-xs text-muted-foreground">{f.designation}</p>
                <p className="mt-2 line-clamp-2 text-xs text-foreground/80">{f.interests.join(" · ")}</p>
                <span className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-primary group-hover:gap-2 transition-all">
                  View profile <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </Link>
          ))}
          {filtered.length === 0 && (
            <p className="col-span-full rounded-xl border border-dashed border-border bg-card p-6 text-sm text-muted-foreground">
              No researchers matched "{query}". Try a different term.
            </p>
          )}
        </div>
        <div className="mt-8">
          <Link to="/faculty" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all">
            <Users className="h-4 w-4" /> Browse the full faculty directory <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* NEWS & EVENTS */}
      <section className="border-y border-border bg-card">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-primary">News & Events</p>
              <h2 className="font-serif text-3xl font-bold md:text-4xl">What's happening in research</h2>
            </div>
            <Link to="/academic-calendar" className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
              <Newspaper className="h-4 w-4" /> All updates <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {NEWS.map((n) => (
              <article key={n.title} className="flex gap-4 rounded-2xl border border-border bg-background p-5 transition hover:border-primary hover:shadow-brick">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gold/15 text-gold">
                  <Calendar className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2 text-xs">
                    <span className="rounded-full bg-primary/10 px-2 py-0.5 font-semibold uppercase tracking-wider text-primary">{n.tag}</span>
                    <span className="text-muted-foreground">{n.date}</span>
                  </div>
                  <h3 className="mt-2 font-serif text-base font-bold leading-snug">{n.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
