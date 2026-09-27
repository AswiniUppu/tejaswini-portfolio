import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { education, experienceHighlights, profile, spokenLanguages, visys } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Experience",
  description: "Professional experience, achievements, and education for Tejaswini Uppu.",
};

export default function ExperiencePage() {
  return (
    <main id="main" className="world-section !min-h-0 !pt-32 md:!pt-40">
      <div className="mx-auto max-w-6xl">
        <p className="pill w-fit">Experience</p>
        <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight md:text-7xl">Building useful things, then getting them shipped.</h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[var(--ink-soft)]">My work connects product needs with dependable frontend and backend systems. Here are the roles, outcomes, and education behind that work.</p>

        <section className="mt-16 grid gap-10 border-t border-[var(--line)] pt-8 lg:grid-cols-[0.7fr_1.3fr]" aria-labelledby="work-heading">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-[var(--ink-faint)]">May 2024 — Present</p>
            <h2 id="work-heading" className="mt-4 text-3xl font-semibold">Full-Stack Developer</h2>
            <p className="mt-2 text-lg text-[var(--ink-soft)]">Visys Cloud Technologies</p>
            <p className="mt-6 text-sm leading-relaxed text-[var(--ink-faint)]">{visys.stat} delivered across client-facing products.</p>
          </div>
          <div>
            <p className="max-w-3xl text-lg leading-relaxed text-[var(--ink-soft)]">I build React and TypeScript interfaces, Node.js services, and integrations that support real product workflows. I also work directly with clients to understand requirements and demonstrate progress.</p>
            <ul className="mt-8 divide-y divide-[var(--line)] border-y border-[var(--line)]">
              {experienceHighlights.map((highlight, index) => (
                <li key={highlight} className="grid gap-3 py-5 sm:grid-cols-[3rem_1fr]">
                  <span className="font-mono text-sm text-[var(--ink-faint)]">0{index + 1}</span>
                  <span className="leading-relaxed">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mt-16 grid gap-10 border-t border-[var(--line)] pt-8 md:grid-cols-[0.7fr_1.3fr]" aria-labelledby="education-heading">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-[var(--ink-faint)]">Education · {education.period}</p>
            <h2 id="education-heading" className="mt-4 text-3xl font-semibold">{education.degree}</h2>
          </div>
          <div>
            <p className="text-lg text-[var(--ink-soft)]">{education.institution}</p>
            <p className="mt-4 text-2xl font-medium">{education.result}</p>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 border-t border-[var(--line)] pt-5 text-sm text-[var(--ink-faint)]">
              {spokenLanguages.map((language) => <span key={language.name}>{language.name} · {language.level}</span>)}
            </div>
          </div>
        </section>

        <div className="mt-14 flex flex-wrap items-center gap-3">
          <Link href="/projects" className="cta-primary focus-ring">Explore my projects <ArrowUpRight size={16} aria-hidden /></Link>
          <Link href="/contact" className="cta-secondary focus-ring">Get in touch</Link>
          <span className="ml-auto text-sm text-[var(--ink-faint)]">{profile.location}</span>
        </div>
      </div>
    </main>
  );
}
