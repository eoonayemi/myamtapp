import { IconType } from "react-icons";
import { Comma, Star } from "../assets/icons";

interface ReviewCardProps {
  name: string;
  review: string;
  cardStyles?: string;
  inlineStyles?: React.CSSProperties;
  starRating: number;
  Icon: IconType;
}

const ReviewCard = ({
  name,
  review,
  cardStyles,
  inlineStyles,
  starRating,
  Icon,
}: ReviewCardProps) => {
  return (
    <div
      className={`${cardStyles} text-white bg-light_primary rounded-xl p-10 flex flex-col gap-10`}
    >
      <div
        style={inlineStyles}
        className="flex rotate-180 w-fit text-dark_primary"
      >
        <Comma className="text-3xl" />
        <Comma className="text-3xl -ml-3" />
      </div>

      <p>{review}</p>

      <div className="bg-white h-[0.5px]"></div>

      <div className="flex gap-5 items-center">
        <Icon className="text-5xl" />
        <span className="font-semibold text-dark_primary">
          <p>{name}</p>
          <div className="flex gap-1 mt-1">
            {[...Array(starRating)].map(() => (
              <Star className="text-secondary001 text-xs" />
            ))}
            {[...Array(5 - starRating)].map(() => (
              <Star className="text-gray-300 text-xs" />
            ))}
          </div>
        </span>
      </div>
    </div>
  );
};

export default ReviewCard;
