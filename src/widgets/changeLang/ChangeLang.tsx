import i18n from "#src/app/i18n/i18n";
import React from "react";

const ChangeLang = () => {
  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };
  return (
    <div>
      <button onClick={toggleLang}>toggleLang</button>
    </div>
  );
};

export default ChangeLang;
