import { motion, useScroll, useSpring } from "motion/react";

export default function ScrollIndicator() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 h-64 w-[2px] bg-white/5 z-50 hidden md:block">
      <motion.div
        className="w-full bg-neon-cyan origin-top shadow-[0_0_10px_rgba(0,242,255,0.8)]"
        style={{ scaleY, height: "100%" }}
      />
      <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[8px] font-mono text-neon-cyan/50 rotate-90">START</div>
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[8px] font-mono text-neon-cyan/50 rotate-90">END</div>
    </div>
  );
}
