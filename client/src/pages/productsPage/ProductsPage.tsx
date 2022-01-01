import React, { useEffect } from "react";
import Filter from "../../components/filter/Filter";
import ProductsList from "../../components/products-list/ProductsList";
import ImageSlider from "../../components/img-slider/ImageSlider";

function ProductsPage(props: any) {
  return (
    <div>
      <ImageSlider />
      <Filter />
      <ProductsList />
    </div>
  );
}

export default ProductsPage;
