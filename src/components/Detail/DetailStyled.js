import styled from "styled-components";

const DetailStyled = styled.div`
  background-color: inherit;
  .detail-main {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 0px;
    &__image {
      width: 100px;
      height: 100px;
      border: 1px solid white;
      border-radius: 20px;
    }
    &__cocktail-section {
      display: flex;
      flex-direction: column;
    }
    h2 {
      font-size: 1.4em;
    }
    &__categories {
      font-size: 0.9em;
      list-style: none;
      padding: 0;
      display: flex;
      flex-direction: column;
    }
  }
  .detail-extended {
    margin-top: 20px;
    &__description {
      margin-bottom: 20px;
    }
    &__ingredients {
      list-style: none;
      padding: 0;
      li {
        background-color: #45465f;
        padding: 5px;
        margin: 10px 0;
      }
    }
  }
  .detail-edit {
    display: flex;
    justify-content: center;
    margin: 20px;
  }
`;

export default DetailStyled;
