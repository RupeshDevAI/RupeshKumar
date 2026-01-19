import { motion } from "framer-motion";
import { Clock, ArrowRight, Tag } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";

const posts = [
  {
    id: 1,
    title: "Building Scalable AI Applications with LangChain",
    excerpt: "A deep dive into creating production-ready AI applications using LangChain, vector databases, and modern LLM patterns.",
    category: "AI",
    readTime: "8 min read",
    date: "Jan 15, 2024",
    image: "/placeholder.svg",
    color: "neon-cyan",
  },
  {
    id: 2,
    title: "The Future of DeFi: Cross-Chain Interoperability",
    excerpt: "Exploring how cross-chain bridges and interoperability protocols are shaping the next generation of decentralized finance.",
    category: "Blockchain",
    readTime: "6 min read",
    date: "Jan 10, 2024",
    image: "/placeholder.svg",
    color: "neon-green",
  },
  {
    id: 3,
    title: "Optimizing React Performance: Advanced Techniques",
    excerpt: "Practical strategies for building lightning-fast React applications with code splitting, memoization, and virtual scrolling.",
    category: "Web Dev",
    readTime: "10 min read",
    date: "Jan 5, 2024",
    image: "/placeholder.svg",
    color: "neon-purple",
  },
  {
    id: 4,
    title: "Kubernetes at Scale: Lessons Learned",
    excerpt: "Real-world insights from managing Kubernetes clusters serving millions of requests per day across multiple regions.",
    category: "Cloud",
    readTime: "12 min read",
    date: "Dec 28, 2023",
    image: "/placeholder.svg",
    color: "neon-pink",
  },
];

export function Blog() {
  const { ref, isInView } = useScrollAnimation<HTMLElement>();

  return (
    <section
      id="blog"
      ref={ref}
      className="relative py-32 overflow-hidden bg-card/30"
    >
      {/* Background */}
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
            Insights
          </span>
          <h2 className="text-brutalist text-4xl md:text-5xl lg:text-6xl mt-4">
            Blog & <span className="text-gradient">Thoughts</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-6">
            Sharing knowledge on AI, Blockchain, Web Development, and Cloud Architecture
          </p>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {posts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <a href="#" className="block">
                <div className="relative h-full rounded-2xl bg-card border border-border overflow-hidden hover:border-primary/50 transition-all duration-500">
                  {/* Image */}
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                    
                    {/* Category Badge */}
                    <div className={`absolute top-4 left-4 flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-${post.color}/20 text-${post.color} border border-${post.color}/30`}>
                      <Tag className="w-3 h-3" />
                      {post.category}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Meta */}
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                      <span>{post.date}</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
                      {post.excerpt}
                    </p>

                    {/* Read More */}
                    <span className="inline-flex items-center text-sm font-medium text-primary group-hover:gap-2 transition-all">
                      Read Article
                      <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </a>
            </motion.article>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Button
            variant="outline"
            size="lg"
            className="group border-border hover:border-primary"
          >
            View All Posts
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
