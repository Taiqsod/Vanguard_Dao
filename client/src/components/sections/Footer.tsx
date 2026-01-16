import { useState } from "react";
import { Twitter, Send, Mail } from "lucide-react";
import { NeonButton } from "@/components/ui/NeonButton";
import { useCreateSubscriber } from "@/hooks/use-content";
import { useToast } from "@/hooks/use-toast";

export function Footer() {
  const [email, setEmail] = useState("");
  const { mutate, isPending } = useCreateSubscriber();
  const { toast } = useToast();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    mutate({ email }, {
      onSuccess: () => {
        toast({
          title: "Welcome to the Vanguard!",
          description: "You've been added to our secret list.",
        });
        setEmail("");
      },
      onError: (error) => {
        toast({
          title: "Error joining",
          description: error.message,
          variant: "destructive",
        });
      }
    });
  };

  return (
    <footer className="bg-black pt-20 pb-10 border-t border-gray-900 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neon-pink via-neon-purple to-neon-cyan" />
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          
          {/* Brand Column */}
          <div>
            <h2 className="font-display text-4xl text-white mb-6">
              Vanguard<span className="text-neon-cyan">Dao</span>
            </h2>
            <p className="text-gray-400 font-body max-w-sm mb-8">
              The future belongs to those who build it. Join our community and be part of the revolution.
            </p>
            
            <div className="flex gap-4">
              <SocialLink href="#" icon={<Twitter />} label="Twitter" color="cyan" />
              <SocialLink href="#" icon={<Send />} label="Telegram" color="purple" />
            </div>
          </div>

          {/* Newsletter Column */}
          <div>
            <h3 className="font-display text-2xl text-white mb-6 flex items-center gap-2">
              <Mail className="text-neon-pink" />
              Stay in the Loop
            </h3>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Enter your email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-pink focus:ring-1 focus:ring-neon-pink transition-all flex-grow font-body"
                required
              />
              <NeonButton 
                type="submit" 
                variant="pink" 
                className="px-6 py-3 text-base"
                disabled={isPending}
              >
                {isPending ? "Joining..." : "Join"}
              </NeonButton>
            </form>
            <p className="text-gray-600 text-sm mt-4">
              We respect your inbox. No spam, only revolution.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm">
          <p>&copy; {new Date().getFullYear()} Vanguard Dao. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0 font-body">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, icon, label, color }: { href: string, icon: React.ReactNode, label: string, color: "cyan" | "purple" }) {
  const colorClasses = {
    cyan: "hover:bg-neon-cyan hover:text-black hover:shadow-[0_0_15px_rgba(6,182,212,0.6)]",
    purple: "hover:bg-neon-purple hover:text-white hover:shadow-[0_0_15px_rgba(217,70,239,0.6)]"
  };

  return (
    <a 
      href={href} 
      aria-label={label}
      className={`p-3 bg-white/5 border border-white/10 rounded-full text-white transition-all duration-300 ${colorClasses[color]}`}
    >
      {icon}
    </a>
  );
}
