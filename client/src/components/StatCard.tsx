import { IconType } from "react-icons";

interface StatCardProps {
  cardStyles: string;
  value: number;
  label: string;
  Icon: IconType;
  iconColor: string;
  iconBgColor: string;
}

const StatCard = ({
  cardStyles,
  value,
  label,
  Icon,
  iconBgColor,
  iconColor,
}: StatCardProps) => {
  return (
    <div
      className={`flex gap-5 items-center bg-white py-5 pl-12 md:pl-0 rounded-2xl overflow-hidden ${cardStyles}`}
    >
      <span className={`${iconBgColor} p-4 rounded-full`}>
        <Icon size={25} className={`${iconColor}`} />
      </span>
      <span>
        <p className="text-tx-color text-sm">{label}</p>
        <h3 className="text-lg font-normal">N{value}</h3>
      </span>
    </div>
  );
};

export default StatCard;
