import MainDrinkFilter from "../../components/MainDrinkFilter/MainDrinkFilter";

import MainPageStyled from "./MainPageStyled";

const MainPage = () => {
  return (
    <MainPageStyled>
      <MainDrinkFilter
        text={"Alcoholic"}
        image="https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg/preview"
      />
      <MainDrinkFilter
        text={"Non-alcoholic"}
        image="https://www.thecocktaildb.com/images/media/drink/yswuwp1469090992.jpg/preview"
      />
      <MainDrinkFilter
        text={"Most popular"}
        image="https://www.thecocktaildb.com/images/media/drink/vrwquq1478252802.jpg/preview"
      />
      <MainDrinkFilter
        text={"Latest drinks"}
        image="https://www.thecocktaildb.com/images/media/drink/yk70e31606771240.jpg/preview"
      />
    </MainPageStyled>
  );
};

export default MainPage;
