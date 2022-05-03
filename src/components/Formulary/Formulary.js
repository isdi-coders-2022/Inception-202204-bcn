import FormularyStyled from "./FormularyStyled";

const Formulary = () => {
  return (
    <FormularyStyled>
      <input type="text" name="" placeholder="Cocktail Name"></input>
      <select name="category">
        <option></option>
        <option value=""></option>
        <option value="Beer">Beer</option>
        <option value="Cocktail">Cocktail</option>
        <option value="Coffe / Tea">Coffe / Tea</option>
        <option value="Ordinary Drink">Ordinary Drink</option>
        <option value="Shake">Shake</option>
        <option value="Shot">Shot</option>
        <option value="Soft Drink">Soft Drink</option>
      </select>
      <select name="alcoholic">
        <option value=""></option>
        <option value="Alcoholic">Alcoholic</option>
        <option value="Non-Alcoholic">Non-Alcoholic</option>
      </select>
      <select name="glass">
        <option value=""></option>
        <option value="Cocktail Glass">Cocktail Glass</option>
        <option value="Collins Glass">Collins Glass</option>
        <option value="Copper Mug">Copper Mug</option>
        <option value="Highball Glass">Highball Glass</option>
        <option value="Irish Coffe Cup">Irish Coffe Cup</option>
        <option value="Old-Fashioned Glass">Old-Fashioned Glass</option>
        <option value="Whiskey glass">Whiskey glass</option>
      </select>
      <textarea
        name="Instructions"
        placeholder="Cocktail Instructions"
        rows="7"
        cols="30"
      ></textarea>
      <select name="Ingredient1">
        <option value=""></option>
        <option value="Angostura">Angostura</option>
        <option value="Cognac">Cognac</option>
        <option value="Dark rum">Dark rum</option>
        <option value="Light rum">Light rum</option>
        <option value="Gin"></option>
        <option value="Tequila">Tequila</option>
        <option value="Triple Sec">Triple Sec</option>
        <option value="Vodka">Vodka</option>
      </select>
      <input
        type="text"
        name="measure1"
        placeholder="Ingredient measure"
      ></input>
      <select name="Ingredient2">
        <option value=""></option>
        <option value="Sweet Vermouth">Sweet Vermouth</option>
        <option value="Dry Vermouth">Dry Vermouth</option>
        <option value="Champagne">Champagne</option>
        <option value="Bourbon">Bourbon</option>
        <option value="Kahlua">Kahlua</option>
        <option value="Irish whiskey">Irish whiskey</option>
        <option value="Sherry">Sherry</option>
      </select>
      <input
        type="text"
        name="measure2"
        placeholder="Ingredient measure"
      ></input>
      <select name="Ingredient3">
        <option value=""></option>
        <option value="">Grenadine</option>
        <option value="">Lemon juice</option>
        <option value="">Lime juice</option>
        <option value="">Orange juice</option>
        <option value="">Pineapple juice</option>
        <option value="">Soda water</option>
        <option value="">Sprite</option>
        <option value="">Sugar syrup</option>
        <option value="">Sweet Vermouth</option>
        <option value="">Tonic water</option>
      </select>
      <input
        type="text"
        name="measure3"
        placeholder="Ingredient measure"
      ></input>
      <select name="Ingredient4">
        <option value=""></option>
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
      <input
        type="text"
        name="measure4"
        placeholder="Ingredient measure"
      ></input>
      <select name="Ingredient5">
        <option value=""></option>
        <option value="Cream">Cream</option>
        <option value="Cubes ice">Cubes ice</option>
        <option value="Egg">Egg</option>
        <option value="Lemon peel">Lemon peel</option>
        <option value="Lime">Lime</option>
        <option value="Mango">Mango</option>
        <option value="Mint">Mint</option>
        <option value="Vanilla extract">Vanilla extract</option>
      </select>
      <input
        type="text"
        name="measure5"
        placeholder="Ingredient measure"
      ></input>
      <input type="submit" value="Save Cocktail"></input>
    </FormularyStyled>
  );
};

export default Formulary;
