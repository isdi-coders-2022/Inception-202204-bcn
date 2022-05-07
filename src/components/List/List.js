import SingleDrink from "../SingleDrink/SingleDrink";

const List = ({ drinks, buttonSource, buttonAction }) => {
  return (
    <ol>
      {typeof drinks !== "undefined" &&
        drinks.map((drink) => {
          return (
            <SingleDrink
              item={drink}
              key={drink.idDrink}
              buttonSource={buttonSource}
              buttonAction={buttonAction}
            />
          );
        })}
    </ol>
  );
};
export default List;
