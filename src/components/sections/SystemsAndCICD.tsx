"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { cicd, systems } from "@/data/portfolio";
import {
  SectionEyebrow,
  SectionHeading,
  SectionSupport,
} from "@/components/ui/Section";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";

export function SystemsLab() {
  const reduced = useReducedMotion();
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (reduced) return;
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % systems.components.length);
    }, 1400);
    return () => window.clearInterval(id);
  }, [reduced]);

  return (
    <section
      id="systems"
      className="world-section !min-h-0 !py-16"
      aria-labelledby="systems-heading"
    >
      <div className="mx-auto max-w-6xl">
        <SectionEyebrow>Systems, not just screens</SectionEyebrow>
        <SectionHeading>
          <span id="systems-heading">{systems.heading}</span>
        </SectionHeading>
        <SectionSupport>{systems.note}</SectionSupport>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {systems.components.map((name, i) => (
            <motion.div
              key={name}
              className={`rounded-2xl border px-5 py-5 font-[family-name:var(--font-mono)] text-sm tracking-[0.14em] ${
                active === i ?
                  "border-[var(--ink)] bg-[var(--ink)] text-white shadow-[var(--shadow)]"
                  : "border-[var(--border)] bg-white text-[var(--ink-soft)]"
              }`}
              animate={
                reduced ?
                  undefined
                  : active === i ?
                     { y: -4 }
                    : { y: 0 }
              }
            >
              {name}
            </motion.div>
          ))}
          <div className="surface-dark p-5 sm:col-span-2 lg:col-span-1">
            <p className="text-xs uppercase tracking-[0.14em] text-white/55">
              Propagation
            </p>
            <p className="mt-2 text-sm text-white/80">
              One component change fans out across 6+ production apps.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function CICDPipeline() {
  const reduced = useReducedMotion();
  const [step, setStep] = useState(0);
  const activeStep = reduced ? cicd.stages.length - 1 : step;

  useEffect(() => {
    if (reduced) return;
    const id = window.setInterval(() => {
      setStep((s) => (s + 1) % cicd.stages.length);
    }, 1100);
    return () => window.clearInterval(id);
  }, [reduced]);

  return (
    <section
      id="cicd"
      className="world-section !min-h-0 !bg-[var(--bg-soft)] !py-16"
      aria-labelledby="cicd-heading"
    >
      <div className="mx-auto max-w-6xl">
        <SectionEyebrow>CI/CD pipeline</SectionEyebrow>
        <h2
          id="cicd-heading"
          className="text-3xl font-semibold tracking-tight md:text-4xl"
        >
          Code to live, automated
        </h2>
        <p className="mt-3 text-[var(--ink-soft)]">
          {cicd.reduction}{" "}
          <span className="text-sm text-[var(--ink-faint)]">
            ({cicd.reductionNote})
          </span>
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-2">
          {cicd.stages.map((stage, i) => (
            <div key={stage} className="flex items-center gap-2">
              <span
                className={`rounded-full border px-3 py-2 font-[family-name:var(--font-mono)] text-[0.65rem] tracking-[0.14em] ${
                  activeStep >= i
                    ? "border-[var(--ink)] bg-[var(--ink)] text-white"
                    : "border-[var(--border)] bg-white text-[var(--ink-faint)]"
                }`}
              >
                {stage}
              </span>
              {i < cicd.stages.length - 1 && (
                <span className="text-[var(--ink-faint)]" aria-hidden>
                  →
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
