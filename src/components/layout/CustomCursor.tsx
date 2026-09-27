"use client";

import { useEffect, useState } from "react";
import { useDevicePerf } from "@/lib/hooks/useDevicePerf";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";

type CursorMode = "default" | "interactive" | "view";

export function CustomCursor() {
  const reduced = useReducedMotion();
  const { isTouch, tier } = useDevicePerf();
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [mode, setMode] = useState<CursorMode>("default");
  const [visible, setVisible] = useState(false);

  const disabled = reduced || isTouch || tier === "low";

  useEffect(() => {
    if (disabled) return;

    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
      const target = (e.target as HTMLElement | null)?.closest?.(
        "[data-cursor]",
      ) as HTMLElement | null;
      const next = (target?.dataset.cursor as CursorMode | undefined) ?? "default";
      setMode(next);
    };

    const onLeave = () => setVisible(false);

    window.addEventListener("mousemove", onMove);
    document.documentElement.classList.add("cursor-none-desktop");
    document.addEventListener("mouseleave", onLeave);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.documentElement.classList.remove("cursor-none-desktop");
    };
  }, [disabled]);

  if (disabled || !visible) return null;

  const label =
    mode === "view" ? "VIEW" : mode === "interactive" ? "●" : null;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[90] hidden md:block"
      style={{ transform: `translate3d(${pos.x}px, ${pos.y}px, 0)` }}
    >
      <div
        className={`-translate-x-1/2 -translate-y-1/2 rounded-full border border-[var(--ink)] transition-all duration-150 ${
          mode === "default"
            ? "h-3 w-3 bg-[var(--ink)]"
            : "flex h-12 w-12 items-center justify-center bg-white text-[10px] font-semibold tracking-[0.16em] text-[var(--ink)] shadow-[var(--shadow)]"
        }`}
      >
        {label}
      </div>
    </div>
  );
}
