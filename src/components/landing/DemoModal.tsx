import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, X, FileText, Search, BarChart3, CheckCircle } from "lucide-react";

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const demoSteps = [
  {
    icon: FileText,
    title: "A purchase request arrives",
    description: "Someone on your team wants to buy 5 new standing desks. The request lands in your inbox, waiting for approval.",
    visual: "purchase-request",
  },
  {
    icon: Search,
    title: "Spendvia checks your inventory",
    description: "Before you decide, Spendvia surfaces what you already own: 3 adjustable desks in storage that haven't been used in 6 months.",
    visual: "inventory-check",
  },
  {
    icon: BarChart3,
    title: "Alternatives appear automatically",
    description: "A refurbished option at 40% less. A bulk discount if you order next quarter. A compatible model from a preferred vendor.",
    visual: "alternatives",
  },
  {
    icon: CheckCircle,
    title: "Decide with confidence",
    description: "Approve 2 new desks, reallocate 3 from storage. You just saved money and made a better decision — in under a minute.",
    visual: "decision",
  },
];

const DemoModal = ({ isOpen, onClose }: DemoModalProps) => {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    if (currentStep < demoSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleClose = () => {
    setCurrentStep(0);
    onClose();
  };

  const step = demoSteps[currentStep];

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-2xl bg-card border-border p-0 overflow-hidden">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle className="text-xl font-semibold">
            How Spendvia works
          </DialogTitle>
        </DialogHeader>

        <div className="p-6">
          {/* Progress indicator */}
          <div className="flex gap-2 mb-8">
            {demoSteps.map((_, index) => (
              <div
                key={index}
                className={`flex-1 h-1 rounded-full transition-colors duration-300 ${
                  index <= currentStep ? "bg-primary" : "bg-border"
                }`}
              />
            ))}
          </div>

          {/* Step content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              {/* Visual mockup */}
              <div className="aspect-video rounded-lg bg-background border border-border flex items-center justify-center overflow-hidden">
                <DemoVisual visual={step.visual} />
              </div>

              {/* Step info */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <step.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-8 pt-6 border-t border-border">
            <Button
              variant="ghost"
              onClick={prevStep}
              disabled={currentStep === 0}
              className="text-muted-foreground hover:text-foreground"
            >
              <ChevronLeft className="w-4 h-4 mr-1" />
              Back
            </Button>

            <span className="text-sm text-muted-foreground">
              {currentStep + 1} of {demoSteps.length}
            </span>

            {currentStep < demoSteps.length - 1 ? (
              <Button onClick={nextStep} className="bg-primary text-primary-foreground hover:bg-primary/90">
                Next
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            ) : (
              <Button onClick={handleClose} className="bg-primary text-primary-foreground hover:bg-primary/90">
                Got it
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

// Visual components for each demo step
const DemoVisual = ({ visual }: { visual: string }) => {
  switch (visual) {
    case "purchase-request":
      return (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-sm p-6"
        >
          <div className="p-4 rounded-lg border border-border bg-card">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-yellow-500/20 flex items-center justify-center">
                <FileText className="w-4 h-4 text-yellow-500" />
              </div>
              <div>
                <p className="text-sm font-medium">New Purchase Request</p>
                <p className="text-xs text-muted-foreground">Just now</p>
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-sm">Standing Desk × 5</p>
              <p className="text-lg font-medium">$2,450.00</p>
              <div className="flex gap-2 mt-3">
                <div className="px-3 py-1.5 rounded text-xs bg-yellow-500/20 text-yellow-400">Pending</div>
              </div>
            </div>
          </div>
        </motion.div>
      );
    
    case "inventory-check":
      return (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md p-6"
        >
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 rounded-lg border border-border bg-card">
              <p className="text-xs text-muted-foreground mb-1">In Storage</p>
              <p className="font-medium">3 Adjustable Desks</p>
              <p className="text-xs text-orange-400 mt-1">Unused 6+ months</p>
            </div>
            <div className="p-3 rounded-lg border border-border bg-card">
              <p className="text-xs text-muted-foreground mb-1">Similar Items</p>
              <p className="font-medium">2 Standing Converters</p>
              <p className="text-xs text-accent mt-1">Available</p>
            </div>
          </div>
        </motion.div>
      );
    
    case "alternatives":
      return (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md p-6"
        >
          <div className="space-y-3">
            <div className="p-3 rounded-lg border border-accent/50 bg-accent/5">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-medium text-sm">Refurbished Option</p>
                  <p className="text-xs text-muted-foreground">Same specs, certified</p>
                </div>
                <div className="text-right">
                  <p className="text-accent font-medium">-40%</p>
                  <p className="text-xs text-muted-foreground">$1,470</p>
                </div>
              </div>
            </div>
            <div className="p-3 rounded-lg border border-border bg-card">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-medium text-sm">Bulk Discount</p>
                  <p className="text-xs text-muted-foreground">Order next quarter</p>
                </div>
                <div className="text-right">
                  <p className="text-primary font-medium">-15%</p>
                  <p className="text-xs text-muted-foreground">$2,082</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      );
    
    case "decision":
      return (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-sm p-6"
        >
          <div className="p-4 rounded-lg border border-primary/50 bg-primary/5 text-center">
            <CheckCircle className="w-10 h-10 text-primary mx-auto mb-3" />
            <p className="font-medium mb-1">Decision Made</p>
            <p className="text-sm text-muted-foreground mb-3">
              Buy 2 new, reallocate 3 from storage
            </p>
            <div className="flex justify-center gap-4 text-sm">
              <div>
                <p className="text-primary font-medium">$980</p>
                <p className="text-xs text-muted-foreground">Saved</p>
              </div>
              <div>
                <p className="text-accent font-medium">&lt;1 min</p>
                <p className="text-xs text-muted-foreground">To decide</p>
              </div>
            </div>
          </div>
        </motion.div>
      );
    
    default:
      return null;
  }
};

export default DemoModal;
