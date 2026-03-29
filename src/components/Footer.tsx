export default function Footer() {
  return (
    <footer className="py-16 px-6 md:px-12 border-t border-white/5 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-5" />
      
      <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="text-2xl font-display font-black tracking-tighter flex items-center gap-2">
            <div className="w-8 h-8 bg-neon-cyan rounded-sm flex items-center justify-center text-black text-xs">IE</div>
            <span className="text-white">SOLUTIONS</span>
          </div>
          <p className="text-zinc-600 text-[10px] uppercase tracking-[0.3em] font-bold">
            Engineering the Industrial Future
          </p>
        </div>
        
        <div className="text-[10px] text-zinc-600 uppercase tracking-[0.2em] font-bold text-center md:text-left">
          © {new Date().getFullYear()} IE SOLUTIONS. SYSTEM_STATUS: <span className="text-neon-cyan">OPTIMIZED</span>
        </div>

        <div className="flex gap-8">
          {["LinkedIn"].map((social) => (
            <a
              key={social}
              href="#"
              className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 hover:text-neon-cyan transition-colors"
            >
              {social}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
