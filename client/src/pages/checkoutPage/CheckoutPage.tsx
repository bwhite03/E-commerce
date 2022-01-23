import React from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import Typography from "@mui/material/Typography";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import CartItem from "../../components/cart-item/CartItem";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import {
  addToOrders,
  removeAllCartItems,
} from "../../store/actions/userActions";
const orderid = require("order-id")("key");

function CheckoutPage(props: any) {
  const navigate = useNavigate();

  const handleAddToOrders = () => {
    const orders: any[] = [];
    const orderId = orderid.generate();
    const date = new Date();
    date.toISOString().slice(0, 10);

    props.cart.forEach((item: any) => {
      const obj = {
        userId: props.userInfo.id,
        productId: item.id,
        quantity: item.quantity,
        price: item.price,
        model: item.model,
        image: item.image,
        type: item.type,
        brand: item.brand,
        orderId: orderId,
        date: date,
      };
      orders.push(obj);
    });

    props.addToOrders(orders);
    props.removeAllCartItems(props.userInfo.id);
    navigate("/");
  };

  return (
    <div
      className="check-out-container"
      style={{
        display: "flex",
        marginTop: "20px",
        justifyContent: "space-between",
      }}
    >
      <div
        className="checkout-col"
        style={{
          width: "65%",
          padding: "15px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <ShoppingBasketOutlinedIcon />
          <Typography variant="h5" component="div">
            Your Items
          </Typography>
        </div>
        <div>
          {props.cart.map((cartItem: any) => (
            <CartItem cartItem={cartItem} key={cartItem.id} />
          ))}
        </div>
      </div>
      <Paper
        className="checkout-col"
        style={{ width: "35%", padding: "15px", height: "350px" }}
      >
        <Button
          variant="contained"
          sx={{ width: "100%" }}
          onClick={handleAddToOrders}
        >
          Place Order
        </Button>
        <Typography
          variant="caption"
          component="div"
          sx={{
            fontSize: "10px",
            textAlign: "center",
            paddingTop: "10px",
            paddingBottom: "10px",
          }}
        >
          By placing this order, you agree to our Privacy Policy and Terms of
          Use
        </Typography>
        <Divider />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            paddingTop: "10px",
          }}
        >
          <Typography variant="subtitle1" component="div">
            SubTotal ({props.cart.length})
          </Typography>
          <Typography variant="subtitle1" component="div">
            ${props.subTotal}.00
          </Typography>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            paddingTop: "10px",
          }}
        >
          <Typography variant="subtitle1" component="div">
            Estimated taxes
          </Typography>
          <Typography
            variant="subtitle1"
            component="div"
            sx={{ paddingBottom: "10px" }}
          >
            ${props.estimatedTaxes}
          </Typography>
        </div>
        <Divider />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            paddingTop: "10px",
          }}
        >
          <Typography variant="h6" component="div">
            Estimated total
          </Typography>
          <Typography
            variant="h6"
            component="div"
            sx={{ paddingBottom: "10px" }}
          >
            ${props.estimatedTotal}
          </Typography>
        </div>
        <Divider />
        <Typography
          variant="subtitle1"
          component="div"
          sx={{ paddingTop: "10px" }}
        >
          Have a promo code?
        </Typography>
        <div
          style={{
            paddingTop: "10px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <TextField
            id="outlined-basic"
            label="Promo code"
            variant="outlined"
            size="small"
            sx={{ width: "75%" }}
          />
          <Button variant="contained" size="small" sx={{ width: "15%" }}>
            Apply
          </Button>
        </div>
      </Paper>
    </div>
  );
}

const mapStateToProps = (state: any) => {
  let subTotal = 0;
  let estimatedTotal = 0;
  let estimatedTaxes: string | number = 0;
  state.userReducer.cart.map((item: any) => {
    subTotal += item.price * item.quantity;
  });
  estimatedTaxes = (subTotal * 0.06).toFixed(2);
  estimatedTotal = subTotal + subTotal * 0.06;
  return {
    userInfo: state.userReducer.userInfo,
    cart: state.userReducer.cart,
    subTotal: subTotal,
    estimatedTotal: estimatedTotal,
    estimatedTaxes: estimatedTaxes,
  };
};

export default connect(mapStateToProps, { addToOrders, removeAllCartItems })(
  CheckoutPage
);
