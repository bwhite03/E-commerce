import axios from "axios";
export const FETCH_PRODUCTS = "FETCH_PRODUCTS";
export const FETCH_PRODUCT = "FETCH_PRODUCT";
export const FILTER_PRODUCTS = "FILTER_PRODUCTS";
export const FETCH_PRODUCT_IMAGES = "FETCH_PRODUCT_IMAGES";

export const fetchProducts = (page: number) => {
  return async (dispatch: any) => {
    const response = await axios.get(`/products?page=${page}&size=8`);
    dispatch({
      type: FETCH_PRODUCTS,
      payload: response.data,
    });
  };
};

export const fetchProduct = (id: number) => {
  return async (dispatch: any) => {
    const response = await axios.get(`/product/${id}`);
    dispatch({
      type: FETCH_PRODUCT,
      payload: response.data,
    });
  };
};

export const fetchProductImages = (id: number) => {
  return async (dispatch: any) => {
    const response = await axios.get(`/productImages/${id}`);
    dispatch({
      type: FETCH_PRODUCT_IMAGES,
      payload: response.data,
    });
  };
};

export const filterProducts = (type: string, brand: string, price: string) => {
  return async (dispatch: any) => {
    const response = await axios.get(`/products/filter`, {
      params: { type: type, brand: brand, price: price, size: 8 },
    });
    dispatch({
      type: FILTER_PRODUCTS,
      payload: response.data,
    });
  };
};
