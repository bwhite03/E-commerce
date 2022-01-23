import React from "react";
import { connect } from "react-redux";
import AccountNav from "../../components/account-nav/AccountNav";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import {
  removeWishListItem,
  addToCart,
  removeCartItem,
} from "../../store/actions/userActions";

function WishListPage(props: any) {
  const token = localStorage.getItem("token");

  const handleAddToCart = (event: any, product: any) => {
    if (token) {
      const cartItem = {
        userId: props.userInfo.id,
        productId: product.id,
      };
      props.addToCart(cartItem, product);
    } else {
      props.addToCart(undefined, product);
    }
  };

  const handleRemoveCartItem = (event: any, id: number) => {
    props.removeCartItem(id);
  };

  const handleRemoveWishListItem = (event: any, id: number) => {
    props.removeWishListItem(id);
  };

  return (
    <div className="account-container" style={{ display: "flex" }}>
      <AccountNav />
      <div
        className="account"
        style={{ marginTop: "20px", width: "75%", paddingLeft: "25px" }}
      >
        <Typography variant="h5" component="div" sx={{ paddingBottom: "10px" }}>
          Wish List
        </Typography>
        <Divider />
        <Typography
          variant="body1"
          component="div"
          sx={{ paddingTop: "10px", paddingBottom: "10px" }}
        >
          {props.wishList.length} items
        </Typography>
        <Divider />
        {props.wishList.map((item: any) => (
          <div key={item.id}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                paddingTop: "20px",
              }}
            >
              <div style={{ display: "flex" }}>
                <img
                  src={item.image}
                  style={{ width: "150px", height: "150px" }}
                />
                <Typography variant="body2" component="div">
                  {item.model}
                </Typography>
              </div>
              <Typography variant="h6" component="div">
                ${item.price}
              </Typography>
            </div>
            <div
              style={{
                display: "flex",
                paddingTop: "10px",
                paddingBottom: "20px",
                justifyContent: "space-between",
                alignItems: "end",
              }}
            >
              <div>
                <Link
                  color="inherit"
                  underline="always"
                  sx={{ padding: "5px", cursor: "pointer" }}
                  onClick={(e) => handleRemoveWishListItem(e, item.id)}
                >
                  Remove
                </Link>
              </div>
              {props.cart.some((e: any) => e.id === item.id) ? (
                <Button
                  variant="contained"
                  color="error"
                  size="small"
                  onClick={(e) => handleRemoveCartItem(e, item.id)}
                >
                  Remove from cart
                </Button>
              ) : (
                <Button
                  variant="contained"
                  size="small"
                  onClick={(e) => handleAddToCart(e, item)}
                >
                  Add to cart
                </Button>
              )}
            </div>
            <Divider />
          </div>
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state: any) => {
  return {
    userInfo: state.userReducer.userInfo,
    cart: state.userReducer.cart,
    wishList: state.userReducer.wishList,
  };
};

export default connect(mapStateToProps, {
  removeWishListItem,
  addToCart,
  removeCartItem,
})(WishListPage);
