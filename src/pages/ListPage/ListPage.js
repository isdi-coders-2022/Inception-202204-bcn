import { useContext } from "react";
import SingleDrink from "../../components/SingleDrink/SingleDrink";
import AppContext from "../../store/context/AppContext";
import ListPageStyles from "./ListPageStyles";

const ListPage = () => {
  const { drinksData } = useContext(AppContext);

  return (
    <ListPageStyles>
      <ol>
        {drinksData.alcoholicDrinks.map((drink) => {
          return <SingleDrink item={drink} key={drink.idDrink} />;
        })}
      </ol>
    </ListPageStyles>
  );
};

export default ListPage;
