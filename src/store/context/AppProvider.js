import { useEffect, useReducer } from "react";
import { loadDrinkActinCreation } from "../actions/DrinkActionCreator";
import appReducer from "../appReducer/appReducer";
import AppContext from "./AppContext";

const AppProvider = ({ children }) => {
  const [drinksData, dispatch] = useReducer(appReducer, []);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic`
      );
      let drinksData = await response.json();
      dispatch(loadDrinkActinCreation(drinksData.drinks));
    })();
  }, []);

  return (
    <AppContext.Provider value={{ drinksData, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
