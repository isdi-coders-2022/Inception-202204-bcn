import { useContext, useEffect } from "react";
import SingleDrink from "../../components/SingleDrink/SingleDrink";
import useApi from "../../hooks/useApi";
import AppContext from "../../store/context/AppContext";
import ListPageStyles from "./ListPageStyles";

const ListPage = () => {
  const { loadPageList } = useApi();
  const { drinksData } = useContext(AppContext);

  useEffect(() => {
    loadPageList();
  }, [loadPageList]);

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
