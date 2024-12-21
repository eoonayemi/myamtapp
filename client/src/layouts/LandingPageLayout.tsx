import { Outlet } from "react-router-dom";
import { DesktopNav, FooterCol, Logo, MobileNav } from "../components";
import { Copyright, Menu } from "../assets/icons";
import { useState } from "react";
import { footerLinks } from "../constants";

const LandingPageLayout = () => {
  const [navIsOpen, setNavIsOpen] = useState(false);
  
  return (
    <>
      <header className="bg-dark_primary fixed top-0 inset-x-0 z-50 h-16 flex justify-between items-center px-[16px] sm:px-[20px] md:px-[32px] xl:px-[120px] overflow-hidden">
        <Logo isWhite={true} />
        <div className="flex gap-3 items-center">
          <DesktopNav />
          <Menu
            className="text-white text-3xl lg:hidden"
            onClick={() => setNavIsOpen(!navIsOpen)}
          />
        </div>
      </header>
      <MobileNav
        navIsOpen={navIsOpen}
        onSetNavIsOpen={() => setNavIsOpen(false)}
      />

      <Outlet />
      <footer className="bg-dark_primary footer-res-p">
        <div className="flex flex-row md:gap-40 gap-20 justify-center overflow-hidden flex-wrap">
          {footerLinks.map((link, i) => (
            <FooterCol key={i} {...link} />
          ))}
        </div>

        <div className="bg-white w-full h-[0.005rem] mt-20"></div>

        <div className="text-white text-xs flex flex-col md:flex-row items-center justify-start gap-10 py-10">
          <span>Terms & privacy</span>
          <span>Security</span>
          <span className="flex gap-2">
            <span className="flex items-center justify-center">
              <Copyright className="" />
              <span>2024</span>
            </span>
            <span>MyAmtApp Ltd</span>
          </span>
        </div>
      </footer>
    </>
  );
};

export default LandingPageLayout;
