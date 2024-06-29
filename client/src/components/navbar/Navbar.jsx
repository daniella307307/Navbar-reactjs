import React from "react";
import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faSearch,
  faMoon,
  faSun,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ theme, setTheme }) => {
  const handleThemeToggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className={theme}>
      <div className="logo-content">
        <FontAwesomeIcon icon={faGraduationCap} className="logo" />
        <span>EduFord</span>
      </div>
        <ul className="menu">
          <li>Home</li>
          <li>Products</li>
          <li>Features</li>
          <li>About Us</li>
        </ul>


        <div className="search-box">
          <input type="search" placeholder="Search..." />
          <FontAwesomeIcon icon={faSearch} id="search" />
        </div>
        <FontAwesomeIcon
          icon={theme === "light" ? faSun : faMoon}
          className="toggle-icon"
          onClick={handleThemeToggle}
        />
      </div>
  );
};

export default Navbar;
