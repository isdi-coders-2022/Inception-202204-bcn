import { useHref } from "react-router-dom";
import NavbarStyles from "./NavbarStyles";

const Navbar = () => {
  return (
    <NavbarStyles>
      <a href="ListPage">
        <img src="/images/favourites_icon.svg" alt="" />
      </a>
      <a href="MainPage">
        <img src="/images/home_icon.svg" alt="" />
      </a>
      <a href="FormPage">
        <img src="/images/add_icon.svg" alt="" />
      </a>
    </NavbarStyles>
  );
};

export default Navbar;
