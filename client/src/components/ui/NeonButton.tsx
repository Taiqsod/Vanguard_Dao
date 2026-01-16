import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface NeonButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "pink" | "cyan" | "purple";
  glow?: boolean;
}

const NeonButton = forwardRef<HTMLButtonElement, NeonButtonProps>(
  ({ className, children, variant = "cyan", glow = true, ...props }, ref) => {
    
    const colors = {
      pink: "border-primary text-primary hover:bg-primary hover:text-white hover:shadow-neon-pink",
      cyan: "border-secondary text-secondary hover:bg-secondary hover:text-black hover:shadow-[0_0_20px_rgba(6,182,212,0.6)]",
      purple: "border-accent text-accent hover:bg-accent hover:text-white hover:shadow-[0_0_20px_rgba(217,70,239,0.6)]"
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={cn(
          "relative px-8 py-3 bg-transparent border-2 font-display text-xl tracking-widest uppercase transition-all duration-300",
          colors[variant],
          className
        )}
        {...props}
      >
        {children}
        {glow && (
          <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 blur-lg -z-10" />
        )}
      </motion.button>
    );
  }
);

NeonButton.displayName = "NeonButton";

export { NeonButton };
