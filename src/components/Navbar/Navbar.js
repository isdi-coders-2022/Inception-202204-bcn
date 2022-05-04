import { Link } from "react-router-dom";
import NavbarStyles from "./NavbarStyles";

const Navbar = () => {
  return (
    <NavbarStyles>
      <Link to="list-page">
        <img src="/images/favourites_icon.svg" alt="" />
      </Link>
      <Link to="main-page">
        <img src="/images/home_icon.svg" alt="" />
      </Link>
      <Link to="drink-modification">
        <img src="/images/add_icon.svg" alt="" />
      </Link>
    </NavbarStyles>
  );
};

export default Navbar;
