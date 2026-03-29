import { motion } from "motion/react";
import { Mail, Phone, Linkedin, Send, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contacto" className="relative py-32 bg-black overflow-hidden">
      <div className="absolute inset-0 bg-grid-lines opacity-5" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col items-center text-center space-y-16">
          {/* Contact Info Side */}
          <div className="space-y-12 max-w-2xl">
            <div className="space-y-6">
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-[1px] bg-neon-cyan" />
                <span className="terminal-text text-neon-cyan">Communication_Channel</span>
                <div className="w-12 h-[1px] bg-neon-cyan" />
              </div>
              <h2 className="text-6xl md:text-8xl font-display font-black tracking-tighter leading-[0.85] text-white">
                HABLEMOS DEL <br />
                <span className="text-zinc-800">FUTURO.</span>
              </h2>
              <p className="text-xl text-zinc-500 font-light leading-relaxed">
                Estamos listos para optimizar tu infraestructura. Inicia la conexión hoy mismo.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { icon: <Mail className="w-5 h-5" />, label: "Email", value: "stephancapellan001@gmail.com" },
                { icon: <Phone className="w-5 h-5" />, label: "Phone", value: "+1 (829) 975-0641" },
                { icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn", value: "Stephan Capellán" },
                { icon: <MapPin className="w-5 h-5" />, label: "Location", value: "La Vega, República Dominicana" },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex flex-col items-center gap-4 p-8 border border-white/10 rounded-xl bg-white/5 hover:border-neon-cyan transition-colors group cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-lg border border-white/10 flex items-center justify-center group-hover:border-neon-cyan transition-colors bg-black">
                    <div className="text-neon-cyan group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest mb-1">{item.label}</div>
                    <div className="text-white font-display font-bold group-hover:text-neon-cyan transition-colors">{item.value}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
