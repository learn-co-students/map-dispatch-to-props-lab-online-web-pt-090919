import React, { Component } from 'react';
import {connect} from 'react-redux';
import { addRestaurant } from './actions/restaurants';
import RestaurantInput from './components/RestaurantInput';
import Restaurants from './components/Restaurants';

export class App extends Component {
  
  handleClick = ev => {
    ev.preventDefault()
    this.props.addRestaurant()
  }
  render() {
    return (
      <div className="App">
        <RestaurantInput />
        <button onClick={this.handleClick}>Add Restaurant</button>
        <Restaurants />
        <p>{this.props.restaurants.length}</p>
      </div>
    );
  }
};
const mapStateToProps = state => {
  return {restaurant: state.restaurant}
}

const mapDispatchToProps = dispatch => {
  return {addRestaurant: () => {dispatch(addRestaurant())}}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
