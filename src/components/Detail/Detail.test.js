import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Detail from "./Detail";

describe("Given Detail component", () => {
  describe("When instantiated with drink object", () => {
    test("Then it should create a 'Margarita' title", () => {
      const item = {
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

      render(<Detail drink={item} />);
      const textTitle = screen.getByText(item.strDrink);

      expect(textTitle).toBeInTheDocument();
    });
  });
});
