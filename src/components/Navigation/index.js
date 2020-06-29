import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Image } from "react-bootstrap";
import Home from '../Home';
import Administracion from '../Administracion';
import Cunas from '../Cunas';
import Carriolas from '../Carriolas';
import Montables from '../Montables';
import Mordederas from '../Mordederas';
import Carrito from '../Carrito';

import "./navStile.css";

const Navigation = () => {
  return (
    <Router>
      <div class="nav_style">
      <Image  src="https://www.thebabyshop.com.mx/img/my-store-logo-1526916527.jpg" />
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/'} className="nav-link"> Home </Link></li>
            <li><Link to={'/administracion'} className="nav-link">Administración</Link></li>
            <li><Link to={'/cunas'} className="nav-link">Cunas</Link></li>
            <li><Link to={'/carriolas'} className="nav-link">Carriolas</Link></li>
            <li><Link to={'/montables'} className="nav-link">Montables</Link></li>
            <li><Link to={'/mordederas'} className="nav-link">Mordederas</Link></li>
            <li><Link to={'/carrito'} className="nav-link">Carrito</Link></li>
          </ul>
        </nav>
        <hr />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/administracion' component={Administracion} />
          <Route path='/cunas' component={Cunas} />
          <Route path='/carriolas' component={Carriolas} />
          <Route path='/montables' component={Montables} />
          <Route path='/mordederas' component={Mordederas} />
          <Route path='/carrito' component={Carrito} />
        </Switch>
      </div>
    </Router>
  );
}
export default Navigation;