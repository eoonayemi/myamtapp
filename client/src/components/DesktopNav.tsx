import { useState } from "react";
import { landingPageLinks } from "../constants";
import { CustomButton } from ".";
import { HashLink } from "react-router-hash-link";

const DesktopNav = () => {
  const [currentPath, setCurrentPath] = useState("home");

  return (
    <div className={`flex gap-16 overflow-hidden items-center`}>
      <nav className="flex gap-14 max-lg:hidden">
        {landingPageLinks.map(({ name, path }, i) => (
          <div key={i} className="flex flex-col">
            <HashLink
              smooth
              to={`#${path}`}
              className={`${
                currentPath == path ? "text-white" : "text-white"
              } font-thin text-[14px]`}
              onClick={() => {
                setCurrentPath(path);
              }}
            >
              {name}
            </HashLink>

            <span
              className={`bg-secondary001 ${
                currentPath == path
                  ? "w-full opacity-100 translate-x-0"
                  : `w-0 opacity-0 translate-x-10`
              } h-[3px] rounded-3xl mt-1 transition-all duration-500`}
            ></span>
          </div>
        ))}
      </nav>
      <div className="flex gap-3 max-sm:hidden">
        <CustomButton
          text="Login"
          onClick={() => {}}
          styles="bg-secondary001 text-dark_primary w-[160px] text-[12px] rounded-lg"
        />
        <CustomButton
          text="Get Started"
          onClick={() => {}}
          styles="w-[160px] text-[12px] rounded-lg"
          hasArrow={true}
        />
      </div>
    </div>
  );
};

export default DesktopNav;
