import React from "react";
import "./App.css";

import Header from "./Components/Header";
import Hero from "./Components/Hero";
import AboutUs from "./Components/AboutUs";
import OurServices from "./Components/OurServices";
import ContactUs from "./Components/ContactUs";

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <AboutUs/>
      <OurServices/>
      <ContactUs/>
    </div>
  );
}

export default App;
