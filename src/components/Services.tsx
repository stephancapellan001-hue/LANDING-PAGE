import { motion } from "motion/react";
import { 
  BarChart3, 
  Settings, 
  Zap, 
  Package, 
  TrendingUp, 
  ShieldCheck,
  ChevronRight
} from "lucide-react";

const services = [
  {
    title: "KPIs e Indicadores",
    desc: "Diseño de indicadores claros para medir el rendimiento y detectar oportunidades.",
    example: "Ej: Dashboard de ventas en tiempo real con alertas de desviación.",
    icon: <BarChart3 className="w-6 h-6" />,
    color: "neon-cyan"
  },
  {
    title: "Dashboards Excel",
    desc: "Tableros dinámicos para visualizar ventas, inventarios y costos con un clic.",
    example: "Ej: Reporte automatizado de P&L con segmentación por producto.",
    icon: <Settings className="w-6 h-6" />,
    color: "neon-purple"
  },
  {
    title: "Optimización Lean & Kaizen",
    desc: "Implementación de herramientas como 5S, VSM, SMED y Poka-Yoke para eliminar desperdicios.",
    example: "Ej: Reducción del 20% en tiempo de ciclo mediante mapeo de flujo (VSM).",
    icon: <Zap className="w-6 h-6" />,
    color: "white"
  },
  {
    title: "Gestión de Inventarios",
    desc: "Sistemas eficientes utilizando Análisis ABC para optimizar el flujo de caja.",
    example: "Ej: Clasificación ABC para priorizar el 80% del valor del stock.",
    icon: <Package className="w-6 h-6" />,
    color: "neon-cyan"
  },
  {
    title: "Estandarización",
    desc: "Creación de procesos replicables y eficientes para garantizar la calidad.",
    example: "Ej: Manuales de procedimientos digitales con control de versiones.",
    icon: <ShieldCheck className="w-6 h-6" />,
    color: "neon-purple"
  },
  {
    title: "Visión Estratégica",
    desc: "Consultoría integral para el crecimiento sostenible de tu negocio.",
    example: "Ej: Plan maestro de expansión basado en capacidad instalada.",
    icon: <TrendingUp className="w-6 h-6" />,
    color: "white"
  }
];

export default function Services() {
  return (
    <section id="servicios" className="relative py-32 bg-black overflow-hidden">
      <div className="absolute inset-0 bg-grid-lines opacity-5" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-24">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-[1px] bg-neon-cyan" />
              <span className="terminal-text text-neon-cyan">Service_Modules</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-display font-black tracking-tighter text-white">
              CAPACIDADES <br />
              <span className="text-zinc-800">TÉCNICAS.</span>
            </h2>
          </div>
          <p className="text-zinc-500 max-w-sm font-light leading-relaxed">
            Soluciones modulares diseñadas para integrarse en cualquier ecosistema industrial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              className="bg-black p-12 group relative overflow-hidden hover:bg-zinc-900 transition-colors duration-500"
            >
              {/* Hardware Accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-white/5 group-hover:bg-neon-cyan/40 transition-colors" />
              
              <div className={`mb-8 text-${service.color} group-hover:scale-110 transition-transform duration-500`}>
                {service.icon}
              </div>

              <h3 className="text-2xl font-display font-black text-white mb-4 group-hover:text-neon-cyan transition-colors">
                {service.title}
              </h3>
              
              <p className="text-zinc-500 font-light leading-relaxed mb-8 group-hover:text-zinc-300 transition-colors">
                {service.desc}
              </p>

              {/* Tooltip/Example - Hardware Style */}
              <div className="relative mt-auto">
                <div className="flex items-center gap-2 text-[10px] font-mono text-neon-cyan opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                  <ChevronRight className="w-3 h-3" />
                  <span>{service.example}</span>
                </div>
              </div>

              {/* Corner Accent */}
              <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-white/10 group-hover:border-neon-cyan transition-colors" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
