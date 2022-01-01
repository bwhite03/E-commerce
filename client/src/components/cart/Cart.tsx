import React from "react";
import { connect } from "react-redux";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import CartItem from "../cart-item/CartItem";
import Button from "@mui/material/Button";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import "./cart.styles.css";

function Cart(props: any) {
  return (
    <Dialog
      onClose={props.onClose}
      open={props.open}
      fullWidth={true}
      maxWidth={"xs"}
    >
      <Box
        style={{
          display: "flex",
          justifyContent: "space-between",
          background: "#1976d2",
          color: "white",
          alignItems: "center",
        }}
      >
        <DialogTitle>Cart</DialogTitle>
        <CloseOutlinedIcon
          style={{ margin: "16px 24px", cursor: "pointer" }}
          onClick={props.onClose}
        />
      </Box>
      {props.cart.length === 0 ? (
        <div style={{ padding: "25px", textAlign: "center" }}>
          <ShoppingCartOutlinedIcon sx={{ fontSize: "150px" }} />
          <Typography variant="h6" component="div" gutterBottom>
            Time To Start Shopping!
          </Typography>
          <Typography variant="subtitle2" component="div" gutterBottom>
            Your cart is empty
          </Typography>
        </div>
      ) : (
        <div>
          {props.cart.map((cartItem: any) => (
            <CartItem cartItem={cartItem} key={cartItem.id} />
          ))}
          <div
            style={{
              padding: "15px",
              borderTop: "5px solid #F5F5F5",
              borderBottom: "10px solid #F5F5F5",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Typography variant="subtitle1" component="div" gutterBottom>
                SubTotal ({props.cart.length})
              </Typography>
              <Typography variant="subtitle1" component="div" gutterBottom>
                ${props.subTotal}.00
              </Typography>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Typography variant="subtitle1" component="div" gutterBottom>
                Taxes
              </Typography>
              <Typography variant="subtitle1" component="div" gutterBottom>
                Calculated at checkout
              </Typography>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="subtitle1" component="div" gutterBottom>
                Estimated Total
              </Typography>
              <Typography variant="subtitle1" component="div" gutterBottom>
                ${props.estimatedTotal}
              </Typography>
            </div>
          </div>
          <div
            style={{
              paddingTop: "20px",
              paddingBottom: "135px",
              textAlign: "center",
            }}
          >
            <Typography variant="subtitle1" component="div" gutterBottom>
              Thanks for shopping with us!
            </Typography>
          </div>
          <div
            style={{
              padding: "25px",
              position: "fixed",
              bottom: "0",
              width: "442px",
              background: "white",
              boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="h6" component="div" gutterBottom>
                Estimated Total
              </Typography>
              <Typography variant="h6" component="div" gutterBottom>
                ${props.estimatedTotal}
              </Typography>
            </div>
            <Button variant="contained" sx={{ width: "100%" }}>
              Continue to checkout
            </Button>
          </div>
        </div>
      )}
    </Dialog>
  );
}

const mapStateToProps = (state: any) => {
  let subTotal = 0;
  let estimatedTotal = 0;
  state.userReducer.cart.map((item: any) => {
    subTotal += item.price * item.quantity;
  });
  estimatedTotal = subTotal + subTotal * 0.06;
  return {
    cart: state.userReducer.cart,
    subTotal: subTotal,
    estimatedTotal: estimatedTotal,
  };
};

export default connect(mapStateToProps, {})(Cart);
