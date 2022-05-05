import { Link } from "react-router-dom";
import NavbarStyles from "./NavbarStyles";

const Navbar = () => {
  return (
    <NavbarStyles>
      <Link to="/user-page">
        <img src="/images/favourites_icon.png" alt="link to user page" />
      </Link>
      <Link to="main-page">
        <img src="/images/home_icon.svg" alt="link to main page" />
      </Link>
      <Link to="drink-modification">
        <img src="/images/add_icon.svg" alt="link to modifier form" />
      </Link>
    </NavbarStyles>
  );
};

export default Navbar;
