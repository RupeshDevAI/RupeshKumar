import { motion } from "framer-motion";
import { Calendar, Mail, MessageSquare, Send, MapPin, Clock } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { TooltipTrigger } from "@/components/MouseTooltip";

export function Contact() {
  const { ref, isInView } = useScrollAnimation<HTMLElement>();

  return (
    <section
      id="contact"
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
          className="text-center mb-16"
        >
          <span className="text-sm font-mono text-primary uppercase tracking-widest">
            Get in Touch
          </span>
          <h2 className="text-brutalist text-4xl md:text-5xl lg:text-6xl mt-4">
            Let's <span className="text-gradient">Work Together</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-6">
            Have a project in mind? Let's discuss how I can help bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Left Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Availability Status */}
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-2xl border border-neon-green/30 bg-neon-green/10 shadow-lg">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-green opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-neon-green" />
              </span>
              <span className="text-sm font-medium text-neon-green">Available for new projects</span>
            </div>

            <h3 className="text-2xl font-bold">
              Let's create something amazing together
            </h3>

            <p className="text-muted-foreground">
              I'm always excited to work on innovative projects. Whether you need a full-stack 
              application, AI integration, blockchain solution, or cloud architecture, 
              I'm here to help turn your vision into reality.
            </p>

            {/* Contact Methods */}
            <div className="space-y-4">
              <TooltipTrigger text="Send me an email">
                <motion.a
                  href="mailto:hello@example.com"
                  whileHover={{ scale: 1.02, x: 4 }}
                  className="flex items-center gap-4 p-5 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors shadow-lg hover:shadow-xl group"
                >
                  <div className="p-3 rounded-xl bg-primary/10">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email me at</p>
                    <p className="font-medium group-hover:text-primary transition-colors">hello@example.com</p>
                  </div>
                </motion.a>
              </TooltipTrigger>

              <motion.div 
                whileHover={{ scale: 1.02, x: 4 }}
                className="flex items-center gap-4 p-5 rounded-2xl bg-card border border-border shadow-lg"
              >
                <div className="p-3 rounded-xl bg-primary/10">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Based in</p>
                  <p className="font-medium">San Francisco, CA (Remote Friendly)</p>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.02, x: 4 }}
                className="flex items-center gap-4 p-5 rounded-2xl bg-card border border-border shadow-lg"
              >
                <div className="p-3 rounded-xl bg-primary/10">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Response time</p>
                  <p className="font-medium">Usually within 24 hours</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Calendar Embed */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="p-8 rounded-2xl bg-card border border-border shadow-2xl">
              <div className="flex items-center gap-3 mb-6">
                <Calendar className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-bold">Book a Consultation</h3>
              </div>

              <p className="text-muted-foreground mb-6">
                Schedule a free 30-minute call to discuss your project requirements, 
                timeline, and how we can work together.
              </p>

              {/* Calendar Placeholder */}
              <div className="aspect-video rounded-2xl bg-muted/30 border border-border flex flex-col items-center justify-center p-8 text-center">
                <Calendar className="w-12 h-12 text-muted-foreground mb-4" />
                <p className="text-muted-foreground mb-4">
                  Calendar integration placeholder
                </p>
                <p className="text-xs text-muted-foreground mb-6">
                  Connect your Cal.com or Calendly account
                </p>
                <TooltipTrigger text="Book a free consultation">
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-2xl shadow-lg">
                    <Calendar className="w-4 h-4 mr-2" />
                    Schedule a Call
                  </Button>
                </TooltipTrigger>
              </div>

              {/* Alternative Contact */}
              <div className="mt-6 pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground text-center mb-4">
                  Prefer to send a message instead?
                </p>
                <div className="flex gap-4">
                  <Button variant="outline" className="flex-1 border-border hover:border-primary rounded-2xl">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Quick Message
                  </Button>
                  <Button variant="outline" className="flex-1 border-border hover:border-primary rounded-2xl">
                    <Send className="w-4 h-4 mr-2" />
                    Send Email
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
