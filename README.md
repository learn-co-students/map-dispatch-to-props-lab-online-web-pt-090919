<!-- # mapDispatchToProps Lab

## Objectives

Use the __React Redux__ library to connect the store to the __React__
application.   Utilize the __Provider__ component, and the __connect()__
function in the process. Make sure to also implement __mapDispatchToProps()__.

## Overview

In this application we will be building an application to keep track of our
favorite restaurants. We will keep our __React__ application separated from our
__Redux__ application by using the __Provider__ component and the __connect()__
function. We will not include a reference to the store in any component except
for the __Provider__.

## Instructions

Redux is already set up through `index.js` and the reducer `manageRestaurants`.
Write a __mapDispatchToProps()__ function that allows us to pass dispatched
actions as props.

Remember that __mapDispatchToProps()__ is provided `dispatch` as an argument
(passed in by `connect` when called), so we can wrap an imported action with
`dispatch` within __mapDispatchToProps()__. Don't forget that the action
provided in `actions/restaurants.js` is a function that _must be called_ in
order to return the action object. -->

FINAL WEEKS CHALLENGE


# Refactoring a React App to use Redux - adding Thunk
## Part 1: Conceptual questions
1. What the Thunk is middleware?
* deal with fetch requests
* Redux action creator
2. How does Thunk enhance our Redux capabilities?
* help with fetch requests to API
* change action creator to return function (complex instructions) which receives dispatch as argument
## Part 2: Coding Challenge - Redesigning Components in your Reservation App
* Note: this challenge is a continuation of the previous week's. Last week you should have started integrating Redux into your existing React app. If you do not have a project with a few components already built, borrow this solution as starter code: https://github.com/Captainmango/foxes/tree/react-components/react-components/react-components
* The state park that has hired you to build their front end reservation system just heard of yet another cool technology called Redux, and they want it used in their app (customers changing their specifications mid-project?! That never happens...). Your task is to refactor the existing app to use Redux, and additionally add Thunk to handle asynchronous requests to the API.
1. Use Thunk middleware to build an action creator that, when your container component mounts, will 

(1) dispatch an action to indicate you are fetching/loading reservtion data,
(2) make a fetch request to an api (see below for setup) for the reservation data,
(3) dispatch an action indicated the reservations are fetched

* If you'd like, use [this](https://github.com/typicode/json-server#getting-started) tool to spin up a quick REST API backend server with some fake reservation data.

