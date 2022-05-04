const Fetch = () => {
  const getPokemonList = async (tag) => {
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic`
    );
    const pokemonFullData = await response.json();
    return pokemonFullData;
  };
  const result = getPokemonList();
  console.log(result);
};

export default Fetch;
