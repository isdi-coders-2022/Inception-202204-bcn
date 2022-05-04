import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import DetailPage from "./DetailPage";

describe("Given DetailPage component", () => {
  describe("When instantiated", () => {
    test("Then it should render a paragraph with text 'Ordinary Drink'", () => {
      const drink = {
        idDrink: "11007",
        strDrink: "Margarita",
        strDrinkAlternate: null,
        strTags: "IBA,ContemporaryClassic",
        strVideo: null,
        strCategory: "Ordinary Drink",
        strIBA: "Contemporary Classics",
        strAlcoholic: "Alcoholic",
        strGlass: "Cocktail glass",
        strInstructions:
          "Rub the rim of the glass with the lime slice to make the salt stick to it. Take care to moisten only the outer rim and sprinkle the salt on it. The salt should present to the lips of the imbiber and never mix into the cocktail. Shake the other ingredients with ice, then carefully pour into the glass.",
        strDrinkThumb:
          "https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg",
        strIngredient1: "Tequila",
        strIngredient2: "Triple sec",
        strIngredient3: "Lime juice",
        strIngredient4: "Salt",
        strIngredient5: null,
        strIngredient6: null,
        strIngredient7: null,
      };

      render(<DetailPage drink={drink} />);
      const textTitle = screen.getByText(drink.strCategory);

      expect(textTitle).toBeInTheDocument();
    });
  });
});
