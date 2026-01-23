import { Navigation } from "@/components/layout/Navigation";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Projects } from "@/components/sections/Projects";
import { About } from "@/components/sections/About";
import { Blog } from "@/components/sections/Blog";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";
import { MouseTooltipProvider } from "@/components/MouseTooltip";

const Index = () => {
  return (
    <MouseTooltipProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Navigation />
        <main>
          <Hero />
          <Services />
          <Projects />
          <About />
          <Blog />
          <Contact />
        </main>
        <Footer />
      </div>
    </MouseTooltipProvider>
  );
};

export default Index;
