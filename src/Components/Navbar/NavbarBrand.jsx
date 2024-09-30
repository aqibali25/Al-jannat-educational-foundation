const NavBrand = ({ brandName, NavLogo }) => {
  return (
    <a href="/" className="navbar-brand">
      <img
        src={NavLogo}
        alt={brandName}
        style={{ height: "60px", width: "150px" }}
      />
    </a>
  );
};

export default NavBrand;
