"use client";

import { motion } from "motion/react";
import { timeline, visys } from "@/data/portfolio";
import {
  SectionEyebrow,
  SectionHeading,
  SectionSupport,
} from "@/components/ui/Section";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";

export function JourneyTimeline() {
  const reduced = useReducedMotion();

  return (
    <section
      id="journey"
      className="world-section bg-[var(--bg-soft)]"
      aria-labelledby="journey-heading"
    >
      <div className="mx-auto max-w-6xl">
        <SectionEyebrow>03 · How the path unfolded</SectionEyebrow>
        <SectionHeading>
          <span id="journey-heading">Education to production</span>
        </SectionHeading>
        <SectionSupport>
          A zig-zag through the journey — scroll freely, no hijacked scrolling.
        </SectionSupport>

        <div className="relative mt-14">
          <div className="zigzag-line pointer-events-none absolute left-1/2 top-0 hidden h-full w-3 -translate-x-1/2 md:block" />
          <ol className="space-y-8 md:space-y-14">
            {timeline.map((item, i) => (
              <motion.li
                key={item.id}
                className={`relative md:grid md:grid-cols-2 md:gap-10 ${
                  i % 2 === 1 ? "md:[&>*:first-child]:col-start-2" : ""
                }`}
                initial={reduced ? false : { opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.45 }}
              >
                <article className="surface-card relative p-6 md:p-8">
                  <p className="pill w-fit">{item.period}</p>
                  <h3 className="mt-4 text-2xl font-semibold tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[var(--ink-soft)]">{item.org}</p>
                  <p className="mt-3 text-sm text-[var(--ink-faint)]">
                    {item.detail}
                  </p>
                </article>
                <span className="absolute left-1/2 top-8 hidden h-3 w-3 -translate-x-1/2 rounded-full bg-[var(--ink)] md:block" />
              </motion.li>
            ))}
          </ol>
          <p className="mt-8 text-center text-sm italic text-[var(--ink-faint)]">
            Ready to ship for real users.
          </p>
        </div>

        <div className="surface-dark mt-16 p-6 md:p-10">
          <p className="pill bg-white/10 text-white/80">{visys.heading}</p>
          <h3 className="mt-4 text-3xl font-semibold md:text-4xl">
            Building for real users
          </h3>
          <p className="mt-4 text-3xl font-semibold text-white md:text-4xl">
            {visys.stat}
          </p>
          <p className="mt-1 text-sm text-white/55">({visys.statNote})</p>

          <div className="mt-8 flex flex-wrap items-center gap-2">
            {visys.system.map((step, i) => (
              <div key={step} className="flex items-center gap-2">
                <span className="rounded-full border border-white/15 bg-white/5 px-3 py-2 font-[family-name:var(--font-mono)] text-[0.65rem] tracking-[0.12em]">
                  {step}
                </span>
                {i < visys.system.length - 1 && (
                  <span className="text-white/40" aria-hidden>
                    →
                  </span>
                )}
              </div>
            ))}
          </div>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {visys.contributions.map((item) => (
              <li
                key={item}
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/75"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
