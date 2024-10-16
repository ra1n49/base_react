import React from "react";
import ReactDOM from "react-dom/client";
import  { BrowserRouter } from "react-router-dom";
import RouterCustom from "./RouterCustom.js";
import "./globalStyles/globalStyle.scss";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <RouterCustom />
  </BrowserRouter>
);