import { motion, AnimatePresence } from "framer-motion";
import { createContext, useContext, useState, useCallback, ReactNode } from "react";
import { useMousePosition } from "@/hooks/useMousePosition";

interface TooltipContextType {
  setTooltip: (text: string | null) => void;
  tooltip: string | null;
}

const TooltipContext = createContext<TooltipContextType>({
  setTooltip: () => {},
  tooltip: null,
});

export function useTooltip() {
  return useContext(TooltipContext);
}

interface MouseTooltipProviderProps {
  children: ReactNode;
}

export function MouseTooltipProvider({ children }: MouseTooltipProviderProps) {
  const [tooltip, setTooltipState] = useState<string | null>(null);
  const { x, y, isInside } = useMousePosition();

  const setTooltip = useCallback((text: string | null) => {
    setTooltipState(text);
  }, []);

  return (
    <TooltipContext.Provider value={{ setTooltip, tooltip }}>
      {children}
      <AnimatePresence>
        {tooltip && isInside && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="fixed pointer-events-none z-[9999]"
            style={{
              left: x + 16,
              top: y + 16,
            }}
          >
            <div className="px-4 py-2 rounded-xl bg-primary text-primary-foreground text-sm font-medium shadow-lg backdrop-blur-sm">
              {tooltip}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </TooltipContext.Provider>
  );
}

interface TooltipTriggerProps {
  children: ReactNode;
  text: string;
  className?: string;
}

export function TooltipTrigger({ children, text, className }: TooltipTriggerProps) {
  const { setTooltip } = useTooltip();

  return (
    <div
      className={className}
      onMouseEnter={() => setTooltip(text)}
      onMouseLeave={() => setTooltip(null)}
    >
      {children}
    </div>
  );
}
