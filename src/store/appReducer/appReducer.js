import {
  deleteUserDrinkActionType,
  loadAlcoholicDrinksActionType,
  loadLatestDrinksActionType,
  loadMostPopularDrinksActionType,
  loadNonAlcoholicDrinksActionType,
  loadUserDrinkActionType,
} from "../actions/newDrinkActionType";

const appReducer = (currentState, action) => {
  let newState;
  switch (action.type) {
    case loadAlcoholicDrinksActionType:
      newState = { ...currentState, alcoholicDrinks: action.drinks };
      break;

    case loadNonAlcoholicDrinksActionType:
      newState = { ...currentState, nonAlcoholicDrinks: action.drinks };
      break;

    case loadMostPopularDrinksActionType:
      newState = { ...currentState, mostPopularDrinks: action.drinks };
      break;

    case loadLatestDrinksActionType:
      newState = { ...currentState, latestDrinks: action.drinks };
      break;

    case loadUserDrinkActionType:
      newState = { ...currentState, drinks: action.drinks };
      break;

    case deleteUserDrinkActionType:
      newState = { ...currentState, id: action.drinks };
      break;

    default:
      newState = { ...currentState };
  }
  return newState;
};
export default appReducer;
