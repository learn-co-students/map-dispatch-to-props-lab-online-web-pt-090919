export const addRestaurant = restaurant => {
  return {
    type: 'ADD_RESTAURANT',
    payload: {
      restaurant
    }
  };
};
