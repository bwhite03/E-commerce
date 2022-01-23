import React, { useEffect } from "react";
import ProductListItem from "../product-list-item/ProductListItem";
import { connect } from "react-redux";
import { fetchProducts } from "../../store/actions/productActions";
import Grid from "@mui/material/Grid";
import CircularProgress from "@mui/material/CircularProgress";
import Pagination from "@mui/material/Pagination";

function ProductsList(props: any) {
  const [page, setPage] = React.useState(1);

  useEffect(() => {
    props.fetchProducts(page);
  }, [page]);

  const handleChange = (event: any, value: any) => {
    setPage(value);
  };

  return (
    <div>
      {props.products.content === "" ||
      props.products.content === [] ||
      props.products.content === undefined ? (
        <CircularProgress />
      ) : (
        <Grid container spacing={2} sx={{ p: 2 }}>
          {props.products.content.map((product: any) => (
            <Grid item xs={6} md={3} key={product.id} sx={{ p: 2 }}>
              <ProductListItem product={product} key={product.id} />
            </Grid>
          ))}
        </Grid>
      )}
      {props.products.content === "" ||
      props.products.content === [] ||
      props.products.content === undefined ? (
        <CircularProgress />
      ) : (
        <Pagination
          count={Math.ceil(props.products.totalElements / 8)}
          size={"large"}
          page={page}
          onChange={handleChange}
        />
      )}
    </div>
  );
}

const mapStateToProps = (state: any) => {
  return {
    products: state.productReducer.products,
  };
};

export default connect(mapStateToProps, { fetchProducts })(ProductsList);
