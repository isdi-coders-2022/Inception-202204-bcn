import {
  addDrinkActionCreation,
  deleteDrinkActionCreation,
  editDrinkActionCreation,
  loadAlcoholicDrinksActionCreation,
} from "./creador";

import {
  addDrinkActionType,
  deleteDrinkActionType,
  editDrinkActionType,
  loadAlcoholicDrinksActionType,
} from "./newDrinkActionType";

describe("Given an addDrinkActionCreation function", () => {
  describe("When an id '3' it's sent", () => {
    test("Then it should contain id '3'", () => {
      const drink = 3;
      const expectAction = { type: addDrinkActionType, drink: 3 };

      const result = addDrinkActionCreation(drink);

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
      const drink = 7;
      const expectAction = { type: editDrinkActionType, drink: 7 };

      const result = editDrinkActionCreation(drink);

      expect(result).toEqual(expectAction);
    });
  });
});

describe("Given an loadDrinkActionCreation function", () => {
  describe("When an id '9' it's sent", () => {
    test("Then it should contain id '9'", () => {
      const drink = 7;
      const expectAction = { type: loadAlcoholicDrinksActionType, drinks: 7 };

      const result = loadAlcoholicDrinksActionCreation(drink);

      expect(result).toEqual(expectAction);
    });
  });
});
