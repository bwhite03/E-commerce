import { useEffect } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import Slider from "react-slick";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import "./similar-products.styles.css";

function SimilarProducts(props: any) {
  const token = localStorage.getItem("token");

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
    responsive: [
      {
        breakpoint: 850,
        settings: {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 650,
        settings: {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleAddToCart = (event: any, product: any) => {
    event.preventDefault();
    if (token) {
      const cartItem = {
        userId: props.userInfo.id,
        productId: props.product.id,
      };
      props.addToCart(cartItem, props.product);
    } else {
      props.addToCart(undefined, props.product);
    }
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
          <Link to={`/product/${product.id}`} key={product.id}>
            <Paper elevation={0}>
              <div className="similar-items-slide" style={{ padding: "10px" }}>
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

export default SimilarProducts;
