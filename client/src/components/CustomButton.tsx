import { IconType } from "react-icons";
import { ArrowRight } from "../assets/icons";

interface CustomButtonProps {
  type?: "button" | "submit" | "reset";
  text: string;
  disabled?: boolean;
  styles?: string;
  onClick?: () => void;
  hasArrow?: boolean;
  Icon?: IconType;
}

const CustomButton = ({
  text,
  onClick,
  disabled,
  styles,
  hasArrow,
  type = "button",
  Icon,
}: CustomButtonProps) => {
  return (
    <button
      disabled={disabled}
      className={`${styles} bg-light_primary p-3 text-white rounded-lg flex items-center justify-center gap-2 hover:bg-light_primary_hover transition-colors disabled:opacity-50 disabled:cursor-not-allowed`}
      onClick={onClick}
      type={type}
    >
      {Icon && <Icon className="w-5 h-5" />}
      {text} {hasArrow && <ArrowRight className="inline-block ml-1" />}
    </button>
  );
};

export default CustomButton;
