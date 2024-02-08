import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/tailwind.css";
import { ContactMeContextProvider } from "./components/context/ContactMeContext";
import { GithubInfoContextProvider } from "./components/context/GithubInfoContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GithubInfoContextProvider>
      <ContactMeContextProvider>
        <App />
      </ContactMeContextProvider>
    </GithubInfoContextProvider>
  </React.StrictMode>
);
