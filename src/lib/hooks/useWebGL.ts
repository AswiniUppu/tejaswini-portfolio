"use client";

import { useSyncExternalStore } from "react";

let cached: boolean | null = null;

function detectWebGL() {
  if (cached !== null) return cached;
  try {
    const canvas = document.createElement("canvas");
    const gl =
      canvas.getContext("webgl2") ||
      canvas.getContext("webgl") ||
      canvas.getContext("experimental-webgl");
    cached = Boolean(gl);
  } catch {
    cached = false;
  }
  return cached;
}

function subscribe() {
  return () => undefined;
}

export function useWebGLSupport() {
  const supported = useSyncExternalStore(subscribe, detectWebGL, () => true);
  return { supported, checked: true };
}
