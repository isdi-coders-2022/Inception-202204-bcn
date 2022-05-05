import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import AppContext from "../../store/context/AppContext";
import ListPage from "./ListPage";

describe("Given ListPage component", () => {
  describe("When instantiated", () => {
    test("Then it should create 3 list items", () => {
      const drinksData = {
        alcoholicDrinks: [
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
        <BrowserRouter>
          <AppContext.Provider value={{ drinksData }}>
            <ListPage />
          </AppContext.Provider>
        </BrowserRouter>
      );
      const listedElements = screen.getAllByRole("listitem");

      expect(listedElements.length).toBe(listedItems);
    });
  });
});
