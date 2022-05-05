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

  const button = "/images/favourites_icon.png";

  return (
    <ListPageStyles>
      <ol>
        {drinksData.alcoholicDrinks.map((drink) => {
          return (
            <SingleDrink
              item={drink}
              key={drink.idDrink}
              buttonSource={button}
              buttonAction={"add"}
            />
          );
        })}
      </ol>
    </ListPageStyles>
  );
};

export default ListPage;
