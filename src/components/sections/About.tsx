import { motion } from "framer-motion";
import { Download, MapPin, Calendar, Award } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";

const timeline = [
  {
    year: "2024",
    title: "Senior Full Stack Engineer",
    company: "Tech Company",
    description: "Leading development of AI-powered products and blockchain solutions.",
  },
  {
    year: "2022",
    title: "Blockchain Developer",
    company: "Web3 Startup",
    description: "Built DeFi protocols and NFT platforms handling millions in TVL.",
  },
  {
    year: "2020",
    title: "Full Stack Developer",
    company: "SaaS Company",
    description: "Developed scalable web applications serving thousands of users.",
  },
  {
    year: "2018",
    title: "Started Coding Journey",
    company: "Self-taught",
    description: "Began learning programming and building personal projects.",
  },
];

const stats = [
  { value: "50+", label: "Projects Completed" },
  { value: "30+", label: "Happy Clients" },
  { value: "6+", label: "Years Experience" },
  { value: "99%", label: "Client Satisfaction" },
];

export function About() {
  const { ref, isInView } = useScrollAnimation<HTMLElement>();

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 gradient-mesh opacity-30" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-sm font-mono text-primary uppercase tracking-widest">
            About Me
          </span>
          <h2 className="text-brutalist text-4xl md:text-5xl lg:text-6xl mt-4">
            Meet the <span className="text-gradient">Creator</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Bio */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Profile Card */}
            <div className="relative">
              {/* Profile Image Placeholder */}
              <div className="relative aspect-square max-w-sm mx-auto lg:mx-0 rounded-2xl overflow-hidden mb-8">
                <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/20 via-neon-purple/20 to-neon-green/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-card border-2 border-primary flex items-center justify-center">
                    <span className="text-4xl font-bold text-gradient">JD</span>
                  </div>
                </div>
                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-20 h-20 border border-neon-cyan/30 rounded-full" />
                <div className="absolute bottom-8 left-8 w-12 h-12 border border-neon-purple/30 rounded-full" />
              </div>

              {/* Info */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">John Developer</h3>
                <div className="flex flex-wrap gap-4 text-muted-foreground">
                  <span className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    San Francisco, CA
                  </span>
                  <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    6+ Years Experience
                  </span>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  I'm a passionate full-stack engineer with expertise spanning AI, blockchain, 
                  and cloud technologies. I thrive on turning complex ideas into elegant, 
                  user-friendly applications. My journey started with curiosity and has evolved 
                  into a mission to build technology that makes a difference.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  When I'm not coding, you'll find me exploring new technologies, contributing 
                  to open source, or sharing knowledge through blog posts and mentoring.
                </p>

                {/* CTA */}
                <div className="flex flex-wrap gap-4 pt-4">
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    <Download className="w-4 h-4 mr-2" />
                    Download Resume
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-xl font-bold mb-8 flex items-center gap-3">
              <Award className="w-5 h-5 text-primary" />
              Journey Timeline
            </h3>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />

              {/* Timeline Items */}
              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    className="relative pl-12"
                  >
                    {/* Dot */}
                    <div className="absolute left-0 top-2 w-8 h-8 rounded-full bg-card border-2 border-primary flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>

                    {/* Content */}
                    <div className="p-4 rounded-xl bg-card border border-border">
                      <span className="text-xs font-mono text-primary">{item.year}</span>
                      <h4 className="font-bold mt-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.company}</p>
                      <p className="text-sm text-muted-foreground mt-2">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-xl bg-card border border-border"
            >
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
