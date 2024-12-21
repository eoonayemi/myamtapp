import { useState } from "react";
import { landingPageLinks } from "../constants";
import { HashLink } from "react-router-hash-link";
import { CustomButton } from ".";
import { useNavigate } from "react-router-dom";

interface NavProps {
  navIsOpen: boolean;
  onSetNavIsOpen: () => void;
}

const MobileNav = ({ navIsOpen, onSetNavIsOpen }: NavProps) => {
  const [currentPath, setCurrentPath] = useState("home");
  const navigate = useNavigate();

  return (
    <div
      className={`bg-my_white lg:hidden fixed inset-x-0 z-40 top-16 flex flex-col justify-center shadow-md gap-5 transition-all duration-500 overflow-hidden ${
        navIsOpen ? "h-fit py-5" : "h-0 py-0"
      }`}
    >
      <nav className="flex flex-col">
        {landingPageLinks.map(({ name, path }) => (
          <HashLink
            smooth
            to={`#${path}`}
            className={`${
              currentPath == path
                ? "bg-[#ececec] text-light_primary font-normal"
                : "text-gray-500"
            } p-5 text-[16px]`}
            onClick={() => {
              setCurrentPath(path);
              onSetNavIsOpen();
            }}
          >
            {name}
          </HashLink>
        ))}
      </nav>
      <CustomButton
        text="Login"
        onClick={() => navigate("/login")}
        styles="mx-[16px] bg-secondary001 text-dark_primary sm:hidden  rounded-lg"
      />
      <CustomButton
        text="Get Started"
        onClick={() => navigate("/register")}
        styles="mx-[16px] sm:hidden rounded-lg"
        hasArrow={true}
      />
    </div>
  );
};

export default MobileNav;
