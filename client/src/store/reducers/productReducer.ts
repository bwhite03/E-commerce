import {
  FETCH_PRODUCTS,
  FETCH_PRODUCT,
  FILTER_PRODUCTS,
  FETCH_PRODUCT_IMAGES,
  FETCH_SIMILAR_PRODUCTS,
  FETCH_REVIEWS,
  ADD_REVIEW,
  FETCH_TOP_RATED,
} from "../actions/productActions";

const userDefaultState = {
  products: [],
  product: [],
  productReviews: [],
  productImages: [],
  similarProducts: [],
  topRatedProducts: [],
};

const productReducer = (state = userDefaultState, action: any) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return { ...state, products: action.payload };
    case FETCH_PRODUCT:
      return { ...state, product: action.payload };
    case FETCH_REVIEWS:
      return { ...state, productReviews: action.payload };
    case FETCH_TOP_RATED:
      return { ...state, topRatedProducts: action.payload };
    case FETCH_PRODUCT_IMAGES:
      return { ...state, productImages: action.payload };
    case FILTER_PRODUCTS:
      return { ...state, products: action.payload };
    case FETCH_SIMILAR_PRODUCTS:
      return { ...state, similarProducts: action.payload };
    case ADD_REVIEW:
      return {
        ...state,
        productReviews: [...state.productReviews, action.payload],
      };
    default:
      return state;
  }
};

export default productReducer;
