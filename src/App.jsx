import React from "react"
import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import Feature from "./components/Feature"
import Benefits from "./components/Benefits";
// import InsideUs from "./components/InsideUs";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import ContactSection from "./components/ContactSection";
import Footer from './components/Footer'



function App() {


  return (
    <>
      <Header />
      <HeroSection />
      <Feature />
      <Benefits/>
      {/* <InsideUs /> */}
      <Testimonials />
      <Pricing />
      <ContactSection />
      <Footer />

    </>
  )
}

export default App
