import React from "react";
import ListPage from "./ListPage";
import TestRenderer from "react-test-renderer";
import "@testing-library/jest-dom";
import AppProvider from "../../store/context/AppProvider";
import AppProviderLocal from "../../store/context/AppProviderLocal";

describe("Given ListPage component", () => {
  describe("When rendered", () => {
    test("Then it should always match this snapshot", () => {
      const formularyPage = TestRenderer.create(
        <AppProvider>
          <AppProviderLocal>
            <ListPage />
          </AppProviderLocal>
        </AppProvider>
      );
      expect(formularyPage).toMatchSnapshot();
    });
  });
});
