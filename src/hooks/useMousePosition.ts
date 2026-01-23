import { useState, useEffect, useCallback, RefObject } from "react";

interface MousePosition {
  x: number;
  y: number;
  normalizedX: number;
  normalizedY: number;
  isInside: boolean;
}

export function useMousePosition(ref?: RefObject<HTMLElement>) {
  const [position, setPosition] = useState<MousePosition>({
    x: 0,
    y: 0,
    normalizedX: 0,
    normalizedY: 0,
    isInside: false,
  });

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (ref?.current) {
      const rect = ref.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const isInside = x >= 0 && x <= rect.width && y >= 0 && y <= rect.height;
      
      setPosition({
        x,
        y,
        normalizedX: (x / rect.width) * 2 - 1,
        normalizedY: (y / rect.height) * 2 - 1,
        isInside,
      });
    } else {
      setPosition({
        x: e.clientX,
        y: e.clientY,
        normalizedX: (e.clientX / window.innerWidth) * 2 - 1,
        normalizedY: (e.clientY / window.innerHeight) * 2 - 1,
        isInside: true,
      });
    }
  }, [ref]);

  const handleMouseLeave = useCallback(() => {
    setPosition(prev => ({ ...prev, isInside: false }));
  }, []);

  useEffect(() => {
    const element = ref?.current || window;
    element.addEventListener("mousemove", handleMouseMove as EventListener);
    if (ref?.current) {
      ref.current.addEventListener("mouseleave", handleMouseLeave);
    }
    
    return () => {
      element.removeEventListener("mousemove", handleMouseMove as EventListener);
      if (ref?.current) {
        ref.current.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [handleMouseMove, handleMouseLeave, ref]);

  return position;
}
