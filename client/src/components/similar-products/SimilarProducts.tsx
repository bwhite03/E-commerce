import React, { useEffect } from "react";
import { connect } from "react-redux";
import Typography from "@mui/material/Typography";
import { fetchSimilarProducts } from "../../store/actions/productActions";
import { addToCart, removeCartItem } from "../../store/actions/userActions";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import Slider from "react-slick";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import "./similar-products.styles.css";

function SimilarProducts(props: any) {
  useEffect(() => {
    if (props.product.length !== 0) {
      props.fetchSimilarProducts(props.product.type, props.product.id);
    }
  }, [props.product]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  const handleAddToCart = (event: any, product: any) => {
    event.preventDefault();
    const cartItem = {
      userId: props.userInfo.id,
      productId: product.id,
    };

    props.addToCart(cartItem, product);
  };

  const handleRemoveCartItem = (event: any, product: any) => {
    event.preventDefault();
    props.removeCartItem(product.id);
  };

  return (
    <div style={{ paddingTop: "20px" }}>
      <Typography variant="h6" component="div" gutterBottom>
        Similar items you might like
      </Typography>
      <Slider {...settings}>
        {props.similarProducts.map((product: any) => (
          <Link to={`/product/${product.id}`}>
            <Paper elevation={0}>
              <div style={{ padding: "10px" }}>
                <div>
                  <img
                    src={product.image}
                    style={{ width: "200px", height: "200px" }}
                  />
                </div>
                {props.cart.some((e: any) => e.id === product.id) ? (
                  <Button
                    variant="contained"
                    size="small"
                    color="error"
                    sx={{ mt: 1 }}
                    onClick={(event: any) =>
                      handleRemoveCartItem(event, product)
                    }
                  >
                    Remove
                  </Button>
                ) : (
                  <Button
                    variant="contained"
                    size="small"
                    sx={{ mt: 1 }}
                    onClick={(event) => handleAddToCart(event, product)}
                  >
                    Add to cart
                  </Button>
                )}
                <Typography
                  variant="h6"
                  component="div"
                  gutterBottom
                  sx={{ mt: 1 }}
                >
                  ${product.price}.00
                </Typography>
                <Typography
                  variant="subtitle1"
                  component="div"
                  gutterBottom
                  sx={{ mt: 1 }}
                >
                  {product.model}
                </Typography>
                <Rating name="read-only" value={4} readOnly />
              </div>
            </Paper>
          </Link>
        ))}
      </Slider>
    </div>
  );
}

const mapStateToProps = (state: any) => {
  return {
    product: state.productReducer.product,
    similarProducts: state.productReducer.similarProducts,
    cart: state.userReducer.cart,
    userInfo: state.userReducer.userInfo,
  };
};

export default connect(mapStateToProps, {
  fetchSimilarProducts,
  addToCart,
  removeCartItem,
})(SimilarProducts);
