import "./Navbar.css";
import { Link } from "react-router-dom";
import { House, FileUser, PhoneCall, HandPlatter } from "lucide-react";

const NavConfig = [
  {
    name: "home",
    icon: <House className="menu-icon" />,
    title: "Home",
    path: "/"
  },
  {
    name: "about",
    icon: <FileUser className="menu-icon" />,
    title: "About",
    path: "/about",
  },
  {
    name: "contact",
    icon: <PhoneCall className="menu-icon" />,
    title: "Contact",
    path: "/contact",
  },
  {
    name: "our-services",
    icon: <HandPlatter className="menu-icon" />,
    title: "OurServices",
    path: "/our-services",
  },
];

function Navbar({ active }) {
  return (
    <div className="navbar">
      {NavConfig.map((menuItem , index) => {
        return (
          <Link
            key={menuItem.name}
            to={menuItem.path}
            className={`menu-item ${
              active === menuItem.name ? "active-menu" : ""}`} 
             
          >
            {menuItem.icon}
            {menuItem.title}
          </Link>
        );
      })}
    </div>
  );
}

export default Navbar;