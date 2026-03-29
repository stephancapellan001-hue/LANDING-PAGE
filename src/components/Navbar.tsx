import { motion } from "motion/react";
import { Menu, X, Cpu } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Inicio", href: "#" },
    { name: "Servicios", href: "#servicios" },
    { name: "Sobre Mí", href: "#sobre-mi" },
    { name: "Contacto", href: "#contacto" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b border-white/5 ${
        scrolled ? "bg-black/80 backdrop-blur-xl py-4" : "bg-transparent py-8"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <motion.a 
          href="#"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3 group"
        >
          <div className="w-10 h-10 bg-neon-cyan flex items-center justify-center rounded-sm group-hover:rotate-90 transition-transform duration-500">
            <span className="text-black font-display font-black text-xs">IE</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-display font-black tracking-tighter leading-none text-white">
              SOLUTIONS
            </span>
            <span className="text-[8px] font-mono tracking-[0.3em] text-neon-cyan uppercase">Industrial Optimization</span>
          </div>
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-12">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-400 hover:text-neon-cyan transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-neon-cyan transition-all group-hover:w-full" />
            </motion.a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden bg-black border-t border-white/10"
        >
          <div className="flex flex-col p-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-xs font-mono uppercase tracking-widest text-zinc-400 hover:text-neon-cyan"
              >
                {link.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
}
