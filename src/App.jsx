<<<<<<< HEAD
import "./App.css";
import OurCleaning from "./components/OurCleaning/OurCleaning";

function App() {
  return (
    <>
      <div className="container">
     <OurCleaning/>
=======
import Sumbit from "./components/Sumbit/Sumbit";
import ProfService from "./components/ProfService/ProfService";
import { Hero } from "./components/Hero/Hero";
import Makesus from "./components/MakesUs/Makesus";
import Navbar from "./components/Navbar/Navbar";
import CleaningSide from "./components/OurCleaning/CleaningSide";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <>
      <div className='container'>
        <Navbar/>
        <Hero />
        <Makesus /> 
        <ProfService />
        <CleaningSide />
        <Sumbit />
>>>>>>> main
      </div>
    </>
  );
}

export default App;
