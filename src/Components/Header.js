import React, { useState } from "react";
import "../App.css";
import { Trans, useTranslation } from "react-i18next";
import i18n from "../i18n";

function Header() {
  const { t } = useTranslation(["header"]);
  const [language, setLanguage] = useState("en-US");

  const handleLanguageChange = (e) => {
    e.preventDefault();
    console.log("Language::", e.target.value);
    setLanguage(e.target.value);    i18n.changeLanguage(e.target.value);
  };
  return (
    <section className="App-header">
      <label className="App-label">{t("choose language msg")}</label>
      <div className="App-btn">
        <button value="en-US" onClick={handleLanguageChange}>
          {t("lng_English")}
        </button>
        <button value="ja-JP" onClick={handleLanguageChange}>
          {t("lng_Japanese")}
        </button>
      </div>
    </section>
  );
}

export default Header;
