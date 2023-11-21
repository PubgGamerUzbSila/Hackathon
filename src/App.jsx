import "./App.css";
import { Hero } from "./components/Hero/Hero";
import CleaningSide from "./components/OurCleaning/CleaningSide";

function App() {
  return (
    <>
      <div className='container'>
        <Hero />
        <CleaningSide/>
      </div>
    </>
  );
}

export default App;
