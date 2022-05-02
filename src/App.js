import AppStyles from "./AppStyles";
import Header from "./components/Header/Header";
import MainDrinkFilter from "./components/MainDrinkFilter/MainDrinkFilter";
import Navbar from "./components/Navbar/Navbar";


function App() {
  return (
    <>
      <AppStyles />
      <Header />
      <MainDrinkFilter
      text={"Non-alcoholic"}
      image="https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg"
    />
      <Navbar />

    </>
  );
}

export default App;
