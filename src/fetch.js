const Fetch = () => {
  const getDrinkList = async () => {
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic`
    );
    return await response.json();
  };
  getDrinkList();
};

export default Fetch;
