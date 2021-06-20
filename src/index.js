import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom"
import Header from "./components/common/Header"


render(
  <BrowserRouter>
    <Header />
  </BrowserRouter>,
  document.getElementById("root")
)