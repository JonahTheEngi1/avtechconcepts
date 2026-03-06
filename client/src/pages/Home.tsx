import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Rentals } from "@/components/sections/Rentals";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col w-full selection:bg-primary/30">
      <Navbar />
      
      <main className="flex-grow w-full">
        <Hero />
        <About />
        <Services />
        <Rentals />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
