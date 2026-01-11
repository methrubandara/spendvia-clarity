import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import EarlyAccessForm from "./EarlyAccessForm";

interface FormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const FormModal = ({ isOpen, onClose }: FormModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md bg-card border-border">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold text-center">
            Request early access
          </DialogTitle>
        </DialogHeader>
        <div className="pt-2">
          <EarlyAccessForm isInline />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default FormModal;
