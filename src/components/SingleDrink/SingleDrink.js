import Button from "../Button/Button";

const SingleDrink = ({
  name,
  category,
  image,
  action,
  altDescription,
  source,
}) => {
  return (
    <div>
      <img src={image} alt={name} />
      <h2 className="drink-name">{name}</h2>
      <p className="drink-category">{category}</p>
      <Button action={action} altDescription={altDescription} source={source} />
    </div>
  );
};

export default SingleDrink;
