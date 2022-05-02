import HeaderStyles from "./HeaderStyles";

const Header = () => {
  return (
    <HeaderStyles>
      <div className="info__header">
        <img src="/images/logo-supersimple.png" alt="Logotipo " />
        <div className="seacher">
          <p>Search Cocktail:</p>
          <input type="text" />
        </div>
      </div>
    </HeaderStyles>
  );
};

export default Header;
