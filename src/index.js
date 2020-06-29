//Importacion Librerias, Modulos y Compentes
import React from "react";
import ReactDom from "react-dom";
import App from "./components/App";
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import reducers from './Reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware()))

  //Renderizado de componente
  ReactDom.render(
    <Provider store={store}>
    <BrowserRouter>
    <App />
  </BrowserRouter>
  </Provider>, 
    document.getElementById('root')
)