import axios from "axios";
export const FETCH_PRODUCTS = "FETCH_PRODUCTS";
export const FETCH_PRODUCT = "FETCH_PRODUCT";
export const FILTER_PRODUCTS = "FILTER_PRODUCTS";
export const FETCH_PRODUCT_IMAGES = "FETCH_PRODUCT_IMAGES";
export const FETCH_SIMILAR_PRODUCTS = "FETCH_SIMILAR_PRODUCTS";
export const FETCH_REVIEWS = "FETCH_REVIEWS";
export const ADD_REVIEW = "ADD_REVIEW";

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

export const fetchReviews = (id: number) => {
  return async (dispatch: any) => {
    const response = await axios.get(`/fetchReviews/${id}`);
    dispatch({
      type: FETCH_REVIEWS,
      payload: response.data,
    });
  };
};

export const fetchSimilarProducts = (type: string, id: number) => {
  return async (dispatch: any) => {
    const response = await axios.get(`/similarProducts/${type}/${id}`);
    dispatch({
      type: FETCH_SIMILAR_PRODUCTS,
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

export const addReview = (review: any) => {
  return async (dispatch: any) => {
    const response = await axios.post(`/addReview`, {
      productId: review.productId,
      rating: review.rating,
      date: review.date,
      name: review.name,
      content: review.content,
      title: review.title,
    });
    dispatch({
      type: ADD_REVIEW,
      payload: response.data,
    });
  };
};
