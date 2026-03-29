import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Brain, Network, Share2, Activity, Cpu, Zap } from "lucide-react";

export default function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const yImage = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const yText = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const stats = [
    { label: "Años de Experiencia", val: "10+", code: "EXP_01" },
    { label: "Proyectos Optimizados", val: "45+", code: "PRJ_02" },
    { 
      label: "", 
      val: "Mercado Global", 
      code: "EFF_03", 
      sub: "EXPERIENCIA EN EMPRESAS NACIONALES E INTERNACIONALES QUE COTIZAN EN LA BOLSA DE VALORES DE LOS ESTADOS UNIDOS" 
    },
  ];

  return (
    <section id="sobre-mi" ref={ref} className="relative py-32 bg-black overflow-hidden border-b border-white/5">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-lines opacity-5" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          {/* Quote Side - Hardware Frame */}
          <motion.div style={{ y: yImage }} className="relative">
            <div className="aspect-[4/5] border border-white/10 p-12 bg-zinc-900 shadow-2xl rounded-lg flex flex-col justify-center">
              <div className="relative w-full h-full flex flex-col justify-center items-center text-center space-y-12">
                {/* Persistent Quote - Editorial Style */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  className="space-y-6"
                >
                  <div className="w-16 h-[1px] bg-neon-cyan mx-auto" />
                  <div className="space-y-4">
                    <p className="text-xl md:text-3xl font-display font-light italic leading-tight text-white">
                      "Hacemos por ti el trabajo más difícil de todos: <br />
                      <span className="text-neon-cyan font-black not-italic">Pensar.</span>"
                    </p>
                    <p className="text-xs font-mono text-zinc-500 uppercase tracking-[0.3em]">
                      — Stephan Capellán
                    </p>
                  </div>
                  <div className="w-16 h-[1px] bg-neon-purple mx-auto" />
                </motion.div>

                {/* Abstract Tech Icon */}
                <div className="relative">
                  <div className="absolute inset-0 bg-neon-cyan/20 blur-2xl rounded-full" />
                  <Brain className="w-16 h-16 text-neon-cyan relative z-10 animate-pulse" />
                </div>
              </div>
            </div>
            
            {/* Technical Overlay */}
            <div className="absolute -top-6 -left-6 w-32 h-32 border-t-2 border-l-2 border-neon-cyan/40 pointer-events-none" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b-2 border-r-2 border-neon-purple/40 pointer-events-none" />
          </motion.div>

          {/* Text Side - Clean Utility */}
          <motion.div style={{ y: yText }} className="space-y-12">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-[1px] bg-neon-cyan" />
                <span className="terminal-text text-neon-cyan">Professional_Identity</span>
              </div>
              
              <h2 className="text-6xl md:text-8xl font-display font-black tracking-tighter leading-[0.85] text-white">
                STEPHAN <br />
                <span className="text-zinc-800">CAPELLÁN.</span>
              </h2>
              
              <p className="text-xl text-zinc-500 font-light leading-relaxed max-w-xl">
                Consultor en Ingeniería Industrial especializado en la transformación de procesos mediante el uso estratégico de datos y metodologías Lean.
              </p>
            </div>

            <div className="p-8 border border-white/10 bg-white/[0.02] rounded-xl relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-neon-cyan" />
              <p className="text-white text-lg leading-relaxed relative z-10">
                Mi enfoque combina el rigor de la ingeniería tradicional con las herramientas digitales más avanzadas para crear sistemas operativos que no solo funcionen, sino que evolucionen.
              </p>
              <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-neon-cyan/5 blur-3xl rounded-full group-hover:bg-neon-cyan/10 transition-colors" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 pt-8">
              {stats.map((stat, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className={i === 2 ? "sm:col-span-2 lg:col-span-1" : ""}
                >
                  <div className="text-4xl font-display font-black text-white mb-2">{stat.val}</div>
                  <div className="space-y-3">
                    {stat.label && (
                      <div className="text-[10px] font-mono text-zinc-600 uppercase tracking-[0.2em] leading-tight">
                        {stat.label}
                      </div>
                    )}
                    {stat.sub && (
                      <div className="text-[11px] font-mono text-neon-cyan leading-relaxed border-l border-neon-cyan/30 pl-4 py-1">
                        {stat.sub}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
