import React from "react";
import { Trans, useTranslation } from "react-i18next";
import { useState } from "react";
import i18n from "../i18n";
import "../App.css";

function Buttons() {
  const { t } = useTranslation(["common"]);
  return (
    <section className="btn-container">
      <button
        className="btn"
        onClick={() => alert(`${t("common:alert:onSave")}`)}
      >
        {t("common:button:save")}
      </button>

      <button onClick={() => alert(`${t("common:alert:onDelete")}`)}>
        {t("common:button:delete")}
      </button>
    </section>
  );
}

export default Buttons;
