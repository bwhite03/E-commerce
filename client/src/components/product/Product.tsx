import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchProduct,
  fetchProductImages,
} from "../../store/actions/productActions";
import { addToCart, removeCartItem } from "../../store/actions/userActions";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import AssignmentReturnOutlinedIcon from "@mui/icons-material/AssignmentReturnOutlined";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import "./product.styles.css";

function Product(props: any) {
  const [image, setImage] = React.useState("");
  let { id } = useParams();
  useEffect(() => {
    props.fetchProduct(id);
    props.fetchProductImages(id);
  }, []);
  console.log(props.product.id);
  const handleAddToCart = (event: any) => {
    const cartItem = {
      userId: props.userInfo.id,
      productId: props.product.id,
    };

    props.addToCart(cartItem, props.product);
  };

  const handleRemoveCartItem = (event: any) => {
    props.removeCartItem(props.product.id);
  };

  const handleChangeImage = (imageUrl: any) => {
    setImage(imageUrl.image);
  };

  return (
    <Box
      className="product-container"
      sx={{ minWidth: 120, display: "flex", paddingTop: "50px" }}
    >
      <Stack>
        {props.productImages.map((image: any) => (
          <img
            src={image.image}
            style={{
              width: "100px",
              height: "100px",
              cursor: "pointer",
              marginBottom: "15px",
              border: "1px solid #F5F5F5",
            }}
            onClick={() => handleChangeImage(image)}
          />
        ))}
      </Stack>
      <Box
        className="product-img-container"
        style={{ width: "65%", textAlign: "center" }}
      >
        {image === "" ? (
          <img
            src={props.product.image}
            alt="product"
            style={{ width: "500px", height: "500px" }}
          />
        ) : (
          <img
            src={image}
            alt="product"
            style={{ width: "500px", height: "500px" }}
          />
        )}
      </Box>
      <Paper
        className="product-info-container"
        style={{ width: "35%", padding: "20px" }}
      >
        <Typography variant="subtitle1" component="div" gutterBottom>
          {props.product.brand}
        </Typography>
        <Typography variant="h6" component="div" gutterBottom>
          {props.product.model}
        </Typography>
        <Box sx={{ display: "flex" }}>
          <Rating name="read-only" value={4} readOnly />
          <Typography variant="subtitle1" component="div" gutterBottom>
            (4.0) 5 reviews
          </Typography>
        </Box>
        <Typography variant="h4" component="div" gutterBottom>
          ${props.product.price}.00
        </Typography>
        {props.cart.some((e: any) => e.id === props.product.id) ? (
          <Button
            variant="contained"
            color="error"
            onClick={handleRemoveCartItem}
          >
            Remove
          </Button>
        ) : (
          <Button variant="contained" onClick={handleAddToCart}>
            Add to cart
          </Button>
        )}
        <Box
          style={{ marginTop: "20px", borderTop: "1px solid rgb(0 0 0 / 20%)" }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "end",
              paddingTop: "20px",
            }}
          >
            <ShoppingBagOutlinedIcon />
            <span style={{ paddingLeft: "10px" }}>
              Free Pickup at Guitar World
            </span>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "end",
              paddingTop: "20px",
            }}
          >
            <LocalShippingOutlinedIcon />
            <span style={{ paddingLeft: "10px" }}>Free Shipping</span>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "end",
              paddingTop: "20px",
            }}
          >
            <InfoOutlinedIcon />
            <span style={{ paddingLeft: "10px" }}>
              Sold and Shipped by Guitar World
            </span>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "end",
              paddingTop: "20px",
            }}
          >
            <AssignmentReturnOutlinedIcon />
            <span style={{ paddingLeft: "10px" }}>
              Free 30-day return window
            </span>
          </div>
        </Box>
        <Box
          style={{ marginTop: "20px", borderTop: "1px solid rgb(0 0 0 / 20%)" }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "end",
              paddingTop: "20px",
            }}
          >
            <ListAltOutlinedIcon />
            <span style={{ paddingLeft: "10px" }}>Add to list</span>
          </div>
        </Box>
      </Paper>
    </Box>
  );
}

const mapStateToProps = (state: any) => {
  return {
    product: state.productReducer.product,
    productImages: state.productReducer.productImages,
    userInfo: state.userReducer.userInfo,
    cart: state.userReducer.cart,
  };
};

export default connect(mapStateToProps, {
  fetchProduct,
  addToCart,
  removeCartItem,
  fetchProductImages,
})(Product);
