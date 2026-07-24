import { FileText } from "lucide-react";
import { Button } from "../../components/ui/button";
import { cn } from "../../lib/utils";

const ResumeButton = ({ className }: { className?: string }) => {
  return (
    <Button
      className={cn(
        "rounded-full font-medium px-4 md:px-6 h-9 md:h-10 text-xs md:text-sm ",
        "transition-all active:scale-95 cursor-pointer",
        className
      )}
    >
      View My Resume
      <FileText />
    </Button>
  );
};

export default ResumeButton;
