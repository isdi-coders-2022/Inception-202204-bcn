import ButtonStyles from "./ButtonStyled";

const Button = ({ action, altDescription, source }) => {
  return (
    <ButtonStyles onClick={action}>
      <img src={source} alt={altDescription} />
    </ButtonStyles>
  );
};

export default Button;
