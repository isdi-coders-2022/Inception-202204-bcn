import styled from "styled-components";

const MainDrinkFilterStyled = styled.li`
  list-style-type: none;
  width: 80%;
  height: 120px;
  border-radius: 10px;
  border: 1px solid black;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .block {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 310px;
    .fading {
      position: absolute;
      background-color: white;
      opacity: 0.6;
      width: 80%;
    }
  }
  img {
    width: 100%;
    height: 100%;
  }
  p {
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
    height: 40px;
  }
`;

export default MainDrinkFilterStyled;
