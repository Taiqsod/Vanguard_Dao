import { motion } from "framer-motion";
import { useTeam } from "@/hooks/use-content";
import { Twitter, User } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

export function Team() {
  const { data: members, isLoading } = useTeam();

  // Fallback data if API is empty or failing during dev
  const displayMembers = members && members.length > 0 ? members : [
    { id: 1, name: "Neon Ghost", role: "Founder", imageUrl: "https://images.unsplash.com/photo-1618641986557-6d78806fc241?q=80&w=1000&auto=format&fit=crop", twitterUrl: "#" },
    { id: 2, name: "Cyber Kai", role: "Lead Artist", imageUrl: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1000&auto=format&fit=crop", twitterUrl: "#" },
    { id: 3, name: "Pixel V", role: "Developer", imageUrl: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1000&auto=format&fit=crop", twitterUrl: "#" },
    { id: 4, name: "Crypto Jay", role: "Community", imageUrl: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1000&auto=format&fit=crop", twitterUrl: "#" },
  ];

  return (
    <section id="team" className="py-24 bg-black relative">
       {/* Graffiti Background */}
       <div className="absolute top-10 right-0 opacity-10 pointer-events-none">
          <span className="font-display text-[15rem] text-white leading-none">CREW</span>
       </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-5xl md:text-7xl text-white mb-4">
            The <span className="text-neon-pink text-neon-pink">Vanguard</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto font-body">
            The minds behind the revolution. We are artists, builders, and dreamers.
          </p>
        </motion.div>

        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="space-y-4">
                <Skeleton className="h-64 w-full rounded-xl bg-gray-800" />
                <Skeleton className="h-6 w-3/4 bg-gray-800" />
                <Skeleton className="h-4 w-1/2 bg-gray-800" />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {displayMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                {/* Image Container with Glitch Effect on Hover */}
                <div className="relative overflow-hidden rounded-xl border-2 border-gray-800 group-hover:border-neon-cyan transition-colors duration-300 aspect-[3/4]">
                  <div className="absolute inset-0 bg-neon-cyan/20 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                  
                  {member.imageUrl ? (
                     // Using generic alt text based on name
                    <img 
                      src={member.imageUrl} 
                      alt={member.name}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110" 
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-900 flex items-center justify-center">
                      <User size={48} className="text-gray-700" />
                    </div>
                  )}

                  {/* Social Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20 bg-gradient-to-t from-black to-transparent">
                    {member.twitterUrl && (
                      <a 
                        href={member.twitterUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-white hover:text-neon-cyan"
                      >
                        <Twitter size={18} />
                        <span className="text-xs font-mono">@follow</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Text Info */}
                <div className="mt-4 text-center">
                  <h3 className="font-display text-2xl text-white group-hover:text-neon-pink transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-neon-purple font-mono text-sm uppercase tracking-widest mt-1">
                    {member.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
