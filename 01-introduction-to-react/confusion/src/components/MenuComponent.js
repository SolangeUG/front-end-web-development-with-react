import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

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
        <div key={dish.id} className="col-12 col-md-5 m-1">
          {/* change the way the menu items are displayed from Media to Card */}
          <Card tag="li">
            <CardImg width="100%" src={dish.image} alt={dish.name}/>
            <CardImgOverlay>
              <CardTitle>{dish.name}</CardTitle>
              {/*<p>{dish.description}</p>*/}
            </CardImgOverlay>
          </Card>
        </div>
      );
    });

    return (
      <div className="container">
        <div className="row">
          {menu}
        </div>
      </div>
    );
  }
}

export default Menu;