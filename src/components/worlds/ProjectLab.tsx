import { projects } from "@/data/portfolio";
import {
  SectionEyebrow,
  SectionHeading,
  SectionSupport,
} from "@/components/ui/Section";

const ai4bazaarFlow = [
  {
    title: "Website request",
    detail: "A client prompt starts the generation flow.",
  },
  {
    title: "OpenAI generation",
    detail: "The API creates the requested site structure and content.",
  },
  {
    title: "React + TypeScript rendering",
    detail: "The frontend renders the generated site and its content.",
  },
  {
    title: "Jenkins CI/CD",
    detail: "A one-click build and deployment takes the site live.",
  },
] as const;

const ai4bazaarContributions = [
  "Built the TypeScript component layer for generated site structures.",
  "Integrated OpenAI APIs for dynamic, AI-generated content.",
  "Created a Jenkins CI/CD pipeline for one-click deployment.",
] as const;

export function ProjectLab() {
  const ai4 = projects.find((project) => project.id === "ai4bazaar")!;
  const others = projects.filter((project) => project.id !== "ai4bazaar");

  return (
    <section id="lab" className="world-section" aria-labelledby="lab-heading">
      <div className="mx-auto max-w-6xl">
        <SectionEyebrow>04 / Project lab</SectionEyebrow>
        <SectionHeading>
          <span id="lab-heading">Selected projects</span>
        </SectionHeading>
        <SectionSupport>
          A website generator, a digital vehicle passport, and e-learning
          platforms, with a clear look at what each one does.
        </SectionSupport>

        <article className="surface-card mt-12 overflow-hidden">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
            <div className="p-6 md:p-8">
              <p className="pill w-fit">Featured project</p>
              <h3 className="mt-4 text-3xl font-semibold md:text-4xl">
                {ai4.name}
              </h3>
              <p className="mt-3 text-[var(--ink-soft)]">{ai4.theme}</p>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-[var(--ink-soft)]">
                {ai4.description}
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {ai4.stats?.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl bg-[var(--bg-soft)] px-4 py-3"
                  >
                    <p className="text-sm font-medium">{stat.label}</p>
                    <p className="mt-1 text-xs text-[var(--ink-faint)]">
                      {stat.note}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {ai4.stack.map((technology) => (
                  <span key={technology} className="pill">
                    {technology}
                  </span>
                ))}
              </div>

              <div className="mt-8 border-t border-[var(--border)] pt-5">
                <h4 className="mono-label">My contributions</h4>
                <ul className="mt-3 space-y-2">
                  {ai4bazaarContributions.map((contribution) => (
                    <li
                      key={contribution}
                      className="flex gap-3 text-sm leading-relaxed text-[var(--ink-soft)]"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--ink)]"
                      />
                      {contribution}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="border-t border-[var(--border)] bg-[var(--bg-soft)] p-6 md:p-8 lg:border-l lg:border-t-0">
              <p className="pill w-fit">How it works</p>
              <h4 className="mt-5 text-2xl font-semibold tracking-tight">
                From prompt to live website
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-[var(--ink-soft)]">
                The main steps behind AI4Bazaar, based on the project work.
              </p>
              <ol className="mt-6 space-y-3">
                {ai4bazaarFlow.map((step, index) => (
                  <li
                    key={step.title}
                    className="flex gap-4 rounded-2xl border border-[var(--border)] bg-white p-4"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--ink)] font-[family-name:var(--font-mono)] text-xs text-white">
                      0{index + 1}
                    </span>
                    <div>
                      <p className="text-sm font-semibold">{step.title}</p>
                      <p className="mt-1 text-sm leading-relaxed text-[var(--ink-soft)]">
                        {step.detail}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </article>

        <div className="mt-8 grid items-stretch gap-5 md:grid-cols-2">
          {others.map((project, index) => (
            <article
              key={project.id}
              className="surface-card flex h-full min-h-72 flex-col p-6 transition duration-200 hover:-translate-y-1 hover:shadow-[var(--shadow-hover)]"
            >
              <div className="flex items-start justify-between gap-3">
                <span className="mono-label pt-1">0{index + 1}</span>
                <p className="pill max-w-[85%] text-right text-xs">
                  {project.theme}
                </p>
              </div>
              <h3 className="mt-5 text-2xl font-semibold tracking-tight">
                {project.name}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--ink-soft)]">
                {project.description}
              </p>
              <div className="mt-auto flex flex-wrap gap-2 pt-6">
                {project.stack.map((technology) => (
                  <span key={technology} className="pill !px-2.5 !py-1 !text-xs">
                    {technology}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
