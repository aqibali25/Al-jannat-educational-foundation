import React from "react";
import NavbarBrand from "./NavbarBrand";
import NavbarToggle from "./NavbarToggle";
import NavItem from "./NavItem";
import "../Styles/Navbar.css";

const Navbar = () => {
  const navItemsArray = [
    { name: "Home", link: "#" },
    { name: "About", link: "#wellcomeSection" },
    { name: "Academics", link: "#coursesSection" },
    { name: "Admission", link: "#" },
    { name: "Contact", link: "#contactSection" },
  ];
  const navItemStyle = {
    padding: "15px",
  };
  return (
    <nav
      className="navbar navbar-light bg-light navbar-expand-lg fixed-top"
      style={navItemStyle}
    >
      <NavbarBrand brandName="My website" brandLink="#" />
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
