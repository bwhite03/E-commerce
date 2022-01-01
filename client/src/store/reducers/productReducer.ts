import {
  FETCH_PRODUCTS,
  FETCH_PRODUCT,
  FILTER_PRODUCTS,
  FETCH_PRODUCT_IMAGES,
} from "../actions/productActions";

const userDefaultState = {
  products: [],
  product: [],
  productImages: [],
};

const productReducer = (state = userDefaultState, action: any) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return { ...state, products: action.payload };
    case FETCH_PRODUCT:
      return { ...state, product: action.payload };
    case FETCH_PRODUCT_IMAGES:
      return { ...state, productImages: action.payload };
    case FILTER_PRODUCTS:
      return { ...state, products: action.payload };
    default:
      return state;
  }
};

export default productReducer;
