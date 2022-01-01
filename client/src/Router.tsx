import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import ProductsPage from "./pages/productsPage/ProductsPage";
import ProductPage from "./pages/productPage/ProductPage";
import SignupPage from "./pages/signupPage/SignupPage";
import SigninPage from "./pages/signinPage/SigninPage";
import Nav from "./components/nav/Nav";
import { Container } from "@material-ui/core";
import "./App.css";

function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <Container maxWidth="lg">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/signin" element={<SigninPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default Router;
