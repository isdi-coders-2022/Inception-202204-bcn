import {
  addDrinkActionType,
  loadLatestDrinksActionType,
  loadMostPopularDrinksActionType,
  loadNonAlcoholicDrinksActionType,
} from "../actions/newDrinkActionType";

const appReducer = (currentState, action) => {
  let newState;
  switch (action.type) {
    case addDrinkActionType:
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

    default:
      newState = [...currentState];
  }
  return newState;
};
export default appReducer;
