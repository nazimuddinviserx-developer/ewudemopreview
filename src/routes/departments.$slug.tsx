import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { deptBySlug, FACULTY } from "@/lib/site-data";
import { GraduationCap, Users, BookOpen, Award, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/departments/$slug")({
  loader: ({ params }) => {
    const dept = deptBySlug(params.slug);
    if (!dept) throw notFound();
    return { dept };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.dept.name ?? "Department"} , EWU` },
      { name: "description", content: loaderData?.dept.summary ?? "EWU department" },
      { property: "og:title", content: `${loaderData?.dept.name ?? "Department"} , EWU` },
      { property: "og:description", content: loaderData?.dept.summary ?? "" },
    ],
  }),
  notFoundComponent: () => (
    <div className="grid min-h-[60dvh] place-items-center">
      <div className="text-center">
        <p className="font-serif text-3xl font-bold">Department not found</p>
        <Link to="/departments" className="mt-4 inline-block text-primary hover:underline">All departments</Link>
      </div>
    </div>
  ),
  component: DepartmentPage,
});

function DepartmentPage() {
  const { dept } = Route.useLoaderData();
  const facultyMembers = FACULTY.filter((f) => f.dept === dept.slug);

  return (
    <div>
      <PageHero
        eyebrow={dept.faculty}
        title={dept.name}
        subtitle={dept.summary}
        crumbs={[{ to: "/", label: "Home" }, { to: "/departments", label: "Departments" }, { label: dept.short }]}
      />

      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-4 sm:grid-cols-4">
          {[
            { i: Users, n: dept.students.toLocaleString(), l: "Students" },
            { i: GraduationCap, n: dept.faculty_count, l: "Faculty" },
            { i: BookOpen, n: dept.programs, l: "Programs" },
            { i: Award, n: "A+", l: "UGC rating" },
          ].map((s) => (
            <div key={s.l} className="rounded-2xl border border-border bg-card p-5">
              <s.i className="h-5 w-5 text-primary" />
              <p className="mt-3 font-serif text-2xl font-bold">{s.n}</p>
              <p className="text-xs uppercase tracking-wider text-muted-foreground">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
          <div>
            <h2 className="font-serif text-2xl font-bold">Overview</h2>
            <p className="mt-3 text-muted-foreground">The Department of {dept.name} at EWU prepares students with rigorous theoretical foundations and practical experience drawn from Bangladesh's fast-changing industries.</p>
            <h3 className="mt-6 font-serif text-lg font-bold">Mission</h3>
            <p className="mt-1 text-sm text-muted-foreground">To produce graduates who lead, innovate and contribute to Bangladesh's development through {dept.short.toLowerCase()} expertise.</p>
            <h3 className="mt-6 font-serif text-lg font-bold">Vision</h3>
            <p className="mt-1 text-sm text-muted-foreground">To be a regionally recognised centre for {dept.short.toLowerCase()} education and applied research by 2030.</p>
          </div>
          <div>
            <h2 className="font-serif text-2xl font-bold">Programs</h2>
            <div className="mt-4 space-y-3">
              {["Bachelor (BSc/BBA/LLB)", "Master (MSc/MBA/LLM)", "Diploma / Minor", "PhD (selected)"].slice(0, dept.programs).map((p) => (
                <div key={p} className="flex items-center justify-between rounded-xl border border-border bg-card p-4">
                  <span className="font-semibold">{p} in {dept.short}</span>
                  <span className="text-xs text-muted-foreground">4 years</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <h2 className="font-serif text-2xl font-bold">Faculty members</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {facultyMembers.length === 0 && <p className="text-sm text-muted-foreground">Faculty listings coming soon.</p>}
          {facultyMembers.map((f) => (
            <Link key={f.id} to="/faculty/$id" params={{ id: f.id }} className="group flex items-center gap-3 rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full brand-gradient font-serif font-bold text-primary-foreground">
                {f.name.split(" ").slice(-2).map((p) => p[0]).join("")}
              </div>
              <div className="min-w-0">
                <p className="truncate font-semibold">{f.name}</p>
                <p className="truncate text-xs text-muted-foreground">{f.designation}</p>
              </div>
              <ArrowRight className="ml-auto h-4 w-4 text-primary opacity-0 transition-opacity group-hover:opacity-100" />
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <h2 className="font-serif text-2xl font-bold">Research activities</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {["Ongoing projects", "Publications", "Research groups"].map((t, i) => (
            <div key={t} className="rounded-2xl border border-border bg-card p-6">
              <p className="font-serif text-3xl font-bold text-primary">{[18, 124, 9][i]}</p>
              <p className="text-sm text-muted-foreground">{t}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
