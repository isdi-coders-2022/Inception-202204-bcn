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
  const patata = "?";

  useEffect(() => {
    (async () => {
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic`
      );
      let drinksData = await response.json();

      dispatch(loadAlcoholicDrinksActionCreation(drinksData.drinks));
    })();
  }, []);

  return (
    <AppContext.Provider value={{ drinksData, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
