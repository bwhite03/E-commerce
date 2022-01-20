import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import ProductsPage from "./pages/productsPage/ProductsPage";
import ProductPage from "./pages/productPage/ProductPage";
import SignupPage from "./pages/signupPage/SignupPage";
import SigninPage from "./pages/signinPage/SigninPage";
import Nav from "./components/nav/Nav";
import WriteReviewPage from "./pages/writeReviewPage/WriteReviewPage";
import AllReviewsPage from "./pages/allReviewsPage/AllReviewsPage";
import AccountPage from "./pages/accountPage/AccountPage";
import WishListPage from "./pages/wishListPage/WishListPage";
import CheckoutPage from "./pages/checkoutPage/CheckoutPage";
import PurchaseHistoryPage from "./pages/purchaseHistoryPage/PurchaseHistoryPage";
import OrderPage from "./pages/orderPage/OrderPage";
import Footer from "./components/footer/Footer";
import { Container } from "@material-ui/core";
import "./App.css";

function Router() {
  return (
    <HashRouter>
      <Nav />
      <Container maxWidth="lg">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/signin" element={<SigninPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/review/:id" element={<WriteReviewPage />} />
          <Route path="/all-reviews/:id" element={<AllReviewsPage />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/account/wish-list" element={<WishListPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route
            path="/account/purchase-history"
            element={<PurchaseHistoryPage />}
          />
          <Route path="/account/order/:id" element={<OrderPage />} />
        </Routes>
      </Container>
      {/* <Footer /> */}
    </HashRouter>
  );
}

export default Router;
