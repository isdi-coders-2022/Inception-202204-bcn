import Button from "../Button/Button";
import SingleDrinkStyled from "./SingleDrinkStyled";

const SingleDrink = ({
  item: { strDrink: name, strCategory: category, strDrinkThumb: image },
  action,
  buttonAction,
  buttonSource,
  buttonAltDescription,
}) => {
  return (
    <SingleDrinkStyled onClick={action}>
      <img className="drink-image" src={image} alt={name} />
      <div className="drink-info">
        <h2 className="drink-name">{name}</h2>
        <p className="drink-category">{category}</p>
      </div>
      <Button
        altDescription={buttonAltDescription}
        source={buttonSource}
        action={buttonAction}
      />
    </SingleDrinkStyled>
  );
};

export default SingleDrink;
