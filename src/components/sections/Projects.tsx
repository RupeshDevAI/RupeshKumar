import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";

const categories = ["All", "AI", "Web", "Blockchain", "Cloud"];

const projects = [
  {
    id: 1,
    title: "AI-Powered Analytics Platform",
    description: "Real-time data analytics with ML predictions and automated insights generation.",
    category: "AI",
    image: "/placeholder.svg",
    tags: ["Python", "TensorFlow", "React", "AWS"],
    color: "neon-cyan",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "DeFi Trading Protocol",
    description: "Decentralized exchange with automated market making and yield optimization.",
    category: "Blockchain",
    image: "/placeholder.svg",
    tags: ["Solidity", "Web3.js", "React", "TheGraph"],
    color: "neon-green",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Enterprise SaaS Dashboard",
    description: "Multi-tenant platform with real-time collaboration and advanced reporting.",
    category: "Web",
    image: "/placeholder.svg",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Redis"],
    color: "neon-purple",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Cloud Infrastructure Automation",
    description: "IaC solution for automated deployment and scaling across multiple cloud providers.",
    category: "Cloud",
    image: "/placeholder.svg",
    tags: ["Terraform", "Kubernetes", "Docker", "GitHub Actions"],
    color: "neon-pink",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 5,
    title: "NLP Chatbot Framework",
    description: "Conversational AI system with context awareness and multi-language support.",
    category: "AI",
    image: "/placeholder.svg",
    tags: ["LangChain", "OpenAI", "FastAPI", "Vector DB"],
    color: "neon-cyan",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 6,
    title: "NFT Marketplace",
    description: "Full-featured NFT platform with lazy minting and royalty distribution.",
    category: "Blockchain",
    image: "/placeholder.svg",
    tags: ["Ethereum", "IPFS", "React", "Node.js"],
    color: "neon-green",
    liveUrl: "#",
    githubUrl: "#",
  },
];

export function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const { ref, isInView } = useScrollAnimation<HTMLElement>();

  const filteredProjects = projects.filter(
    (project) => activeCategory === "All" || project.category === activeCategory
  );

  return (
    <section
      id="projects"
      ref={ref}
      className="relative py-32 overflow-hidden bg-card/30"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--border)) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-mono text-primary uppercase tracking-widest">
            Portfolio
          </span>
          <h2 className="text-brutalist text-4xl md:text-5xl lg:text-6xl mt-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-6">
            A selection of my work across AI, Web, Blockchain, and Cloud domains
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-card border border-border hover:border-primary/50 text-muted-foreground hover:text-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative h-full rounded-2xl bg-card border border-border overflow-hidden hover:border-primary/50 transition-all duration-500">
                  {/* Project Image */}
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
                    
                    {/* Overlay Links */}
                    <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-primary text-primary-foreground"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink className="w-5 h-5" />
                      </motion.a>
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-card text-foreground border border-border"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github className="w-5 h-5" />
                      </motion.a>
                    </div>

                    {/* Category Badge */}
                    <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-mono bg-${project.color}/20 text-${project.color} border border-${project.color}/30`}>
                      {project.category}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-xs font-mono rounded bg-secondary text-secondary-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Button
            variant="outline"
            size="lg"
            className="group border-border hover:border-primary"
          >
            View All Projects
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
