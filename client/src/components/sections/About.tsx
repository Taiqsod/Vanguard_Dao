import { motion } from "framer-motion";
import { Zap, Eye, Globe } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 relative bg-black overflow-hidden">
      {/* Texture Overlay */}
      <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/concrete-wall.png')] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-neon-purple text-xl font-bold tracking-[0.2em] mb-4 uppercase">The Vision</h2>
            
            <h3 className="font-display text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Where we <span className="text-neon-cyan relative inline-block">
                share ideas
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-neon-cyan" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                </svg>
              </span> and <span className="text-neon-pink">mint the future</span>
            </h3>
            
            <p className="font-body text-gray-400 text-lg leading-relaxed mb-8 border-l-4 border-neon-purple pl-6">
              Vanguard Dao isn't just another project. It's a collective of rebels, artists, and innovators pushing the boundaries of what's possible in the Web3 space. We believe in the power of community-driven creation.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <FeatureCard 
                icon={<Zap className="text-neon-pink" />} 
                title="Innovation" 
                desc="Breaking barriers in NFT utility"
              />
              <FeatureCard 
                icon={<Eye className="text-neon-cyan" />} 
                title="Vision" 
                desc="Seeing what others can't"
              />
              <FeatureCard 
                icon={<Globe className="text-neon-purple" />} 
                title="Community" 
                desc="Global decentralized force"
              />
            </div>
          </motion.div>

          {/* Visual Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Unsplash Cyberpunk Image */}
            <div className="relative rounded-2xl overflow-hidden border-2 border-white/10 group">
              <div className="absolute inset-0 bg-gradient-to-tr from-neon-purple/40 to-neon-cyan/40 mix-blend-overlay z-10" />
              {/* Using descriptive HTML comment for image source as requested */}
              {/* Cyberpunk city street night neon */}
              <img 
                src="https://images.unsplash.com/photo-1555680202-c86f0e12f086?q=80&w=2070&auto=format&fit=crop" 
                alt="Cyberpunk Vision" 
                className="w-full h-auto transform group-hover:scale-110 transition-transform duration-700"
              />
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 bg-black border border-neon-cyan p-6 rounded-tl-3xl z-20 shadow-[0_0_20px_rgba(6,182,212,0.3)]">
                <p className="font-display text-2xl text-white">Join the <span className="text-neon-pink">Rebellion</span></p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="bg-white/5 p-4 rounded-xl border border-white/10 hover:border-white/30 transition-colors">
      <div className="mb-3">{icon}</div>
      <h4 className="font-display text-xl text-white mb-1">{title}</h4>
      <p className="text-gray-500 text-sm">{desc}</p>
    </div>
  );
}
