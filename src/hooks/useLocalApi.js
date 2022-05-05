import { useCallback, useContext } from "react";
import { loadUserDrinksActionCreation } from "../store/actions/creador";
import AppContextLocal from "../store/context/AppContextLocal";

const useLocalApi = () => {
  const { dispatch } = useContext(AppContextLocal);

  const loadUserPageList = useCallback(async () => {
    const response = await fetch(`https://drinks-api.onrender.com/drinks`);
    let drinksData = await response.json();
    dispatch(loadUserDrinksActionCreation(drinksData));
    return drinksData;
  }, [dispatch]);

  return { loadUserPageList };
};

export default useLocalApi;
