import { useState } from "react";

import NavbarButton from "./NavbarButton";
import NavbarLinks from "./NavbarLinks";
import NavbarLogo from "./NavbarLogo";
import { GiHamburgerMenu } from "react-icons/gi";

const NavbarMain = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
      <nav className=" mx-auto -translate-x-[50%] left-[50%] w-full fixed gap-4 z-20 flex ">
        <div className="flex justify-between w-full mx-auto bg-black items-center p-4 text-white lg:border-black lg:rounded-none  sm:border-[0.5px] sm:border-pink sm:rounded-3xl ">
          <NavbarLogo />
          <div
            className={`${
              menuOpen ? "sm:block" : "sm:hidden"
            } lg:block before:`}
          >
            <NavbarLinks />
          </div>
          <NavbarButton />
          
        </div>
        <div className="flex text-white lg:hidden sm:block p-4 bg-black items-center rounded-full border-[0.5px] border-pink">
          <button
            className="text-2xl p-3 border border-pink rounded-full text-white "
            onClick={toggleMenu}
          >
            <GiHamburgerMenu />
          </button>
          
        </div>
     
      </nav>
    </>
  );
};

export default NavbarMain;
