import { motion, MotionStyle } from "framer-motion";
import { ReactNode } from "react";
import { useTiltEffect } from "@/hooks/useTiltEffect";
import { cn } from "@/lib/utils";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: string;
  maxTilt?: number;
  scale?: number;
}

export function TiltCard({ 
  children, 
  className, 
  glowColor = "neon-cyan",
  maxTilt = 10,
  scale = 1.02,
}: TiltCardProps) {
  const { ref, style, handlers, isHovering } = useTiltEffect({ maxTilt, scale });

  return (
    <motion.div
      ref={ref}
      style={style as MotionStyle}
      {...handlers}
      className={cn(
        "relative rounded-2xl transition-shadow duration-300",
        isHovering && "shadow-2xl",
        className
      )}
    >
      {/* Glow effect on hover */}
      <motion.div
        className={cn(
          "absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 pointer-events-none",
          `bg-${glowColor}/10`
        )}
        animate={{ opacity: isHovering ? 1 : 0 }}
      />
      
      {/* Shine effect */}
      <motion.div
        className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none"
        animate={{ opacity: isHovering ? 1 : 0 }}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent"
          style={{
            transform: isHovering ? "translateX(100%)" : "translateX(-100%)",
          }}
          animate={{
            x: isHovering ? ["0%", "200%"] : "-100%",
          }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
        />
      </motion.div>

      {children}
    </motion.div>
  );
}
