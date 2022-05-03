import styled from "styled-components";

const HeaderStyles = styled.header`
  width: 100%;
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #11001c;
  color: #fff;
  padding: 20px;

  .info__header {
    margin: 0 auto;
  }

  img {
    width: 140px;
    height: 70px;
  }
  .seacher {
    display: flex;
    align-items: center;
    margin-top: 10px;
    input {
      border-radius: 40px;
      height: 30px;
      width: 50%;
      text-align: center;
      margin-left: 6%;
    }
  }
`;

export default HeaderStyles;
