import HeaderComponentStyles from "./HeaderComponentStyles";

const HeaderComponent = () => {
  return (
    <HeaderComponentStyles>
      <div className="info__header">
        <img src="/images/logo-supersimple.png" alt="Logotipo " />
        <div className="seacher">
          <p>Search Cocktail:</p>
          <input type="text" />
        </div>
      </div>
    </HeaderComponentStyles>
  );
};

export default HeaderComponent;
