import React, {Component} from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from '../Home';
import Polizas from '../Polizas';
import Reclamos from '../Reclamos';


export class Navigation extends Component {
    
    render() {
      return (
        <Router>
        <div>
          <h2>Aseguradora Hermanos Maurilio</h2>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/'} className="nav-link"> Home </Link></li>
            <li><Link to={'/polizas'} className="nav-link">Polizas</Link></li>
            <li><Link to={'/reclamos'} className="nav-link">Reclamos</Link></li>
          </ul>
          </nav>
          <hr />
          <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/polizas' component={Polizas} />
              <Route path='/reclamos' component={Reclamos} />
          </Switch>
        </div>
      </Router>
      );
    }
  }
export default Navigation;