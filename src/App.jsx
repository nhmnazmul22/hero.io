import { Outlet, useNavigation } from "react-router";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import GlobalSpinner from "./components/Fallback/GlobalSpinner";

function App() {
  const navigation = useNavigation();
  const isNavigating = Boolean(navigation.location);
  return (
    <>
      <Navbar></Navbar>
      <main>
        {isNavigating && <GlobalSpinner />}
        {!isNavigating && <Outlet></Outlet>}
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
