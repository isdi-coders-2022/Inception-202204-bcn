import styled from "styled-components";

const MainDrinkFilterStyles = styled.li`
  list-style-type: none;
  width: 225px;
  height: 120px;
  border-radius: 15px;
  border: 1px solid black;
  overflow: hidden;
  display: inline-block;

  img {
    width: 100%;
    height: 100%;
  }
  .fading {
    position: relative;
    top: -145px;
    background-color: white;
    opacity: 0.6;
  }
  p {
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
    margin: 0px;
    height: 40px;
  }
`;

export default MainDrinkFilterStyles;
