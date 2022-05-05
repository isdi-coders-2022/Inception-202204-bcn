import { useContext } from "react";
import SingleDrink from "../../components/SingleDrink/SingleDrink";
import AppContext from "../../store/context/AppContext";
import UserPageStyles from "./UserPageStyles";

const UserPage = () => {
  const { drinksData } = useContext(AppContext);
  return (
    <UserPageStyles>
      <ol>
        {drinksData.alcoholicDrinks.map((drink) => {
          return <SingleDrink item={drink} key={drink.idDrink} />;
        })}
      </ol>
    </UserPageStyles>
  );
};
export default UserPage;
