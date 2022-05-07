import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import AppContext from "./store/context/AppContext";

describe("Given a App Component", () => {
  describe("When it's instanciet", () => {
    test("Then it should render 4 list items", () => {
      const lists = 4;
      const state = [];

      render(
        <AppContext.Provider value={state}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </AppContext.Provider>
      );

      const receivedResult = screen.getAllByRole("listitem");

      expect(receivedResult).toHaveLength(lists);
    });
  });
});
