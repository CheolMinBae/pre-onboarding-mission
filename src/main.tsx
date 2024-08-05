import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { SearchContextProvider } from "./context/SearchContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <SearchContextProvider>
      <App />
    </SearchContextProvider>
  </React.StrictMode>
);
