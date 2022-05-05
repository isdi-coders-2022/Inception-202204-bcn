import {
  loadAlcoholicDrinksActionCreation,
  loadLatestDrinksActionCreation,
  loadMostPopularActionCreation,
  loadNonAlcoholicDrinksActionCreation,
  loadUserDrinksActionCreation,
} from "../actions/creador";
import appReducer from "./appReducer";

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

describe("Given an appReducer function", () => {
  describe("When it receives a 'loadNonAlcoholicDrinksActionCreation' action creator and 2 cocktails", () => {
    test("Then 'drinkdata should contain those 2 new cocktails", () => {
      let dataBase = { nonAlcoholicDrinks: [] };
      const actionToTest = loadNonAlcoholicDrinksActionCreation(newCocktail);

      const drinksData = appReducer(dataBase, actionToTest);

      expect(drinksData.nonAlcoholicDrinks).toBe(newCocktail);
    });
  });

  describe("When it receives a 'loadAlcoholicDrinksActionCreation' action creator and 2 cocktails", () => {
    test("Then 'drinkdata should contain those 2 new cocktails", () => {
      let dataBase = { alcoholicDrinks: [] };
      const actionToTest = loadAlcoholicDrinksActionCreation(newCocktail);

      const drinksData = appReducer(dataBase, actionToTest);

      expect(drinksData.alcoholicDrinks).toBe(newCocktail);
    });
  });

  describe("When it receives a 'loadMostPopularActionCreation' action creator and 2 cocktails", () => {
    test("Then 'drinkdata should contain those 2 new cocktails", () => {
      let dataBase = { mostPopularDrinks: [] };
      const actionToTest = loadMostPopularActionCreation(newCocktail);

      const drinksData = appReducer(dataBase, actionToTest);

      expect(drinksData.mostPopularDrinks).toBe(newCocktail);
    });
  });

  describe("When it receives a 'loadLatestDrinksActionCreation' action creator and 2 cocktails", () => {
    test("Then 'drinkdata should contain those 2 new cocktails", () => {
      let dataBase = { latestDrinks: [] };
      const actionToTest = loadLatestDrinksActionCreation(newCocktail);

      const drinksData = appReducer(dataBase, actionToTest);

      expect(drinksData.latestDrinks).toBe(newCocktail);
    });
  });

  describe("When it receives a 'loadUserDrinksActionCreation' action creator and 2 cocktails", () => {
    test("Then 'drinkdata should contain those 2 new cocktails", () => {
      let dataBase = { drinks: [] };
      const actionToTest = loadUserDrinksActionCreation(newCocktail);

      const drinksData = appReducer(dataBase, actionToTest);

      expect(drinksData.drinks).toBe(newCocktail);
    });
  });
});
