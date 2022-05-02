import AppStyles from "./AppStyles";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import SingleDrink from "./components/SingleDrink/SingleDrink";

function App() {
  return (
    <>
      <AppStyles />
      <Header />
      <SingleDrink
        name="Margarita"
        category="Ordinary Drink"
        altDescription="Margarita"
        image="https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg"
      />
      <Navbar />
    </>
  );
}

export default App;
