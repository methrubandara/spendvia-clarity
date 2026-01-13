import { useEffect, useRef, useState } from "react";

// Convert hex to RGB object (0-255 range, then normalize to 0-1 for the library's internal use)
const hexToRgb = (hex: string): { r: number; g: number; b: number } => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : { r: 0, g: 0, b: 0 };
};

interface LiquidBackgroundProps {
  colors?: string[];
  className?: string;
}

const LiquidBackground = ({
  colors = ["#363c6f", "#4c6ab2", "#4ea1b2", "#a9e5e0"],
  className = "",
}: LiquidBackgroundProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion || !canvasRef.current) return;

    const initFluid = async () => {
      try {
        const WebGLFluid = (await import("webgl-fluid")).default;

        // Use the darkest color for background - deep navy from Spendvia
        const bgColor = hexToRgb("#090C1B");

        WebGLFluid(canvasRef.current!, {
          TRIGGER: "hover",
          IMMEDIATE: true,
          AUTO: true,
          INTERVAL: 4000, // Slower interval for calmer feel
          SIM_RESOLUTION: 128,
          DYE_RESOLUTION: 1024,
          CAPTURE_RESOLUTION: 512,
          DENSITY_DISSIPATION: 0.92, // Slower dissipation = longer lasting splats
          VELOCITY_DISSIPATION: 0.95, // Slower velocity fade
          PRESSURE: 0.6,
          PRESSURE_ITERATIONS: 20,
          CURL: 20, // Lower curl for smoother flow
          SPLAT_RADIUS: 0.4,
          SPLAT_FORCE: 3000, // Lower force for gentler effect
          SPLAT_COUNT: 2, // Fewer splats
          SHADING: true,
          COLORFUL: false, // Disable random colorful mode
          COLOR_UPDATE_SPEED: 5,
          PAUSED: false,
          BACK_COLOR: bgColor,
          TRANSPARENT: false,
          BLOOM: true,
          BLOOM_ITERATIONS: 8,
          BLOOM_RESOLUTION: 256,
          BLOOM_INTENSITY: 0.4, // Subtler bloom
          BLOOM_THRESHOLD: 0.6,
          BLOOM_SOFT_KNEE: 0.7,
          SUNRAYS: false, // Disable sunrays for cleaner look
          SUNRAYS_RESOLUTION: 196,
          SUNRAYS_WEIGHT: 0.3,
        });
      } catch (error) {
        console.error("Failed to initialize WebGL fluid simulation:", error);
      }
    };

    initFluid();
  }, [colors, prefersReducedMotion]);

  // Fallback for reduced motion or WebGL failure
  if (prefersReducedMotion) {
    return (
      <div
        className={`absolute inset-0 ${className}`}
        style={{
          background: `
            radial-gradient(ellipse 120% 80% at 50% 0%, ${colors[1]}30, transparent 70%),
            radial-gradient(ellipse 100% 60% at 80% 100%, ${colors[2]}20, transparent 60%),
            linear-gradient(135deg, ${colors[0]} 0%, ${colors[1]}40 50%, ${colors[0]} 100%)
          `,
        }}
      />
    );
  }

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full ${className}`}
    />
  );
};

export default LiquidBackground;
