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
      selectedDish: null
    };
  }

  /**
   * Update the selected dish
   * @param dish the selected dish
   */
  onDishSelect(dish) {
    // this is how we update the state of our component
    // by calling the setState method
    this.setState({selectedDish: dish});
  }

  /**
   * A method to render a dish details
   * @param dish the dish to render
   */
  renderDish(dish) {
    if (dish != null) {
      return (
        <Card>
          <CardImg width="100%" src={dish.image} alt={dish.name}/>
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      );
    } else {
      return (
        <div></div>
      );
    }
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
          <Card onClick={() => this.onDishSelect(dish)}>
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
        {/* display a selected dish details */}
        <div className="row">
          {this.renderDish(this.state.selectedDish)}
        </div>
      </div>
    );
  }
}

export default Menu;