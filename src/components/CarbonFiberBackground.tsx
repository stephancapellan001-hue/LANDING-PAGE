import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import React, { useEffect, useState } from "react";

const SHARD_COUNT = 40;

interface ShardData {
  id: number;
  x: number;
  y: number;
  rotate: number;
  size: number;
}

export default function CarbonFiberBackground() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
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

  const [shards, setShards] = useState<ShardData[]>([]);

  useEffect(() => {
    const newShards = Array.from({ length: SHARD_COUNT }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      rotate: Math.random() * 360,
      size: Math.random() * 100 + 50,
    }));
    setShards(newShards);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-5 overflow-hidden">
      {shards.map((shard) => (
        <Shard key={shard.id} shard={shard} mouseX={springX} mouseY={springY} />
      ))}
    </div>
  );
}

const Shard: React.FC<{ shard: ShardData; mouseX: any; mouseY: any }> = ({ shard, mouseX, mouseY }) => {
  // Calculate displacement based on mouse position
  const tx = useTransform(mouseX, (val: number) => {
    if (typeof window === 'undefined') return 0;
    const shardX = (shard.x / 100) * window.innerWidth;
    const diff = val - shardX;
    const dist = Math.abs(diff);
    if (dist < 300) {
      return (diff / 300) * -40;
    }
    return 0;
  });

  const ty = useTransform(mouseY, (val: number) => {
    if (typeof window === 'undefined') return 0;
    const shardY = (shard.y / 100) * window.innerHeight;
    const diff = val - shardY;
    const dist = Math.abs(diff);
    if (dist < 300) {
      return (diff / 300) * -40;
    }
    return 0;
  });

  return (
    <motion.div
      style={{
        left: `${shard.x}%`,
        top: `${shard.y}%`,
        width: shard.size,
        height: 1,
        rotate: shard.rotate,
        x: tx,
        y: ty,
      }}
      className="absolute bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-900 opacity-30 shadow-[0_0_10px_rgba(0,0,0,0.5)]"
    >
      <div className="w-full h-full relative">
        <div className="absolute inset-0 bg-black/20" />
      </div>
    </motion.div>
  );
}
