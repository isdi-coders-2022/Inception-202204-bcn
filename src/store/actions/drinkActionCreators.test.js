import {
  addDrinkActionCreation,
  deleteDrinkActionCreation,
  editDrinkActionCreation,
  loadDrinkActionCreation,
} from "./drinkActionCreators";

import {
  addDrinkActionType,
  deleteDrinkActionType,
  editDrinkActionType,
  loadDrinkActionType,
} from "./drinkActionTypes";

describe("Given an addDrinkActionCreation function", () => {
  describe("When an id '3' it's sent", () => {
    test("Then it should contain id '3'", () => {
      const id = 3;
      const expectAction = { type: addDrinkActionType, id: 3 };

      const result = addDrinkActionCreation(id);

      expect(result).toEqual(expectAction);
    });
  });
});

describe("Given an deleteDrinkActionCreation function", () => {
  describe("When an id '5' it's sent", () => {
    test("Then it should contain id '5'", () => {
      const id = 5;
      const expectAction = { type: deleteDrinkActionType, id: 5 };

      const result = deleteDrinkActionCreation(id);

      expect(result).toEqual(expectAction);
    });
  });
});

describe("Given an editDrinkActionCreation function", () => {
  describe("When an id '7' it's sent", () => {
    test("Then it should contain id '7'", () => {
      const id = 7;
      const expectAction = { type: editDrinkActionType, id: 7 };

      const result = editDrinkActionCreation(id);

      expect(result).toEqual(expectAction);
    });
  });
});

describe("Given an loadDrinkActionCreation function", () => {
  describe("When an id '9' it's sent", () => {
    test("Then it should contain id '9'", () => {
      const id = 7;
      const expectAction = { type: loadDrinkActionType, id: 7 };

      const result = loadDrinkActionCreation(id);

      expect(result).toEqual(expectAction);
    });
  });
});
