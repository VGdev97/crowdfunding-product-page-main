import { useState } from "react";
import logo from "../assets/logo.svg";
import hamburger from "../assets/icon-hamburger.svg";

const Header = () => {
  const [menu, setMenu] = useState(false);
  return (
    <header className="bg px-5 relative">
      <div className="container py-[40px] flex justify-between items-center">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <nav className="text-white">
          <div className="hidden lg:flex items-center gap-10">
            <a href="/">About</a>
            <a href="/">Discover</a>
            <a href="/">Get Started</a>
          </div>
          <div>
            <img
              src={hamburger}
              alt="hamburger"
              className="flex lg:hidden cursor-pointer"
              onClick={() => setMenu(!menu)}
            />
          </div>
        </nav>
      </div>
      <div className="flex justify-center">
        {menu && (
          <div className="absolute flex flex-col w-[90%] bg-white rounded-lg shadow-lg z-[590]">
            <a
              href="/"
              className="text-[19px] font-semibold border-[#e1dfdf] pb-3 border-b-[1px] px-[20px] py-[25px] "
            >
              About
            </a>
            <a
              href="/"
              className="text-[19px] font-semibold border-[#e1dfdf] pb-3 border-b-[1px] px-[20px] py-[25px] "
            >
              Discover
            </a>
            <a
              href="/"
              className="text-[19px] font-semibold  px-[20px] py-[25px] "
            >
              Get Started
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
