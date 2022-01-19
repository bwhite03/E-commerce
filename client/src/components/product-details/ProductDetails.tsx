import React from "react";
import Typography from "@mui/material/Typography";

function ProductDetails(props: any) {
  return (
    <div style={{ paddingTop: "40px" }}>
      <Typography variant="h6" component="div" gutterBottom>
        About this item
      </Typography>
      <Typography variant="body2" component="div" gutterBottom>
        {props.product.details}
      </Typography>
    </div>
  );
}

export default ProductDetails;
