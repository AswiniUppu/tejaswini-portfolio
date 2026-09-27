"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { profile } from "@/data/portfolio";
import { WorldFallback } from "@/components/ui/Section";
import { useWebGLSupport } from "@/lib/hooks/useWebGL";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";
import { useDevicePerf } from "@/lib/hooks/useDevicePerf";

const SceneCanvas = dynamic(
  () => import("@/components/three/SceneCanvas").then((m) => m.SceneCanvas),
  { ssr: false },
);

const TejaswiniCore = dynamic(
  () => import("@/components/three/TejaswiniCore").then((m) => m.TejaswiniCore),
  { ssr: false },
);

export function HeroCore() {
  const { supported, checked } = useWebGLSupport();
  const reduced = useReducedMotion();
  const { isMobile } = useDevicePerf();
  const [pointer, setPointer] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (reduced || isMobile) return;
    const onMove = (e: MouseEvent) => {
      setPointer({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      });
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [reduced, isMobile]);

  return (
    <section
      id="core"
      className="world-section relative flex min-h-[100svh] items-center pt-28"
      aria-labelledby="hero-heading"
    >
      <div className="relative z-10 mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <p className="pill mb-6">
            Welcome · {profile.role}
            <span className="sketch-star ml-1" aria-hidden />
          </p>
          <h1
            id="hero-heading"
            className="max-w-xl text-4xl font-semibold uppercase leading-[1.05] tracking-tight md:text-6xl"
          >
            I craft digital systems that come alive
          </h1>
          <p className="mt-5 max-w-lg text-lg text-[var(--ink-soft)]">
            {profile.support}
          </p>
          <p className="mt-3 max-w-lg text-sm leading-relaxed text-[var(--ink-faint)] md:text-base">
            {profile.description}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#lab"
              className="cta-primary focus-ring"
              data-cursor="interactive"
            >
              Explore my work
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white text-[var(--ink)]">
                <ArrowUpRight size={14} aria-hidden />
              </span>
            </a>
            <a
              href="#contact"
              className="cta-secondary focus-ring"
              data-cursor="interactive"
            >
              Let&apos;s talk
            </a>
          </div>
          <div className="mt-10 flex flex-wrap gap-2">
            {["React", "TypeScript", "Node.js", "AI", "PostgreSQL"].map((t) => (
              <span key={t} className="pill">
                {t}
              </span>
            ))}
          </div>
          <p className="mt-6 text-sm text-[var(--ink-faint)]">
            {profile.name} · {profile.location} · {profile.status}
          </p>
        </div>

        <div
          className="relative h-[420px] w-full overflow-hidden rounded-[2.5rem] bg-[var(--bg-soft)] shadow-[var(--shadow)] md:h-[560px] md:rounded-[3rem]"
          role="img"
          aria-label="Interactive 3D identity core — abstract geometric system for Tejaswini Uppu"
        >
          <span className="absolute left-4 top-4 z-10 rounded-full bg-[var(--ink)] px-3 py-1.5 text-xs font-medium text-white">
            Full-stack systems
          </span>
          {checked && supported ? (
            <SceneCanvas
              className="h-full w-full"
              cameraPosition={[0, 0.15, 6.8]}
              fallbackTitle="Identity core"
              fallbackDescription="Abstract 3D identity — rings, slabs, and structure. Not a photograph."
            >
              <TejaswiniCore pointer={pointer} />
            </SceneCanvas>
          ) : (
            <WorldFallback
              title="Identity core"
              description="Abstract 3D identity — rings, slabs, and structure. Not a photograph."
            />
          )}
        </div>
      </div>
    </section>
  );
}
