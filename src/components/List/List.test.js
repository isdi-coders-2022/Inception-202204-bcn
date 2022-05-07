import { render, screen } from "@testing-library/react";
import AppContextLocal from "../../store/context/AppContextLocal";
import List from "./List";

describe("Given a List component", () => {
  describe("When it receives a array of 3 objects", () => {
    test("Then it should render 3 item lists", () => {
      const drinksData = {
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
          {
            strDrink: "Aloha Fruit punch",
            strDrinkThumb:
              "https://www.thecocktaildb.com/images/media/drink/wsyvrt1468876267.jpg",
            idDrink: "12862",
          },
        ],
      };
      const listedItems = 3;

      render(
        <AppContextLocal.Provider value={drinksData}>
          <List drinks={drinksData.drinks} />
        </AppContextLocal.Provider>
      );

      const listedElements = screen.getAllByRole("listitem");

      expect(listedElements.length).toBe(listedItems);
    });
  });
});
