import { blueLogo, whiteLogo } from "../constants/logos";

interface LogoProps {
  isWhite: boolean;
  boxStyles?: string;
  imgStyles?: string;
  textStyles?: string;
}

const Logo = ({ isWhite, boxStyles, imgStyles, textStyles }: LogoProps) => {
  return (
    <div
      className={`${boxStyles} flex justify-center items-center w-fit gap-1`}
    >
      <img
        src={isWhite ? whiteLogo : blueLogo}
        alt="logo"
        className={`${imgStyles} h-5`}
      />
      <span
        className={`${textStyles} font-[500] ${
          isWhite ? "text-white" : "text-light_primary"
        }`}
      >
        MyAmtApp
      </span>
    </div>
  );
};

export default Logo;
