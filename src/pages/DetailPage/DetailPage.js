import Detail from "../../components/Detail/Detail";

const DetailPage = ({ drink, action1, action2 }) => {
  return (
    <>
      <Detail drink={drink} action1={action1} action2={action2} />
    </>
  );
};

export default DetailPage;
