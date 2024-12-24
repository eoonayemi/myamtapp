import { IconType } from "react-icons";
import { useNavigate } from "react-router-dom";

interface ServiceCardProps {
  name: string;
  image?: string;
  Icon?: IconType;
  cardStyles?: string;
  nameStyles?: string;
  imgStyles?: string;
  link: string;
}

const ServiceCard = ({
  name,
  image,
  cardStyles,
  nameStyles,
  imgStyles,
  Icon,
  link,
}: ServiceCardProps) => {
  const navigate = useNavigate();

  return (
    <div
      className={`${cardStyles} h-[22rem] flex flex-col text-center items-center justify-center gap-3 text-my_black rounded-2xl px-5 py-10`}
      onClick={() => navigate(link)}
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
