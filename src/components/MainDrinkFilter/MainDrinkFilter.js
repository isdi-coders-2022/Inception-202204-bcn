import MainDrinkFilterStyles from "./MainDrinkFilterStyled";

const MainDrinkFilter = ({ text, image, actionOnClick }) => {
  return (
    <MainDrinkFilterStyles>
      <div onClick={actionOnClick}>
        <img src={image} alt={`link to ${text} cocktails`} />
        <div className="fading">
          <p>{text}</p>
        </div>
      </div>
    </MainDrinkFilterStyles>
  );
};

export default MainDrinkFilter;
