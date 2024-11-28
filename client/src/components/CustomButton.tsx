import { ArrowRight } from "../assets/icons";

interface CustomButtonProps {
  text: string;
  disabled?: boolean;
  styles?: string;
  onClick: () => void;
  hasArrow?: boolean;
}

const CustomButton = ({
  text,
  onClick,
  disabled,
  styles,
  hasArrow,
}: CustomButtonProps) => {
  return (
    <button
      disabled={disabled}
      className={`${styles} bg-light_primary p-3 text-white`}
      onClick={onClick}
    >
      {text} {hasArrow && <ArrowRight className="inline-block ml-1" />}
    </button>
  );
};

export default CustomButton;
