import axios from "axios";
export const FETCH_USER_INFO = "FETCH_USER_INFO";
export const LOGOUT = "LOGOUT";
export const ADD_TO_CART = "ADD_TO_CART";
export const FETCH_CART_ITEMS = "FETCH_CART_ITEMS";
export const REMOVE_CART_ITEM = "REMOVE_CART_ITEM";
export const UPDATE_CART_ITEM_QUANTITY = "UPDATE_CART_ITEM_QUANTITY";
export const ADD_TO_WISH_LIST = "ADD_TO_WISH_LIST";
export const REMOVE_WISH_LIST_ITEM = "REMOVE_WISH_LIST_ITEM";
export const FETCH_WISH_LIST_ITEMS = "FETCH_WISH_LIST_ITEMS";
export const ADD_TO_ORDERS = "ADD_TO_ORDERS";
export const FETCH_ORDERS = "FETCH_ORDERS";
export const FETCH_ORDER = "FETCH_ORDER";
export const REMOVE_ALL_CART_ITEMS = "REMOVE_ALL_CART_ITEMS";

export const fetchUserInfo = (token: string) => {
  return async (dispatch: any) => {
    const response = await axios.get(`/userinfo?token=${token}`);

    dispatch({
      type: FETCH_USER_INFO,
      payload: response.data,
    });
    return response;
  };
};

export const logout = () => {
  return (dispatch: any) => {
    localStorage.removeItem("token");

    dispatch({
      type: LOGOUT,
      payload: undefined,
    });
  };
};

export const fetchCartItems = (userId: number) => {
  return async (dispatch: any) => {
    const response = await axios.get(`/fetchCartItems`, {
      params: { userId: userId },
    });

    dispatch({
      type: FETCH_CART_ITEMS,
      payload: response.data,
    });
  };
};

export const addToCart = (cartItem: any, product: any) => {
  product.quantity = 1;

  return async (dispatch: any) => {
    if (cartItem !== undefined) {
      const response = await axios.post(`/addToCart`, {
        userId: cartItem.userId,
        productId: cartItem.productId,
        quantity: 1,
      });
    }

    dispatch({
      type: ADD_TO_CART,
      payload: product,
    });
  };
};

export const removeCartItem = (id: number) => {
  const token = localStorage.getItem("token");

  return async (dispatch: any) => {
    if (token) {
      const response = await axios.delete(`/removeCartItem/${id}`);
    }

    dispatch({
      type: REMOVE_CART_ITEM,
      payload: id,
    });
  };
};

export const removeAllCartItems = (id: number) => {
  return async (dispatch: any) => {
    const response = await axios.delete(`/removeAllCartItems/${id}`);

    dispatch({
      type: REMOVE_ALL_CART_ITEMS,
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

export const fetchWishListItems = (userId: number) => {
  return async (dispatch: any) => {
    const response = await axios.get(`/fetchWishListItems`, {
      params: { userId: userId },
    });

    dispatch({
      type: FETCH_WISH_LIST_ITEMS,
      payload: response.data,
    });
  };
};

export const addToWishList = (wishListItem: any, product: any) => {
  return async (dispatch: any) => {
    const response = await axios.post(`/addToWishList`, {
      userId: wishListItem.userId,
      productId: wishListItem.productId,
    });

    dispatch({
      type: ADD_TO_WISH_LIST,
      payload: product,
    });
  };
};

export const removeWishListItem = (id: number) => {
  return async (dispatch: any) => {
    const response = await axios.delete(`/removeWishListItem/${id}`);

    dispatch({
      type: REMOVE_WISH_LIST_ITEM,
      payload: id,
    });
  };
};

export const addToOrders = (orders: any) => {
  return async (dispatch: any) => {
    const response = await axios.post(`/addToOrders`, orders);

    dispatch({
      type: ADD_TO_ORDERS,
      payload: orders,
    });
  };
};

export const fetchOrders = (userId: number) => {
  return async (dispatch: any) => {
    const response = await axios.get(`/fetchOrders`, {
      params: { userId: userId },
    });

    dispatch({
      type: FETCH_ORDERS,
      payload: response.data,
    });
  };
};

export const fetchOrder = (orderId: string) => {
  return async (dispatch: any) => {
    const response = await axios.get(`/fetchOrder/${orderId}`);
    dispatch({
      type: FETCH_ORDER,
      payload: response.data,
    });
  };
};
