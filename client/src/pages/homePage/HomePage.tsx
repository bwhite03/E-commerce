import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUserInfo, fetchCartItems } from "../../store/actions/userActions";

function HomePage(props: any) {
  useEffect(() => {
    async function fetchData() {
      let token = localStorage.getItem("token");
      if (token) {
        let res = await props.fetchUserInfo(token);
        props.fetchCartItems(res.data.id);
      }
    }
    fetchData();
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

export default connect(mapStateToProps, { fetchUserInfo, fetchCartItems })(
  HomePage
);
