import React, { useState } from "react";
import Logo from "../../image/eml-logo.png";
import "./nav-bar.css";
import NavSearch from "./nav-search/NavSearch";
import { NavLink } from "react-router-dom";
import { FiAlignLeft } from "react-icons/fi";
import { FiX } from "react-icons/fi";

const NavData = [
  { nav: "Home", path: "/" },
  { nav: "About", path: "/about" },
  { nav: "Service", path: "/service" },
  { nav: "Portfoglio", path: "/portfoglio" },
  { nav: "Page", path: "/page" },
  { nav: "Contact", path: "/contact" },
];

const links = NavData.map((link) => (
  <NavLink key={Math.random()} className="hoverEffect" to={`${link.path}`}>
    <li className="nav-li">{link.nav}</li>
  </NavLink>
));

const NavBar = () => {
  const [navButton, setNavButton] = useState(false);

  const open = () => {
    setNavButton((prevState) => (!prevState ? true : false));
  };

  return (
    <div className="nav-home">
      <NavLink to="/">
        <div className="nav-logo">
          <img className="eml-logo" src={Logo} alt="nav logo" />
        </div>
      </NavLink>
      <NavSearch className="navSearch" />
      {navButton ? (
        <div className="nav-mobile">{links}</div>
      ) : (
        <div className="nav-computer">{links}</div>
      )}
      <span className="toggleNavBar" onClick={open}>
        {navButton ? <FiX /> : <FiAlignLeft />}
      </span>
    </div>
  );
};

export default NavBar;
