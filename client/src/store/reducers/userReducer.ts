import Cart from "../../components/cart/Cart";
import {
  FETCH_USER_INFO,
  LOGOUT,
  ADD_TO_CART,
  FETCH_CART_ITEMS,
  REMOVE_CART_ITEM,
  UPDATE_CART_ITEM_QUANTITY,
  ADD_TO_WISH_LIST,
  REMOVE_WISH_LIST_ITEM,
  FETCH_WISH_LIST_ITEMS,
  ADD_TO_ORDERS,
  FETCH_ORDERS,
  FETCH_ORDER,
  REMOVE_ALL_CART_ITEMS,
} from "../actions/userActions";
const userDefaultState = {
  userInfo: undefined,
  cart: [],
  wishList: [],
  orders: [],
  order: [],
};

const userReducer = (state = userDefaultState, action: any) => {
  switch (action.type) {
    case FETCH_USER_INFO:
      return { ...state, userInfo: action.payload };
    case LOGOUT:
      return { ...state, userInfo: undefined, cart: [], orders: [] };
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
    case FETCH_WISH_LIST_ITEMS:
      return { ...state, wishList: action.payload };
    case ADD_TO_WISH_LIST:
      return { ...state, wishList: [...state.wishList, action.payload] };
    case REMOVE_WISH_LIST_ITEM:
      return {
        ...state,
        wishList: state.wishList.filter(
          (item: any) => item.id !== action.payload
        ),
      };
    case ADD_TO_ORDERS:
      return { ...state, orders: [...state.orders, action.payload] };
    case FETCH_ORDERS:
      return { ...state, orders: action.payload };
    case FETCH_ORDER:
      return { ...state, order: action.payload };
    case REMOVE_ALL_CART_ITEMS:
      return { ...state, cart: [] };
    default:
      return state;
  }
};

export default userReducer;
