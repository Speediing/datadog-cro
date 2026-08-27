"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

function FuselageMark() {
  const texture = useMemo(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 2048;
    canvas.height = 420;
    const ctx = canvas.getContext("2d");
    if (!ctx) return null;
    ctx.fillStyle = "#141414";
    ctx.fillRect(0, 0, 2048, 420);
    ctx.fillStyle = "#f7f4ee";
    ctx.font = "700 176px Helvetica, Arial, sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("SpaceX  x  Datadog", 1024, 218);
    const tex = new THREE.CanvasTexture(canvas);
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.anisotropy = 8;
    tex.needsUpdate = true;
    return tex;
  }, []);

  if (!texture) return null;

  return (
    <mesh
      position={[0, 0.28, 0.22]}
      rotation={[0, 0, Math.PI / 2]}
      renderOrder={2}
    >
      <planeGeometry args={[1.18, 0.3]} />
      <meshBasicMaterial
        map={texture}
        toneMapped={false}
        depthTest={false}
      />
    </mesh>
  );
}

function RocketBody() {
  const white = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#f4f0e8",
        roughness: 0.58,
        metalness: 0.22,
      }),
    [],
  );
  const dark = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#1a1a1a",
        roughness: 0.7,
        metalness: 0.35,
      }),
    [],
  );

  return (
    <group>
      <mesh position={[0, 0.08, 0]} material={white}>
        <cylinderGeometry args={[0.16, 0.2, 1.55, 18]} />
      </mesh>
      <mesh position={[0, 1.02, 0]} material={white}>
        <coneGeometry args={[0.16, 0.48, 18]} />
      </mesh>
      <mesh position={[0, 0.18, 0]} material={dark}>
        <cylinderGeometry args={[0.168, 0.168, 0.1, 18]} />
      </mesh>
      <mesh position={[0, -0.78, 0]} material={dark}>
        <cylinderGeometry args={[0.2, 0.22, 0.28, 18]} />
      </mesh>
      {[
        Math.PI / 4,
        (3 * Math.PI) / 4,
        (5 * Math.PI) / 4,
        (7 * Math.PI) / 4,
      ].map((rot) => (
        <mesh
          key={rot}
          position={[Math.sin(rot) * 0.2, -0.84, Math.cos(rot) * 0.2]}
          rotation={[0.5, rot, 0]}
          material={white}
        >
          <boxGeometry args={[0.03, 0.24, 0.16]} />
        </mesh>
      ))}
      <mesh position={[0, -1.05, 0]}>
        <sphereGeometry args={[0.11, 12, 12]} />
        <meshBasicMaterial color="#f3d27a" />
      </mesh>
      <FuselageMark />
    </group>
  );
}

function Flight() {
  const group = useRef<THREE.Group>(null);
  const plume = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    const u = (t % 20) / 20;
    const x = THREE.MathUtils.lerp(-7.4, 7.4, u);
    const y = Math.sin(u * Math.PI) * 0.32;
    if (group.current) {
      group.current.position.set(x, y, 0);
      group.current.rotation.set(0, 0, -Math.PI / 2 - 0.12);
    }
    if (plume.current) {
      const pulse = 1 + Math.sin(t * 11) * 0.12;
      plume.current.scale.set(pulse, 1 + Math.sin(t * 14) * 0.18, pulse);
    }
  });

  return (
    <group ref={group} scale={2.15}>
      <RocketBody />
      <mesh ref={plume} position={[0, -1.42, 0]}>
        <coneGeometry args={[0.07, 0.62, 8]} />
        <meshBasicMaterial color="#f0c35c" transparent opacity={0.28} />
      </mesh>
    </group>
  );
}

function Stars() {
  const geometry = useMemo(() => {
    const count = 42;
    const data = new Float32Array(count * 3);
    for (let i = 0; i < count; i += 1) {
      data[i * 3] = (Math.random() - 0.5) * 16;
      data[i * 3 + 1] = (Math.random() - 0.5) * 3.2;
      data[i * 3 + 2] = -1.5 - Math.random() * 2;
    }
    const next = new THREE.BufferGeometry();
    next.setAttribute("position", new THREE.BufferAttribute(data, 3));
    return next;
  }, []);

  return (
    <points geometry={geometry}>
      <pointsMaterial
        color="#d8c8ff"
        size={0.035}
        transparent
        opacity={0.45}
        sizeAttenuation
      />
    </points>
  );
}

export default function NightRocket() {
  const [fly, setFly] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setFly(!media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  if (!fly) return null;

  return (
    <div className="night-rocket" aria-hidden>
      <Canvas
        gl={{ alpha: true, antialias: true, powerPreference: "low-power" }}
        camera={{ position: [0, 0, 8], fov: 30 }}
        dpr={[1, 1.5]}
        style={{ pointerEvents: "none" }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[4, 3, 6]} intensity={1.05} color="#fff6e8" />
        <pointLight position={[0, -2, 3]} intensity={1.2} color="#f0c35c" />
        <pointLight position={[-3, 2, 4]} intensity={0.55} color="#8b6cc9" />
        <Stars />
        <Flight />
      </Canvas>
    </div>
  );
}
