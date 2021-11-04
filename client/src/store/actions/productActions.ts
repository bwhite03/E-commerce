import axios from "axios";
export const FETCH_PRODUCTS = "FETCH_PRODUCTS";

export const fetchProducts = () => {
  return (dispatch: any) => {
    axios
      .get("/products")
      .then((res) => {
        dispatch({
          type: FETCH_PRODUCTS,
          payload: res.data,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};
