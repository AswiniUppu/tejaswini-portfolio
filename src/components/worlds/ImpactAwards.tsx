"use client";

import { Trophy } from "lucide-react";
import { motion } from "motion/react";
import { awards } from "@/data/portfolio";
import {
  SectionEyebrow,
  SectionHeading,
  SectionSupport,
} from "@/components/ui/Section";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";

export function ImpactAwards() {
  const reduced = useReducedMotion();

  return (
    <section
      id="impact"
      className="world-section"
      aria-labelledby="impact-heading"
    >
      <div className="mx-auto max-w-6xl">
        <SectionEyebrow>05 / Achievements</SectionEyebrow>
        <SectionHeading>
          <span id="impact-heading">Recognition earned through the work</span>
        </SectionHeading>
        <SectionSupport>
          A few milestones recognizing engineering, teamwork, and project
          delivery.
        </SectionSupport>

        <div className="relative mx-auto mt-14 h-64 max-w-5xl sm:h-72 md:h-96">
          <svg
            aria-hidden="true"
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 1000 400"
            preserveAspectRatio="none"
          >
            <motion.path
              d="M 25 365 C 160 355 205 325 300 315 S 440 290 520 235 S 670 215 740 155 S 870 75 940 25"
              fill="none"
              stroke="#0a0a0a"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray="8 12"
              initial={reduced ? false : { pathLength: 0 }}
              whileInView={reduced ? undefined : { pathLength: 1 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
            {[
              [300, 315],
              [625, 200],
              [900, 45],
            ].map(([cx, cy], index) => (
              <motion.circle
                key={index}
                cx={cx}
                cy={cy}
                r="8"
                fill="white"
                stroke="#0a0a0a"
                strokeWidth="3"
                initial={reduced ? false : { scale: 0 }}
                whileInView={reduced ? undefined : { scale: 1 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ delay: 0.7 + index * 0.25, type: "spring" }}
              />
            ))}
          </svg>
          <motion.div
            aria-hidden="true"
            className="absolute right-[4%] top-0"
            initial={reduced ? false : { opacity: 0, y: 8 }}
            whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ delay: 1.3, duration: 0.45 }}
          >
            <Trophy size={34} strokeWidth={1.6} />
          </motion.div>
        </div>

        <ol className="mx-auto grid max-w-5xl gap-8 border-t-2 border-black pt-8 sm:grid-cols-3 sm:gap-10 md:pt-10">
          {awards.map((award, index) => (
            <motion.li
              key={award.id}
              initial={reduced ? false : { opacity: 0, y: 12 }}
              whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: reduced ? 0 : index * 0.15 }}
              className="relative"
            >
              <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.14em] text-black">
                {award.year ?? "Project award"}
              </p>
              <h3 className="mt-2 max-w-xs text-xl font-semibold leading-snug tracking-tight text-black md:text-2xl">
                {award.name}
              </h3>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
