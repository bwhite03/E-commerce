import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  fetchUserInfo,
  fetchCartItems,
  fetchWishListItems,
  fetchOrders,
  addToCart,
  removeCartItem,
} from "../../store/actions/userActions";
import { fetchTopRated } from "../../store/actions/productActions";
import ImageSlider from "../../components/img-slider/ImageSlider";
import HomeShop from "../../components/home-shop/HomeShop";
import HomeInfo from "../../components/home-info/HomeInfo";
import HomeTopRated from "../../components/home-top-rated/HomeTopRated";
import Feedback from "../../components/feedback/Feedback";

function HomePage(props: any) {
  useEffect(() => {
    async function fetchData() {
      let token = localStorage.getItem("token");
      if (token) {
        let res = await props.fetchUserInfo(token);
        props.fetchCartItems(res.data.id);
        props.fetchWishListItems(res.data.id);
        props.fetchOrders(res.data.id);
      }
      props.fetchTopRated();
    }
    fetchData();
  }, []);

  return (
    <div>
      <ImageSlider />
      <HomeShop />
      <HomeInfo />
      <HomeTopRated
        topRatedProducts={props.topRatedProducts}
        cart={props.cart}
        userInfo={props.userInfo}
        addToCart={props.addToCart}
        removeCartItem={props.removeCartItem}
      />
      <Feedback />
    </div>
  );
}

const mapStateToProps = (state: any) => {
  return {
    cart: state.userReducer.cart,
    userInfo: state.userReducer.userInfo,
    topRatedProducts: state.productReducer.topRatedProducts,
  };
};

export default connect(mapStateToProps, {
  fetchUserInfo,
  fetchCartItems,
  fetchWishListItems,
  fetchOrders,
  fetchTopRated,
  addToCart,
  removeCartItem,
})(HomePage);
