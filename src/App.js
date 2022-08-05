import { useState } from "react";
import { useTranslation } from "react-i18next";
import "./App.css";
import i18n from "./i18n";

function App() {
  const [lng, setLng] = useState("en-US");
  const { t } = useTranslation(["common"]);

  const handleChange = (e) => {
    setLng(e.target.value);
    i18n.changeLanguage(e.target.value);
  };
  return (
    <div className="App">
      <p>React i18n</p>
      <section>
        <button onClick={handleChange} value="en-US">
          English
        </button>
        <button onClick={handleChange} value="jp-JP">
          Japanese
        </button>
      </section>
      <p>{t("text")}</p>
    </div>
  );
}

export default App;
