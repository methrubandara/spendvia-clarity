import LiquidBackground from "./LiquidBackground";

const AmbientBackground = () => {
  return (
    <div 
      className="fixed inset-0 overflow-hidden pointer-events-none" 
      aria-hidden="true"
    >
      {/* Liquid fluid simulation background */}
      <div className="absolute inset-0 pointer-events-auto">
        <LiquidBackground
          colors={["#363c6f", "#4c6ab2", "#4ea1b2", "#a9e5e0"]}
        />
      </div>

      {/* Subtle vignette overlay for depth */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 70% 50% at 50% 50%, transparent 0%, hsl(228 50% 4% / 0.5) 100%)
          `,
        }}
      />

      {/* Subtle grain/noise overlay to reduce digital flatness */}
      <div 
        className="absolute inset-0 opacity-[0.02] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
};

export default AmbientBackground;
