import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Play, FileCheck, AlertTriangle, TrendingDown, CheckCircle2 } from "lucide-react";

interface DemoPreviewProps {
  onOpenDemo: () => void;
}

const mockCards = [
  {
    icon: FileCheck,
    title: "Purchase Request",
    subtitle: "New standing desk × 5",
    status: "Pending approval",
    statusColor: "text-yellow-400",
  },
  {
    icon: AlertTriangle,
    title: "Existing Inventory",
    subtitle: "3 adjustable desks in storage",
    status: "Underutilized",
    statusColor: "text-orange-400",
  },
  {
    icon: TrendingDown,
    title: "Alternative Found",
    subtitle: "Refurbished option: 40% less",
    status: "Recommended",
    statusColor: "text-accent",
  },
  {
    icon: CheckCircle2,
    title: "Decision",
    subtitle: "Approve 2, use 3 from storage",
    status: "Confident",
    statusColor: "text-primary",
  },
];

const DemoPreview = ({ onOpenDemo }: DemoPreviewProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold mb-4">
            See the flow before you approve
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A glimpse of how Spendvia surfaces context at the moment of decision.
          </p>
        </motion.div>

        {/* Mock UI preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          {/* Browser chrome mockup */}
          <div className="rounded-xl overflow-hidden border border-border bg-card/50 backdrop-blur-sm">
            {/* Browser bar */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-muted/30">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="px-4 py-1 rounded-md bg-background/50 text-xs text-muted-foreground">
                  app.spendvia.com
                </div>
              </div>
            </div>

            {/* Content area */}
            <div className="p-8">
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {mockCards.map((card, index) => (
                  <motion.div
                    key={card.title}
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="p-4 rounded-lg bg-background border border-border hover:border-primary/30 transition-colors duration-300"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <card.icon className="w-4 h-4 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">{card.title}</span>
                    </div>
                    <p className="font-medium text-sm mb-2">{card.subtitle}</p>
                    <p className={`text-xs ${card.statusColor}`}>{card.status}</p>
                  </motion.div>
                ))}
              </div>

              {/* Animated connection line */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="hidden lg:block h-0.5 mt-4 mx-8 bg-gradient-to-r from-muted via-primary to-accent origin-left"
              />
            </div>
          </div>

          {/* Glow effect */}
          <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-primary/10 via-transparent to-accent/10 blur-xl -z-10" />
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-10"
        >
          <Button
            size="lg"
            variant="outline"
            onClick={onOpenDemo}
            className="group px-8 py-6 text-base font-medium border-border hover:border-primary/50 hover:bg-secondary/50 transition-all duration-300"
          >
            <Play className="mr-2 h-4 w-4" />
            View the concept demo
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default DemoPreview;
