import { useContext, useEffect } from "react";
import UserList from "../../components/UserList/UserList";
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
      <UserList
        buttonAction={"delete"}
        buttonSource={button}
        drinks={drinksData.drinks}
      />
    </UserPageStyles>
  );
};
export default UserPage;
