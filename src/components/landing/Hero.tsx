import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

interface HeroProps {
  onOpenForm: () => void;
  onOpenDemo: () => void;
  logo: React.ReactNode;
}

const Hero = ({ onOpenForm, onOpenDemo, logo }: HeroProps) => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 pt-20 pb-16">
      <div className="max-w-4xl mx-auto text-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          {logo}
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight mb-6"
        >
          See what you already own.{" "}
          <span className="gradient-text">
            Stop wasting money.
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Before you approve that next purchase, know what's already sitting unused. 
          Spendvia gives operations and finance leaders clarity at the moment of decision.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6"
        >
          <Button
            size="lg"
            onClick={onOpenForm}
            className="group relative px-8 py-6 text-base font-medium bg-primary text-primary-foreground hover:bg-primary/90 glow-primary transition-all duration-300"
          >
            Request early access
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          
          <Button
            size="lg"
            variant="outline"
            onClick={onOpenDemo}
            className="group px-8 py-6 text-base font-medium border-border hover:bg-secondary/50 transition-all duration-300"
          >
            <Play className="mr-2 h-4 w-4" />
            See how it works
          </Button>
        </motion.div>

        {/* Trust note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-sm text-muted-foreground/70"
        >
          Private beta — no sales pressure.
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2"
        >
          <div className="w-1 h-2 rounded-full bg-muted-foreground/50" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
