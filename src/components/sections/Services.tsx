import { motion } from "framer-motion";
import { 
  Brain, 
  Globe, 
  Blocks, 
  Cloud, 
  Code2, 
  Smartphone,
  Database,
  Shield
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const services = [
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Custom AI solutions, ML models, NLP, computer vision, and intelligent automation systems.",
    color: "neon-cyan",
    skills: ["TensorFlow", "PyTorch", "OpenAI", "LangChain"],
  },
  {
    icon: Globe,
    title: "Web Development",
    description: "Full-stack web applications with modern frameworks, responsive design, and optimal performance.",
    color: "neon-purple",
    skills: ["React", "Next.js", "Node.js", "TypeScript"],
  },
  {
    icon: Blocks,
    title: "Blockchain & Web3",
    description: "Smart contracts, DeFi protocols, NFT platforms, and decentralized application development.",
    color: "neon-green",
    skills: ["Solidity", "Ethereum", "Web3.js", "IPFS"],
  },
  {
    icon: Cloud,
    title: "Cloud Architecture",
    description: "Scalable cloud infrastructure, serverless solutions, and DevOps automation.",
    color: "neon-pink",
    skills: ["AWS", "GCP", "Docker", "Kubernetes"],
  },
];

const additionalSkills = [
  { icon: Code2, name: "Clean Code" },
  { icon: Smartphone, name: "Mobile First" },
  { icon: Database, name: "Database Design" },
  { icon: Shield, name: "Security" },
];

export function Services() {
  const { ref, isInView } = useScrollAnimation<HTMLElement>();

  return (
    <section
      id="services"
      ref={ref}
      className="relative py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 gradient-mesh opacity-50" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-sm font-mono text-primary uppercase tracking-widest">
            What I Do
          </span>
          <h2 className="text-brutalist text-4xl md:text-5xl lg:text-6xl mt-4">
            Services & <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-6">
            Transforming complex challenges into elegant solutions across multiple domains
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="group relative h-full p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500">
                {/* Glow effect on hover */}
                <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-${service.color}/5`} />
                
                {/* Icon */}
                <div className={`inline-flex p-4 rounded-xl bg-${service.color}/10 mb-6`}>
                  <service.icon className={`w-8 h-8 text-${service.color}`} />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {service.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs font-mono rounded-full bg-secondary text-secondary-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden rounded-tr-2xl">
                  <div className={`absolute top-0 right-0 w-20 h-0.5 bg-gradient-to-l from-${service.color} to-transparent`} />
                  <div className={`absolute top-0 right-0 w-0.5 h-20 bg-gradient-to-b from-${service.color} to-transparent`} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-6 mt-16"
        >
          {additionalSkills.map((skill) => (
            <div
              key={skill.name}
              className="flex items-center gap-3 px-6 py-3 rounded-full border border-border bg-card/50 backdrop-blur-sm"
            >
              <skill.icon className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">{skill.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
