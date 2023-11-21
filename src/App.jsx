import "./App.css";
import ProfService from "./components/ProfService/ProfService";
import { Hero } from "./components/Hero/Hero";
import Makesus from "./components/MakesUs/Makesus";
import Navbar from "./components/Navbar/Navbar";
import CleaningSide from "./components/OurCleaning/CleaningSide";

function App() {
  return (
    <>
      <div className='container'>
        <Navbar/>
        <Hero />
        <Makesus /> 
        <ProfService />
        <CleaningSide />
      </div>
    </>
  );
}

export default App;
