import { FileText } from "lucide-react";
import { Button } from "../../components/ui/button";
import { cn } from "../../lib/utils";
import Resume from "../../assets/Abhishek_Katkam_Resume_July.pdf";

const ResumeButton = ({
  className,
  isFileIconVisible = true,
}: {
  className?: string;
  isFileIconVisible?: boolean;
}) => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = Resume;
    link.download = "Abhishek_Katkam_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Button
      onClick={handleDownload}
      className={cn(
        "rounded-full font-medium px-4 md:px-6 h-9 md:h-10 text-xs md:text-sm",
        "transition-all active:scale-95 cursor-pointer",
        className,
      )}
    >
      View Resume
      {isFileIconVisible && <FileText className="ml-2 h-4 w-4" />}
    </Button>
  );
};

export default ResumeButton;
