import React from "react";
import "./App.css";

import Hero from "./Components/Hero";
import AboutUs from "./Components/AboutUs";
import Header from "./Components/Header";

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <AboutUs/>
    </div>
  );
}

export default App;
