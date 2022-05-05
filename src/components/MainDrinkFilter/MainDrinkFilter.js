import { Link } from "react-router-dom";
import MainDrinkFilterStyled from "./MainDrinkFilterStyled";

const MainDrinkFilter = ({ text, image }) => {
  return (
    <MainDrinkFilterStyled>
      <Link to="list-page">
        <div className="block">
          <img src={image} alt={`link to ${text} cocktails`} />
          <div className="fading">
            <p>{text}</p>
          </div>
        </div>
      </Link>
    </MainDrinkFilterStyled>
  );
};

export default MainDrinkFilter;
