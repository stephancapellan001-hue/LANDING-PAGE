import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative min-h-screen bg-black flex items-center overflow-hidden pt-20">
      {/* Background Video/Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-30 grayscale"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-a-circuit-board-4430-large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        <div className="absolute inset-0 bg-grid-lines opacity-10" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div style={{ y: y1, opacity }} className="space-y-8">
            <div className="flex items-center gap-4">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: 60 }}
                className="h-[1px] bg-neon-cyan"
              />
              <span className="terminal-text text-neon-cyan">System_Status: Optimal</span>
            </div>

            <h1 className="text-[12vw] lg:text-[10rem] font-display font-black leading-[0.8] tracking-tighter text-white">
              DATA <br />
              <span className="text-neon-cyan">DRIVEN</span> <br />
              <span className="text-zinc-800">EFFICIENCY.</span>
            </h1>

            <div className="max-w-md space-y-8">
              <p className="text-xl text-zinc-400 font-light leading-relaxed">
                Ingeniería Industrial de alto impacto. Optimizamos procesos complejos mediante análisis avanzado y ejecución estratégica.
              </p>
              
              <div className="flex flex-wrap gap-6">
                <button className="px-8 py-4 bg-neon-cyan text-black font-display font-bold rounded-sm hover:bg-white transition-colors uppercase tracking-widest text-xs">
                  Analizar Proyecto
                </button>
                <button className="px-8 py-4 border border-white/10 text-white font-display font-bold rounded-sm hover:bg-white/5 transition-colors uppercase tracking-widest text-xs">
                  Ver Demo
                </button>
              </div>
            </div>
          </motion.div>

          <motion.div 
            style={{ y: y2 }}
            className="hidden lg:block relative"
          >
            {/* Abstract Tech Element */}
            <div className="relative aspect-square">
              <div className="absolute inset-0 border border-white/5 rounded-full animate-pulse" />
              <div className="absolute inset-12 border border-neon-cyan/20 rounded-full animate-spin-slow" />
              <div className="absolute inset-24 border border-neon-purple/20 rounded-full animate-reverse-spin" />
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 bg-neon-cyan/10 blur-3xl rounded-full" />
                <div className="relative z-10 text-center space-y-2">
                  <div className="text-6xl font-display font-black text-white">99.9%</div>
                  <div className="terminal-text text-neon-cyan">Uptime_Reliability</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-neon-cyan to-transparent" />
        <span className="terminal-text text-[8px] text-zinc-500">MEJORA Y ESTANDARIZACIÓN DE PROCESOS EN GENERAL</span>
      </motion.div>
    </section>
  );
}
