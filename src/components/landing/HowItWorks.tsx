import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link2, Eye, Scale, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Link2,
    number: "01",
    title: "Connect what you already use",
    description: "Import from spreadsheets, expense tools, or inventory exports. No ERP replacement needed.",
  },
  {
    icon: Eye,
    number: "02",
    title: "See what you own and what's underused",
    description: "Get a clear view of existing assets, their usage patterns, and what's gathering dust.",
  },
  {
    icon: Scale,
    number: "03",
    title: "Compare alternatives before spending",
    description: "Surface cheaper options, existing substitutes, or underused assets that could work instead.",
  },
  {
    icon: CheckCircle,
    number: "04",
    title: "Approve purchases with confidence",
    description: "Make decisions backed by context, not gut feelings or incomplete information.",
  },
];

const HowItWorks = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 0.8], ["0%", "100%"]);

  return (
    <section ref={containerRef} className="relative py-24 px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold mb-4">
            How it works
          </h2>
          <p className="text-lg text-muted-foreground">
            Four steps to smarter spending decisions.
          </p>
        </motion.div>

        {/* Steps with animated line */}
        <div className="relative">
          {/* Progress line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2">
            <motion.div
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-primary via-primary to-accent"
              style={{ height: lineHeight }}
            />
          </div>

          {/* Steps */}
          <div className="space-y-16">
            {steps.map((step, index) => (
              <StepItem key={step.number} step={step} index={index} isInView={isInView} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

interface StepItemProps {
  step: typeof steps[0];
  index: number;
  isInView: boolean;
}

const StepItem = ({ step, index, isInView }: StepItemProps) => {
  const itemRef = useRef(null);
  const itemInView = useInView(itemRef, { once: true, margin: "-50px" });

  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={itemRef}
      initial={{ opacity: 0, x: isEven ? -40 : 40 }}
      animate={itemInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.1 }}
      className={`relative flex items-start gap-6 md:gap-12 ${
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      {/* Step number indicator */}
      <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10" />

      {/* Content */}
      <div className={`flex-1 pl-20 md:pl-0 ${isEven ? "md:text-right md:pr-16" : "md:pl-16"}`}>
        <div className={`inline-flex items-center gap-3 mb-3 ${isEven ? "md:flex-row-reverse" : ""}`}>
          <span className="text-sm font-mono text-primary">{step.number}</span>
          <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
            <step.icon className="w-5 h-5 text-primary" />
          </div>
        </div>
        <h3 className="text-xl font-medium mb-2">{step.title}</h3>
        <p className="text-muted-foreground leading-relaxed">{step.description}</p>
      </div>

      {/* Spacer for alternating layout */}
      <div className="hidden md:block flex-1" />
    </motion.div>
  );
};

export default HowItWorks;
