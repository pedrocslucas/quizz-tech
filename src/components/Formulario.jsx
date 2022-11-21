import React from "react";

import Navbar from "./Navbar";
import Footer from "./Footer";
import Question from "./Question";

import "bootstrap/dist/css/bootstrap.min.css";
import "../css/main.css";

function Formulario() {
  return (
    <>
      <Navbar/>
      <Question/>
      <Footer/>

    </>
  );
}

export default Formulario;