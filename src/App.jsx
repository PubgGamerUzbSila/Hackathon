import "./App.css";
import SafeFromCovid from "./components/SafeFromCovid/SafeFromCovid";
import { Hero } from "./components/Hero/Hero";
function App() {
  return (
    <>
      <div className='container'>
        <Hero />
        <SafeFromCovid />
      </div>
    </>
  );
}

export default App;
