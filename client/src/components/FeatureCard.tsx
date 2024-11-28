import { IconType } from "react-icons";

interface FeatureCardProps {
  name: string;
  description: string;
  image?: string;
  Icon?: IconType;
  cardStyles?: string;
  nameStyles?: string;
  desStyles?: string;
  imgStyles?: string;
}

const FeatureCard = ({
  name,
  description,
  image,
  cardStyles,
  nameStyles,
  desStyles,
  imgStyles,
  Icon,
}: FeatureCardProps) => {
  return (
    <div
      className={`${cardStyles} h-[22rem] flex flex-col text-center items-center justify-center gap-6 text-my_black rounded-2xl px-5 py-10`}
    >
      {image && (
        <img
          src={image}
          alt={name}
          className={`${imgStyles} w-[5rem] h-[5rem]`}
        />
      )}

      {Icon && <Icon className={`${imgStyles} w-[4rem] h-[4rem]`} />}
      <div>
        <h2 className={`${nameStyles} text-xl font-semibold`}>{name}</h2>
        <p className={`${desStyles} text-gray-500 mt-3`}>{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
