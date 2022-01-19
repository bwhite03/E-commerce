import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import Product from "../../components/product/Product";
import SimilarProducts from "../../components/similar-products/SimilarProducts";
import ProductDetails from "../../components/product-details/ProductDetails";
import ProductReviews from "../../components/product-reviews/ProductReviews";
import Feedback from "../../components/feedback/Feedback";
import {
  fetchProduct,
  fetchProductImages,
  fetchReviews,
  fetchSimilarProducts,
} from "../../store/actions/productActions";
import {
  addToCart,
  removeCartItem,
  addToWishList,
  removeWishListItem,
} from "../../store/actions/userActions";

function ProductPage(props: any) {
  let { id } = useParams();

  useEffect(() => {
    props.fetchProduct(id);
    props.fetchProductImages(id);
    props.fetchReviews(id);
  }, [id]);

  return (
    <div>
      <Product
        id={id}
        product={props.product}
        productImages={props.productImages}
        productReviews={props.productReviews}
        userInfo={props.userInfo}
        cart={props.cart}
        wishList={props.wishList}
        addToCart={props.addToCart}
        removeCartItem={props.removeCartItem}
        addToWishList={props.addToWishList}
        removeWishListItem={props.removeWishListItem}
      />
      <ProductDetails product={props.product} />
      <SimilarProducts
        product={props.product}
        similarProducts={props.similarProducts}
        cart={props.cart}
        userInfo={props.userInfo}
        fetchSimilarProducts={props.fetchSimilarProducts}
        addToCart={props.addToCart}
        removeCartItem={props.removeCartItem}
      />
      <ProductReviews
        product={props.product}
        totalRating={props.totalRating}
        productReviews={props.productReviews}
      />
      <Feedback />
    </div>
  );
}

const mapStateToProps = (state: any) => {
  let totalRating = state.productReducer.productReviews.reduce(
    (acc: any, obj: any) => acc + obj.rating,
    0
  );
  totalRating = (
    totalRating / state.productReducer.productReviews.length
  ).toFixed(1);

  return {
    product: state.productReducer.product,
    productReviews: state.productReducer.productReviews,
    productImages: state.productReducer.productImages,
    similarProducts: state.productReducer.similarProducts,
    userInfo: state.userReducer.userInfo,
    cart: state.userReducer.cart,
    wishList: state.userReducer.wishList,
    totalRating: totalRating,
  };
};

export default connect(mapStateToProps, {
  fetchProduct,
  fetchProductImages,
  fetchReviews,
  addToCart,
  removeCartItem,
  addToWishList,
  removeWishListItem,
  fetchSimilarProducts,
})(ProductPage);
