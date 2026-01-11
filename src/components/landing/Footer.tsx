import { motion } from "framer-motion";

interface FooterProps {
  logo: React.ReactNode;
}

const Footer = ({ logo }: FooterProps) => {
  return (
    <footer className="relative py-16 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            {logo}
            <p className="text-sm text-muted-foreground">
              Clarity before every purchase decision.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-2 text-sm text-muted-foreground">
            <a 
              href="mailto:hello@spendvia.com" 
              className="hover:text-foreground transition-colors duration-200"
            >
              hello@spendvia.com
            </a>
            <p className="text-xs">
              © {new Date().getFullYear()} Spendvia. All rights reserved.
            </p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mt-8 pt-8 border-t border-border/50 text-center"
        >
          <p className="text-xs text-muted-foreground/60">
            Spendvia is currently in private beta. Features and pricing are subject to change.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
