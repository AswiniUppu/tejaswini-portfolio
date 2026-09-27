"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import { skillCategories } from "@/data/portfolio";
import {
  SectionEyebrow,
  SectionHeading,
  SectionSupport,
  WorldFallback,
} from "@/components/ui/Section";
import { useWebGLSupport } from "@/lib/hooks/useWebGL";

const SceneCanvas = dynamic(
  () => import("@/components/three/SceneCanvas").then((m) => m.SceneCanvas),
  { ssr: false },
);

const SkillsConstellation = dynamic(
  () =>
    import("@/components/three/SkillsConstellation").then(
      (m) => m.SkillsConstellation,
    ),
  { ssr: false },
);

export function SkillsEngine() {
  const { supported, checked } = useWebGLSupport();
  const [hover, setHover] = useState<{ label: string; line: string } | null>(
    null,
  );

  return (
    <section id="engine" className="world-section" aria-labelledby="engine-heading">
      <div className="mx-auto max-w-6xl">
        <SectionEyebrow>02 · The engine</SectionEyebrow>
        <SectionHeading>
          <span id="engine-heading">Skills that ship together</span>
        </SectionHeading>
        <SectionSupport>
          Languages, frontend, APIs, databases, AI integrations, and DevOps —
          connected the way production apps actually move.
        </SectionSupport>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div
            className="h-[380px] overflow-hidden rounded-[2rem] bg-[var(--bg-soft)] shadow-[var(--shadow)] md:h-[460px]"
            role="img"
            aria-label="Interactive 3D skills constellation"
          >
            {checked && supported ? (
              <SceneCanvas
                className="h-full w-full"
                cameraPosition={[0, 0.35, 6.8]}
                fallbackTitle="Skill constellation"
                fallbackDescription="Hover nodes for Languages, Frontend, Backend, Databases, AI, and DevOps."
              >
                <SkillsConstellation
                  onHover={(label, line) =>
                    setHover(label && line ? { label, line } : null)
                  }
                />
              </SceneCanvas>
            ) : (
              <WorldFallback
                title="Skill constellation"
                description="Hover nodes for Languages, Frontend, Backend, Databases, AI, and DevOps."
              />
            )}
          </div>

          <div className="space-y-4">
            <div className="surface-card p-5">
              <p className="mono-label">Active node</p>
              <p className="mt-2 text-xl font-semibold">
                {hover?.label ?? "Hover a slab"}
              </p>
              <p className="mt-2 text-sm text-[var(--ink-soft)]">
                {hover?.line ??
                  "Brighten a category to expand connections and read its focus."}
              </p>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {skillCategories.map((cat) => (
                <li key={cat.id} className="surface-card p-4">
                  <p className="text-sm font-semibold">{cat.label}</p>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--ink-faint)]">
                    {cat.skills.join(" · ")}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
