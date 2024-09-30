const NavItem = ({ name, link }) => {
  return (
    <li className="navbar-item">
      <a href={link} className="nav-link">
        {name}
      </a>
    </li>
  );
};

export default NavItem;
