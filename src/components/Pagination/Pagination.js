import PaginationStyles from "./Pagination.styles";

const Pagination = () => {
  return (
    <>
      <PaginationStyles>
        <a href="previus">
          <img src="/images/left arrow.png" alt="" />
        </a>
        <p>1 / 5</p>
        <a href="next">
          <img src="/images/right arrow.png" alt="" />
        </a>
      </PaginationStyles>
    </>
  );
};

export default Pagination;
