import React, { useEffect } from "react";
import Filter from "../../components/filter/Filter";
import ProductsList from "../../components/products-list/ProductsList";
import ImageSlider from "../../components/img-slider/ImageSlider";
import Feedback from "../../components/feedback/Feedback";

function ProductsPage(props: any) {
  return (
    <div>
      <ImageSlider />
      <Filter />
      <ProductsList />
      <Feedback />
    </div>
  );
}

export default ProductsPage;
