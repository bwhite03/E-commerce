import { FETCH_PRODUCTS } from "../actions/productActions";

const userDefaultState = {
  products: [],
};

const productReducer = (state = userDefaultState, action: any) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return { ...state, products: action.payload };
  }
};

export default productReducer;
