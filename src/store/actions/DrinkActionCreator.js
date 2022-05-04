import DrinkActionTypes from "./DrinkActionTypes";

export const addDrinkActionCreation = (drink) => ({
  type: DrinkActionTypes.addDrinkActionType,
  drink,
});

export const deleteDrinkActionCreation = (id) => ({
  type: DrinkActionTypes.deleteDrinkActionType,
  id,
});

export const editDrinkActionCreation = (drink) => ({
  type: DrinkActionTypes.editDrinkActionType,
  drink,
});

export const loadDrinkActinCreation = (drinks) => ({
  type: DrinkActionTypes.loadDrinksActionType,
  drinks,
});
