import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";
import DishSelected from "./DishDetail";

class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedDish: null,
    };
  }
  // SET THE STATE VALUE TO THE SPECIFIC DISH OBJECT ONCE A DISH IS CLICKED.
  onDishSelect(dish) {
    this.setState({ selectedDish: dish });
  }
  //ITS JOB IS TO RENDER THE DISH DETAILS SELECTED.
  renderDish(dish) {
    if (dish != null)
      return (
        <Card>
          <CardImg top src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      );
    else return <div></div>;
  }

  render() {
    //SAFE ENVIROMENT FOR LIKE DOING SOME JAVASCRIPT SHIT B4 RENDERING JSX.
    //ARROW FUNCTION THAT IS USED TO RENDER ALL THE DISH OBJECTS IN THE DISH DETAIL STATE.
    const menu = this.props.dishes.map((dish) => {
      return (
        <div className="col-12 col-md-5 m-1">
          <Card key={dish.id} onClick={() => this.onDishSelect(dish)}>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardImgOverlay>
              <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      );
    });
    // FIRST WE START BY RENDERING ALL THE DISHES VIA THE MAP METHOD THEN A CONTAINER FOR THE SELECTED DISH
    // When the user clicks on a particular dish , the local state dish property is set to the dish object.
    return (
      <div className="container">
        <div className="row">{menu}</div>
        <div className="row">
          <DishSelected dish={this.state.selectedDish} />

          {/* THIS IS ALSO A VERY INTERESTING WAY OF RENDERING CONTENT. RENDERING IN A FUNCTION THEN CALLING IT WHERE YOU WANT IT TO BE AT. */}

          {/* {this.renderDish(this.state.selectedDish)} */}
        </div>
      </div>
    );
  }
}

export default Menu;
