import * as React from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { FACULTY, DEPARTMENTS } from "@/lib/site-data";
import { Search } from "lucide-react";

export const Route = createFileRoute("/faculty")({
  head: () => ({
    meta: [
      { title: "Faculty Directory — East West University" },
      { name: "description", content: "Browse EWU's faculty across all departments — research interests, publications and contact information." },
      { property: "og:title", content: "Faculty Directory — EWU" },
      { property: "og:description", content: "Search EWU faculty across all departments." },
    ],
  }),
  component: FacultyDirectory,
});

function FacultyDirectory() {
  const [q, setQ] = React.useState("");
  const [dept, setDept] = React.useState<string>("all");

  const filtered = FACULTY.filter((f) => {
    const matchQ = !q || f.name.toLowerCase().includes(q.toLowerCase()) || f.interests.join(" ").toLowerCase().includes(q.toLowerCase());
    const matchD = dept === "all" || f.dept === dept;
    return matchQ && matchD;
  });

  return (
    <div>
      <PageHero
        eyebrow="Faculty Directory"
        title="320+ scholars shaping the future of Bangladesh."
        subtitle="Search by name, department or research interest."
        crumbs={[{ to: "/", label: "Home" }, { label: "Faculty" }]}
      />

      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col gap-3 sm:flex-row">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search faculty or research…"
              className="w-full rounded-md border border-input bg-background py-2.5 pl-10 pr-3 text-sm outline-none focus:border-primary"
            />
          </div>
          <select value={dept} onChange={(e) => setDept(e.target.value)} className="rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-primary">
            <option value="all">All departments</option>
            {DEPARTMENTS.map((d) => <option key={d.slug} value={d.slug}>{d.name}</option>)}
          </select>
        </div>

        <p className="mt-4 text-xs text-muted-foreground">{filtered.length} faculty member{filtered.length === 1 ? "" : "s"}</p>

        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((f) => {
            const d = DEPARTMENTS.find((x) => x.slug === f.dept);
            return (
              <Link key={f.id} to="/faculty/$id" params={{ id: f.id }} className="group rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary hover:shadow-brick">
                <div className="flex items-center gap-4">
                  <div className="grid h-14 w-14 place-items-center rounded-full brand-gradient font-serif text-xl font-bold text-primary-foreground">
                    {f.name.split(" ").slice(-2).map((p) => p[0]).join("")}
                  </div>
                  <div className="min-w-0">
                    <h3 className="truncate font-semibold">{f.name}</h3>
                    <p className="text-xs text-muted-foreground">{f.designation}</p>
                    <p className="text-xs text-primary">{d?.short}</p>
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {f.interests.slice(0, 3).map((i) => (
                    <span key={i} className="rounded-full bg-primary-soft px-2.5 py-1 text-[11px] font-medium text-primary-deep">{i}</span>
                  ))}
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
