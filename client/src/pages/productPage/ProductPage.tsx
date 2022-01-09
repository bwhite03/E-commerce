import React from "react";
import Product from "../../components/product/Product";
import SimilarProducts from "../../components/similar-products/SimilarProducts";
import ProductDetails from "../../components/product-details/ProductDetails";
import ProductReviews from "../../components/product-reviews/ProductReviews";

function ProductPage() {
  return (
    <div>
      <Product />
      <ProductDetails />
      <SimilarProducts />
      <ProductReviews />
    </div>
  );
}

export default ProductPage;
