import "./App.css";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import Philosophy from "./sections/Philosophy";
import Contributions from "./sections/Contributions";
import CallToAction from "./sections/CallToAction";
import Footer from "./sections/Footer";

function App() {
  return (
    <>
      <Hero />
      <main>
        <Services />
        <Philosophy />
        <Contributions />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}

export default App;
