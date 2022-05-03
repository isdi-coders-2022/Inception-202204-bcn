import { render, screen } from "@testing-library/react";
import ListPage from "./ListPage";

describe("Given a ListPage component", () => {
  describe("When it's instantiated and it receives an array with 5 items", () => {
    test("Then it should render  5 li", () => {
      const listOfItems = ["this", "is", "a", "nice", "test"];

      render(<ListPage items={listOfItems} />);

      const expectNumberOfLists = 5;
      const expectRendered = screen.getAllByRole("listitem");

      expect(expectRendered.length).toBe(expectNumberOfLists);
    });
  });
});
