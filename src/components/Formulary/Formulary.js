import FormularyStyled from "./FormularyStyled";

const Formulary = () => {
  return (
    <FormularyStyled>
      <input type="text" name="" value="" placeholder="Cocktail Name"></input>
      <select name="category">
        <option value=""></option>
        <option value="">Beer</option>
        <option value="">Cocktail</option>
        <option value="">Coffe / Tea</option>
        <option value="">Ordinary Drink</option>
        <option value="">Shake</option>
        <option value="">Shot</option>
        <option value="">Soft Drink</option>
      </select>
      <select name="alcoholic">
        <option value=""></option>
        <option value="">Alcoholic</option>
        <option value="">Non-Alcoholic</option>
      </select>
      <select name="glass">
        <option value=""></option>
        <option value="">Cocktail Glass</option>
        <option value="">Collins Glass</option>
        <option value="">Copper Mug</option>
        <option value="">Highball Glass</option>
        <option value="">Irish Coffe Cup</option>
        <option value="">Old-Fashioned Glass</option>
        <option value="">Whiskey glass</option>
      </select>
      <textarea
        name="Instructions"
        value=""
        placeholder="Cocktail Instructions"
        rows="7"
        cols="30"
      ></textarea>
      <select name="Ingredient1">
        <option value=""></option>
        <option value="">Angostura</option>
        <option value="">Cognac</option>
        <option value="">Dark rum</option>
        <option value="">Gin</option>
        <option value="">Tequila</option>
        <option value="">Triple Sec</option>
        <option value="">Vodka</option>
      </select>
      <input
        type="text"
        name="measure1"
        value=""
        placeholder="Ingredient measure"
      ></input>
      <select name="Ingredient2">
        <option value=""></option>
        <option value="">Angostura</option>
        <option value="">Cognac</option>
        <option value="">Dark rum</option>
        <option value="">Gin</option>
        <option value="">Tequila</option>
        <option value="">Triple Sec</option>
        <option value="">Vodka</option>
      </select>
      <input
        type="text"
        name="measure2"
        value=""
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
        value=""
        placeholder="Ingredient measure"
      ></input>
      <select name="Ingredient4">
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
        name="measure4"
        value=""
        placeholder="Ingredient measure"
      ></input>
      <select name="Ingredient5">
        <option value=""></option>
        <option value="">Cream</option>
        <option value="">Cubes ice</option>
        <option value="">Egg</option>
        <option value="">Lemon peel</option>
        <option value="">Lime</option>
        <option value="">Mango</option>
        <option value="">Mint</option>
        <option value="">Vanilla extract</option>
      </select>
      <input
        type="text"
        name="measure5"
        value=""
        placeholder="Ingredient measure"
      ></input>
      <input type="submit" value="Save Cocktail"></input>
    </FormularyStyled>
  );
};

export default Formulary;
