import AppStyles from "./AppStyles";
import React from "react";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import MainPage from "./pages/MainPage/MainPage";
import ListPage from "./pages/ListPage/ListPage";
import { Route, Routes, Navigate } from "react-router-dom";
import FormPage from "./pages/FormPage/FormPage";
import UserPage from "./pages/UserPage/UserPage";

function App() {
  return (
    <>
      <AppStyles />
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/main-page" element={<Navigate replace to="/" />} />
        <Route exact path="/drink-modification" element={<FormPage />} />
        <Route exact path="/list-page" element={<ListPage />} />
        <Route exact path="/user-page" element={<UserPage />} />
        <Route path="*" element={<MainPage />} />
      </Routes>
      <Navbar />
    </>
  );
}

export default App;
