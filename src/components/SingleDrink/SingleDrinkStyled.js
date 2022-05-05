import styled from "styled-components";

const SingleDrinkStyled = styled.li`
  background-color: #3a015c;
  display: flex;
  justify-content: center;
  align-items: center;
  list-style-type: none;
  width: 80%;
  height: 120px;
  border-radius: 20px;
  border: none;
  overflow: hidden;
  padding: 5px;
  margin: 25px;

  .drink-image {
    width: 40%;
    height: 90%;
    border-radius: 15px;
    margin: 5px;
    object-fit: cover;
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
    font-size: 1.1em;
  }

  p {
    color: #afafaf;
    font-size: 1rem;
    padding: 5px 0;
  }
  button {
    background: none;
    img {
      width: 30px;
      height: 30px;
    }
  }
`;

export default SingleDrinkStyled;
