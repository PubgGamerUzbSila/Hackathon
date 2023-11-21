import "./App.css";
import ProfService from "./components/ProfService/ProfService";
import { Hero } from "./components/Hero/Hero";
import CleaningSide from "./components/OurCleaning/CleaningSide";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <div className="container">
        <ProfService />
        <Hero />
        <CleaningSide />
      </div>
    </>
  );
}

export default App;
