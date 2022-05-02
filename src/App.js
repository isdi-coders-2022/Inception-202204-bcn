import AppStyles from "./AppStyles";
import Button from "./Button/Button";
import HeaderComponent from "./HeaderComponent/HeaderComponent";

function App() {
  return (
    <>
      <AppStyles />
      <HeaderComponent />
      <Button path="../public/favicon.png" alternativeName={"favicon"} />
    </>
  );
}

export default App;
