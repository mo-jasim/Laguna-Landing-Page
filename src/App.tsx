import Footer from "./components/header-footer/Footer";
import Header from "./components/header-footer/Header";
import AboutUs from "./components/pages/AboutUs";
import Destinations from "./components/pages/Destinations";
import Discover from "./components/pages/Discover";
import Home from "./components/pages/Home";
import SearchBar from "./components/pages/SearchBar";
import Services from "./components/pages/Services";
import Update from "./components/pages/Update";

function App() {
  return (
    <>
      <Header />
      <Home />
      <SearchBar />
      <Services />
      <AboutUs />
      <Discover />
      <Destinations />
      <Update />
      <Footer />
    </>
  );
}

export default App;