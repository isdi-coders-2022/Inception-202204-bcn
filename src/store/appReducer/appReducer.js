import DrinkActionTypes from "../actions/DrinkActionTypes";

const appReducer = (currentState, action) => {
  let newState;
  switch (action.type) {
    case DrinkActionTypes.loadDrinksActionType:
      newState = [...action.drinks];
      break;

    default:
      newState = [...currentState];
  }
  return newState;
};
export default appReducer;
