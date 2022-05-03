import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Navbar";

describe("Given a Navbar component", () => {
  describe("When it's instantiated", () => {
    test("Then it should rendered 3 links", () => {
      const numberOfLinks = 3;

      render(
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      );

      const expectLinks = screen.getAllByRole("link");

      expect(expectLinks.length).toBe(numberOfLinks);
    });
  });
});
