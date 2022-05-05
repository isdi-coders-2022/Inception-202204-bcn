import { useEffect, useReducer } from "react";
import { loadAlcoholicDrinksActionCreation } from "../actions/creador";
import appReducer from "../appReducer/appReducer";
import AppContext from "./AppContext";

const AppProvider = ({ children }) => {
  const dataBase = {
    alcoholicDrinks: [],
    nonAlcoholicDrinks: [],
    mostPopularDrinks: [],
    latestDrinks: [],
  };

  let [drinksData, dispatch] = useReducer(appReducer, dataBase);

  return (
    <AppContext.Provider value={{ drinksData, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
