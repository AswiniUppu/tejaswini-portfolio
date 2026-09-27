"use client";

import { Line, Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useMemo, useRef, useState } from "react";
import type { Group } from "three";
import { skillCategories } from "@/data/portfolio";
import { useDevicePerf } from "@/lib/hooks/useDevicePerf";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";

type NodeData = {
  id: string;
  label: string;
  line: string;
  position: [number, number, number];
};

export function SkillsConstellation({
  onHover,
}: {
  onHover?: (label: string | null, line?: string) => void;
}) {
  const group = useRef<Group>(null);
  const reduced = useReducedMotion();
  const { tier } = useDevicePerf();
  const [active, setActive] = useState<string | null>(null);

  const nodes: NodeData[] = useMemo(
    () =>
      skillCategories.map((cat, i) => {
        const angle = (i / skillCategories.length) * Math.PI * 2;
        const radius = 2.35;
        return {
          id: cat.id,
          label: cat.label,
          line: cat.line,
          position: [
            Math.cos(angle) * radius,
            Math.sin(angle * 1.4) * 0.85,
            Math.sin(angle) * radius,
          ],
        };
      }),
    [],
  );

  const links = useMemo(() => {
    const pairs: Array<[NodeData, NodeData]> = [];
    for (let i = 0; i < nodes.length; i++) {
      pairs.push([nodes[i], nodes[(i + 1) % nodes.length]]);
      if (tier !== "low") pairs.push([nodes[i], nodes[(i + 2) % nodes.length]]);
    }
    return pairs;
  }, [nodes, tier]);

  useFrame((_, delta) => {
    if (reduced || !group.current) return;
    group.current.rotation.y += delta * 0.1;
  });

  return (
    <>
      <color attach="background" args={["#f4f4f5"]} />
      <ambientLight intensity={0.9} />
      <directionalLight position={[3, 4, 2]} intensity={1} />
      <group ref={group}>
        {links.map(([a, b], i) => (
          <Line
            key={i}
            points={[a.position, b.position]}
            color={
              active === a.id || active === b.id ? "#0a0a0a" : "#a1a1aa"
            }
            lineWidth={active === a.id || active === b.id ? 2 : 1}
          />
        ))}
        {nodes.map((node) => {
          const expanded = active === node.id;
          return (
            <group key={node.id} position={node.position}>
              <mesh
                scale={expanded ? 1.4 : 1}
                onPointerOver={(e) => {
                  e.stopPropagation();
                  setActive(node.id);
                  onHover?.(node.label, node.line);
                }}
                onPointerOut={() => {
                  setActive(null);
                  onHover?.(null);
                }}
              >
                <boxGeometry args={[0.55, 0.12, 0.55]} />
                <meshStandardMaterial
                  color={expanded ? "#0a0a0a" : "#ffffff"}
                  roughness={0.35}
                  metalness={0.05}
                />
              </mesh>
              <Text
                position={[0, 0.38, 0]}
                fontSize={0.15}
                color="#0a0a0a"
                anchorX="center"
                anchorY="middle"
              >
                {node.label}
              </Text>
            </group>
          );
        })}
      </group>
    </>
  );
}
