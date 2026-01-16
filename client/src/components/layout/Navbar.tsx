import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "wouter";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
    { label: "Home", href: "/", active: true },
    { label: "About", href: "/#about", active: true },
    { label: "Team", href: "/#team", active: true },
    { label: "NFT", href: "#", active: false, badge: "SOON" },
    { label: "Roadmap", href: "#", active: false, badge: "SOON" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || isOpen ? "bg-black/80 backdrop-blur-md border-b border-white/10" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo placeholder - using text if image fails/not loaded yet, but referencing the component */}
          <Link href="/" className="relative z-50 group">
            <span className="font-display text-2xl md:text-3xl font-bold text-white group-hover:text-neon-pink transition-colors duration-300">
              Vanguard<span className="text-neon-cyan">Dao</span>
            </span>
          </Link>

          {/* Hamburger Button */}
          <button
            onClick={toggleMenu}
            className="relative z-50 p-2 text-white hover:text-neon-cyan transition-colors"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </nav>

      {/* Full Screen Overlay Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 100% 0%)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-black flex flex-col items-center justify-center bg-[url('https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center bg-blend-overlay"
          >
            <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" />
            
            <div className="relative z-50 flex flex-col items-center space-y-8">
              {menuItems.map((item, idx) => (
                <motion.div
                  key={item.label}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 * idx, duration: 0.4 }}
                >
                  {item.active ? (
                    <a
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="font-display text-5xl md:text-7xl font-bold text-white hover:text-neon-pink transition-all duration-300 hover:scale-110 block relative group"
                    >
                      {item.label}
                      <span className="absolute -bottom-2 left-0 w-0 h-1 bg-neon-cyan group-hover:w-full transition-all duration-300" />
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 opacity-50 cursor-not-allowed group">
                      <span className="font-display text-5xl md:text-7xl font-bold text-gray-500 group-hover:text-gray-400 transition-colors">
                        {item.label}
                      </span>
                      {item.badge && (
                        <span className="px-3 py-1 bg-neon-purple/20 border border-neon-purple text-neon-purple text-xs font-mono rounded-full transform -rotate-12 group-hover:rotate-0 transition-transform">
                          {item.badge}
                        </span>
                      )}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Decoration Graffiti */}
            <div className="absolute bottom-10 left-10 opacity-20 pointer-events-none">
              <span className="font-display text-8xl text-neon-cyan rotate-[-15deg] block">Future</span>
            </div>
            <div className="absolute top-20 right-10 opacity-20 pointer-events-none">
              <span className="font-display text-8xl text-neon-pink rotate-[10deg] block">Mint</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
