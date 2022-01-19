import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { fetchOrder } from "../../store/actions/userActions";
import AccountNav from "../../components/account-nav/AccountNav";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

function OrderPage(props: any) {
  let { id } = useParams();
  useEffect(() => {
    props.fetchOrder(id);
  }, [id]);

  return (
    <div style={{ display: "flex" }}>
      <AccountNav />
      <div style={{ marginTop: "20px", width: "75%", paddingLeft: "25px" }}>
        <Typography variant="h5" component="div">
          Order# {id}
        </Typography>
        <Divider />
        <Typography
          variant="body1"
          component="div"
          sx={{ paddingTop: "10px", paddingBottom: "10px" }}
        >
          {props.order.length} items
        </Typography>
        <Divider />
        {props.order.map((order: any) => (
          <div key={order.id}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                paddingTop: "20px",
              }}
            >
              <div style={{ display: "flex" }}>
                <img
                  src={order.image}
                  style={{ width: "150px", height: "150px" }}
                />
                <div>
                  <Typography variant="body2" component="div">
                    {order.model}
                  </Typography>
                  <Typography variant="caption" component="div">
                    Qty: {order.quantity}
                  </Typography>
                </div>
              </div>
              <Typography variant="h6" component="div">
                ${order.price}
              </Typography>
            </div>
            <div
              style={{
                display: "flex",
                paddingTop: "10px",
                paddingBottom: "20px",
                alignItems: "end",
                flexDirection: "row-reverse",
              }}
            >
              <div style={{ textAlign: "right" }}>
                <Link
                  to={`/review/${order.productId}`}
                  style={{
                    color: "black",
                    textDecoration: "underline",
                    padding: "10px",
                  }}
                >
                  Write a review
                </Link>
              </div>
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
    order: state.userReducer.order,
  };
};

export default connect(mapStateToProps, { fetchOrder })(OrderPage);
