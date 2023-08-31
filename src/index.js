import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import App from "./App";

import i18n from "./i18n";
import { I18nextProvider } from "react-i18next";
import "./styles/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "react-alice-carousel/lib/alice-carousel.css";
import "aos/dist/aos.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <I18nextProvider i18n={i18n}>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </I18nextProvider>
);
