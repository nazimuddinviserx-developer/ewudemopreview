import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { FACILITIES } from "@/lib/site-data";
import { img } from "@/lib/images";
import * as Icons from "lucide-react";
import { Building2 } from "lucide-react";

export const Route = createFileRoute("/facilities")({
  head: () => ({
    meta: [
      { title: "Facilities, East West University" },
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
        subtitle="From a 120,000-volume library to research labs, sports complexes and a 24/7 medical centre, our Aftabnagar campus has everything students need."
        crumbs={[{ to: "/", label: "Home" }, { label: "Facilities" }]}
      />
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FACILITIES.map((f) => {
            const Icon = (Icons as any)[f.icon] ?? Building2;
            return (
              <div key={f.name} className="group overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:border-primary hover:shadow-brick">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img src={img(f.img)} alt={f.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent" />
                  <span className="absolute left-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-background/95 text-primary shadow-brick">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="absolute bottom-4 left-4 right-4 font-serif text-xl font-bold text-white">{f.name}</h3>
                </div>
                <div className="p-6">
                  <p className="text-sm text-muted-foreground">{f.summary}</p>
                  <ul className="mt-4 space-y-1.5 text-xs text-foreground/70">
                    <li>• Modern, accessible and inclusive design</li>
                    <li>• Open 7 days a week during semesters</li>
                    <li>• Managed by trained EWU staff</li>
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
