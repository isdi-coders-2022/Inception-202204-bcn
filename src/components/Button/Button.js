import ButtonStyled from "./ButtonStyled";

const Button = ({ action, altDescription, source }) => {
  return (
    <ButtonStyled onClick={action}>
      <img src={source} alt={altDescription} />
    </ButtonStyled>
  );
};

export default Button;
