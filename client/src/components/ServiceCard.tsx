import { IconType } from "react-icons";

interface ServiceCardProps {
  name: string;
  image?: string;
  Icon?: IconType;
  cardStyles?: string;
  nameStyles?: string;
  imgStyles?: string;
}

const ServiceCard = ({
  name,
  image,
  cardStyles,
  nameStyles,
  imgStyles,
  Icon,
}: ServiceCardProps) => {
  return (
    <div
      className={`${cardStyles} h-[22rem] flex flex-col text-center items-center justify-center gap-3 text-my_black rounded-2xl px-5 py-10`}
    >
      {image && (
        <img
          src={image}
          alt={name}
          className={`${imgStyles} w-[5rem] h-[5rem]`}
        />
      )}

      {Icon && <Icon className={`${imgStyles} w-[3rem] h-[3rem]`} />}

      <h2 className={`${nameStyles} text-lg`}>{name}</h2>
    </div>
  );
};

export default ServiceCard;
