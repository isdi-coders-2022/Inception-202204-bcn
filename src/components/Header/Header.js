import HeaderStyles from "./HeaderStyles";

const Header = () => {
  return (
    <HeaderStyles>
      <div className="info__header">
        <h1 title="queue de poulet">
          <img src="/images/logo-supersimple.png" alt="logo" />
        </h1>
        <div className="seacher">
          <p>Search Cocktail:</p>
          <input title="serch-coctail" type="text" />
        </div>
      </div>
    </HeaderStyles>
  );
};

export default Header;
