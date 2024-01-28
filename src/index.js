import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <main className="w-full max-w-[1920px] mx-auto my-0">
        <App />
      </main>
    </BrowserRouter>
  </React.StrictMode>
);
