import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Layout from "./layout/İndex";
import { StateProvider } from "./context/StateProvider";
import reducer, { initialState } from "./reducer";

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <Layout />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
