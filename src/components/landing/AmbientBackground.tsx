import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const AmbientBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  
  // Subtle parallax for aurora layer
  const auroraY = useTransform(scrollY, [0, 1000], [0, -50]);
  const contourY = useTransform(scrollY, [0, 1000], [0, -30]);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 overflow-hidden pointer-events-none" 
      aria-hidden="true"
    >
      {/* Layer 1: Deep navy base with soft radial gradient */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 120% 80% at 50% 0%, hsl(230 45% 12% / 1), transparent 70%),
            radial-gradient(ellipse 100% 60% at 80% 100%, hsl(230 45% 10% / 0.8), transparent 60%),
            hsl(228 50% 6%)
          `,
        }}
      />

      {/* Layer 2: Slowly shifting aurora/mesh gradient - VERY low opacity */}
      <motion.div
        className="absolute inset-0 motion-safe:animate-aurora-shift"
        style={{ y: auroraY }}
      >
        <div 
          className="absolute inset-0 opacity-[0.12]"
          style={{
            background: `
              radial-gradient(ellipse 80% 40% at 20% 30%, hsl(230 45% 27% / 0.6), transparent),
              radial-gradient(ellipse 60% 50% at 70% 60%, hsl(190 40% 50% / 0.4), transparent),
              radial-gradient(ellipse 50% 35% at 40% 80%, hsl(175 60% 78% / 0.3), transparent)
            `,
          }}
        />
        <div 
          className="absolute inset-0 opacity-[0.08] motion-safe:animate-aurora-morph"
          style={{
            background: `
              radial-gradient(ellipse 70% 45% at 75% 25%, hsl(215 35% 46% / 0.5), transparent),
              radial-gradient(ellipse 55% 40% at 25% 70%, hsl(233 30% 33% / 0.4), transparent)
            `,
          }}
        />
      </motion.div>

      {/* Layer 3: Drifting contour/topographic lines - "decision pathways" */}
      <motion.div 
        className="absolute inset-0"
        style={{ y: contourY }}
      >
        <svg 
          className="absolute w-full h-full opacity-[0.04] motion-safe:animate-contour-drift"
          viewBox="0 0 1920 1080" 
          preserveAspectRatio="xMidYMid slice"
          fill="none"
        >
          {/* Flowing contour lines suggesting calm decision pathways */}
          <g stroke="url(#contourGradient)" strokeWidth="0.5">
            {/* Top flowing curves */}
            <path d="M-100,200 Q400,150 800,220 T1600,180 T2100,250" className="motion-safe:animate-path-flow-1" />
            <path d="M-50,280 Q350,230 750,300 T1550,260 T2050,320" className="motion-safe:animate-path-flow-2" />
            <path d="M-100,360 Q400,310 800,380 T1600,340 T2100,400" className="motion-safe:animate-path-flow-1" />
            
            {/* Middle flowing curves */}
            <path d="M-80,480 Q420,430 820,500 T1620,460 T2080,520" className="motion-safe:animate-path-flow-2" />
            <path d="M-100,560 Q400,510 800,580 T1600,540 T2100,600" className="motion-safe:animate-path-flow-1" />
            <path d="M-60,640 Q440,590 840,660 T1640,620 T2060,680" className="motion-safe:animate-path-flow-2" />
            
            {/* Bottom flowing curves */}
            <path d="M-100,760 Q400,710 800,780 T1600,740 T2100,800" className="motion-safe:animate-path-flow-1" />
            <path d="M-40,840 Q460,790 860,860 T1660,820 T2040,880" className="motion-safe:animate-path-flow-2" />
            <path d="M-100,920 Q400,870 800,940 T1600,900 T2100,960" className="motion-safe:animate-path-flow-1" />
          </g>
          
          {/* Second set of softer curves offset */}
          <g stroke="url(#contourGradient2)" strokeWidth="0.3" opacity="0.6">
            <path d="M-100,240 Q380,200 780,260 T1580,220 T2100,280" className="motion-safe:animate-path-flow-2" />
            <path d="M-100,520 Q380,480 780,540 T1580,500 T2100,560" className="motion-safe:animate-path-flow-1" />
            <path d="M-100,800 Q380,760 780,820 T1580,780 T2100,840" className="motion-safe:animate-path-flow-2" />
          </g>
          
          <defs>
            <linearGradient id="contourGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(230 45% 27%)" stopOpacity="0" />
              <stop offset="20%" stopColor="hsl(215 35% 46%)" stopOpacity="1" />
              <stop offset="50%" stopColor="hsl(190 40% 50%)" stopOpacity="1" />
              <stop offset="80%" stopColor="hsl(175 60% 78%)" stopOpacity="1" />
              <stop offset="100%" stopColor="hsl(175 60% 78%)" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="contourGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(233 30% 33%)" stopOpacity="0" />
              <stop offset="30%" stopColor="hsl(230 45% 27%)" stopOpacity="1" />
              <stop offset="70%" stopColor="hsl(215 35% 46%)" stopOpacity="1" />
              <stop offset="100%" stopColor="hsl(190 40% 50%)" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      {/* Layer 4: Soft ambient glows - very subtle, slow moving */}
      <motion.div
        className="absolute top-1/4 -left-20 w-[600px] h-[600px] rounded-full blur-[120px] motion-safe:animate-glow-drift-1"
        style={{ 
          background: "hsl(230 45% 27% / 0.15)",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3 }}
      />
      
      <motion.div
        className="absolute bottom-1/3 right-0 w-[500px] h-[500px] rounded-full blur-[100px] motion-safe:animate-glow-drift-2"
        style={{ 
          background: "hsl(190 40% 50% / 0.08)",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3, delay: 0.5 }}
      />
      
      <motion.div
        className="absolute top-2/3 left-1/3 w-[400px] h-[400px] rounded-full blur-[80px] motion-safe:animate-glow-drift-3"
        style={{ 
          background: "hsl(175 60% 78% / 0.06)",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3, delay: 1 }}
      />

      {/* Layer 5: Subtle grain/noise overlay to reduce digital flatness */}
      <div 
        className="absolute inset-0 opacity-[0.015] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Layer 6: Very subtle vignette for depth */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 70% 50% at 50% 50%, transparent 0%, hsl(228 50% 4% / 0.4) 100%)
          `,
        }}
      />
    </div>
  );
};

export default AmbientBackground;
