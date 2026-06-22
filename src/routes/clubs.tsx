import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CLUBS } from "@/lib/site-data";
import { Users, Calendar, Trophy, ArrowRight } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/clubs")({
  head: () => ({
    meta: [
      { title: "Student Clubs , East West University" },
      { name: "description", content: "40+ student clubs and societies at EWU , academic, cultural, sports and service." },
      { property: "og:title", content: "Student Clubs at EWU" },
      { property: "og:description", content: "Find your community , academic, cultural, sports and service clubs." },
    ],
  }),
  component: ClubsPage,
});

function ClubsPage() {
  const [cat, setCat] = React.useState<string>("All");
  const cats = ["All", ...Array.from(new Set(CLUBS.map((c) => c.category)))];
  const list = cat === "All" ? CLUBS : CLUBS.filter((c) => c.category === cat);

  return (
    <div>
      <PageHero
        eyebrow="Student Life"
        title="Find your people. Build your story."
        subtitle="EWU is home to 40+ clubs , from competitive programming to drama, debate, robotics and rural service."
        crumbs={[{ to: "/", label: "Home" }, { label: "Clubs" }]}
      />

      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-wrap gap-2">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`rounded-full border px-4 py-1.5 text-xs font-semibold transition-colors ${
                cat === c ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card text-foreground/75 hover:border-primary"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((c) => (
            <div key={c.slug} className="group rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary hover:shadow-brick">
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-primary-soft px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-primary-deep">{c.category}</span>
                <Trophy className="h-5 w-5 text-gold" />
              </div>
              <h3 className="mt-4 font-serif text-xl font-bold">{c.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.summary}</p>
              <div className="mt-5 grid grid-cols-2 gap-3 border-t border-border pt-4 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1.5"><Users className="h-3.5 w-3.5 text-primary" /> {c.members} members</span>
                <span className="inline-flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5 text-primary" /> Weekly meetups</span>
              </div>
              <button
                onClick={() => toast.success(`You've expressed interest in ${c.name}. Check your email.`)}
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary py-2 text-sm font-semibold text-primary-foreground hover:bg-primary-deep"
              >
                Join club <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
