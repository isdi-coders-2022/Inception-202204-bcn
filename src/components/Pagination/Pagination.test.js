import { render, screen } from "@testing-library/react";
import Pagination from "./Pagination";

describe("Given a Pagination component", () => {
  describe("When it's instantiated", () => {
    test("Then it shoul render images", () => {
      const expectetImages = 2;

      render(<Pagination />);

      const expectetManyImages = screen.getAllByRole("img");

      expect(expectetManyImages.length).toBe(expectetImages);
    });
  });
});
