import Header from "./components/layout/Header";
import Hero from "./components/Hero/Hero";
import TrustedBy from "./components/TrustedBy/TrustedBy";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Process from "./components/Process/Process";
import Work from "./components/Work/Work";
import Stack from "./components/Stack/Stack";
import Insights from "./components/Insights/Insights";
import Pricing from "./components/Pricing/Pricing";
import FAQ from "./components/FAQ/FAQ";
import Contact from "./components/Contact/Contact";
import Footer from "./components/layout/Footer";
import StickyCta from "./components/layout/StickyCta";

function App() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <TrustedBy />
        <About />
        <Services />
        <Process />
        <Work />
        <Stack />
        <Insights />
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
