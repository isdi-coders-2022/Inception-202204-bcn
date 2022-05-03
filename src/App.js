import AppStyles from "./AppStyles";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import ListPage from "./pages/ListPage/ListPage";

function App() {
  return (
    <>
      <AppStyles />
      <Header />
      <ListPage items={["hola", "esto", "es", "una", "prueba"]} />
      <Navbar />
    </>
  );
}

export default App;
