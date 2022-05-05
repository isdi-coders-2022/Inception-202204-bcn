import { Link } from "react-router-dom";
import MainDrinkFilterStyles from "./MainDrinkFilterStyled";

const MainDrinkFilter = ({ text, image }) => {
  return (
    <MainDrinkFilterStyles>
      <Link to="list-page">
        <div>
          <img src={image} alt={`link to ${text} cocktails`} />
          <div className="fading">
            <p>{text}</p>
          </div>
        </div>
      </Link>
    </MainDrinkFilterStyles>
  );
};

export default MainDrinkFilter;
