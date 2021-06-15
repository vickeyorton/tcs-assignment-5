const productsReducer = (state = [], action) => {
  console.log("Reducer-State", state);
  switch (action.type) {
    case "GET_LOAD":
      return {
        ...state,
        isloading: true,
      };
    case "GET_PRODUCTS":
      return {
        ...state,
        products: action.payload,
        isloading: false,
      };
    case "GET_FOOD":
      return {
        ...state,
        food: action.payload,
      };

    default:
      return {
        state,
      };
  }
};

export default productsReducer;
