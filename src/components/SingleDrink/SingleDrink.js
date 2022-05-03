import Button from "../Button/Button";
import SingleDrinkStyled from "./SingleDrinkStyled";

const SingleDrink = ({
  name,
  category,
  image,
  action,
  buttonAction,
  buttonSource,
  buttonAltDescription,
  idKey,
}) => {
  return (
    <SingleDrinkStyled onClick={action} key={idKey}>
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
