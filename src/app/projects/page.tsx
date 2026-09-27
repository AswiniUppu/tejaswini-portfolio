import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  GraduationCap,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { projects } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected projects by Tejaswini Uppu: an automated website generator, a digital vehicle passport, and e-learning platforms.",
};

function ProjectArtwork({ projectId }: { projectId: string }) {
  if (projectId === "ai4bazaar") {
    return (
      <div className="relative flex min-h-[22rem] flex-col justify-between overflow-hidden rounded-[1.75rem] bg-black p-7 text-white md:min-h-[28rem] md:p-10">
        <div className="flex items-center justify-between border-b border-white/20 pb-4">
          <span className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.2em] text-white/65">Outcome snapshot</span>
          <Sparkles size={20} strokeWidth={1.5} aria-hidden />
        </div>
        <div className="py-8">
          <p className="text-7xl font-semibold tracking-[-0.08em] md:text-8xl">200<span className="text-white/45">+</span></p>
          <p className="mt-1 text-sm uppercase tracking-[0.18em] text-white/70">Client websites generated</p>
        </div>
        <div className="grid grid-cols-4 gap-2 border-t border-white/20 pt-5">
          {["Prompt", "AI", "Site", "Live"].map((stage, index) => (
            <div key={stage} className="min-w-0">
              <p className="font-[family-name:var(--font-mono)] text-[0.65rem] text-white/45">0{index + 1}</p>
              <p className="mt-1 truncate text-xs font-medium md:text-sm">{stage}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (projectId === "rdvp") {
    return (
      <div className="relative flex min-h-[22rem] flex-col justify-between overflow-hidden rounded-[1.75rem] bg-black p-7 text-white md:min-h-[28rem] md:p-10">
        <div className="flex items-center justify-between border-b border-white/20 pb-4">
          <span className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.2em] text-white/65">Privacy by design</span>
          <ShieldCheck size={21} strokeWidth={1.5} aria-hidden />
        </div>
        <div className="flex flex-col items-center justify-center gap-3 py-6 sm:flex-row sm:gap-5 sm:py-8">
          <div className="text-center">
            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-white/35 text-xs">A</span>
            <span className="mt-2 block text-xs text-white/65">Vehicle owner</span>
          </div>
          <ArrowRight className="-rotate-90 shrink-0 text-white/55 sm:rotate-0" aria-hidden />
          <div className="rounded-full border border-white/40 px-4 py-3 text-center font-[family-name:var(--font-mono)] text-xs tracking-widest sm:px-5">•••••  ••••</div>
          <ArrowRight className="-rotate-90 shrink-0 text-white/55 sm:rotate-0" aria-hidden />
          <div className="text-center">
            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-white/35 text-xs">B</span>
            <span className="mt-2 block text-xs text-white/65">Connected user</span>
          </div>
        </div>
        <p className="border-t border-white/20 pt-5 text-sm leading-relaxed text-white/70">Contact can happen without exposing a personal phone number.</p>
      </div>
    );
  }

  return (
    <div className="relative flex min-h-[22rem] flex-col justify-between overflow-hidden rounded-[1.75rem] bg-black p-7 text-white md:min-h-[28rem] md:p-10">
      <div className="flex items-center justify-between border-b border-white/20 pb-4">
        <span className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.2em] text-white/65">Learning platform</span>
        <GraduationCap size={22} strokeWidth={1.5} aria-hidden />
      </div>
      <div className="space-y-5 py-8">
        {["Course management", "Progress tracking", "Lessons & assessment"].map((item, index) => (
          <div key={item} className="flex items-center gap-4">
            <span className="font-[family-name:var(--font-mono)] text-xs text-white/45">0{index + 1}</span>
            <span className="h-px flex-1 bg-white/30" />
            <span className="text-right text-sm font-medium sm:text-base">{item}</span>
          </div>
        ))}
      </div>
      <p className="border-t border-white/20 pt-5 text-sm leading-relaxed text-white/70">A clear path from signing in to learning and checking progress.</p>
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <main id="main" className="world-section !min-h-0 !pt-28 md:!pt-36">
      <div className="mx-auto max-w-6xl">
        <p className="pill w-fit">Selected work · 01—03</p>
        <div className="mt-6 grid gap-8 border-b border-[var(--line)] pb-10 md:grid-cols-[1.1fr_0.9fr] md:items-end md:pb-14">
          <h1 className="max-w-4xl text-5xl font-semibold tracking-tight md:text-7xl">Products built to solve real problems.</h1>
          <p className="max-w-xl text-base leading-relaxed text-[var(--ink-soft)] md:justify-self-end md:text-lg">A closer look at the products I helped build: what they do, the challenges they address, and the work behind them.</p>
        </div>

        <nav aria-label="Jump to a project" className="flex flex-wrap gap-x-7 gap-y-3 border-b border-[var(--line)] py-5">
          {projects.map((project, index) => (
            <a key={project.id} href={`#${project.id}`} className="group inline-flex items-center gap-2 text-sm text-[var(--ink-soft)] transition hover:text-[var(--ink)]">
              <span className="font-[family-name:var(--font-mono)] text-xs text-[var(--ink-faint)]">0{index + 1}</span>
              {project.name}
              <ArrowDown size={13} className="transition-transform group-hover:translate-y-0.5" aria-hidden />
            </a>
          ))}
        </nav>

        <div>
          {projects.map((project, index) => (
            <article key={project.id} id={project.id} className="scroll-mt-28 border-b border-[var(--line)] py-12 md:py-16">
              <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-14">
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.2em] text-[var(--ink-faint)]">PROJECT 0{index + 1} <span className="px-2">/</span> {project.theme}</p>
                  <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">{project.name}</h2>
                  <p className="mt-5 max-w-xl text-base leading-relaxed text-[var(--ink-soft)] md:text-lg">{project.description}</p>

                  <div className="mt-8">
                    <h3 className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.18em] text-[var(--ink-faint)]">The result</h3>
                    <ul className="mt-3 divide-y divide-[var(--line)] border-y border-[var(--line)]">
                      {project.highlights.map((highlight, highlightIndex) => (
                        <li key={highlight} className="grid grid-cols-[2rem_1fr] gap-3 py-3 text-sm leading-relaxed md:text-base">
                          <span className="font-[family-name:var(--font-mono)] text-xs text-[var(--ink-faint)]">0{highlightIndex + 1}</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6">
                    <h3 className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.18em] text-[var(--ink-faint)]">Tools & technologies</h3>
                    <ul className="mt-3 flex flex-wrap gap-x-2 gap-y-2">
                      {project.stack.map((technology) => <li key={technology} className="rounded-full border border-[var(--line)] px-3 py-1.5 text-xs">{technology}</li>)}
                    </ul>
                  </div>

                  {project.links.length > 0 ? (
                    <div className="mt-7 flex flex-wrap gap-3">
                      {project.links.map((link) => (
                        <a key={link.href} href={link.href} target="_blank" rel="noreferrer" className="cta-secondary focus-ring">
                          {link.label}<ArrowUpRight size={15} aria-hidden />
                        </a>
                      ))}
                    </div>
                  ) : null}
                </div>

                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <ProjectArtwork projectId={project.id} />
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-5 rounded-[1.75rem] bg-[var(--bg-soft)] p-6 md:p-8">
          <div>
            <p className="text-2xl font-semibold tracking-tight">Have a project in mind?</p>
            <p className="mt-2 text-sm text-[var(--ink-soft)]">I’d love to hear what you’re working on.</p>
          </div>
          <Link href="/contact" className="cta-primary focus-ring">Let’s talk <ArrowUpRight size={16} aria-hidden /></Link>
        </div>
      </div>
    </main>
  );
}
