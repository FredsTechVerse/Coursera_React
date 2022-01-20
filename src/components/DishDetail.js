import React, { Component } from 'react';
import { Card, CardImg,CardText, CardBody,CardTitle } from 'reactstrap';


class SelectedComponent extends Component{
   


    commentsSection(comments){
        comments.map((comment)=>{
            <h3>{}</h3>
        })
    } 
    render(){//RETURNS NULL OR SOME HTML

        let dish = this.props.dish;

    return (

                 <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
    );

    }
} 

export default SelectedComponent;