import "./navbar.css";
import logo from "../../assets/logo.png";
import menu_icon from "../../assets/menu-icon.png";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [sticky, setsticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setsticky(true) : setsticky(false);
    });
  }, []);

  const [mobilemenu, setmobilemenu] = useState(false);
  const togglemenu = () => {
    mobilemenu ? setmobilemenu(false) : setmobilemenu(true);
  };
  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      <img className="logo" src={logo} alt="" />
      <ul className={mobilemenu ? "" : "hide-mobile-menu"}>
        <li>
          <Link to="hero" spy={true} smooth={true} offset={0} duration={1000}>
            Home
          </Link>
        </li>
        <li>
          <Link
            to="program"
            spy={true}
            smooth={true}
            offset={-220}
            duration={800}
          >
            Program
          </Link>
        </li>
        <li>
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-150}
            duration={800}
          >
            About Us
          </Link>
        </li>
        <li>
          <Link
            to="campus"
            spy={true}
            smooth={true}
            offset={-220}
            duration={800}
          >
            Campus
          </Link>
        </li>
        <li>
          <Link
            to="testimonials"
            spy={true}
            smooth={true}
            offset={-220}
            duration={800}
          >
            Testimonials
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            className="btn"
            spy={true}
            smooth={true}
            offset={-220}
            duration={800}
          >
            Contact Us
          </Link>
        </li>
      </ul>
      <img className="menubar" onClick={togglemenu} src={menu_icon} alt="" />
    </nav>
  );
};

export default Navbar;
