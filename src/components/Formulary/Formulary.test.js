import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AppProvider from "../../store/context/AppProvider";
import AppProviderLocal from "../../store/context/AppProviderLocal";
import Formulary from "./Formulary";
import FormularyStyled from "./FormularyStyled";

/*   
  describe("", () => {

  describe('SomeComponent' () => {
  test('validates model on button click', () => {
      const handleSubmit = jest.fn();
      const wrapper = mount(
          <Login handleSubmit={handleSubmit}/>
      );
      const instance = wrapper.instance();
      const submitBtn = app.find('#sign-in')
      submitBtn.simulate('click')
      expect(handleSubmit).toHaveBeenCalled();
    });
  }


  })
 */

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
