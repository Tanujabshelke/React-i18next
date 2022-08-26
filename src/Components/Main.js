import React from "react";
import "../App.css";
// import { Trans, useTranslation } from "react-i18next";
import { useState } from "react";
import { useT } from "../i18n";

function Main({ lang }) {
  // const { t } = useTranslation(["main"]);
  const t =useT(["main"])
  const [number, setNumber] = useState(0);

  const handleInput = (e) => {
    let number = e.target.value;
    setNumber(number);
  };

  return (
    <div className="App-Main_Content">
      <h1>{t("welcome")}</h1>
      <p>{t("main:interpolation:formatCurrency", { price: 100.99 })}</p>{" "}
      <p>{t("main:interpolation:formatNumber", { num: 90000 })}</p>
      <p>{t("main:interpolation:formatDate", { dateVal: new Date() })}</p>
      <h3>{t("main:plurals:key", { count: 1 })}</h3>
    </div>
  );
}

export default Main;
