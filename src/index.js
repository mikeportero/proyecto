//Importacion Librerias, Modulos y Compentes
import React from "react";
import ReactDom from "react-dom";
import App from "./components/App";
import { BrowserRouter } from 'react-router-dom';

  //Renderizado de componente
  ReactDom.render(
    <BrowserRouter>
    <App />
  </BrowserRouter>, 
    document.getElementById('root')
)