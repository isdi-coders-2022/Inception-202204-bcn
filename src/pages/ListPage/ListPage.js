import SingleDrink from "../../components/SingleDrink/SingleDrink";
import ListPageStyles from "./ListPageStyles";

const ListPage = ({ items }) => {
  return (
    <ListPageStyles>
      <ol>
        {items.map((item, index) => {
          return <SingleDrink item={item} key={index} />;
        })}
      </ol>
    </ListPageStyles>
  );
};

export default ListPage;
