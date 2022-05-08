import useLocalApi from "../../hooks/useLocalApi";
import FormularyStyled from "./FormularyStyled";

const Formulary = () => {
  const { createFavourites } = useLocalApi();
  const handleSubmit = (event) => {
    event.preventDefault();
    const strDrink = event.target.elements.name.value;
    const strCategory = event.target.elements.category.value;
    const strAlcoholic = event.target.elements.alcoholic.value;
    const strGlass = event.target.elements.glass.value;
    const strInstructions = event.target.elements.instructions.value;
    const strIngredient1 = event.target.elements.ingredient1.value;
    const strIngredient2 = event.target.elements.ingredient2.value;
    const strIngredient3 = event.target.elements.ingredient3.value;
    const strIngredient4 = event.target.elements.ingredient4.value;
    const strIngredient5 = event.target.elements.ingredient5.value;
    const strDrinkThumb = event.target.elements.urlImage.value;

    const idDrink = Math.floor(Math.random() * 1000);

    const newDrink = {
      idDrink,
      strDrink,
      strCategory,
      strAlcoholic,
      strGlass,
      strInstructions,
      strIngredient1,
      strIngredient2,
      strIngredient3,
      strIngredient4,
      strIngredient5,
      strDrinkThumb,
    };
    createFavourites(newDrink);
  };
  return (
    <FormularyStyled>
      <form onSubmit={handleSubmit}>
        <label>
          Cocktail name
          <br />
          <input type="text" name="name" autoComplete="off" required></input>
        </label>
        <label>
          Type of drink
          <br />
          <select name="category">
            <option value="Beer">Beer</option>
            <option value="Cocktail">Cocktail</option>
            <option value="Coffe / Tea">Coffe / Tea</option>
            <option value="Ordinary Drink">Ordinary Drink</option>
            <option value="Shake">Shake</option>
            <option value="Shot">Shot</option>
            <option value="Soft Drink">Soft Drink</option>
          </select>
        </label>
        <label>
          Type
          <br />
          <select name="alcoholic">
            <option value="Alcoholic">Alcoholic</option>
            <option value="Non-Alcoholic">Non-Alcoholic</option>
          </select>
        </label>
        <label>
          Type of glass
          <br />
          <select name="glass">
            <option value="Cocktail Glass">Cocktail Glass</option>
            <option value="Collins Glass">Collins Glass</option>
            <option value="Copper Mug">Copper Mug</option>
            <option value="Highball Glass">Highball Glass</option>
            <option value="Irish Coffe Cup">Irish Coffe Cup</option>
            <option value="Old-Fashioned Glass">Old-Fashioned Glass</option>
            <option value="Whiskey glass">Whiskey glass</option>
          </select>
        </label>
        <label>
          Preparation
          <br />
          <textarea
            name="instructions"
            autoComplete="off"
            placeholder="Cocktail Instructions"
            required
            rows="7"
            cols="30"
          ></textarea>
        </label>
        <label>
          Ingredient 1
          <br />
          <select name="ingredient1">
            <option></option>
            <option value="Angostura">Angostura</option>
            <option value="Cognac">Cognac</option>
            <option value="Dark rum">Dark rum</option>
            <option value="Light rum">Light rum</option>
            <option value="Gin">Gin</option>
            <option value="Tequila">Tequila</option>
            <option value="Triple Sec">Triple Sec</option>
            <option value="Vodka">Vodka</option>
          </select>
        </label>
        <label>
          Ingredient 2<br />
          <select name="ingredient2">
            <option></option>
            <option value="Sweet Vermouth">Sweet Vermouth</option>
            <option value="Dry Vermouth">Dry Vermouth</option>
            <option value="Champagne">Champagne</option>
            <option value="Bourbon">Bourbon</option>
            <option value="Kahlua">Kahlua</option>
            <option value="Irish whiskey">Irish whiskey</option>
            <option value="Sherry">Sherry</option>
          </select>
        </label>
        <label>
          Ingredient 3 <br />
          <select name="ingredient3">
            <option></option>
            <option value="Grenadine">Grenadine</option>
            <option value="Lemon juice">Lemon juice</option>
            <option value="Lime juice">Lime juice</option>
            <option value="Orange juice">Orange juice</option>
            <option value="Pineapple juice">Pineapple juice</option>
            <option value="Soda water">Soda water</option>
            <option value="Sprite">Sprite</option>
            <option value="Sugar syrup">Sugar syrup</option>
            <option value="Sweet Vermouth">Sweet Vermouth</option>
            <option value="Tonic water">Tonic water</option>
          </select>
        </label>
        <label>
          Ingredient 4<br />
          <select name="ingredient4">
            <option></option>
            <option value="Apple juice">Apple juice</option>
            <option value="Milk">Milk</option>
            <option value="Chocolate syrup">Chocolate syrup</option>
            <option value="Tomato juice">Tomato juice</option>
            <option value="Coffee">Coffee</option>
            <option value="Cranberry juice">Cranberry juice</option>
            <option value="Grape juice">Grape juice</option>
            <option value="7-Up">7-Up</option>
            <option value="Tea">Tea</option>
            <option value="Creme de Cacao">Creme de Cacao</option>
          </select>
        </label>
        <label>
          Ingredient 5<br />
          <select name="ingredient5">
            <option></option>
            <option value="Cream">Cream</option>
            <option value="Cubes ice">Cubes ice</option>
            <option value="Egg">Egg</option>
            <option value="Lemon peel">Lemon peel</option>
            <option value="Lime">Lime</option>
            <option value="Mango">Mango</option>
            <option value="Mint">Mint</option>
            <option value="Vanilla extract">Vanilla extract</option>
          </select>
        </label>
        <label>
          Url Image
          <br />
          <input type="text" name="urlImage" autoComplete="off"></input>
        </label>
        <button type="submit" value="Save Cocktail">
          Save Cocktail
        </button>
      </form>
    </FormularyStyled>
  );
};

export default Formulary;
