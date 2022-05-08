import Button from "../Button/Button";
import SingleDrinkStyled from "./SingleDrinkStyled";

const SingleDrink = ({
  item: {
    strDrink: name,
    strCategory: category,
    strDrinkThumb: image,
    idDrink: id,
  },
  action,
  buttonAction,
  buttonSource,
  buttonAltDescription,
}) => {
  let goodImage = `${image}`;
  if (image.includes("https://www.thecocktaildb.com/")) {
    goodImage = `${image}/preview`;
  }
  return (
    <SingleDrinkStyled onClick={action}>
      <img className="drink-image" src={goodImage} alt={name} />
      <div className="drink-info">
        <h2 className="drink-name">{name}</h2>
        <p className="drink-category">{category}</p>
      </div>
      <Button
        altDescription={buttonAltDescription}
        source={buttonSource}
        action={buttonAction}
        id={id}
      />
    </SingleDrinkStyled>
  );
};

export default SingleDrink;
