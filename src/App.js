import MainDrinkFilter from "./components/MainDrinkFilter/MainDrinkFilter";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MainDrinkFilter
          text={"Non-alcoholic"}
          image="https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg"
        />
      </header>
    </div>
  );
}

export default App;
