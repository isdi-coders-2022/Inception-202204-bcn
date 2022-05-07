import SingleDrink from "../SingleDrink/SingleDrink";

const UserList = ({ drinks, buttonSource, buttonAction }) => {
  return (
    <ol>
      {drinks.leength !== 0 &&
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
export default UserList;
