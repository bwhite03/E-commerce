import Cart from "../../components/cart/Cart";
import {
  FETCH_USER_INFO,
  LOGOUT,
  ADD_TO_CART,
  FETCH_CART_ITEMS,
  REMOVE_CART_ITEM,
  UPDATE_CART_ITEM_QUANTITY,
} from "../actions/userActions";
const userDefaultState = {
  userInfo: undefined,
  cart: [],
};

const userReducer = (state = userDefaultState, action: any) => {
  switch (action.type) {
    case FETCH_USER_INFO:
      return { ...state, userInfo: action.payload };
    case LOGOUT:
      return { ...state, userInfo: action.payload, cart: [] };
    case FETCH_CART_ITEMS:
      return { ...state, cart: action.payload };
    case ADD_TO_CART:
      return { ...state, cart: [...state.cart, action.payload] };
    case REMOVE_CART_ITEM:
      return {
        ...state,
        cart: state.cart.filter((item: any) => item.id !== action.payload),
      };
    case UPDATE_CART_ITEM_QUANTITY:
      return {
        ...state,
        cart: state.cart.map((item: any) =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };
    default:
      return state;
  }
};

export default userReducer;
