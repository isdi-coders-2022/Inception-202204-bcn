const Fetch = () => {
  const getDrinkList = async (tag) => {
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic`
    );
    const drinksFullData = await response.json();
    return drinksFullData;
  };
  const result = getDrinkList();
};

export default Fetch;
