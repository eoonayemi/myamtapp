import { useState } from "react";
import { ArrowDown, ArrowUp } from "../assets/icons";

interface FAQCardProps {
  question: string;
  answer: string;
  arrLen?: number;
  i?: number;
}

const FAQCard = ({ question, answer }: FAQCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="text-white">
      <div
        className={`bg-light_primary text-wrap py-6 px-10 text-sm font-normal flex justify-between items-center`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="w-[70%]">{question}</span>
        {isOpen ? (
          <ArrowUp className="text-sm" />
        ) : (
          <ArrowDown className="text-sm" />
        )}
      </div>
      <div
        className={`${
          isOpen ? "h-fit py-10" : "h-0 py-0"
        } transition-all duration-500 bg-white px-10 overflow-hidden text-black text-sm`}
      >
        {answer}
      </div>
    </div>
  );
};

export default FAQCard;
