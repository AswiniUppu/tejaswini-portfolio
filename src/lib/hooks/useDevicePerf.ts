"use client";

import { useSyncExternalStore } from "react";

export type PerfTier = "high" | "medium" | "low";

type PerfState = {
  tier: PerfTier;
  isTouch: boolean;
  isMobile: boolean;
};

const serverSnapshot: PerfState = {
  tier: "medium",
  isTouch: false,
  isMobile: false,
};

let cached: PerfState | null = null;

function readPerf(): PerfState {
  const touch =
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0 ||
    window.matchMedia("(pointer: coarse)").matches;
  const mobile = window.matchMedia("(max-width: 768px)").matches;
  const cores = navigator.hardwareConcurrency || 4;
  const memory =
    (navigator as Navigator & { deviceMemory?: number }).deviceMemory ?? 4;

  let tier: PerfTier = "high";
  if (mobile || touch || cores <= 4 || memory <= 4) tier = "medium";
  if (cores <= 2 || memory <= 2 || mobile) tier = "low";

  if (
    cached &&
    cached.tier === tier &&
    cached.isTouch === touch &&
    cached.isMobile === mobile
  ) {
    return cached;
  }

  cached = { tier, isTouch: touch, isMobile: mobile };
  return cached;
}

function subscribe(onStoreChange: () => void) {
  const mq = window.matchMedia("(max-width: 768px)");
  const onChange = () => {
    cached = null;
    onStoreChange();
  };
  mq.addEventListener("change", onChange);
  window.addEventListener("resize", onChange);
  return () => {
    mq.removeEventListener("change", onChange);
    window.removeEventListener("resize", onChange);
  };
}

export function useDevicePerf() {
  return useSyncExternalStore(subscribe, readPerf, () => serverSnapshot);
}
