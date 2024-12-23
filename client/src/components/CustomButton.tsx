import { ArrowRight } from "../assets/icons";

interface CustomButtonProps {
  type?: "button" | "submit" | "reset";
  text: string;
  disabled?: boolean;
  styles?: string;
  onClick?: () => void;
  hasArrow?: boolean;
}

const CustomButton = ({
  text,
  onClick,
  disabled,
  styles,
  hasArrow,
  type = "button",
}: CustomButtonProps) => {
  return (
    <button
      disabled={disabled}
      className={`${styles} bg-light_primary p-3 text-white rounded-lg`}
      onClick={onClick}
      type={type}
    >
      {text} {hasArrow && <ArrowRight className="inline-block ml-1" />}
    </button>
  );
};

export default CustomButton;
