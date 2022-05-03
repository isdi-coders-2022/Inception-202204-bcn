import MainDrinkFilterStyles from "./MainDrinkFilterStyled";

const MainDrinkFilter = ({ text, image, actionOnClick }) => {
  return (
    <MainDrinkFilterStyles>
      <a href="ListPage" onClick={actionOnClick}>
        <img src={image} alt={`link to ${text} cocktails`} />
        <div className="fading">
          <p>{text}</p>
        </div>
      </a>
    </MainDrinkFilterStyles>
  );
};

export default MainDrinkFilter;
