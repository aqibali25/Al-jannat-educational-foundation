import React from "react";
import NavbarBrand from "./NavbarBrand";
import NavbarToggle from "./NavbarToggle";
import NavItem from "./NavItem";
import "../Styles/Navbar.css";
import NavLogo from "../../assets/NavLogo.png";

const Navbar = () => {
  const navItemsArray = [
    { name: "Home", link: "/" },
    {
      name: "About",
      link: window.location.pathname.includes(
        "Al-Jannat-Educational-Foundation/admission"
      )
        ? "/Al-Jannat-Educational-Foundation/#about"
        : "#about",
    },
    {
      name: "Academics",
      link: window.location.pathname.includes(
        "Al-Jannat-Educational-Foundation/admission"
      )
        ? "/Al-Jannat-Educational-Foundation/#academics"
        : "#academics",
    },
    {
      name: "Admission",
      link: window.location.pathname.includes(
        "Al-Jannat-Educational-Foundation/admission"
      )
        ? ""
        : "/Al-Jannat-Educational-Foundation/admission",
    },
    {
      name: "Contact",
      link: window.location.pathname.includes(
        "Al-Jannat-Educational-Foundation/admission"
      )
        ? "/Al-Jannat-Educational-Foundation/#contact"
        : "#contact",
    },
  ];
  const navItemStyle = {
    padding: "15px",
  };
  return (
    <nav
      className="navbar navbar-light bg-light navbar-expand-lg fixed-top"
      style={navItemStyle}
    >
      <NavbarBrand brandName="Al Jannat" NavLogo={NavLogo} />
      <NavbarToggle />
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav navbar-right text-center">
          {navItemsArray.map((item, index) => (
            <NavItem key={index} name={item.name} link={item.link} />
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
