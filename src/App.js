import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppStyles from "./AppStyles";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <AppStyles />
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="ListPage" />
        </Routes>
      </BrowserRouter>
      <Navbar />
    </>
  );
}

export default App;
