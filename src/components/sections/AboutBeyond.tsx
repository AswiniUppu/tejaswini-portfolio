"use client";

import { about } from "@/data/portfolio";
import { SectionEyebrow, SectionHeading } from "@/components/ui/Section";

export function AboutBeyond() {
  return (
    <section
      id="about"
      className="world-section !min-h-0 !bg-[var(--bg-soft)]"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <div>
          <SectionEyebrow>Beyond the code</SectionEyebrow>
          <SectionHeading>
            <span id="about-heading">{about.heading}</span>
          </SectionHeading>
        </div>
        <div className="space-y-5 border-l border-[var(--border)] pl-6 md:pl-10">
          {about.paragraphs.map((p) => (
            <p
              key={p}
              className="text-lg leading-relaxed text-[var(--ink-soft)] md:text-xl"
            >
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
