import { IconType } from "react-icons";
import { useLocation, useNavigate } from "react-router-dom";
import { LocationArrow } from "../assets/icons";
import { useState } from "react";

interface SidebarLinkCardProps {
  name: string;
  path: string;
  childLinks?: { name: string; path: string }[];
  Icon: IconType;
  isActive?: boolean;
  closeSideBar: () => void;
}

const SidebarLinkCard = ({
  name,
  path,
  childLinks,
  Icon,
  isActive,
  closeSideBar,
}: SidebarLinkCardProps) => {
  const [childIsOpen, setChildIsOpen] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <div className="flex flex-col text-[#a7bbd2]">
      <div
        onClick={() => {
          if (!childLinks) {
            navigate(path);
            closeSideBar();
          } else {
            setChildIsOpen((prev) => !prev);
          }
        }}
        className={`flex gap-5 items-center ${
          !childLinks ? "cursor-pointer" : "cursor-default"
        } h-[50px] ml-5 rounded-s-full pl-7 pr-16 relative ${
          isActive || pathname.includes(path)
            ? "bg-light_primary"
            : childIsOpen && !pathname.includes(path)
            ? "bg-slate-50"
            : "bg-transparent"
        }`}
      >
        <div>
          <Icon
            className={`${
              isActive || pathname.includes(path)
                ? "text-white"
                : "text-[#a7bbd2]"
            } text-[22px]`}
          />
        </div>
        <div
          className={`text-[14px] ${
            isActive || pathname.includes(path)
              ? "text-white"
              : "text-[#a7bbd2]"
          }`}
        >
          <p>{name}</p>
        </div>

        {isActive && (
          <span className="w-[5px] bg-light_primary absolute top-0 right-0 bottom-0 rounded-s-full" />
        )}
      </div>
      <div
        className={`${
          !childLinks && "hidden"
        } text-[14px] self-end flex flex-col gap-3 w-[70%] justify-center ${
          childIsOpen ? "h-[100px] my-5" : "h-0"
        } overflow-hidden transition-all duration-500`}
      >
        {childLinks?.map(({ name, path }, i) => (
          <div
            key={i}
            onClick={() => {
              navigate(path);
              closeSideBar();
            }}
            className={`flex gap-4 items-center ${
              pathname == path && "text-light_primary"
            } cursor-pointer`}
          >
            <LocationArrow className="text-sm" />
            <p>{name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SidebarLinkCard;
