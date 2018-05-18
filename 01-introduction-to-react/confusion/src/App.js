import React, {Component} from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';
import './App.css';
import Menu from './components/MenuComponent';
import { DISHES } from "./shared/dishes";


class App extends Component {
  /**
   * Constructor
   * @param props properties
   */
  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES
    };
  }

  /**
   * All React components must
   * implement the render() method
   */
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
        {/* make this component's state available to child components via props*/}
        <Menu dishes={this.state.dishes}/>
      </div>
    );
  }
}

export default App;
