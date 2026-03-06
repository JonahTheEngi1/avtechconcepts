import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Rentals() {
  const equipment = [
    {
      name: "Line Array PA Systems",
      category: "Audio",
      image: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?q=80&w=2070&auto=format&fit=crop" /* large concert speakers */
    },
    {
      name: "Digital Mixing Consoles",
      category: "Audio Control",
      image: "https://images.unsplash.com/photo-1621532812429-0125ea556094?q=80&w=2070&auto=format&fit=crop" /* digital audio mixer */
    },
    {
      name: "Intelligent Lighting Rigs",
      category: "Lighting",
      image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=2070&auto=format&fit=crop" /* stage lighting rig */
    },
    {
      name: "Modular LED Walls",
      category: "Visual",
      image: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=2062&auto=format&fit=crop" /* concert visual screens */
    }
  ];

  return (
    <section id="rentals" className="py-24 relative bg-background overflow-hidden">
      {/* Decorative BG element */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-full bg-primary/5 blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-semibold tracking-widest text-primary uppercase mb-3">Dry Hire</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold mb-4">Premium Equipment Rentals</h3>
            <p className="text-lg text-muted-foreground">
              Industry-standard, impeccably maintained gear available for dry hire. 
              Everything you need to power your next production.
            </p>
          </div>
          <a 
            href="#contact" 
            className="flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 hover:bg-white hover:text-black transition-all font-semibold whitespace-nowrap"
          >
            Request Inventory List <ArrowRight size={18} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {equipment.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-4 border border-white/10">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500 z-10"></div>
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                
                {/* Overlay UI */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="inline-block px-3 py-1 mb-2 bg-black/50 backdrop-blur-md rounded-full border border-white/20 text-xs font-medium text-white/90">
                    {item.category}
                  </div>
                  <h4 className="text-xl font-display font-bold text-white shadow-black drop-shadow-md">
                    {item.name}
                  </h4>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
