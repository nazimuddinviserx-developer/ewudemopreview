import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Target, Eye, Heart, Award, Calendar, Users } from "lucide-react";
import heroFallback from "@/assets/hero-fallback.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About , East West University" },
      { name: "description", content: "Learn about EWU's history, mission, vision and leadership." },
      { property: "og:title", content: "About East West University" },
      { property: "og:description", content: "History, mission, vision and leadership of EWU." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div>
      <PageHero
        eyebrow="About EWU"
        title="A university built for Bangladesh, by Bangladeshis."
        subtitle="Founded in 1996, East West University has grown into one of the country's most respected private universities , known for academic rigour, research impact and inclusive student life."
        crumbs={[{ to: "/", label: "Home" }, { label: "About" }]}
      />

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <h2 className="font-serif text-3xl font-bold text-balance">Our story</h2>
            <div className="mt-5 space-y-4 text-foreground/85">
              <p>EWU was established by the East West University Foundation with a single ambition , to create a private university whose academic standards rival any public institution in Bangladesh.</p>
              <p>From 36 students in a leased Dhanmondi building in 1996, we have grown to over 12,400 students across our purpose-built Aftabnagar campus, accredited by the University Grants Commission of Bangladesh.</p>
              <p>Three decades on, EWU alumni lead industries from banking and telecommunications to public service and the arts , and our research programs are recognised by ADB, World Bank, icddr,b and BIDS.</p>
            </div>
          </div>
          <img src={heroFallback} alt="Campus" loading="lazy" className="aspect-[4/3] w-full rounded-2xl border border-border object-cover shadow-brick" />
        </div>
      </section>

      <section className="bg-card border-y border-border">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-20 md:grid-cols-3">
          {[
            { i: Target, t: "Mission", b: "Deliver excellent education and research that strengthens Bangladesh's economy and society." },
            { i: Eye, t: "Vision", b: "To be South Asia's leading research-driven private university by 2035." },
            { i: Heart, t: "Values", b: "Integrity. Inclusion. Rigour. Service. Respect for Bangladesh's heritage." },
          ].map((v) => (
            <div key={v.t} className="rounded-2xl border border-border bg-background p-7">
              <v.i className="h-7 w-7 text-primary" />
              <h3 className="mt-4 font-serif text-xl font-bold">{v.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{v.b}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="font-serif text-3xl font-bold text-balance">Milestones</h2>
        <div className="mt-10 relative pl-8 before:absolute before:left-3 before:top-1 before:h-full before:w-0.5 before:bg-primary/30">
          {[
            { y: "1996", t: "EWU founded with 36 students in Dhanmondi." },
            { y: "2003", t: "UGC accreditation; faculties of Business, Engineering and Arts established." },
            { y: "2011", t: "Permanent Aftabnagar campus inaugurated." },
            { y: "2018", t: "Center for Research and Training launched." },
            { y: "2024", t: "EWU Bangla NLP lab wins Bangladesh Academy of Sciences Gold Medal." },
          ].map((m) => (
            <div key={m.y} className="relative mb-6 last:mb-0">
              <span className="absolute -left-8 top-1.5 h-3 w-3 rounded-full bg-primary ring-4 ring-primary/20" />
              <p className="font-serif text-xl font-bold text-primary">{m.y}</p>
              <p className="text-sm text-muted-foreground">{m.t}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-card border-y border-border">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-6 py-16 md:grid-cols-4">
          {[
            { i: Users, n: "12,400+", l: "Students" },
            { i: Award, n: "320+", l: "Faculty" },
            { i: Calendar, n: "29", l: "Years" },
            { i: Target, n: "180+", l: "Industry partners" },
          ].map((s) => (
            <div key={s.l} className="text-center">
              <s.i className="mx-auto mb-2 h-6 w-6 text-primary" />
              <p className="font-serif text-3xl font-bold">{s.n}</p>
              <p className="text-xs uppercase tracking-wider text-muted-foreground">{s.l}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
