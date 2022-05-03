import styled from "styled-components";

const SingleDrinkStyled = styled.li`
  background-color: #3a015c;
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style-type: none;
  width: 310px;
  height: 120px;
  border-radius: 20px;
  border: none;
  overflow: hidden;
  padding: 5px;

  .drink-image {
    width: 100px;
    height: 100px;
    border-radius: 15px;
    margin: 5px;
  }
  .drink-info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;
    width: 90%;
    height: 90%;
    margin: 10px;
  }

  h2 {
    color: white;
    font-size: 1.6em;
  }

  p {
    color: #afafaf;
    font-size: 1.2em;
    padding: 5px 0;
  }
`;

export default SingleDrinkStyled;
