import React from "react";
import Newsletter from "./Newsletter";
import Navigation from "./Navigation";
import Contact from "./ContactInfo";
import logo from "../../assets/FooterLogo.png";
import "../Styles/Footer.css";

const Footer = () => {
  return (
    <footer className="bg-dark text-light p-4">
      <div className="col-md-4 newsSleter">
        <Newsletter />
      </div>
      <div className="footerContent">
        <img src={logo} alt="" />
        <Navigation />
        <Contact />
      </div>
      <div className="text-center mt-3">
        <p>2024 © copyright - All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
