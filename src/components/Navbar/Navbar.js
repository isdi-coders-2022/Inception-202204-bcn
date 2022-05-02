import NavbarStyles from "./NavbarStyles";

const Navbar = () => {
  return (
    <NavbarStyles>
      <a href="navbar-button">
        <img src="/images/favourites_icon.svg" alt="" />
      </a>
      <a href="navbar-button">
        <img src="/images/home_icon.svg" alt="" />
      </a>
      <a href="navbar-button">
        <img src="/images/add_icon.svg" alt="" />
      </a>
    </NavbarStyles>
  );
};

export default Navbar;
