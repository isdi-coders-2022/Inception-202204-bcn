import AppStyles from "./AppStyles";
import React from "react";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import MainPage from "./pages/MainPage/MainPage";
import ListPage from "./pages/ListPage/ListPage";
import { Route, Routes } from "react-router-dom";
import FormPage from "./pages/FormPage/FormPage";

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
