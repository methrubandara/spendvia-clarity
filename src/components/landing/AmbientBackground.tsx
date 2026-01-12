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
      {/* Layer 1: Deep navy base - constant, stable */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 100% 70% at 50% 0%, hsl(230 45% 10% / 1), transparent 60%),
            radial-gradient(ellipse 80% 50% at 80% 100%, hsl(230 45% 8% / 0.6), transparent 50%),
            hsl(228 50% 6%)
          `,
        }}
      />

      {/* Layer 2: Soft Signal Wave Bands - multiple layers at different speeds */}
      {/* Wave Band 1 - Slowest, deepest layer (navy/indigo) */}
      <motion.div
        className="absolute inset-0"
        style={{ y: wave1Y }}
      >
        <div 
          className="absolute inset-0 motion-safe:animate-wave-flow-1"
          style={{
            background: `
              linear-gradient(
                90deg,
                transparent 0%,
                hsl(230 45% 27% / 0.08) 15%,
                hsl(233 30% 33% / 0.12) 30%,
                hsl(230 45% 27% / 0.1) 45%,
                transparent 60%,
                hsl(233 30% 33% / 0.08) 75%,
                hsl(230 45% 27% / 0.06) 90%,
                transparent 100%
              )
            `,
            filter: 'blur(80px)',
            transform: 'translateX(-50%) skewY(-3deg)',
            width: '300%',
            height: '120%',
            top: '-10%',
          }}
        />
      </motion.div>

      {/* Wave Band 2 - Medium speed, mid layer (steel blue) */}
      <motion.div
        className="absolute inset-0"
        style={{ y: wave2Y }}
      >
        <div 
          className="absolute inset-0 motion-safe:animate-wave-flow-2"
          style={{
            background: `
              linear-gradient(
                90deg,
                transparent 0%,
                hsl(215 35% 46% / 0.05) 10%,
                hsl(215 35% 46% / 0.09) 25%,
                transparent 40%,
                hsl(215 35% 46% / 0.07) 55%,
                hsl(215 35% 46% / 0.1) 70%,
                transparent 85%,
                hsl(215 35% 46% / 0.04) 95%,
                transparent 100%
              )
            `,
            filter: 'blur(100px)',
            transform: 'translateX(-30%) skewY(2deg)',
            width: '280%',
            height: '100%',
            top: '5%',
          }}
        />
      </motion.div>

      {/* Wave Band 3 - Faster, upper layer (teal) */}
      <div 
        className="absolute inset-0 motion-safe:animate-wave-flow-3"
        style={{
          background: `
            linear-gradient(
              90deg,
              transparent 0%,
              hsl(190 40% 50% / 0.04) 20%,
              hsl(190 40% 50% / 0.07) 35%,
              transparent 50%,
              hsl(190 40% 50% / 0.05) 65%,
              hsl(190 40% 50% / 0.08) 80%,
              transparent 100%
            )
          `,
          filter: 'blur(120px)',
          transform: 'translateX(-40%) skewY(-1.5deg)',
          width: '260%',
          height: '80%',
          top: '10%',
        }}
      />

      {/* Wave Band 4 - Fastest, accent layer (mint - very subtle) */}
      <div 
        className="absolute inset-0 motion-safe:animate-wave-flow-4"
        style={{
          background: `
            linear-gradient(
              90deg,
              transparent 0%,
              transparent 30%,
              hsl(175 60% 78% / 0.03) 45%,
              hsl(175 60% 78% / 0.05) 55%,
              transparent 70%,
              transparent 100%
            )
          `,
          filter: 'blur(140px)',
          transform: 'translateX(-20%) skewY(1deg)',
          width: '240%',
          height: '60%',
          top: '20%',
        }}
      />

      {/* Wave Band 5 - Secondary steel/teal blend, slower */}
      <div 
        className="absolute inset-0 motion-safe:animate-wave-flow-5"
        style={{
          background: `
            linear-gradient(
              90deg,
              transparent 0%,
              hsl(200 38% 48% / 0.04) 15%,
              hsl(200 38% 48% / 0.07) 30%,
              transparent 45%,
              hsl(200 38% 48% / 0.05) 60%,
              transparent 75%,
              hsl(200 38% 48% / 0.06) 90%,
              transparent 100%
            )
          `,
          filter: 'blur(90px)',
          transform: 'translateX(-60%) skewY(-2deg)',
          width: '320%',
          height: '90%',
          top: '15%',
        }}
      />

      {/* Layer 3: Subtle vertical drift overlay - very slow */}
      <div 
        className="absolute inset-0 motion-safe:animate-vertical-drift"
        style={{
          background: `
            linear-gradient(
              180deg,
              transparent 0%,
              hsl(230 45% 27% / 0.04) 20%,
              transparent 40%,
              hsl(190 40% 50% / 0.03) 60%,
              transparent 80%,
              hsl(215 35% 46% / 0.04) 100%
            )
          `,
          filter: 'blur(100px)',
        }}
      />

      {/* Layer 4: Soft edge glows for depth - static positions, subtle pulse */}
      <div 
        className="absolute -left-40 top-1/4 w-[500px] h-[500px] rounded-full blur-[120px] motion-safe:animate-glow-pulse-1"
        style={{ 
          background: "hsl(230 45% 27% / 0.12)",
        }}
      />
      
      <div 
        className="absolute -right-32 top-1/2 w-[400px] h-[400px] rounded-full blur-[100px] motion-safe:animate-glow-pulse-2"
        style={{ 
          background: "hsl(190 40% 50% / 0.06)",
        }}
      />
      
      <div 
        className="absolute left-1/3 bottom-1/4 w-[450px] h-[450px] rounded-full blur-[110px] motion-safe:animate-glow-pulse-3"
        style={{ 
          background: "hsl(215 35% 46% / 0.05)",
        }}
      />

      {/* Layer 5: Subtle grain/noise overlay */}
      <div 
        className="absolute inset-0 opacity-[0.012] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Layer 6: Vignette for depth and focus */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 65% 55% at 50% 50%, transparent 0%, hsl(228 50% 4% / 0.5) 100%)
          `,
        }}
      />
    </div>
  );
};

export default AmbientBackground;
