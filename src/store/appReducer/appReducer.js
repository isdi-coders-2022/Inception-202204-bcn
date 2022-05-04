import DrinkActionTypes from "../actions/DrinkActionTypes";

const appReducer = (currentState, action) => {
  let newState;
  switch (action.type) {
    case DrinkActionTypes.loadAlcoholicDrinksActionType:
      newState = { ...currentState, alcoholicDrinks: action.drinks };
      break;

    case DrinkActionTypes.loadNonAlcoholicDrinksActionType:
      newState = { ...currentState, nonAlcoholicDrinks: action.drinks };
      break;

    case DrinkActionTypes.loadMostPopularDrinksActionType:
      newState = { ...currentState, mostPopularDrinks: action.drinks };
      break;

    case DrinkActionTypes.loadLatestDrinksActionType:
      newState = { ...currentState, latestDrinks: action.drinks };
      break;

    default:
      newState = [...currentState];
  }
  return newState;
};
export default appReducer;
