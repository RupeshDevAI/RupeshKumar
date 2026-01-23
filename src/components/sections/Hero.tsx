import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowDown, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TooltipTrigger } from "@/components/MouseTooltip";
import { useRef } from "react";
import developerAvatar from "@/assets/developer-avatar.jpg";

const techStack = [
  "React", "TypeScript", "Node.js", "Python", "Solidity", 
  "AWS", "Docker", "Kubernetes", "TensorFlow", "Web3"
];

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Mouse tracking for parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { stiffness: 150, damping: 20 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);
  
  // Transform values for parallax layers
  const bgX = useTransform(smoothMouseX, [-0.5, 0.5], [20, -20]);
  const bgY = useTransform(smoothMouseY, [-0.5, 0.5], [20, -20]);
  const floatX = useTransform(smoothMouseX, [-0.5, 0.5], [-30, 30]);
  const floatY = useTransform(smoothMouseY, [-0.5, 0.5], [-30, 30]);
  const imageX = useTransform(smoothMouseX, [-0.5, 0.5], [-15, 15]);
  const imageY = useTransform(smoothMouseY, [-0.5, 0.5], [-15, 15]);
  const imageRotateX = useTransform(smoothMouseY, [-0.5, 0.5], [8, -8]);
  const imageRotateY = useTransform(smoothMouseX, [-0.5, 0.5], [-8, 8]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Effects with parallax */}
      <motion.div 
        className="absolute inset-0 gradient-mesh" 
        style={{ x: bgX, y: bgY }}
      />
      <div className="absolute inset-0 noise-overlay" />
      
      {/* Animated Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(hsl(var(--border)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Floating Elements with parallax */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-neon-cyan/10 blur-3xl"
        style={{ x: floatX, y: floatY }}
        animate={{ 
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-40 h-40 rounded-full bg-neon-purple/10 blur-3xl"
        style={{ x: useTransform(floatX, v => -v), y: useTransform(floatY, v => -v) }}
        animate={{ 
          scale: [1.1, 1, 1.1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 right-1/3 w-24 h-24 rounded-full bg-neon-green/10 blur-3xl"
        style={{ x: floatX, y: useTransform(floatY, v => -v) }}
        animate={{ 
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            
            {/* Left Column - 3D Developer Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative flex-shrink-0"
              style={{ 
                perspective: 1000,
              }}
            >
              <motion.div
                className="relative"
                style={{ 
                  x: imageX, 
                  y: imageY,
                  rotateX: imageRotateX,
                  rotateY: imageRotateY,
                  transformStyle: "preserve-3d",
                }}
              >
                {/* Outer glow frame */}
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-neon-cyan via-neon-purple to-neon-green opacity-60 blur-xl" />
                
                {/* Main frame with 3D effect */}
                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden border-2 border-primary/30 shadow-2xl">
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/20 via-transparent to-neon-purple/20 z-10" />
                  
                  {/* Developer image */}
                  <img 
                    src={developerAvatar} 
                    alt="AI & Full Stack Engineer" 
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Scan line effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-cyan/10 to-transparent z-20"
                    animate={{ y: ["100%", "-100%"] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  />
                  
                  {/* Corner accents */}
                  <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-neon-cyan rounded-tl-lg z-20" />
                  <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-neon-purple rounded-tr-lg z-20" />
                  <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-neon-green rounded-bl-lg z-20" />
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-neon-pink rounded-br-lg z-20" />
                </div>

                {/* Floating decorative elements */}
                <motion.div
                  className="absolute -top-6 -right-6 w-12 h-12 rounded-xl border border-neon-cyan/50 bg-card/50 backdrop-blur-sm flex items-center justify-center"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  style={{ transformStyle: "preserve-3d", translateZ: 30 }}
                >
                  <span className="text-lg">⚡</span>
                </motion.div>
                <motion.div
                  className="absolute -bottom-4 -left-4 w-10 h-10 rounded-full border border-neon-purple/50 bg-card/50 backdrop-blur-sm flex items-center justify-center"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  style={{ transformStyle: "preserve-3d", translateZ: 20 }}
                >
                  <span className="text-sm">🚀</span>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right Column - Content */}
            <div className="flex-1 text-center lg:text-left">
              {/* Status Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/50 backdrop-blur-sm mb-6"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-green opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-green" />
                </span>
                <span className="text-sm text-muted-foreground">Available for new projects</span>
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-brutalist text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6"
              >
                <span className="block">AI & Full Stack</span>
                <span className="block text-gradient">Engineer</span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8"
              >
                Bringing ideas to life — from sketches to working applications.
                <span className="block mt-2 text-base">
                  Specializing in <span className="text-neon-cyan">Web</span>, <span className="text-neon-purple">Blockchain</span>, <span className="text-neon-green">AI</span> & <span className="text-neon-pink">Cloud</span>
                </span>
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8"
              >
                <TooltipTrigger text="Explore my projects">
                  <Button
                    size="lg"
                    onClick={scrollToProjects}
                    className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    View My Work
                  </Button>
                </TooltipTrigger>
                <TooltipTrigger text="Let's discuss your project">
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                    className="border-border hover:bg-card px-8 py-6 text-lg rounded-2xl"
                  >
                    Get in Touch
                  </Button>
                </TooltipTrigger>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex items-center justify-center lg:justify-start gap-4"
              >
                {[
                  { icon: Github, href: "#", label: "GitHub" },
                  { icon: Linkedin, href: "#", label: "LinkedIn" },
                  { icon: Twitter, href: "#", label: "Twitter" },
                ].map(({ icon: Icon, href, label }) => (
                  <TooltipTrigger key={label} text={label}>
                    <motion.a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-2xl border border-border hover:border-primary hover:bg-card/50 transition-all shadow-sm hover:shadow-md"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={label}
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  </TooltipTrigger>
                ))}
              </motion.div>
            </div>
          </div>
        </div>

        {/* Tech Stack Ticker */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-24 left-0 right-0 overflow-hidden"
        >
          <div className="flex animate-ticker whitespace-nowrap">
            {[...techStack, ...techStack].map((tech, index) => (
              <span
                key={index}
                className="mx-6 text-sm font-mono text-muted-foreground/50"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-muted-foreground"
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <ArrowDown className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
