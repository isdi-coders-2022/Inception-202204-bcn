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

export const loadAlcoholicDrinksActionCreation = (drinks) => ({
  type: DrinkActionTypes.loadAlcoholicDrinksActionType,
  drinks,
});

export const loadNonAlcoholicDrinksActionCreation = (drinks) => ({
  type: DrinkActionTypes.loadNonAlcoholicDrinksActionType,
  drinks,
});

export const loadMostPopularActionCreation = (drinks) => ({
  type: DrinkActionTypes.loadMostPopularDrinksActionType,
  drinks,
});

export const loadLatestDrinksActionCreation = (drinks) => ({
  type: DrinkActionTypes.loadLatestDrinksActionType,
  drinks,
});
