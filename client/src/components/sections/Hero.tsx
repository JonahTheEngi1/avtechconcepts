import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        {/* landing page hero concert stage lighting */}
        <img 
          src="https://pixabay.com/get/gbb943bc0d1c1c3528446b9f1667c416f24f7d3692b574235facd71cc3fffb0366a21a8330b2e57a77c63d5af552eec10cffa1c86811809a04b0bb87de5ee8983_1280.jpg" 
          alt="Concert stage with laser lighting" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/90 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
      </div>

      {/* Decorative Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
          <span className="text-sm font-medium tracking-wide text-white/80">Premium Production Services</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black font-display tracking-tight leading-[1.1] mb-6"
        >
          ELEVATE YOUR <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-accent text-glow">
            AUDIO VISUAL
          </span> EXPERIENCE
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed"
        >
          AV Tech Concepts delivers world-class event production and high-end equipment rentals.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center"
        >
          <a 
            href="#contact"
            className="group relative px-8 py-4 bg-primary text-primary-foreground font-bold rounded-full overflow-hidden w-full sm:w-auto text-center flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:shadow-[0_0_30px_rgba(0,240,255,0.5)] transition-all duration-300 hover:scale-105"
          >
            <span className="relative z-10">Start Your Project</span>
            <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
          </a>
          <a 
            href="#rentals"
            className="group px-8 py-4 bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 text-white font-bold rounded-full w-full sm:w-auto text-center flex items-center justify-center gap-2 transition-all duration-300"
          >
            <Play size={18} className="text-primary" fill="currentColor" />
            <span>View Equipment</span>
          </a>
        </motion.div>
      </div>

    </section>
  );
}
