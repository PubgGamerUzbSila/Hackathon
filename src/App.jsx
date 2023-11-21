import "./App.css";
<<<<<<< HEAD
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
=======
import Sumbit from "./components/Sumbit/Sumbit";
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
>>>>>>> main
      </div>
        <Sumbit />
    
    </>
  );
}

export default App;
