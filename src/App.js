import { useState } from "react";
import { useTranslation } from "react-i18next";
import "./App.css";
import i18n from "./i18n";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Buttons from "./Components/Buttons"

function App() {
  const [lng, setLng] = useState("en-US");
  const { t } = useTranslation(["common"]);

  const handleChange = (e) => {
    setLng(e.target.value);
    i18n.changeLanguage(e.target.value);
  };
  return (
    <div className="App">
      <section>
        <p>Testing</p>
        <Header />
        <Main />
        <Buttons />
      </section>

    </div>
  );
}

export default App;
