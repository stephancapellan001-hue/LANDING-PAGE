import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import React, { useEffect, useState } from "react";

const PARTICLE_COUNT = 100;

interface ParticleData {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
}

export default function ParticleBackground() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 200 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const [particles, setParticles] = useState<ParticleData[]>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: PARTICLE_COUNT }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      opacity: Math.random() * 0.5 + 0.1,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {particles.map((p) => (
        <Particle key={p.id} data={p} mouseX={springX} mouseY={springY} />
      ))}
    </div>
  );
}

const Particle: React.FC<{ data: ParticleData; mouseX: any; mouseY: any }> = ({ data, mouseX, mouseY }) => {
  const tx = useTransform(mouseX, (val: number) => {
    if (typeof window === 'undefined') return 0;
    const pX = (data.x / 100) * window.innerWidth;
    const diff = val - pX;
    const dist = Math.abs(diff);
    if (dist < 200) {
      return (diff / 200) * -30;
    }
    return 0;
  });

  const ty = useTransform(mouseY, (val: number) => {
    if (typeof window === 'undefined') return 0;
    const pY = (data.y / 100) * window.innerHeight;
    const diff = val - pY;
    const dist = Math.abs(diff);
    if (dist < 200) {
      return (diff / 200) * -30;
    }
    return 0;
  });

  return (
    <motion.div
      style={{
        left: `${data.x}%`,
        top: `${data.y}%`,
        width: data.size,
        height: data.size,
        x: tx,
        y: ty,
        opacity: data.opacity,
      }}
      className="absolute bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]"
    />
  );
}
