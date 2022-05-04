import Detail from "../../components/Detail/Detail";
import DetailPageStyled from "./DetailPageStyled";

const DetailPage = ({ drink, action1, action2 }) => {
  return (
    <DetailPageStyled className="detail-page">
      <Detail drink={drink} action1={action1} action2={action2} />
    </DetailPageStyled>
  );
};

export default DetailPage;
