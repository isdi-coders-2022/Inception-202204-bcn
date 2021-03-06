import { useContext, useEffect } from "react";
import List from "../../components/List/List";
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
      <List
        buttonAction={"add"}
        buttonSource={button}
        drinks={drinksData.alcoholicDrinks}
      />
    </ListPageStyles>
  );
};

export default ListPage;
