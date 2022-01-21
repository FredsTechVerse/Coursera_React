import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

class SelectedComponent extends Component {
  displayDish(dish) {
    if (dish != null)
      return (
        <Card key={dish.id}>
          <CardImg top src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      );
    else return <div></div>;
  }

  renderComments(dish) {
    if (dish != null) {
      let { comments } = dish;

      comments = comments.map((comment) => {
        return (
          <>
            <div className="row">
              <p key={comment.id} className="col-12">
                {" "}
                -- {comment.comment}
              </p>
            </div>
            <div className="row">
              <p key={comment.id} className="col-4">
                {" "}
                {comment.author}
              </p>
              <p key={comment.id} className="col">
                {" "}
                {comment.date}
              </p>
            </div>
          </>
        );
      });
      return comments;
    } else {
      return <div></div>;
    }
  }

  render() {
    //RETURNS NULL OR SOME HTML
    let dish = this.props.dish;

    return (
      <>
        <div className="col-12 col-md-5 m-1">{this.displayDish(dish)}</div>
        <div className="col-12 col-md-5 m-1">
          <h4>COMMENTS</h4>
          {this.renderComments(dish)}
        </div>
      </>
    );
  }
}

export default SelectedComponent;
