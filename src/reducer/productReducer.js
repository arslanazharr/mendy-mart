const ProductReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };

    case "SET_API_DATA":
      const featuredProducts = action.payload.filter((curElem) => {
        return curElem.featured === true;
      });
      return {
        ...state,
        isLoading: false,
        products: action.payload,
        featuredProducts: featuredProducts,
      };
    case "SET_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case "SET_SINGLE_PRODUCT_LOADING":
      return { ...state, isSingleProductLoading: true };
    case "SET_SINGLE_PRODUCT_DATA":
      return {
        ...state,
        isSingleProductLoading: false,
        singleProduct: action.payload,
      };
    case "SET_SINGLE_PRODUCT_ERROR":
      return {
        ...state,
        isSingleProductLoading: false,
        isError: true,
      };

    default:
      return {
        state,
      };
  }
};

export default ProductReducer;
