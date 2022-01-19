import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import AccountNav from "../../components/account-nav/AccountNav";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";

function PurchaseHistoryPage(props: any) {
  return (
    <div style={{ display: "flex" }}>
      <AccountNav />
      <div style={{ marginTop: "20px", width: "75%", paddingLeft: "25px" }}>
        <Typography variant="h5" component="div">
          Purchase History
        </Typography>
        {props.orders.map((order: any) => (
          <div key={order.id}>
            <Link
              to={`/account/order/${order[2]}`}
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
                <Typography variant="body2" component="div">
                  <b>{order[3]}</b> | Order# {order[2]} | Total ${order[1]}
                </Typography>
              </div>
              <ArrowForwardIosOutlinedIcon />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state: any) => {
  return {
    orders: state.userReducer.orders,
  };
};

export default connect(mapStateToProps, null)(PurchaseHistoryPage);
