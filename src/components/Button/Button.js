import useLocalApi from "../../hooks/useLocalApi";
import ButtonStyled from "./ButtonStyled";

const Button = ({ action, altDescription, source, id }) => {
  const { addToFavorites, deleteUserDrink } = useLocalApi();
  return (
    <ButtonStyled
      onClick={
        action === "add"
          ? () => {
              addToFavorites(id);
            }
          : () => {
              deleteUserDrink(id);
            }
      }
    >
      <img src={source} alt={altDescription} />
    </ButtonStyled>
  );
};

export default Button;
