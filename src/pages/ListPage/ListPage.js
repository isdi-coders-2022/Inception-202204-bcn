import ListPageStyles from "./ListPageStyles";

const ListPage = ({ items }) => {
  return (
    <ListPageStyles>
      <ol>
        {items.map((item) => {
          return <li>{item}</li>;
        })}
      </ol>
    </ListPageStyles>
  );
};

export default ListPage;
