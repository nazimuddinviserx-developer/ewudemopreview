import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CALENDAR } from "@/lib/site-data";

export const Route = createFileRoute("/academic-calendar")({
  head: () => ({
    meta: [
      { title: "Academic Calendar , East West University" },
      { name: "description", content: "Semester dates, examinations, holidays, convocation and academic deadlines at EWU." },
      { property: "og:title", content: "Academic Calendar , EWU" },
      { property: "og:description", content: "Important dates for the academic year." },
    ],
  }),
  component: CalendarPage,
});

const TYPES = ["All", "Semester", "Admission", "Exam", "Holiday", "Event"] as const;

function CalendarPage() {
  const [t, setT] = React.useState<(typeof TYPES)[number]>("All");
  const list = t === "All" ? CALENDAR : CALENDAR.filter((c) => c.type === t);

  return (
    <div>
      <PageHero
        eyebrow="Academic Calendar"
        title="Your roadmap for the academic year."
        subtitle="Semester start dates, examinations, holidays, convocation and important deadlines."
        crumbs={[{ to: "/", label: "Home" }, { label: "Academic Calendar" }]}
      />

      <section className="mx-auto max-w-5xl px-6 py-12">
        <div className="flex flex-wrap gap-2">
          {TYPES.map((x) => (
            <button
              key={x}
              onClick={() => setT(x)}
              aria-pressed={t === x}
              className={`rounded-full border px-4 py-1.5 text-xs font-semibold transition-colors ${
                t === x ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card text-foreground/75 hover:border-primary"
              }`}
            >
              {x}
            </button>
          ))}
        </div>

        <div className="mt-8 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card">
          {list.map((e) => {
            const d = new Date(e.date);
            return (
              <div key={e.date + e.title} className="grid grid-cols-[auto_1fr_auto] items-center gap-4 p-5">
                <div className="grid h-16 w-16 shrink-0 place-items-center rounded-xl brand-gradient text-primary-foreground">
                  <p className="text-[10px] font-bold uppercase opacity-80">{d.toLocaleString("en", { month: "short" })}</p>
                  <p className="font-serif text-xl font-bold leading-none">{d.getDate()}</p>
                </div>
                <div className="min-w-0">
                  <h4 className="font-semibold">{e.title}</h4>
                  <p className="text-xs text-muted-foreground">{d.toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long", year: "numeric" })}</p>
                </div>
                <span className="rounded-full bg-primary-soft px-3 py-1 text-[10px] font-bold uppercase text-primary-deep">{e.type}</span>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
