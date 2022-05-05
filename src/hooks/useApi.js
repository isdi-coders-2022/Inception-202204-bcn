import { useCallback, useContext } from "react";
import { loadAlcoholicDrinksActionCreation } from "../store/actions/creador";
import AppContext from "../store/context/AppContext";

const useApi = () => {
  const { dispatch } = useContext(AppContext);

  const loadPageList = useCallback(async () => {
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic`
    );
    let drinksData = await response.json();
    dispatch(loadAlcoholicDrinksActionCreation(drinksData.drinks));
    return drinksData;
  }, [dispatch]);

  return { loadPageList };
};

export default useApi;
