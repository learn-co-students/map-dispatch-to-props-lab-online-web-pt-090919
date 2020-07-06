import React, { Component } from 'react';
import { addRestaurant } from '../actions/restaurants';
import { connect } from 'react-redux';

export class RestaurantInput extends Component {

  state = {
    name: '',
    location: ''
  }

  handleChange = event => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault();
    // add missing codes
    this.props.addRestaurant(this.state)
  }

  render() {
    return(
      <form onSubmit={(event) => this.handleOnSubmit(event)}>
        <p>
          <input
            type="text"
            name="name"
            onChange={this.handleChange}
            id="name"
            placeholder="restaurant name" />
        </p>
        <p>
          <input
            type="text"
            name="location"
            onChange={this.handleChange}
            id="location"
            placeholder="location" />
        </p>
        <input type="submit" />
      </form>
    );
  }
};

const mapStateToProps = state => {
  return {
    restaurants: state.restaurants
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addRestaurant: restaurant => dispatch(addRestaurant(restaurant))
  }
}

//connect this component by wrapping RestaurantInput below
export default connect(mapStateToProps, mapDispatchToProps)(RestaurantInput)
