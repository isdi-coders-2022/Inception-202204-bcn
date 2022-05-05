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

  const addToFavorites = useCallback(async (id) => {
    let addedDrink;
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    let drinkData = await response.json();
    addedDrink = drinkData.drinks;
    const objectDrink = addedDrink[0];
    const currentid = objectDrink.idDrink;
    const addedIdDrink = { ...objectDrink, id: currentid };

    const saveDrink = await fetch("https://drinks-api.onrender.com/drinks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addedIdDrink),
    });
  }, []);

  const deleteUserDrink = useCallback(async (id) => {
    await fetch(`https://drinks-api.onrender.com/drinks/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }, []);

  return { loadUserPageList, addToFavorites, deleteUserDrink };
};

export default useLocalApi;
