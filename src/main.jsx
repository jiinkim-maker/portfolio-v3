import React from "react";
import ReactDOM from "react-dom/client";
import App from "../../../portfolio-v3-image-path-fix/portfolio-v3/src/App";
import { LanguageProvider } from "./context/LanguageProvider"; // 🛠 LanguageProvider만 import
import "./styles/global.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </React.StrictMode>,
);
