import {
  addDrinkActionType,
  deleteDrinkActionType,
  editDrinkActionType,
  loadAlcoholicDrinksActionType,
  loadLatestDrinksActionType,
  loadMostPopularDrinksActionType,
  loadNonAlcoholicDrinksActionType,
} from "./newDrinkActionType";

export const addDrinkActionCreation = (drink) => ({
  type: addDrinkActionType,
  drink,
});

export const deleteDrinkActionCreation = (id) => ({
  type: deleteDrinkActionType,
  id,
});

export const editDrinkActionCreation = (drink) => ({
  type: editDrinkActionType,
  drink,
});

export const loadAlcoholicDrinksActionCreation = (drinks) => ({
  type: loadAlcoholicDrinksActionType,
  drinks,
});

export const loadNonAlcoholicDrinksActionCreation = (drinks) => ({
  type: loadNonAlcoholicDrinksActionType,
  drinks,
});

export const loadMostPopularActionCreation = (drinks) => ({
  type: loadMostPopularDrinksActionType,
  drinks,
});

export const loadLatestDrinksActionCreation = (drinks) => ({
  type: loadLatestDrinksActionType,
  drinks,
});
