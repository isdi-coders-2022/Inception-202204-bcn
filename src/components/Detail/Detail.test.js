import { render, screen } from "@testing-library/react";
import AppProvider from "../../store/context/AppProvider";
import AppProviderLocal from "../../store/context/AppProviderLocal";
import Detail from "./Detail";

describe("Given Detail component", () => {
  describe("When it receives an object", () => {
    test("Then it should render 2 lists", () => {
      const drinkDetailsToRender = {
        strDrink: "Afterglow",
        strDrinkThumb:
          "https://www.thecocktaildb.com/images/media/drink/vuquyv1468876052.jpg",
        idDrink: "12560",
      };
      const lists = 2;

      render(
        <AppProvider>
          <AppProviderLocal>
            <Detail drink={drinkDetailsToRender} />
          </AppProviderLocal>
        </AppProvider>
      );

      const listedElements = screen.getAllByRole("list");

      expect(listedElements.length).toBe(lists);
    });
  });
});
