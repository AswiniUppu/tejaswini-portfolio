import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected projects by Tejaswini Uppu: an automated website generator, a digital vehicle passport, and e-learning platforms.",
};

export default function ProjectsPage() {
  return (
    <main id="main" className="world-section mx-auto max-w-6xl pt-28">
      <p className="pill w-fit">Projects</p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
        Projects, clearly explained
      </h1>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--ink-soft)] md:text-lg">
        A website generator, a digital vehicle passport, and e-learning
        platforms. Here is what each one does, what I built, and the tools
        behind it.
      </p>

      <div className="mt-10 grid items-stretch gap-5 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <article
            key={project.id}
            className="surface-card group flex h-full min-h-[28rem] flex-col p-6 transition duration-200 hover:-translate-y-1 hover:shadow-[var(--shadow-hover)] md:p-7"
          >
            <div className="flex items-center justify-between gap-3">
              <span className="font-[family-name:var(--font-mono)] text-xs tracking-[0.14em] text-[var(--ink-faint)]">
                PROJECT 0{index + 1}
              </span>
              <span className="h-2.5 w-2.5 rounded-full bg-[var(--ink)] transition-transform duration-200 group-hover:scale-125" />
            </div>

            <p className="mono-label mt-8">{project.theme}</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">
              {project.name}
            </h2>
            <p className="mt-4 min-h-20 text-sm leading-relaxed text-[var(--ink-soft)] md:text-base">
              {project.description}
            </p>

            <div className="mt-6 border-t border-[var(--border)] pt-5">
              <h3 className="mono-label">What it delivers</h3>
              <ul className="mt-3 space-y-3">
                {project.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex gap-3 text-sm leading-relaxed text-[var(--ink-soft)]"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--ink)]"
                    />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-auto border-t border-[var(--border)] pt-5">
              <h3 className="mono-label mb-3">Built with</h3>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((technology) => (
                  <span
                    key={technology}
                    className="pill !px-3 !py-1.5 !text-xs"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      <Link href="/#lab" className="cta-secondary focus-ring mt-10 inline-flex">
        Explore the immersive project lab
      </Link>
    </main>
  );
}
