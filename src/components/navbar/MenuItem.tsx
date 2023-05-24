import { AiOutlineClose } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import './Navbar.css'
interface MenuItemProps {
  isActive: boolean;
  openMenu: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ isActive, openMenu }) => {
  return (
    <ul className={`${isActive ? "flex" : "hidden"} md:hidden flex flex-col gap-32 text-FOREGROUND text-3xl justify-center items-center fixed inset-0 top-30 bg-BACKGROUND/70 backdrop-blur-md`}>
      <AiOutlineClose className="text-3xl text-FOREGROUND cursor-pointer" onClick={openMenu} />
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
  );
};

export default MenuItem;

