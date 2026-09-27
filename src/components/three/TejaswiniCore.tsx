"use client";

import { Float, OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import type { Group } from "three";
import { useDevicePerf } from "@/lib/hooks/useDevicePerf";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";

function IdentityCore({ spinning }: { spinning: boolean }) {
  const group = useRef<Group>(null);

  useFrame((_, delta) => {
    if (!spinning || !group.current) return;
    group.current.rotation.y += delta * 0.35;
    group.current.rotation.x = Math.sin(performance.now() * 0.0004) * 0.15;
  });

  return (
    <group ref={group}>
      <mesh>
        <icosahedronGeometry args={[1.1, 1]} />
        <meshStandardMaterial color="#0a0a0a" roughness={0.35} metalness={0.2} />
      </mesh>
      <mesh scale={1.08}>
        <icosahedronGeometry args={[1.1, 1]} />
        <meshBasicMaterial color="#ffffff" wireframe transparent opacity={0.35} />
      </mesh>
      {[1.6, 2.05].map((r, i) => (
        <mesh key={r} rotation={[Math.PI / 2.2 + i * 0.4, i * 0.5, 0.2]}>
          <torusGeometry args={[r, 0.018, 16, 100]} />
          <meshStandardMaterial
            color={i ? "#52525b" : "#0a0a0a"}
            roughness={0.4}
            metalness={0.1}
          />
        </mesh>
      ))}
    </group>
  );
}

function FloatingSlabs({ count, spinning }: { count: number; spinning: boolean }) {
  const nodes = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => {
        const a = (i / count) * Math.PI * 2;
        return {
          x: Math.cos(a) * 2.4,
          y: Math.sin(a * 1.7) * 0.9,
          z: Math.sin(a) * 2.4,
          rx: a,
          s: 0.35 + (i % 3) * 0.08,
        };
      }),
    [count],
  );

  return (
    <>
      {nodes.map((n, i) => (
        <Float
          key={i}
          speed={spinning ? 1.2 : 0}
          floatIntensity={spinning ? 0.5 : 0}
          rotationIntensity={spinning ? 0.2 : 0}
        >
          <mesh position={[n.x, n.y, n.z]} rotation={[n.rx, 0.3, 0.2]} scale={n.s}>
            <boxGeometry args={[1.2, 0.12, 0.8]} />
            <meshStandardMaterial
              color={i % 2 ? "#f4f4f5" : "#18181b"}
              roughness={0.45}
              metalness={0.05}
            />
          </mesh>
        </Float>
      ))}
    </>
  );
}

export function TejaswiniCore({
  pointer = { x: 0, y: 0 },
}: {
  pointer?: { x: number; y: number };
}) {
  const root = useRef<Group>(null);
  const reduced = useReducedMotion();
  const { tier } = useDevicePerf();
  const spinning = !reduced;
  const slabCount = tier === "low" ? 5 : tier === "medium" ? 8 : 10;

  useFrame(() => {
    if (!root.current) return;
    root.current.rotation.y += (pointer.x * 0.2 - root.current.rotation.y) * 0.04;
    root.current.rotation.x += (-pointer.y * 0.15 - root.current.rotation.x) * 0.04;
  });

  return (
    <>
      <color attach="background" args={["#f4f4f5"]} />
      <ambientLight intensity={0.85} />
      <directionalLight position={[4, 6, 3]} intensity={1.2} color="#ffffff" />
      <directionalLight position={[-3, -2, 2]} intensity={0.35} color="#d4d4d8" />
      <group ref={root}>
        <IdentityCore spinning={spinning} />
        <FloatingSlabs count={slabCount} spinning={spinning} />
      </group>
      {!reduced && (
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={spinning}
          autoRotateSpeed={0.35}
          maxPolarAngle={Math.PI / 1.55}
          minPolarAngle={Math.PI / 3}
        />
      )}
    </>
  );
}
