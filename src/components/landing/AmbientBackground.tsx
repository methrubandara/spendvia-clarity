import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const AmbientBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  
  // Subtle parallax for wave layers
  const wave1Y = useTransform(scrollY, [0, 1000], [0, -30]);
  const wave2Y = useTransform(scrollY, [0, 1000], [0, -15]);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 overflow-hidden pointer-events-none" 
      aria-hidden="true"
    >
      {/* Layer 1: Deep navy base */}
      <div 
        className="absolute inset-0"
        style={{
          background: `hsl(228 50% 6%)`,
        }}
      />

      {/* Light Beam 1 - Navy/Indigo - slowest */}
      <motion.div
        className="absolute inset-0"
        style={{ y: wave1Y }}
      >
        <div 
          className="absolute motion-safe:animate-wave-flow-1"
          style={{
            background: `linear-gradient(
              90deg,
              transparent 0%,
              hsl(230 45% 27% / 0.4) 20%,
              hsl(233 30% 33% / 0.6) 40%,
              hsl(230 45% 27% / 0.5) 60%,
              transparent 80%
            )`,
            filter: 'blur(40px)',
            width: '200%',
            height: '300px',
            top: '10%',
            left: '-50%',
            transform: 'rotate(-8deg)',
          }}
        />
      </motion.div>

      {/* Light Beam 2 - Steel Blue - medium speed */}
      <motion.div
        className="absolute inset-0"
        style={{ y: wave2Y }}
      >
        <div 
          className="absolute motion-safe:animate-wave-flow-2"
          style={{
            background: `linear-gradient(
              90deg,
              transparent 0%,
              hsl(215 35% 46% / 0.3) 15%,
              hsl(215 35% 46% / 0.5) 35%,
              hsl(215 35% 46% / 0.6) 50%,
              hsl(215 35% 46% / 0.4) 70%,
              transparent 90%
            )`,
            filter: 'blur(50px)',
            width: '180%',
            height: '250px',
            top: '30%',
            left: '-40%',
            transform: 'rotate(5deg)',
          }}
        />
      </motion.div>

      {/* Light Beam 3 - Teal - faster */}
      <div 
        className="absolute motion-safe:animate-wave-flow-3"
        style={{
          background: `linear-gradient(
            90deg,
            transparent 0%,
            hsl(190 40% 50% / 0.25) 25%,
            hsl(190 40% 50% / 0.45) 45%,
            hsl(190 40% 50% / 0.5) 55%,
            hsl(190 40% 50% / 0.3) 75%,
            transparent 100%
          )`,
          filter: 'blur(45px)',
          width: '200%',
          height: '200px',
          top: '50%',
          left: '-60%',
          transform: 'rotate(-3deg)',
        }}
      />

      {/* Light Beam 4 - Mint accent - fastest */}
      <div 
        className="absolute motion-safe:animate-wave-flow-4"
        style={{
          background: `linear-gradient(
            90deg,
            transparent 0%,
            hsl(175 60% 78% / 0.15) 30%,
            hsl(175 60% 78% / 0.3) 50%,
            hsl(175 60% 78% / 0.2) 70%,
            transparent 100%
          )`,
          filter: 'blur(35px)',
          width: '160%',
          height: '180px',
          top: '65%',
          left: '-30%',
          transform: 'rotate(6deg)',
        }}
      />

      {/* Light Beam 5 - Deep secondary */}
      <div 
        className="absolute motion-safe:animate-wave-flow-5"
        style={{
          background: `linear-gradient(
            90deg,
            transparent 0%,
            hsl(220 40% 40% / 0.35) 20%,
            hsl(200 38% 48% / 0.5) 45%,
            hsl(190 40% 50% / 0.4) 65%,
            transparent 85%
          )`,
          filter: 'blur(55px)',
          width: '220%',
          height: '280px',
          top: '75%',
          left: '-70%',
          transform: 'rotate(-5deg)',
        }}
      />

      {/* Light Beam 6 - Top accent beam */}
      <div 
        className="absolute motion-safe:animate-wave-flow-3"
        style={{
          background: `linear-gradient(
            90deg,
            transparent 0%,
            hsl(233 30% 33% / 0.3) 20%,
            hsl(215 35% 46% / 0.45) 40%,
            hsl(190 40% 50% / 0.35) 60%,
            transparent 80%
          )`,
          filter: 'blur(60px)',
          width: '200%',
          height: '220px',
          top: '-5%',
          left: '-50%',
          transform: 'rotate(4deg)',
        }}
      />

      {/* Ambient glow spots for depth */}
      <div 
        className="absolute -left-20 top-1/4 w-[500px] h-[500px] rounded-full blur-[100px]"
        style={{ 
          background: "hsl(230 45% 27% / 0.25)",
        }}
      />
      
      <div 
        className="absolute -right-20 top-1/2 w-[400px] h-[400px] rounded-full blur-[80px]"
        style={{ 
          background: "hsl(190 40% 50% / 0.15)",
        }}
      />

      {/* Subtle grain overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Vignette */}
      <div 
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse 70% 60% at 50% 50%, transparent 0%, hsl(228 50% 4% / 0.4) 100%)`,
        }}
      />
    </div>
  );
};

export default AmbientBackground;
