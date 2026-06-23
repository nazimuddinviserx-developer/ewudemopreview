import * as React from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { FACULTY, DEPARTMENTS } from "@/lib/site-data";
import { img } from "@/lib/images";
import { Search, Share2 } from "lucide-react";

export const Route = createFileRoute("/faculty")({
  head: () => ({
    meta: [
      { title: "Faculty Directory, East West University" },
      { name: "description", content: "Browse EWU's faculty across all departments, research interests, publications and contact information." },
      { property: "og:title", content: "Faculty Directory, EWU" },
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
              aria-label="Search faculty or research"
              placeholder="Search faculty or research…"
              className="w-full rounded-md border border-input bg-background py-2.5 pl-10 pr-3 text-sm outline-none focus:border-primary"
            />
          </div>
          <select value={dept} onChange={(e) => setDept(e.target.value)} aria-label="Filter by department" className="rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-primary">
            <option value="all">All departments</option>
            {DEPARTMENTS.map((d) => <option key={d.slug} value={d.slug}>{d.name}</option>)}
          </select>
        </div>

        <p className="mt-4 text-xs text-muted-foreground">{filtered.length} faculty member{filtered.length === 1 ? "" : "s"}</p>

        <div className="mt-10 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-gold">Our Faculty</p>
          <h2 className="mt-2 font-serif text-3xl font-bold sm:text-4xl">Meet Our Expert Faculty</h2>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filtered.map((f) => (
            <article key={f.id} className="group relative rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-brick">
              <div className="relative aspect-[3/4] overflow-hidden rounded-t-2xl">
                <Link to="/faculty/$id" params={{ id: f.id }} className="block h-full w-full">
                  <img src={img(f.img)} alt={f.name} className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                </Link>
                <Link
                  to="/faculty/$id"
                  params={{ id: f.id }}
                  aria-label={`${f.name} profile`}
                  className="absolute -bottom-5 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-gold text-gold-foreground shadow-md transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <Share2 className="h-4 w-4" />
                </Link>
              </div>
              <Link to="/faculty/$id" params={{ id: f.id }} className="block p-5 pt-8 pb-8 text-center">
                <h3 className="font-serif text-base font-bold leading-tight">{f.name}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{f.designation}</p>
              </Link>
            </article>
          ))}
        </div>

      </section>
    </div>
  );
}

