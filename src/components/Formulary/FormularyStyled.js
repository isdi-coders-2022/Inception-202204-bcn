import styled from "styled-components";

const FormularyStyled = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  gap: 20px;
  margin-bottom: 150px;

  input,
  select,
  textarea {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    width: 240px;
    height: 30px;
  }
`;

export default FormularyStyled;
