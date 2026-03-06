import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactMessageSchema, type InsertContactMessage } from "@shared/schema";
import { useSubmitContact } from "@/hooks/use-contact";
import { useToast } from "@/hooks/use-toast";
import { Send, CheckCircle } from "lucide-react";

export function Contact() {
  const { toast } = useToast();
  const mutation = useSubmitContact();
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<InsertContactMessage>({
    resolver: zodResolver(insertContactMessageSchema),
  });

  const onSubmit = (data: InsertContactMessage) => {
    mutation.mutate(data, {
      onSuccess: () => {
        setIsSuccess(true);
        reset();
        toast({
          title: "Message sent successfully!",
          description: "Our team will get back to you shortly.",
        });
        
        // Reset success state after a while
        setTimeout(() => setIsSuccess(false), 5000);
      },
      onError: (error) => {
        toast({
          variant: "destructive",
          title: "Failed to send message",
          description: error.message,
        });
      }
    });
  };

  return (
    <section id="contact" className="py-24 relative bg-black">
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-sm font-semibold tracking-widest text-primary uppercase mb-3">Get in Touch</h2>
              <h3 className="text-4xl md:text-5xl font-display font-bold mb-6">Let's Build Something <br/>Epic.</h3>
              <p className="text-lg text-muted-foreground mb-8">
                Ready to elevate your next event? Fill out the form and we will be in touch to discuss your specific requirements.
              </p>

              <div className="glass-panel p-8 rounded-2xl">
                <h4 className="font-display font-semibold text-xl mb-4">Why choose us?</h4>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-panel p-8 md:p-10 rounded-3xl"
            >
              {isSuccess ? (
                <div className="flex flex-col items-center justify-center py-16 text-center h-full min-h-[400px]">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", bounce: 0.5 }}
                  >
                    <CheckCircle className="w-20 h-20 text-primary mb-6" />
                  </motion.div>
                  <h4 className="text-3xl font-display font-bold mb-4">Request Received</h4>
                  <p className="text-muted-foreground text-lg max-w-sm">
                    Thank you for reaching out. A technical director will contact you within 24 hours.
                  </p>
                  <button 
                    onClick={() => setIsSuccess(false)}
                    className="mt-8 text-primary hover:text-white transition-colors border-b border-primary hover:border-white pb-1"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-white/80 ml-1">Full Name</label>
                      <input
                        id="name"
                        {...register("name")}
                        className={`w-full bg-black/50 border ${errors.name ? 'border-destructive' : 'border-white/10'} rounded-xl px-5 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all`}
                        placeholder="John Doe"
                      />
                      {errors.name && <p className="text-destructive text-sm ml-1">{errors.name.message}</p>}
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-white/80 ml-1">Email Address</label>
                      <input
                        id="email"
                        type="email"
                        {...register("email")}
                        className={`w-full bg-black/50 border ${errors.email ? 'border-destructive' : 'border-white/10'} rounded-xl px-5 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all`}
                        placeholder="john@example.com"
                      />
                      {errors.email && <p className="text-destructive text-sm ml-1">{errors.email.message}</p>}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-white/80 ml-1">Project Details</label>
                    <textarea
                      id="message"
                      rows={5}
                      {...register("message")}
                      className={`w-full bg-black/50 border ${errors.message ? 'border-destructive' : 'border-white/10'} rounded-xl px-5 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none`}
                      placeholder="Tell us about your event dates, location, and specific AV needs..."
                    ></textarea>
                    {errors.message && <p className="text-destructive text-sm ml-1">{errors.message.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={mutation.isPending}
                    className="w-full bg-primary text-primary-foreground font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-primary/90 transition-all hover:shadow-[0_0_20px_rgba(0,240,255,0.3)] disabled:opacity-70 disabled:cursor-not-allowed group"
                  >
                    {mutation.isPending ? (
                      <span className="flex items-center gap-2">
                        <div className="w-5 h-5 border-2 border-background/20 border-t-background rounded-full animate-spin"></div>
                        Sending...
                      </span>
                    ) : (
                      <>
                        Submit Request
                        <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
