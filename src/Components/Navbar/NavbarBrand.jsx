const NavBrand = ({ brandName, brandLink }) => {
  return (
    <a href={brandLink} className="navbar-brand">
      {brandName}
    </a>
  );
};

export default NavBrand;
