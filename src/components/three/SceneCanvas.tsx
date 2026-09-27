"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense, useState, type ReactNode } from "react";
import { WorldFallback } from "@/components/ui/Section";
import { usePageVisible } from "@/lib/hooks/usePageVisible";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";
import { useDevicePerf } from "@/lib/hooks/useDevicePerf";

type SceneCanvasProps = {
  children: ReactNode;
  className?: string;
  cameraPosition?: [number, number, number];
  fallbackTitle?: string;
  fallbackDescription?: string;
};

export function SceneCanvas({
  children,
  className,
  cameraPosition = [0, 0, 6],
  fallbackTitle = "3D SCENE",
  fallbackDescription = "Interactive WebGL visualization",
}: SceneCanvasProps) {
  const visible = usePageVisible();
  const reduced = useReducedMotion();
  const { tier } = useDevicePerf();
  const [failed, setFailed] = useState(false);

  const dpr: [number, number] =
    tier === "low" ? [1, 1] : tier === "medium" ? [1, 1.5] : [1, 2];

  if (failed) {
    return (
      <div className={className}>
        <WorldFallback title={fallbackTitle} description={fallbackDescription} />
      </div>
    );
  }

  return (
    <div className={`relative ${className ?? ""}`}>
      <Canvas
        dpr={dpr}
        frameloop={!visible || reduced ? "demand" : "always"}
        camera={{ position: cameraPosition, fov: 42 }}
        gl={{
          antialias: tier !== "low",
          alpha: true,
          powerPreference: "high-performance",
          failIfMajorPerformanceCaveat: false,
        }}
        style={{ width: "100%", height: "100%", position: "relative" }}
        onCreated={({ gl }) => {
          gl.setClearColor(0x000000, 0);
        }}
        onError={() => setFailed(true)}
      >
        <Suspense fallback={null}>{children}</Suspense>
      </Canvas>
    </div>
  );
}
