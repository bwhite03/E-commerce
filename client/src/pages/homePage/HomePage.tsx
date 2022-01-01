import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUserInfo } from "../../store/actions/userActions";

function HomePage(props: any) {
  useEffect(() => {
    console.log(props.cart);
    let token = localStorage.getItem("token");
    if (token) {
      props.fetchUserInfo(token);
    }
  }, []);

  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}

const mapStateToProps = (state: any) => {
  return {
    cart: state.userReducer.cart,
    userInfo: state.userReducer.userInfo,
  };
};

export default connect(mapStateToProps, { fetchUserInfo })(HomePage);
