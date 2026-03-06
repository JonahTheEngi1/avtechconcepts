import { motion } from "framer-motion";
import { Mic2, MonitorPlay, Settings, Radio } from "lucide-react";

export function Services() {
  const services = [
    {
      title: "Event Production",
      description: "Full-scale technical production for concerts, corporate events, and live shows. We handle everything from stage design to show execution.",
      icon: <MonitorPlay size={32} className="text-primary" />,
      color: "from-blue-500 to-cyan-400"
    },
    {
      title: "System Installation",
      description: "",
      icon: <Settings size={32} className="text-accent" />,
      color: "from-purple-500 to-pink-400"
    },
    {
      title: "Live Streaming",
      description: "I dont know if you actually offer this or could but i needed to fill the space with something for now",
      icon: <Radio size={32} className="text-green-400" />,
      color: "from-green-400 to-emerald-300"
    },
    {
      title: "AV Consulting",
      description: "Expert guidance on acoustic treatment, visual system design, and technology infrastructure for new builds and renovations.",
      icon: <Mic2 size={32} className="text-amber-400" />,
      color: "from-amber-400 to-orange-400"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="services" className="py-24 relative bg-black border-y border-white/5">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-semibold tracking-widest text-primary uppercase mb-3">Our Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold mb-6">Comprehensive AV Solutions</h3>
          <p className="text-lg text-muted-foreground">
            From concept to execution, we provide end-to-end technical solutions 
            that guarantee your production runs without a hitch.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              variants={cardVariants}
              className="group glass-panel rounded-2xl p-8 hover:bg-white/[0.08] transition-all duration-500 relative overflow-hidden"
            >
              {/* Hover gradient effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br transition-opacity duration-500 pointer-events-none ${service.color}"></div>
              
              <div className="mb-6 inline-flex p-4 rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-500">
                {service.icon}
              </div>
              
              <h4 className="text-2xl font-display font-bold mb-4">{service.title}</h4>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
