import { useContext, useEffect } from "react";
import SingleDrink from "../../components/SingleDrink/SingleDrink";
import useLocalApi from "../../hooks/useLocalApi";
import AppContextLocal from "../../store/context/AppContextLocal";
import UserPageStyles from "./UserPageStyles";

const UserPage = () => {
  const { loadUserPageList } = useLocalApi();
  const { drinksData } = useContext(AppContextLocal);

  useEffect(() => {
    loadUserPageList();
  }, [loadUserPageList]);

  const button = "/images/delete_icon.svg";

  return (
    <UserPageStyles>
      <ol>
        {drinksData.drinks.map((drink) => {
          return <SingleDrink item={drink} key={button} />;
        })}
      </ol>
    </UserPageStyles>
  );
};
export default UserPage;
