import "./App.css";
import ProfService from "./components/ProfService/ProfService";
import { Hero } from "./components/Hero/Hero";
import CleaningSide from "./components/OurCleaning/CleaningSide";


function App() {
  return (
    <>
      <div className="container">
        <ProfService/>
        <Hero />
        <CleaningSide/>
      </div>
    </>
  );
}

export default App;
