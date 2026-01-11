import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { AlertCircle, Archive, Search } from "lucide-react";

const painPoints = [
  {
    icon: Archive,
    title: "Inventory unknown",
    description: "You don't have a clear picture of what your company already owns.",
  },
  {
    icon: AlertCircle,
    title: "Assets sit underused",
    description: "Equipment, software, and supplies gather dust while budgets approve more.",
  },
  {
    icon: Search,
    title: "No alternative visibility",
    description: "There's no easy way to see cheaper options or existing substitutes.",
  },
];

const Problem = () => {
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
            Waste happens before the approval
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            By the time a purchase request lands on your desk, the decision is already half-made. 
            You're missing the context to say no with confidence.
          </p>
        </motion.div>

        {/* Pain points */}
        <div className="grid md:grid-cols-3 gap-8">
          {painPoints.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="group relative p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
            >
              <div className="mb-4">
                <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300">
                  <point.icon className="w-6 h-6 text-primary" />
                </div>
              </div>
              <h3 className="text-lg font-medium mb-2">{point.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;
