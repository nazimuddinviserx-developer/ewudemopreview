import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import studentImg from "@/assets/cta-student-bd.png";

export function AdmissionCTA() {
  return (
    <section className="bg-background py-12 sm:py-16">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-2xl bg-primary px-6 py-10 sm:px-12 sm:py-12 md:py-8">
          <div className="grid items-center gap-6 md:grid-cols-2">
            <div className="relative z-10 text-primary-foreground">
              <div className="flex items-center gap-2 text-sm font-medium opacity-90">
                <span className="h-1.5 w-1.5 rounded-full bg-primary-foreground" />
                Admission Open
              </div>
              <h2 className="mt-3 font-serif text-3xl font-bold leading-tight sm:text-4xl md:text-[2.5rem]">
                Shape Your Future with<br />East West University
              </h2>
              <Link
                to="/admission"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-background px-5 py-2.5 text-sm font-semibold text-primary shadow-sm transition hover:bg-background/90"
              >
                Apply Now
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="relative h-56 sm:h-72 md:h-64 md:-my-12">
              <img
                src={studentImg}
                alt="Smiling Bangladeshi university student holding notebooks"
                width={800}
                height={800}
                loading="lazy"
                className="absolute bottom-0 right-0 h-full w-auto object-contain object-bottom"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
