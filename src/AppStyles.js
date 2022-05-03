import { createGlobalStyle } from "styled-components";

const AppStyles = createGlobalStyle`
*{
  box-sizing: border-box;
  margin: 0;
}

body{
  background-color: #11001c;
  color: white;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
`;

export default AppStyles;
