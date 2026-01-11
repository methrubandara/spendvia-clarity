import { motion } from "framer-motion";

const AmbientBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Aurora gradient mesh */}
      <div 
        className="absolute inset-0 opacity-[0.15] motion-safe:animate-aurora"
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at 20% 40%, hsl(230 45% 27% / 0.4), transparent),
            radial-gradient(ellipse 60% 40% at 80% 60%, hsl(190 40% 50% / 0.3), transparent),
            radial-gradient(ellipse 50% 30% at 50% 80%, hsl(175 60% 78% / 0.2), transparent)
          `,
          backgroundSize: "200% 200%",
        }}
      />

      {/* Floating blobs */}
      <motion.div
        className="absolute -top-40 -left-40 w-96 h-96 rounded-full blur-3xl motion-safe:animate-float"
        style={{ background: "hsl(230 45% 27% / 0.3)" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      />
      
      <motion.div
        className="absolute top-1/3 -right-20 w-80 h-80 rounded-full blur-3xl motion-safe:animate-drift"
        style={{ 
          background: "hsl(190 40% 50% / 0.2)",
          animationDelay: "5s",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
      />
      
      <motion.div
        className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full blur-3xl motion-safe:animate-pulse-slow"
        style={{ 
          background: "hsl(175 60% 78% / 0.15)",
          animationDelay: "10s",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 1 }}
      />

      <motion.div
        className="absolute bottom-40 right-1/3 w-72 h-72 rounded-full blur-3xl motion-safe:animate-float"
        style={{ 
          background: "hsl(215 35% 46% / 0.2)",
          animationDelay: "15s",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 1.5 }}
      />

      {/* Subtle noise texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
};

export default AmbientBackground;
