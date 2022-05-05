/* eslint-disable no-unused-vars */
import { useCallback, useContext } from "react";
import {
  deleteUserDrinksActionCreation,
  loadUserDrinksActionCreation,
} from "../store/actions/creador";
import AppContextLocal from "../store/context/AppContextLocal";

const useLocalApi = () => {
  const { dispatch } = useContext(AppContextLocal);

  const loadUserPageList = useCallback(async () => {
    const response = await fetch(`https://drinks-api.onrender.com/drinks`);
    let drinksData = await response.json();
    dispatch(loadUserDrinksActionCreation(drinksData));
    return drinksData;
  }, [dispatch]);

  const deleteUserDrink = useCallback(async (idDrink) => {
    await fetch(`https://drinks-api.onrender.com/drinks/?idDrink=${idDrink}`, {
      method: "DELETE",
    });
  }, []);

  return { loadUserPageList, deleteUserDrink };
};

export default useLocalApi;
