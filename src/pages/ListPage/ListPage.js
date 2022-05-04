import SingleDrink from "../../components/SingleDrink/SingleDrink";
import Fetch from "../../fetch";
import ListPageStyles from "./ListPageStyles";

const ListPage = ({ items, buttonSource, buttonAction }) => {
  Fetch();
  return (
    <ListPageStyles>
      <ol>
        {items.map((item, index) => {
          return (
            <SingleDrink
              item={item}
              key={index}
              buttonSource={buttonSource}
              buttonAction={buttonAction}
            />
          );
        })}
      </ol>
    </ListPageStyles>
  );
};

export default ListPage;
