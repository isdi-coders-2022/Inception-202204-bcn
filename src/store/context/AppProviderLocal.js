import { useEffect, useReducer } from "react";
import { loadUserDrinksActionCreation } from "../actions/creador";
import appReducer from "../appReducer/appReducer";
import AppContextLocal from "./AppContextLocal";

const AppProviderLocal = ({ children }) => {
  const dataBase = {
    drinks: [],
  };

  let [drinksData, dispatch] = useReducer(appReducer, dataBase);

  useEffect(() => {
    (async () => {
      const response = await fetch(`https://drinks-api.onrender.com/drinks`);
      let drinksData = await response.json();

      dispatch(loadUserDrinksActionCreation(drinksData));
    })();
  }, []);

  return (
    <AppContextLocal.Provider value={{ drinksData, dispatch }}>
      {children}
    </AppContextLocal.Provider>
  );
};

export default AppProviderLocal;
