import AppStyles from "./AppStyles";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import ListPage from "./pages/ListPage/ListPage";


function App() {
  return (
    <>
      <AppStyles />
      <Header />
      <ListPage
        items={[
          {
            strDrink: "Bernat",
            strCategory: "Alcoholic",
            strDrinkThumb: "public/images/home_icon.svg",
          },
        ]}
      />
      <Navbar />
    </>
  );
}

export default App;
