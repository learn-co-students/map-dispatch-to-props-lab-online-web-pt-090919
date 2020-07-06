import React, { Component } from 'react';
import { connect } from 'react-redux';

class Restaurants extends Component {

  render() {
    console.log(this.props)
    const restaurants = this.props.restaurants.map((restaurant, index) => {
      return (
        <li key={index}>
          <span>{restaurant.name} </span>
          <span>{restaurant.location}</span>
        </li>
      )
    });

    return (
      <div>
        <ul>
          {restaurants}
        </ul>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return { restaurants: state.restaurants }
}

export default connect(mapStateToProps)(Restaurants);
