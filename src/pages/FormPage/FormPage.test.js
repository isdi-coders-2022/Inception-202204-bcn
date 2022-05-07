import React from "react";
import FormPage from "./FormPage";
import TestRenderer from "react-test-renderer";
import "@testing-library/jest-dom";
import AppProvider from "../../store/context/AppProvider";
import AppProviderLocal from "../../store/context/AppProviderLocal";

describe("Given FormPage component", () => {
  describe("When rendered", () => {
    test("Then it should always match this snapshot", () => {
      const formularyPage = TestRenderer.create(
        <AppProvider>
          <AppProviderLocal>
            <FormPage />
          </AppProviderLocal>
        </AppProvider>
      );
      expect(formularyPage).toMatchSnapshot();
    });
  });
});
