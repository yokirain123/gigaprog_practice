import React from "react";
import "./App.css";

import Header from "./Components/Header";
import Hero from "./Components/Hero";
import AboutUs from "./Components/AboutUs";
import OurServices from "./Components/OurServices";
import ContactUs from "./Components/ContactUs";
import OurPros from "./Components/OurPros";
import Reviews from "./Components/Reviews";
import Contacts from "./Components/Contacts";
import Footer from "./Components/Footer"

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <AboutUs/>
      <OurServices/>
      <OurPros/>
      <ContactUs/>
      <Reviews/>
      <Contacts/>
      <Footer />
    </div>
  );
}

export default App;
