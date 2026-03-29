import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export const FloatingChartsBackground: React.FC = () => {
  const { scrollYProgress } = useScroll();
  
  // Transform values for different layers
  const x1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 45]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-[-1]">
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      {/* Floating Line Chart 1 */}
      <motion.div 
        style={{ x: x1, y: y1, rotate }}
        className="absolute top-[10%] left-[5%] w-[300px] h-[150px] opacity-10"
      >
        <svg viewBox="0 0 300 150" className="w-full h-full stroke-neon-cyan fill-none stroke-2">
          <path d="M0,100 L50,80 L100,120 L150,40 L200,90 L250,20 L300,60" />
          <circle cx="50" cy="80" r="3" fill="currentColor" />
          <circle cx="150" cy="40" r="3" fill="currentColor" />
          <circle cx="250" cy="20" r="3" fill="currentColor" />
        </svg>
      </motion.div>

      {/* Floating Bar Chart */}
      <motion.div 
        style={{ x: x2, y: y1 }}
        className="absolute top-[40%] right-[10%] w-[200px] h-[200px] opacity-10"
      >
        <div className="flex items-end gap-2 h-full">
          {[40, 70, 45, 90, 65, 80].map((h, i) => (
            <div 
              key={i} 
              className="bg-neon-purple w-4 rounded-t-sm" 
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      </motion.div>

      {/* Additional Floating Data Nodes */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0.05, 0.15, 0.05],
            y: [0, -50, 0],
            x: [0, 30, 0]
          }}
          transition={{
            duration: 10 + i * 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute w-32 h-32 border border-white/5 rounded-full flex items-center justify-center"
          style={{
            top: `${20 + i * 25}%`,
            left: `${10 + i * 30}%`,
          }}
        >
          <div className="w-1 h-1 bg-neon-cyan rounded-full" />
        </motion.div>
      ))}

      {/* Floating Circular Data */}
      <motion.div 
        style={{ x: x1, rotate: x2 }}
        className="absolute bottom-[20%] left-[15%] w-[150px] h-[150px] opacity-10"
      >
        <div className="w-full h-full border-2 border-dashed border-white rounded-full animate-[spin_20s_linear_infinite]" />
        <div className="absolute inset-4 border-2 border-neon-cyan rounded-full opacity-50" />
        <div className="absolute inset-8 border border-neon-purple rounded-full animate-[ping_3s_ease-in-out_infinite]" />
      </motion.div>

      {/* Floating Data Stream */}
      <motion.div 
        style={{ y: x2 }}
        className="absolute top-[60%] left-[40%] font-mono text-[10px] text-neon-cyan/20 whitespace-nowrap"
      >
        {Array.from({ length: 10 }).map((_, i) => (
          <div key={i}>0x{Math.random().toString(16).slice(2, 10).toUpperCase()} {'>>'} OPTIMIZING_CORE_V{i}</div>
        ))}
      </motion.div>

      {/* Large Background Gradient */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-neon-cyan/5 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-neon-purple/5 blur-[120px] rounded-full" />
    </div>
  );
};
