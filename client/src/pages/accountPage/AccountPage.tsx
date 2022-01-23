import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Button from "@mui/material/Button";
import AccountNav from "../../components/account-nav/AccountNav";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";

function AccountPage(props: any) {
  return (
    <div className="account-container" style={{ display: "flex" }}>
      <AccountNav />
      <div
        className="account"
        style={{ marginTop: "20px", width: "75%", paddingLeft: "25px" }}
      >
        <Typography variant="h5" component="div">
          Welcome to your Account
        </Typography>
        <Link
          to="/account/purchase-history"
          style={{
            padding: "20px",
            marginTop: "20px",
            display: "flex",
            background: "rgb(242, 248, 253)",
            justifyContent: "space-between",
            alignItems: "center",
            color: "black",
            boxShadow: "0 0.0625rem 0.125rem 0.0625rem rgb(0 0 0 / 15%)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <ShoppingBasketOutlinedIcon style={{ marginRight: "10px" }} />
            <Typography variant="h6" component="div">
              Purchase History
            </Typography>
          </div>
          <ArrowForwardIosOutlinedIcon />
        </Link>
        <Link
          to="/account"
          style={{
            padding: "20px",
            marginTop: "20px",
            display: "flex",
            background: "rgb(242, 248, 253)",
            justifyContent: "space-between",
            alignItems: "center",
            color: "black",
            boxShadow: "0 0.0625rem 0.125rem 0.0625rem rgb(0 0 0 / 15%)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <AccountCircleOutlinedIcon style={{ marginRight: "10px" }} />
            <Typography variant="h6" component="div">
              Account Info
            </Typography>
          </div>
          <ArrowForwardIosOutlinedIcon />
        </Link>
        <Paper
          sx={{
            padding: "20px",
            boxShadow: "0 0.0625rem 0.125rem 0.0625rem rgb(0 0 0 / 15%)",
          }}
        >
          <Typography variant="h5" component="div">
            Email Address
          </Typography>
          <Typography variant="body1" component="div">
            {props.userInfo.sub}
          </Typography>
        </Paper>
        <Paper
          sx={{
            padding: "20px",
            boxShadow: "0 0.0625rem 0.125rem 0.0625rem rgb(0 0 0 / 15%)",
          }}
        >
          <Typography variant="h5" component="div">
            Address
          </Typography>
          <Typography variant="body1" component="div"></Typography>
        </Paper>
        <Link
          to="/account/wish-list"
          style={{
            padding: "20px",
            marginTop: "20px",
            display: "flex",
            background: "rgb(242, 248, 253)",
            justifyContent: "space-between",
            alignItems: "center",
            color: "black",
            boxShadow: "0 0.0625rem 0.125rem 0.0625rem rgb(0 0 0 / 15%)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <ListAltOutlinedIcon style={{ marginRight: "10px" }} />
            <Typography variant="h6" component="div">
              Wish List ({props.wishList.length})
            </Typography>
          </div>
          <ArrowForwardIosOutlinedIcon />
        </Link>
        <Paper
          sx={{
            padding: "20px",
            boxShadow: "0 0.0625rem 0.125rem 0.0625rem rgb(0 0 0 / 15%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            {props.wishList[0] && (
              <img
                src={props.wishList[0].image}
                style={{ width: "60px", height: "60px" }}
              />
            )}

            <Typography variant="body2" component="div">
              ({props.wishList.length} items)
            </Typography>
          </div>
          <Link to="/account/wish-list">
            <Button variant="outlined">View List</Button>
          </Link>
        </Paper>
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

export default connect(mapStateToProps, null)(AccountPage);
