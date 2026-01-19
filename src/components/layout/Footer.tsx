import { motion } from "framer-motion";
import { Terminal, Github, Linkedin, Twitter, Mail, Heart } from "lucide-react";

const footerLinks = {
  navigation: [
    { name: "Home", href: "#hero" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
  ],
  social: [
    { name: "GitHub", icon: Github, href: "#" },
    { name: "LinkedIn", icon: Linkedin, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "Email", icon: Mail, href: "mailto:hello@example.com" },
  ],
};

export function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative py-16 border-t border-border bg-card/50">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="#hero" className="flex items-center gap-2 text-xl font-bold mb-4">
              <Terminal className="w-6 h-6 text-primary" />
              <span className="text-gradient">DevPortfolio</span>
            </a>
            <p className="text-muted-foreground max-w-sm mb-6">
              Full-stack engineer specializing in AI, Web, Blockchain, and Cloud development. 
              Transforming ideas into reality, one line of code at a time.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              {footerLinks.social.map(({ name, icon: Icon, href }) => (
                <motion.a
                  key={name}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg border border-border hover:border-primary hover:bg-card transition-all"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={name}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Navigation</h4>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Get in Touch</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li>hello@example.com</li>
              <li>San Francisco, CA</li>
              <li>Remote Worldwide</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} DevPortfolio. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Built with <Heart className="w-4 h-4 text-destructive" /> using React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}
