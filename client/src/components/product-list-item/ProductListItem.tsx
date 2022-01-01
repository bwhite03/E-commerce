import React from "react";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addToCart, removeCartItem } from "../../store/actions/userActions";

function ProductListItem(props: any) {
  const handleAddToCart = (event: any) => {
    event.preventDefault();
    const cartItem = {
      userId: props.userInfo.id,
      productId: props.product.id,
    };

    props.addToCart(cartItem, props.product);
  };

  const handleRemoveCartItem = (event: any) => {
    event.preventDefault();
    props.removeCartItem(props.product.id);
  };

  return (
    <Link to={`/product/${props.product.id}`}>
      <Paper elevation={0}>
        <img
          src={props.product.image}
          alt="product"
          style={{ width: "100%" }}
        />
        {props.cart.some((e: any) => e.id === props.product.id) ? (
          <Button
            variant="contained"
            sx={{ m: 1 }}
            color="error"
            onClick={handleRemoveCartItem}
          >
            Remove
          </Button>
        ) : (
          <Button variant="contained" sx={{ m: 1 }} onClick={handleAddToCart}>
            Add to cart
          </Button>
        )}
        <Typography variant="h6" component="div" gutterBottom sx={{ m: 1 }}>
          ${props.product.price}.00
        </Typography>
        <Typography
          variant="subtitle1"
          component="div"
          gutterBottom
          sx={{ m: 1 }}
        >
          {props.product.model}
        </Typography>
        <Rating name="read-only" value={4} readOnly />
      </Paper>
    </Link>
  );
}

const mapStateToProps = (state: any) => {
  return {
    userInfo: state.userReducer.userInfo,
    cart: state.userReducer.cart,
  };
};

export default connect(mapStateToProps, { addToCart, removeCartItem })(
  ProductListItem
);
