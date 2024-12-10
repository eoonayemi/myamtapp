import { useLocation } from "react-router-dom";
import {
  DashboardContentContainer,
  Logo,
  SearchBox,
  SidebarLinkCard,
  UserModal,
} from "../components";
import { sidebarLinks } from "../constants";
import {
  ArrowBack,
  DottedNotify,
  Menu,
  SettingsOutline,
} from "../assets/icons";
import { useState } from "react";

interface DashboardLayoutProps {
  children: React.ReactNode;
  title: string;
}

const DashboardLayout = ({ children, title }: DashboardLayoutProps) => {
  const [isSideBarOPen, setIsSideBarOPen] = useState(false);
  const { pathname } = useLocation();

  return (
    <main className="flex h-screen overflow-x-hidden overflow-y-auto bg-[#F5F7FA] gap-[2px]">
      <section
        className={`pb-5 md:w-fit overflow-y-auto bg-white h-screen overflow-hidden fixed md:static transition-all duration-700 shadow-custom-shadow md:shadow-none z-20 ${
          isSideBarOPen ? "w-[300px]" : "w-0"
        }`}
      >
        <div className="flex items-center justify-between ml-10 h-[80px] pr-5">
          {" "}
          <Logo
            isWhite={false}
            boxStyles="gap-3"
            textStyles="font-semibold text-[16px]"
            imgStyles="h-[20px]"
          />
          <div
            className={`md:hidden`}
            onClick={() => setIsSideBarOPen((prev) => !prev)}
          >
            <ArrowBack className="text-dark_primary text-2xl" />
          </div>
        </div>

        <div className="gap-2 flex flex-col text-slate-400">
          {sidebarLinks.map((link, i) => (
            <SidebarLinkCard
              key={i}
              {...link}
              isActive={pathname == link.path}
              closeSideBar={() => setIsSideBarOPen(false)}
            />
          ))}
        </div>
      </section>
      <section className="flex-1 bg-[#F5F7FA] flex flex-col">
        <div className="h-[80px] bg-white flex items-center justify-between px-5 md:px-10">
          <div
            className="block md:hidden"
            onClick={() => setIsSideBarOPen((prev) => !prev)}
          >
            <Menu className="text-3xl" />
          </div>
          <div>
            <h1 className="font-normal text-xl">{title}</h1>
          </div>
          <div className="hidden md:flex items-center gap-5 ">
            <SearchBox />
            <div className="bg-white-shade001 p-2 rounded-full">
              <SettingsOutline className="text-[#577aa0] text-xl" />
            </div>
            <div className="bg-white-shade001 p-2 rounded-full">
              <DottedNotify className="text-red-400 text-xl" />
            </div>
            <UserModal />
          </div>
          <UserModal styles="md:hidden" />
        </div>
        <div className="bg-white p-5 md:hidden">
          <SearchBox />
        </div>
        <DashboardContentContainer>{children}</DashboardContentContainer>
      </section>

      {isSideBarOPen && (
        <div className="md:hidden absolute inset-0 bg-[#2b3040] bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40"></div>
      )}
    </main>
  );
};

export default DashboardLayout;
