import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { FACILITIES } from "@/lib/site-data";
import * as Icons from "lucide-react";
import { Building2 } from "lucide-react";

export const Route = createFileRoute("/facilities")({
  head: () => ({
    meta: [
      { title: "Facilities , East West University" },
      { name: "description", content: "Library, computer labs, research labs, auditorium, cafeteria, sports, medical and transport." },
      { property: "og:title", content: "Facilities at EWU" },
      { property: "og:description", content: "A campus built for learning, living and building." },
    ],
  }),
  component: FacilitiesPage,
});

function FacilitiesPage() {
  return (
    <div>
      <PageHero
        eyebrow="Facilities"
        title="A campus built for learning, living and building."
        subtitle="From a 120,000-volume library to research labs, sports complexes and a 24/7 medical centre , our Aftabnagar campus has everything students need."
        crumbs={[{ to: "/", label: "Home" }, { label: "Facilities" }]}
      />
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FACILITIES.map((f) => {
            const Icon = (Icons as any)[f.icon] ?? Building2;
            return (
              <div key={f.name} className="rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary hover:shadow-brick">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl brand-gradient text-primary-foreground">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-serif text-xl font-bold">{f.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.summary}</p>
                <ul className="mt-4 space-y-1.5 text-xs text-foreground/70">
                  <li>• Modern, accessible and inclusive design</li>
                  <li>• Open 7 days a week during semesters</li>
                  <li>• Managed by trained EWU staff</li>
                </ul>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
