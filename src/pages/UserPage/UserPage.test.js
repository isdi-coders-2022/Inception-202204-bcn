import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import AppContextLocal from "../../store/context/AppContextLocal";
import UserPage from "./UserPage";

describe("Given UserPage component", () => {
  describe("When instantiated", () => {
    test("Then it should create 3 list items", () => {
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
        <BrowserRouter>
          <AppContextLocal.Provider value={{ drinksData }}>
            <UserPage />
          </AppContextLocal.Provider>
        </BrowserRouter>
      );
      const listedElements = screen.getAllByRole("listitem");

      expect(listedElements.length).toBe(listedItems);
    });
  });
});
