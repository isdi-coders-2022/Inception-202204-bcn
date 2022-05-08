import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AppProvider from "../../store/context/AppProvider";
import AppProviderLocal from "../../store/context/AppProviderLocal";
import Formulary from "./Formulary";
import FormularyStyled from "./FormularyStyled";

describe("Given a formulary component", () => {
  describe("When the button submit is preset", () => {
    test("Then it's ben called", () => {
      const buttonSubmit = jest.fn();
      const nameLabel = "Save Cocktail";

      render(
        <AppProvider>
          <AppProviderLocal>
            <FormularyStyled onSubmit={buttonSubmit}>
              <Formulary />
            </FormularyStyled>
          </AppProviderLocal>
        </AppProvider>
      );

      userEvent.click(screen.getByText(nameLabel));

      expect(buttonSubmit).toHaveBeenCalled();
    });
  });
});
