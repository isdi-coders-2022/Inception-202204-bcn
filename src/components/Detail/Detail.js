import DetailStyled from "./DetailStyled";
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
}) => {
  return (
    <DetailStyled>
      <section className="detail-main">
        <img
          className="detail-main__image"
          src={strDrinkThumb}
          alt={strDrink}
        />
        <section className="detail-main__cocktail-section">
          <h2>{strDrink}</h2>
          <ul className="detail-main__categories">
            <li>{strCategory}</li>
            <li>{strAlcoholic}</li>
            <li>{strGlass}</li>
          </ul>
        </section>
        <Button
          action={action1}
          altDescription="Favourite"
          source="public\images\favourites_icon.svg"
        ></Button>
      </section>
      <section className="detail-extended">
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
      </section>
      <Button
        action={action2}
        altDescription="Edit"
        source="public\images\edit.icon.svg"
      ></Button>
    </DetailStyled>
  );
};

export default Detail;
