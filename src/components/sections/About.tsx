import { motion } from "framer-motion";
import { Download, MapPin, Calendar, Award } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { TooltipTrigger } from "@/components/MouseTooltip";
import developerAvatar from "@/assets/developer-avatar.jpg";

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
      <div className="absolute inset-0 gradient-mesh opacity-20" />

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
              {/* Profile Image */}
              <motion.div 
                className="relative aspect-square max-w-sm mx-auto lg:mx-0 rounded-2xl overflow-hidden mb-8 shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src={developerAvatar} 
                  alt="Developer" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent" />
                
                {/* Decorative border */}
                <div className="absolute inset-0 border-2 border-primary/20 rounded-2xl" />
                <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-neon-cyan rounded-tl-lg" />
                <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-neon-purple rounded-tr-lg" />
                <div className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-neon-green rounded-bl-lg" />
                <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-neon-pink rounded-br-lg" />
              </motion.div>

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
                  <TooltipTrigger text="Download my resume">
                    <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-2xl shadow-lg hover:shadow-xl transition-all">
                      <Download className="w-4 h-4 mr-2" />
                      Download Resume
                    </Button>
                  </TooltipTrigger>
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
              <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-border to-transparent" />

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
                    <div className="absolute left-0 top-2 w-8 h-8 rounded-full bg-card border-2 border-primary flex items-center justify-center shadow-lg">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>

                    {/* Content */}
                    <TooltipTrigger text={item.company}>
                      <motion.div 
                        whileHover={{ scale: 1.02, x: 4 }}
                        className="p-5 rounded-2xl bg-card border border-border shadow-lg hover:shadow-xl hover:border-primary/30 transition-all"
                      >
                        <span className="text-xs font-mono text-primary">{item.year}</span>
                        <h4 className="font-bold mt-1">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.company}</p>
                        <p className="text-sm text-muted-foreground mt-2">{item.description}</p>
                      </motion.div>
                    </TooltipTrigger>
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
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
        >
          {stats.map((stat, index) => (
            <TooltipTrigger key={stat.label} text={stat.label}>
              <motion.div
                whileHover={{ scale: 1.05, y: -4 }}
                className="text-center p-6 rounded-2xl bg-card border border-border shadow-lg hover:shadow-xl hover:border-primary/30 transition-all"
              >
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            </TooltipTrigger>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
