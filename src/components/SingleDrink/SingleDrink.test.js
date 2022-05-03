import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import SingleDrink from "./SingleDrink";

describe("Given SingleDrink component", () => {
  describe("When instantiated", () => {
    let drink;
    beforeEach(() => {
      drink = {
        strDrink: "Margarita",
        strCategory: "alcoholic",
        strDrinkThumb:
          "https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg",
      };
    });
    test("Then it should render a list item", () => {
      render(<SingleDrink item={drink} />);
      const testListItem = screen.getByRole("listitem");

      expect(testListItem).toBeInTheDocument();
    });

    test("Then it should render a list item which contains the text 'alcoholic' in paragraph", () => {
      render(<SingleDrink item={drink} />);
      const textParagraph = screen.getByText("alcoholic").textContent;

      expect(textParagraph).toContain(drink.strCategory);
    });
  });
});
