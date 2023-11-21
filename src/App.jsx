import "./App.css";
import OurService from "./components/OurService/OurService";
import ProfService from "./components/ProfService/ProfService";
import { Hero } from "./components/Hero/Hero";
import CleaningSide from "./components/OurCleaning/CleaningSide";


function App() {
  return (
    <>
      <div className="container">
        <Hero />
        <OurService/>
        <CleaningSide/>
        <ProfService/>
      </div>
    </>
  );
}

export default App;
