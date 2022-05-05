import { useContext } from "react";
import SingleDrink from "../../components/SingleDrink/SingleDrink";
import AppContextLocal from "../../store/context/AppContextLocal";
import UserPageStyles from "./UserPageStyles";

const UserPage = () => {
  const { drinksData } = useContext(AppContextLocal);
  debugger;
  return (
    <UserPageStyles>
      <ol>
        {drinksData.drinks.map((drink) => {
          return <SingleDrink item={drink} key={drink.idDrink} />;
        })}
      </ol>
    </UserPageStyles>
  );
};
export default UserPage;
