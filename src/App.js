import React from "react";
import './App.css';
import Menu from './components/MenuComponent';
import { DISHES } from './shared/dishes';
import { Navbar, NavbarBrand } from 'reactstrap';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    };
  }
  //THE RENDER METHOD RETURNS A DESCRIPTION OF WHAT THE VIRTUAL DOM SHOULD LOOK LIKE AND THEN REACT LIKE ACTUALISES IT TO THE BROWSER DOM.
  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes} />

      
      </div>
    );
  }
}


export default App;
