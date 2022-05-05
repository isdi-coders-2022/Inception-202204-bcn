import { loadNonAlcoholicDrinksActionCreation } from "../actions/creador";
import appReducer from "./appReducer";

describe("Given an appReducer function", () => {
  describe("When it receives a 'loadNonAlcoholicDrinksActionCreation' action creator and 2 cocktails", () => {
    test("Then 'drinkdata' should contain those 2 new cocktails", () => {
      let dataBase = { nonAlcoholicDrinks: [] };
      const newCocktail = {
        drinks: [
          {
            strDrink: "Afterglow",
            strDrinkThumb:
              "https://www.thecocktaildb.com/images/media/drink/vuquyv1468876052.jpg",
            idDrink: "12560",
          },
          {
            strDrink: "Alice Cocktail",
            strDrinkThumb:
              "https://www.thecocktaildb.com/images/media/drink/qyqtpv1468876144.jpg",
            idDrink: "12562",
          },
        ],
      };
      debugger;
      const actionToTest = loadNonAlcoholicDrinksActionCreation(newCocktail);

      const drinksData = appReducer(dataBase, actionToTest);

      expect(drinksData.nonAlcoholicDrinks).toBe(newCocktail);
    });
  });
});
