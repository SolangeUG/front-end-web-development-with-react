import React, {Component} from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';
import './App.css';
import Menu from './components/MenuComponent';

class App extends Component {
  render() {
    return (
      <div>
        {/* navbar component */}
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        {/* use of a React component we've created */}
        <Menu/>
      </div>
    );
  }
}

export default App;
