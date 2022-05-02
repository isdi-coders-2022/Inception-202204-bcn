import styled from "styled-components";

const HeaderComponentStyles = styled.header`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  width: 100%;
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #11001c;
  color: #fff;

  .info__header {
    margin: 0 auto;
  }

  img {
    width: 140px;
    height: 70px;
    margin-top: 20px;
  }
  .seacher {
    display: flex;
    align-items: center;
    margin-top: 10px;
    input {
      border-radius: 40px;
      height: 30px;
      width: 120px;
      text-align: center;
    }
  }
`;

export default HeaderComponentStyles;
