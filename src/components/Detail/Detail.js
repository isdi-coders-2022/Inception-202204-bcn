import Button from "../Button/Button";

const Detail = ({
  drink: {
    strDrinkThumb,
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
    strIngredient6,
    strIngredient7,
  },
  action1,
  altDescription1,
  source1,
  action2,
  altDescription2,
  source2,
}) => {
  return (
    <>
      <section>
        <img src={strDrinkThumb} alt={strDrink} />
        <section>
          <h2>{strDrink}</h2>
          <ul>
            <li>{strCategory}</li>
            <li>{strAlcoholic}</li>
            <li>{strGlass}</li>
          </ul>
        </section>
        <Button
          action={action1}
          altDescription={altDescription1}
          source={source1}
        ></Button>
      </section>
      <p>{strInstructions}</p>
      <ul>
        <li>{strIngredient1}</li>
        <li>{strIngredient2}</li>
        <li>{strIngredient3}</li>
        <li>{strIngredient4}</li>
        <li>{strIngredient5}</li>
        <li>{strIngredient6}</li>
        <li>{strIngredient7}</li>
      </ul>
      <Button
        action={action2}
        altDescription={altDescription2}
        source={source2}
      ></Button>
    </>
  );
};

export default Detail;
