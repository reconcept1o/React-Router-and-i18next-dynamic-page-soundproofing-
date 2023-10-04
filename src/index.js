import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { BrowserRouter } from "react-router-dom";


// ............import language i18next............

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend"; // Opsiyonel: Dil dosyalarınızı sunucudan yüklemek için


import enTranslation from "./translations/en.json";
import deTranslation from "./translations/de.json";
import trTranslation from "./translations/tr.json";


// Dil dosyalarını içeri aktarın
const resources = {
  en: {
    translation: enTranslation,
  },
  de: {
    translation: deTranslation,
  },
  tr: {
    translation: trTranslation, 
  },
};

// i18next ayarlarını yapın
i18n
  .use(Backend) 
  .use(initReactI18next)
  .init({
    resources,
    lng: 'tr', // Varsayılan dil
    fallbackLng: 'en', // Yedek dil
    interpolation: {
      escapeValue: false,
    },
  });




// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter basename="/">
      <App/>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
