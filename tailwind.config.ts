import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        // Spendvia gradient colors
        spendvia: {
          navy: "hsl(var(--gradient-1))",
          slate: "hsl(var(--gradient-2))",
          steel: "hsl(var(--gradient-3))",
          teal: "hsl(var(--gradient-4))",
          mint: "hsl(var(--gradient-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        // Flowfield Aurora animations - calm, continuous, 25-45s loops
        "aurora-shift": {
          "0%, 100%": { transform: "scale(1) rotate(0deg)", opacity: "1" },
          "33%": { transform: "scale(1.05) rotate(0.5deg)", opacity: "0.9" },
          "66%": { transform: "scale(0.98) rotate(-0.3deg)", opacity: "1" },
        },
        "aurora-morph": {
          "0%, 100%": { transform: "translateX(0) translateY(0) scale(1)" },
          "25%": { transform: "translateX(30px) translateY(-20px) scale(1.02)" },
          "50%": { transform: "translateX(-20px) translateY(30px) scale(0.98)" },
          "75%": { transform: "translateX(20px) translateY(10px) scale(1.01)" },
        },
        "contour-drift": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100px)" },
        },
        "path-flow-1": {
          "0%, 100%": { strokeDashoffset: "0", opacity: "1" },
          "50%": { strokeDashoffset: "50", opacity: "0.7" },
        },
        "path-flow-2": {
          "0%, 100%": { strokeDashoffset: "0", opacity: "0.8" },
          "50%": { strokeDashoffset: "-50", opacity: "1" },
        },
        "glow-drift-1": {
          "0%, 100%": { transform: "translateX(0) translateY(0) scale(1)", opacity: "1" },
          "33%": { transform: "translateX(40px) translateY(-30px) scale(1.05)", opacity: "0.8" },
          "66%": { transform: "translateX(-20px) translateY(20px) scale(0.95)", opacity: "1" },
        },
        "glow-drift-2": {
          "0%, 100%": { transform: "translateX(0) translateY(0) scale(1)", opacity: "1" },
          "50%": { transform: "translateX(-50px) translateY(40px) scale(1.08)", opacity: "0.9" },
        },
        "glow-drift-3": {
          "0%, 100%": { transform: "translateX(0) translateY(0) scale(1)", opacity: "1" },
          "40%": { transform: "translateX(30px) translateY(-25px) scale(1.03)", opacity: "0.85" },
          "80%": { transform: "translateX(-25px) translateY(15px) scale(0.97)", opacity: "1" },
        },
        // Legacy animations
        float: {
          "0%, 100%": { transform: "translateY(0) translateX(0) scale(1)" },
          "25%": { transform: "translateY(-20px) translateX(10px) scale(1.02)" },
          "50%": { transform: "translateY(-10px) translateX(-5px) scale(0.98)" },
          "75%": { transform: "translateY(-30px) translateX(15px) scale(1.01)" },
        },
        drift: {
          "0%, 100%": { transform: "translateX(0) translateY(0)", opacity: "0.3" },
          "50%": { transform: "translateX(100px) translateY(-50px)", opacity: "0.5" },
        },
        "pulse-slow": {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.6", transform: "scale(1.05)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        // Flowfield Aurora - all linear timing for calm, continuous motion
        "aurora-shift": "aurora-shift 35s linear infinite",
        "aurora-morph": "aurora-morph 40s linear infinite",
        "contour-drift": "contour-drift 45s linear infinite",
        "path-flow-1": "path-flow-1 30s linear infinite",
        "path-flow-2": "path-flow-2 25s linear infinite",
        "glow-drift-1": "glow-drift-1 35s linear infinite",
        "glow-drift-2": "glow-drift-2 40s linear infinite",
        "glow-drift-3": "glow-drift-3 30s linear infinite",
        // Legacy
        float: "float 20s ease-in-out infinite",
        drift: "drift 30s ease-in-out infinite",
        "pulse-slow": "pulse-slow 8s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
