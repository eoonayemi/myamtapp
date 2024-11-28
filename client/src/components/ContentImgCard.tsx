import CustomButton from "./CustomButton";

interface ContentCardProps {
  id: string;
  title: string;
  description: string;
  img: string;
  imgAlt: string;
  cardStyles?: string;
  titleStyles?: string;
  desStyles?: string;
  imgStyles?: string;
  buttonText?: string;
  buttonStyles?: string;
  btnHasArrow?: boolean;
  hasImgBg?: boolean;
  hasButton?: boolean;
}

const ContentImgCard = ({
  id,
  title,
  description,
  img,
  imgAlt,
  cardStyles,
  titleStyles,
  desStyles,
  imgStyles,
  buttonText,
  buttonStyles,
  btnHasArrow,
  hasImgBg,
  hasButton,
}: ContentCardProps) => {
  return (
    <section
      id={id}
      className={`${cardStyles} text-white h-fit gap-20 font-thin bg-dark_primary responsive-p text-center md:text-left flex flex-col md:flex-row justify-center`}
    >
      <div className="flex flex-1 leading-relaxed flex-col gap-10 items-center md:items-start justify-center {self-start}">
        <h1
          className={`${titleStyles} text-3xl leading-normal lg:leading-snug font-bold`}
        >
          {title}
        </h1>
        <p className={`${desStyles}`}>{description}</p>
        {hasButton && (
          <CustomButton
            text={buttonText!}
            styles={`${buttonStyles} w-11rem`}
            hasArrow={btnHasArrow}
            onClick={() => {}}
          />
        )}
      </div>
      {hasImgBg ? (
        <div className="bg-secondary001 rounded-full p-10 overflow-hidden">
          <img
            src={img}
            alt={imgAlt}
            className={`${imgStyles} w-[20rem] sm:w-[30rem] lg:w-[40rem] object-contain translate-y-10`}
          />
        </div>
      ) : (
        <div className="flex-1 flex justify-center items-center overflow-hidden">
          <img src={img} alt={imgAlt} className={`${imgStyles}`} />
        </div>
      )}
    </section>
  );
};

export default ContentImgCard;
