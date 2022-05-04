import {
  addDrinkActionType,
  deleteDrinkActionType,
  editDrinkActionType,
  loadDrinkActionType,
} from "./drinkActionTypes";

export const addDrinkActionCreation = (id) => ({
  type: addDrinkActionType,
  id,
});

export const deleteDrinkActionCreation = (id) => ({
  type: deleteDrinkActionType,
  id,
});

export const editDrinkActionCreation = (id) => ({
  type: editDrinkActionType,
  id,
});

export const loadDrinkActionCreation = (id) => ({
  type: loadDrinkActionType,
  id,
});
