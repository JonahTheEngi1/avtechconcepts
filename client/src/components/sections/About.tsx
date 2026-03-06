import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export function About() {
  const highlights = [
    "Over X years of industry experience",
    "Vast equipment inventory",
    "Dedicated technical engineering team",
    "Perfect from setup to teardown"
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden glass-panel aspect-[4/5] lg:aspect-square">
              {/* audio mixing console professional */}
              <img 
                src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2070&auto=format&fit=crop" 
                alt="Audio engineer working on a mixing console" 
                className="w-full h-full object-cover opacity-80 mix-blend-luminosity"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-background via-transparent to-transparent"></div>
            </div>
            
            {/* Floating stats card */}
            <div className="absolute -bottom-8 -right-8 glass-panel p-6 rounded-2xl max-w-[200px] hidden sm:block">
              <div className="text-4xl font-display font-black text-primary mb-1">XXX+</div>
              <div className="text-sm text-muted-foreground font-medium">Events flawlessly executed worldwide</div>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-semibold tracking-widest text-primary uppercase mb-3">About Us</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Creating Perfect <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Experiences</span>
            </h3>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              At AV Tech Concepts, we believe that technology should be invisible, leaving only the experience. 
              We are a premier audio-visual production company dedicated to transforming ordinary spaces into 
              extraordinary environments.
            </p>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Whether you're planning a corporate conference, a multi-stage music festival, or require a permanent 
              installation, our team of seasoned engineers brings unmatched precision and cutting-edge technology 
              to ensure your message is seen, heard, and felt.
            </p>

            <ul className="space-y-4 mb-10">
              {highlights.map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="bg-primary/10 rounded-full p-1">
                    <CheckCircle2 size={20} className="text-primary" />
                  </div>
                  <span className="font-medium text-white/90">{item}</span>
                </li>
              ))}
            </ul>

            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 text-primary font-semibold hover:text-white transition-colors group"
            >
              Partner with our team 
              <span className="block w-8 h-[1px] bg-primary group-hover:w-12 group-hover:bg-white transition-all"></span>
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
