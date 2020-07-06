const initialState = {
  restaurants: []
}

export default function manageRestaurants(state = initialState, action) {
  switch (action.type) {

    case 'ADD_RESTAURANT':
      return {
        ...state,
        restaurants: [...state.restaurants, action.payload.restaurant]
      }

    default:
      return state;

  }
};
