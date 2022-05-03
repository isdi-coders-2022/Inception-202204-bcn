import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Given a Header component", () => {
  describe("When it's instantiated", () => {
    test("Then it should render a div with image inside", () => {
      const image = "/images/logo-supersimple.png";

      render(<Header />);

      const expectedImageRendered = screen.getByRole("img");

      expect(expectedImageRendered.src).toContain(image);
    });

    test("Then it shoul render a text 'Search Cocktail:'", () => {
      const text = "Search Cocktail:";

      render(<Header />);

      const exepectedTextRendered = screen.getByText(text);

      expect(exepectedTextRendered).not.toBeNull();
    });
  });
});
