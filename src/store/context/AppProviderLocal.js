import { useReducer } from "react";
import appReducer from "../appReducer/appReducer";
import AppContextLocal from "./AppContextLocal";

const AppProviderLocal = ({ children }) => {
  const dataBase = {
    drinks: [],
  };

  let [drinksData, dispatch] = useReducer(appReducer, dataBase);

  return (
    <AppContextLocal.Provider value={{ drinksData, dispatch }}>
      {children}
    </AppContextLocal.Provider>
  );
};

export default AppProviderLocal;
