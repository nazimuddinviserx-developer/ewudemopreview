import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { ArrowRight, Users, GraduationCap } from "lucide-react";
import { DEPARTMENTS } from "@/lib/site-data";

export const Route = createFileRoute("/departments")({
  head: () => ({
    meta: [
      { title: "Departments , East West University" },
      { name: "description", content: "Explore EWU's faculties and departments across Engineering, Business, Pharmacy, Law and Liberal Arts." },
      { property: "og:title", content: "Departments at EWU" },
      { property: "og:description", content: "Faculties and departments across EWU." },
    ],
  }),
  component: DepartmentsPage,
});

function DepartmentsPage() {
  const byFaculty = DEPARTMENTS.reduce<Record<string, typeof DEPARTMENTS>>((acc, d) => {
    (acc[d.faculty] ||= []).push(d);
    return acc;
  }, {});

  return (
    <div>
      <PageHero
        eyebrow="Departments"
        title="Six faculties. Thirty programs. One mission."
        subtitle="Explore EWU's full academic offering , from undergraduate degrees to PhD research streams."
        crumbs={[{ to: "/", label: "Home" }, { label: "Departments" }]}
      />

      <section className="mx-auto max-w-7xl px-6 py-16 space-y-14">
        {Object.entries(byFaculty).map(([faculty, depts]) => (
          <div key={faculty}>
            <h2 className="font-serif text-2xl font-bold">{faculty}</h2>
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {depts.map((d) => (
                <Link key={d.slug} to="/departments/$slug" params={{ slug: d.slug }} className="group rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary hover:shadow-brick">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl brand-gradient font-bold text-primary-foreground">
                    {d.short}
                  </div>
                  <h3 className="font-serif text-lg font-bold">{d.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{d.summary}</p>
                  <div className="mt-5 flex items-center justify-between text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-3">
                      <span className="inline-flex items-center gap-1"><Users className="h-3 w-3" /> {d.students.toLocaleString()}</span>
                      <span className="inline-flex items-center gap-1"><GraduationCap className="h-3 w-3" /> {d.programs}</span>
                    </span>
                    <ArrowRight className="h-4 w-4 text-primary transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
