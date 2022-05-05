import { useEffect } from "react";

const useApi = () => {
  useEffect(() => {
    (async () => {
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic`
      );
      let drinks = await response.json();
      return drinks;
    })();
  }, []);
};

export default useApi;
