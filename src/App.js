import React from "react";
import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Buttons from "./Components/Buttons";

function App() {
  
  return (
    <div className="App">
      <section>
        <Header />
        <Main />
        <Buttons />
      </section>
    </div>
  );
}

export default App;
