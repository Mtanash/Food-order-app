import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ModalProvider from "./context/modalContext";
import { Provider } from "react-redux";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ModalProvider>
        <App />
      </ModalProvider>
    </Provider>
  </React.StrictMode>
);
