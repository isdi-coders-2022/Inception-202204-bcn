import AppStyles from "./AppStyles";
import React from "react";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import MainPage from "./pages/MainPage/MainPage";
import ListPage from "./pages/ListPage/ListPage";
import { Route, Routes } from "react-router-dom";
import FormPage from "./pages/FormPage/FormPage";
import DetailPage from "./pages/DetailPage/DetailPage";

const drink = {
  idDrink: "11007",
  strDrink: "Margarita",
  strDrinkAlternate: null,
  strTags: "IBA,ContemporaryClassic",
  strVideo: null,
  strCategory: "Ordinary Drink",
  strIBA: "Contemporary Classics",
  strAlcoholic: "Alcoholic",
  strGlass: "Cocktail glass",
  strInstructions:
    "Rub the rim of the glass with the lime slice to make the salt stick to it. Take care to moisten only the outer rim and sprinkle the salt on it. The salt should present to the lips of the imbiber and never mix into the cocktail. Shake the other ingredients with ice, then carefully pour into the glass.",
  strDrinkThumb:
    "https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg",
  strIngredient1: "Tequila",
  strIngredient2: "Triple sec",
  strIngredient3: "Lime juice",
  strIngredient4: "Salt",
  strIngredient5: null,
  strIngredient6: null,
  strIngredient7: null,
};

function App() {
  return (
    <>
      <AppStyles />
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/main-page" element={<MainPage />} />
        <Route path="/formulary" element={<FormPage />} />
        <Route
          path="/list-page"
          element={
            <ListPage
              items={[
                {
                  strDrink: "Bernat",
                  strCategory: "Alcoholic",
                  strDrinkThumb: "/images/home_icon.svg",
                },
              ]}
            />
          }
        />
        <Route path="*" element={<MainPage />} />
      </Routes>
      <Navbar />
    </>
  );
}

export default App;
