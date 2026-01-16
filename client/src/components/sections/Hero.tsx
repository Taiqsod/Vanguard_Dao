import { motion } from "framer-motion";
import { ArrowRight, Twitter, Send } from "lucide-react";
import logoImg from "@assets/-nndw3f_1768543830602.jpg";
import { NeonButton } from "@/components/ui/NeonButton";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-black z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.15),transparent_70%)]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-purple/5 blur-[100px] rounded-full animate-pulse" />
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center">
        
        {/* Logo with Glow Effect */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8 relative"
        >
          <div className="absolute inset-0 bg-neon-pink/20 blur-xl rounded-full" />
          <img 
            src={logoImg} 
            alt="Vanguard Dao Logo" 
            className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-full border-4 border-neon-cyan/50 shadow-[0_0_30px_rgba(6,182,212,0.3)] relative z-10"
          />
        </motion.div>

        {/* Headline */}
        <motion.h1 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="font-display text-6xl md:text-8xl lg:text-9xl font-bold mb-6"
        >
          <span className="text-white drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">Vanguard</span>
          <span className="text-neon-pink ml-4 text-neon-pink">Dao</span>
        </motion.h1>

        {/* Subheading / Tagline */}
        <motion.p 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="font-body text-gray-400 text-lg md:text-2xl max-w-2xl mb-10 tracking-wide"
        >
          Rebelling against the ordinary. Minting the extraordinary.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="flex flex-col md:flex-row gap-6 items-center"
        >
          <a href="#about">
            <NeonButton variant="cyan" className="flex items-center gap-2">
              Explore Vision <ArrowRight size={20} />
            </NeonButton>
          </a>
          
          <div className="flex gap-4">
            <a href="#" className="p-3 border border-white/20 rounded-full hover:border-neon-pink hover:text-neon-pink transition-colors hover:shadow-neon-pink bg-black/50 backdrop-blur-sm">
              <Twitter size={24} />
            </a>
            <a href="#" className="p-3 border border-white/20 rounded-full hover:border-neon-cyan hover:text-neon-cyan transition-colors hover:shadow-[0_0_15px_rgba(6,182,212,0.5)] bg-black/50 backdrop-blur-sm">
              <Send size={24} />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Decorative Graffiti Elements */}
      <div className="absolute top-[20%] left-[5%] opacity-10 pointer-events-none font-display text-9xl text-white -rotate-12 hidden lg:block">
        Create
      </div>
      <div className="absolute bottom-[20%] right-[5%] opacity-10 pointer-events-none font-display text-9xl text-white rotate-12 hidden lg:block">
        Disrupt
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/50 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
