import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { about, education, profile, skillCategories, spokenLanguages } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "About",
  description: "Meet Tejaswini Uppu, a full-stack engineer building production software and AI-powered experiences.",
};

const metrics = [
  { value: "6+", label: "production applications" },
  { value: "200+", label: "AI generated client websites" },
  { value: "<10 min", label: "to take generated sites live" },
  { value: "~90%", label: "less deployment time" },
];

export default function AboutPage() {
  return (
    <main id="main" className="world-section !min-h-0 !pt-24 md:!pt-28">
      <div className="mx-auto max-w-6xl">
        <div className="mt-2 grid gap-8 lg:grid-cols-[1fr_0.72fr] lg:items-start">
          <div>
            <p className="pill w-fit">A little about me</p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight md:text-7xl">{about.heading}</h1>
            <p className="mt-6 text-lg leading-relaxed text-[var(--ink-soft)]">{profile.name} · {profile.role} · {profile.location}</p>
          </div>
          <figure className="relative mx-auto aspect-square w-full max-w-[440px] overflow-hidden rounded-[2rem] bg-[var(--bg-soft)] lg:ml-auto">
            <Image
              src="/images/tejaswini-portrait.png"
              alt="Black-and-white cutout portrait of Tejaswini Uppu wearing a cap and headphones."
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 440px"
              className="object-contain"
            />
            <figcaption className="absolute bottom-4 left-4 rounded-full border border-[var(--border)] bg-white/90 px-4 py-2 text-xs font-medium backdrop-blur-sm">
              Tejaswini Uppu · Hyderabad, India
            </figcaption>
          </figure>
        </div>

        <div className="mt-10 max-w-4xl space-y-5">
          {about.paragraphs.map((paragraph) => <p key={paragraph} className="text-lg leading-relaxed text-[var(--ink-soft)]">{paragraph}</p>)}
        </div>

        <section className="mt-16 border-y border-[var(--line)] py-8" aria-label="Career highlights">
          <div className="grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-4">
            {metrics.map((metric) => (
              <div key={metric.label}>
                <p className="text-3xl font-semibold tracking-tight md:text-4xl">{metric.value}</p>
                <p className="mt-2 max-w-40 text-sm leading-relaxed text-[var(--ink-soft)]">{metric.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16" aria-labelledby="skills-heading">
          <p className="text-xs uppercase tracking-[0.24em] text-[var(--ink-faint)]">Tools I work with</p>
          <h2 id="skills-heading" className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">A practical full-stack toolkit</h2>
          <div className="mt-8 grid gap-x-12 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
            {skillCategories.map((category) => (
              <div key={category.id} className="border-t border-[var(--line)] pt-4">
                <h3 className="text-lg font-semibold">{category.label}</h3>
                <p className="mt-1 text-sm text-[var(--ink-faint)]">{category.line}</p>
                <ul className="mt-4 flex flex-wrap gap-x-2 gap-y-2">
                  {category.skills.map((skill) => <li key={skill} className="rounded-full border border-[var(--line)] px-3 py-1.5 text-sm">{skill}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 grid gap-10 border-t border-[var(--line)] pt-8 md:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-[var(--ink-faint)]">Education</p>
            <h2 className="mt-3 text-2xl font-semibold">{education.degree}</h2>
            <p className="mt-2 text-[var(--ink-soft)]">{education.institution}</p>
            <p className="mt-2 text-sm text-[var(--ink-faint)]">{education.period} · {education.result}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-[var(--ink-faint)]">Languages</p>
            <ul className="mt-3 flex flex-wrap gap-3">
              {spokenLanguages.map((language) => <li key={language.name} className="border-b border-[var(--ink)] pb-1 text-lg">{language.name} <span className="text-sm text-[var(--ink-faint)]">· {language.level}</span></li>)}
            </ul>
          </div>
        </section>

        <div className="mt-14 flex flex-wrap gap-3">
          <Link href="/experience" className="cta-primary focus-ring">Explore my experience <ArrowUpRight size={16} aria-hidden /></Link>
          <Link href="/projects" className="cta-secondary focus-ring">See selected projects</Link>
        </div>
      </div>
    </main>
  );
}
