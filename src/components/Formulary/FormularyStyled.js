import styled from "styled-components";

const FormularyStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  gap: 20px;
  margin-bottom: 100px;
  margin-top: 20px;

  input,
  select {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    width: 240px;
    height: 30px;
  }
  textarea {
    width: 240px;
    height: 100px;
  }
`;

export default FormularyStyled;
