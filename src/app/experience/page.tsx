import type { Metadata } from "next";
import Link from "next/link";
import { timeline, visys } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Experience timeline for Tejaswini Uppu — RGUKT and Visys Cloud Technologies.",
};

export default function ExperiencePage() {
  return (
    <main id="main" className="world-section mx-auto max-w-4xl pt-28">
      <p className="pill w-fit">Experience</p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
        The journey
      </h1>
      <ol className="mt-10 space-y-6">
        {timeline.map((item) => (
          <li key={item.id} className="surface-card p-6">
            <p className="pill w-fit">{item.period}</p>
            <h2 className="mt-3 text-2xl font-semibold">{item.title}</h2>
            <p className="mt-1 text-[var(--ink-soft)]">{item.org}</p>
            <p className="mt-3 text-sm text-[var(--ink-faint)]">{item.detail}</p>
          </li>
        ))}
      </ol>

      <section className="surface-dark mt-12 p-6 md:p-8">
        <h2 className="text-2xl font-semibold">{visys.heading}</h2>
        <p className="mt-3 text-white/85">
          {visys.stat}{" "}
          <span className="text-sm text-white/50">({visys.statNote})</span>
        </p>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {visys.contributions.map((c) => (
            <li
              key={c}
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/75"
            >
              {c}
            </li>
          ))}
        </ul>
      </section>

      <Link
        href="/#journey"
        className="cta-secondary focus-ring mt-10 inline-flex"
      >
        View immersive timeline
      </Link>
    </main>
  );
}
