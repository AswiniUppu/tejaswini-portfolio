"use client";

import { Float, Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import type { Group } from "three";
import { awards } from "@/data/portfolio";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";

function Trophy({ active }: { active: boolean }) {
  return (
    <group scale={active ? 1.15 : 1}>
      <mesh position={[0, 0.15, 0]}>
        <cylinderGeometry args={[0.16, 0.2, 0.32, 24]} />
        <meshStandardMaterial
          color={active ? "#0a0a0a" : "#3f3f46"}
          roughness={0.3}
          metalness={0.25}
        />
      </mesh>
      <mesh position={[0, 0.4, 0]}>
        <sphereGeometry args={[0.14, 20, 20]} />
        <meshStandardMaterial color="#f4f4f5" roughness={0.35} />
      </mesh>
      <mesh position={[0, -0.14, 0]}>
        <boxGeometry args={[0.32, 0.08, 0.32]} />
        <meshStandardMaterial color="#18181b" roughness={0.45} />
      </mesh>
    </group>
  );
}

export function AwardsOrbit({
  onSelect,
}: {
  onSelect?: (name: string | null) => void;
}) {
  const group = useRef<Group>(null);
  const reduced = useReducedMotion();
  const [active, setActive] = useState<string | null>(null);

  useFrame((_, delta) => {
    if (reduced || !group.current) return;
    group.current.rotation.y += delta * 0.18;
  });

  return (
    <>
      <color attach="background" args={["#f4f4f5"]} />
      <ambientLight intensity={0.9} />
      <directionalLight position={[2, 4, 3]} intensity={1.1} />
      <mesh>
        <torusGeometry args={[2.3, 0.012, 12, 100]} />
        <meshBasicMaterial color="#a1a1aa" />
      </mesh>
      <group ref={group}>
        {awards.map((award, i) => {
          const angle = (i / awards.length) * Math.PI * 2;
          const x = Math.cos(angle) * 2.3;
          const z = Math.sin(angle) * 2.3;
          const isActive = active === award.id;
          return (
            <Float
              key={award.id}
              speed={reduced ? 0 : 1}
              floatIntensity={reduced ? 0 : 0.4}
              rotationIntensity={0}
            >
              <group
                position={[x, 0, z]}
                onPointerOver={(e) => {
                  e.stopPropagation();
                  setActive(award.id);
                  onSelect?.(award.name);
                }}
                onPointerOut={() => {
                  setActive(null);
                  onSelect?.(null);
                }}
              >
                <Trophy active={isActive} />
                <Text
                  position={[0, -0.55, 0]}
                  fontSize={0.13}
                  maxWidth={1.5}
                  textAlign="center"
                  color="#0a0a0a"
                  anchorX="center"
                  anchorY="top"
                >
                  {award.name}
                </Text>
                {award.year && (
                  <Text
                    position={[0, -0.85, 0]}
                    fontSize={0.11}
                    color="#71717a"
                    anchorX="center"
                    anchorY="top"
                  >
                    {award.year}
                  </Text>
                )}
              </group>
            </Float>
          );
        })}
      </group>
    </>
  );
}
