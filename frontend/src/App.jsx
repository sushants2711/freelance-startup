import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Process from "./components/Process";
import Work from "./components/Work";
import Stack from "./components/Stack";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import StickyCta from "./components/StickyCta";

function App() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <About />
        <Services />
        <Process />
        <Work />
        <Stack />
        <Pricing />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <StickyCta />
    </>
  );
}

export default App;
