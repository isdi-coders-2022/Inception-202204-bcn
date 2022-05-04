import Detail from "../../components/Detail/Detail";
import DetailPageStyled from "./DetailPageStyled";

const DetailPage = ({ drink, action1, action2 }) => {
  return (
    <DetailPageStyled>
      <Detail drink={drink} action1={action1} action2={action2} />
    </DetailPageStyled>
  );
};

export default DetailPage;
