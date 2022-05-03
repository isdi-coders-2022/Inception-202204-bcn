import { render, screen } from "@testing-library/react";
import SingleDrink from "./SingleDrink";

describe("Given SingleDrink component", () => {
  describe("When instantiated", () => {
    let drink;
    beforeEach(() => {
      drink = {
        name: "Margarita",
        category: "alcoholic",
        image:
          "https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg",
      };
    });
    test("Then it should render a list item", () => {
      render(<SingleDrink />);
      const testListItem = screen.getAllByRole("listitem");

      expect(testListItem).not.toBeNull();
    });

    test("Then it should render a list item which contains the text 'alcoholic' in paragraph", () => {
      render(
        <SingleDrink
          name={drink.name}
          category={drink.category}
          image={drink.image}
        />
      );
      const textParagraph = screen.getByText("alcoholic").textContent;

      expect(textParagraph).toContain(drink.category);
    });
  });
});
