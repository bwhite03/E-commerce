import axios from "axios";
export const FETCH_USER_INFO = "FETCH_USER_INFO";
export const LOGOUT = "LOGOUT";
export const ADD_TO_CART = "ADD_TO_CART";
export const FETCH_CART_ITEMS = "FETCH_CART_ITEMS";
export const REMOVE_CART_ITEM = "REMOVE_CART_ITEM";
export const UPDATE_CART_ITEM_QUANTITY = "UPDATE_CART_ITEM_QUANTITY";

export const fetchUserInfo = (token: string) => {
  return async (dispatch: any) => {
    const response = await axios.get(`/userinfo?token=${token}`);

    dispatch({
      type: FETCH_USER_INFO,
      payload: response.data,
    });
  };
};

export const logout = () => {
  return (dispatch: any) => {
    localStorage.removeItem("token");
    dispatch({
      type: LOGOUT,
      payload: null,
    });
  };
};

export const fetchCartItems = (userId: number) => {
  return async (dispatch: any) => {
    const response = await axios.get(`/fetchCartItems`, {
      params: { userId: userId },
    });
    console.log(response.data);
    dispatch({
      type: FETCH_CART_ITEMS,
      payload: response.data,
    });
  };
};

export const addToCart = (cartItem: any, product: any) => {
  product.quantity = 1;

  return async (dispatch: any) => {
    const response = await axios.post(`/addToCart`, {
      userId: cartItem.userId,
      productId: cartItem.productId,
      quantity: 1,
    });

    dispatch({
      type: ADD_TO_CART,
      payload: product,
    });
  };
};

export const removeCartItem = (id: number) => {
  return async (dispatch: any) => {
    const response = await axios.delete(`/removeCartItem/${id}`);

    dispatch({
      type: REMOVE_CART_ITEM,
      payload: id,
    });
  };
};

export const updateCartItemQuantity = (quantity: number, id: number) => {
  const payloadObj = {
    quantity: quantity,
    id: id,
  };

  return async (dispatch: any) => {
    const response = await axios.put(`/updateCartItem`, {
      quantity: quantity,
      id: id,
    });

    dispatch({
      type: UPDATE_CART_ITEM_QUANTITY,
      payload: payloadObj,
    });
  };
};
