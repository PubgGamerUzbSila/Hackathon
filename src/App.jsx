import Sumbit from "./components/Sumbit/Sumbit";
import ProfService from "./components/ProfService/ProfService";
import { Hero } from "./components/Hero/Hero";
import Makesus from "./components/MakesUs/Makesus";
import Navbar from "./components/Navbar/Navbar";
import CleaningSide from "./components/OurCleaning/CleaningSide";
import Footer from "./components/Footer/Footer";
import { Article } from "./components/Articleee/Article";
import SafeFromCovid from "./components/SafeFromCovid/SafeFromCovid";
function App() {
  return (
    <>
      <div className='container'>
        <Navbar />
        <Hero />
        <Makesus />
        <ProfService />
        <CleaningSide />
        <SafeFromCovid />
        <Article />
        <Sumbit />
        <Footer />
      </div>
    </>
  );
}

export default App;
