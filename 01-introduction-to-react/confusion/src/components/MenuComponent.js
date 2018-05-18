import React, { Component } from 'react';
import { Media } from 'reactstrap';

class Menu extends Component {
  /**
   * Constructor
   * @param props properties
   */
  constructor(props) {
    super(props);
    this.state = {
      // this component's state is supplied by the
      // ancestor component (App in this case) via props
    };
  }

  /**
   * Every React component
   * must implement the render() method
   */
  render() {
    // no more need for using this component state as the
    // dishes variable is handed over from the ancestor through props
    const menu = this.props.dishes.map((dish) => {
      return (
        <div key={dish.id} className="col-12 mt-5">
          <Media tag="li">
            <Media left middle>
              <Media object src={dish.image} alt={dish.name}/>
            </Media>
            <Media body className="ml-5">
              <Media heading>{dish.name}</Media>
              <p>{dish.description}</p>
            </Media>
          </Media>
        </div>
      );
    });

    return (
      <div className="container">
        <div className="row">
          <Media list>
            {menu}
          </Media>
        </div>
      </div>
    );
  }
}

export default Menu;