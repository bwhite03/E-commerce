import React from "react";
import { connect } from "react-redux";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import {
  removeCartItem,
  updateCartItemQuantity,
} from "../../store/actions/userActions";

function CartItem(props: any) {
  const handleRemoveCartItem = () => {
    props.removeCartItem(props.cartItem.id);
  };

  const handleUpdateCartItemQuantity = (event: any) => {
    props.updateCartItemQuantity(event.target.valueAsNumber, props.cartItem.id);
  };

  return (
    <Box sx={{ padding: "15px", borderBottom: "5px solid #F5F5F5" }}>
      <div style={{ display: "flex" }}>
        <img
          src={props.cartItem.image}
          alt="product"
          style={{ width: "100px", height: "100px" }}
        />
        <Typography
          variant="body2"
          component="div"
          gutterBottom
          sx={{ padding: "10px" }}
        >
          {props.cartItem.model}
        </Typography>
        <Typography
          variant="h5"
          component="div"
          gutterBottom
          sx={{ padding: "10px" }}
        >
          ${props.cartItem.price}
        </Typography>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "end",
          paddingBottom: "15px",
        }}
      >
        <div>
          <Link
            color="inherit"
            underline="always"
            sx={{ padding: "5px", cursor: "pointer" }}
            onClick={handleRemoveCartItem}
          >
            Remove
          </Link>
          <Link
            color="inherit"
            underline="always"
            sx={{ padding: "5px", cursor: "pointer" }}
          >
            Save for later
          </Link>
        </div>
        <TextField
          sx={{ width: "100px" }}
          id="standard-basic"
          label="Quanity"
          variant="standard"
          required
          type="number"
          InputProps={{ inputProps: { min: 1 } }}
          onChange={handleUpdateCartItemQuantity}
          defaultValue={props.cartItem.quantity}
        />
      </div>
    </Box>
  );
}

export default connect(null, { removeCartItem, updateCartItemQuantity })(
  CartItem
);
