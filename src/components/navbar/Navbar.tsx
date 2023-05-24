import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import MenuItem from "./MenuItem";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  
  const openMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="bg-BACKGROUND">
      <nav className="container flex justify-between items-center p-4">
        <div className="logo">
          <h2 className="font-bold font-Righteous text-FOREGROUND text-2xl">
            Orosia <span className="text-RED">Blog</span>
          </h2>
        </div>
        <ul className="hidden md:flex gap-12 text-FOREGROUND text-sm">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/add-article">Erstellung Artikels</NavLink>
          </li>
          <li>
            <NavLink to="/about">über uns</NavLink>
          </li>
        </ul>
        <HiOutlineBars3BottomRight
          className={`${isActive?"hidden":"text-3xl text-FOREGROUND cursor-pointer md:hidden"}`}
          onClick={openMenu}
        />
        <MenuItem isActive={isActive} openMenu={openMenu} />
      </nav>
    </div>
  );
};

export default Navbar;
