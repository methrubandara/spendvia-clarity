import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Puzzle, RefreshCcw, Target } from "lucide-react";

const differentiators = [
  {
    icon: Users,
    title: "Built for decision-makers",
    description: "Designed for ops and finance leaders who approve spending — not accountants reconciling after the fact.",
  },
  {
    icon: Puzzle,
    title: "Works alongside existing tools",
    description: "Integrates with what you already use. Spreadsheets, expense tools, inventory exports — no rip-and-replace.",
  },
  {
    icon: RefreshCcw,
    title: "No ERP replacement",
    description: "Spendvia isn't trying to be your system of record. It's a lens for decisions, not a database for everything.",
  },
  {
    icon: Target,
    title: "Decision-first, not accounting-after",
    description: "Most tools help you track what was spent. We help you decide what should be spent.",
  },
];

const Differentiators = () => {
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
            What makes it different
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Built with a clear philosophy: help people make better decisions before money leaves the account.
          </p>
        </motion.div>

        {/* Differentiator cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {differentiators.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="group relative p-8 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:glow-primary"
            >
              <div className="flex items-start gap-5">
                <div className="shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-secondary to-muted flex items-center justify-center group-hover:from-primary/20 group-hover:to-primary/10 transition-all duration-300">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentiators;
