import { useState, useCallback, useRef } from "react";
import { useSpring } from "framer-motion";

interface TiltValues {
  rotateX: number;
  rotateY: number;
  scale: number;
}

interface TiltConfig {
  maxTilt?: number;
  scale?: number;
  perspective?: number;
  speed?: number;
}

export function useTiltEffect(config: TiltConfig = {}) {
  const {
    maxTilt = 15,
    scale = 1.02,
    perspective = 1000,
    speed = 400,
  } = config;

  const [isHovering, setIsHovering] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const rotateX = useSpring(0, { stiffness: speed, damping: 30 });
  const rotateY = useSpring(0, { stiffness: speed, damping: 30 });
  const scaleValue = useSpring(1, { stiffness: speed, damping: 30 });

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    
    const tiltX = (mouseY / (rect.height / 2)) * -maxTilt;
    const tiltY = (mouseX / (rect.width / 2)) * maxTilt;

    rotateX.set(tiltX);
    rotateY.set(tiltY);
  }, [maxTilt, rotateX, rotateY]);

  const handleMouseEnter = useCallback(() => {
    setIsHovering(true);
    scaleValue.set(scale);
  }, [scale, scaleValue]);

  const handleMouseLeave = useCallback(() => {
    setIsHovering(false);
    rotateX.set(0);
    rotateY.set(0);
    scaleValue.set(1);
  }, [rotateX, rotateY, scaleValue]);

  const style = {
    transform: `perspective(${perspective}px)`,
    rotateX,
    rotateY,
    scale: scaleValue,
  };

  return {
    ref,
    style,
    isHovering,
    handlers: {
      onMouseMove: handleMouseMove,
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
    },
  };
}
