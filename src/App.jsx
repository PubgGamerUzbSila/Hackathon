import "./App.css";
import { Hero } from "./components/Hero/Hero";
import Makesus from "./components/MakesUs/Makesus";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <div className="container">
        <Navbar/>
        <Makesus /> 
      </div>
    </>
  );
}

export default App;
