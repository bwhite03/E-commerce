import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";

function HomeInfo() {
  return (
    <div style={{ paddingTop: "15px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Card sx={{ width: "49%" }}>
          <CardContent
            sx={{ display: "flex", alignItems: "center", paddingTop: "24px" }}
          >
            <MonetizationOnOutlinedIcon sx={{ fontSize: "60px" }} />
            <div style={{ paddingLeft: "20px" }}>
              <Typography gutterBottom variant="h5" component="div">
                Price Match Guarantee
              </Typography>
              <Typography variant="body2" color="text.secondary">
                If you find a better advertised price on the same product from
                an authorized U.S. dealer—online or in-store—within 45 days of
                purchase, we'll match it.
              </Typography>
            </div>
          </CardContent>
        </Card>
        <Card sx={{ width: "49%" }}>
          <CardContent
            sx={{ display: "flex", alignItems: "center", paddingTop: "24px" }}
          >
            <LocalShippingOutlinedIcon sx={{ fontSize: "60px" }} />
            <div style={{ paddingLeft: "20px" }}>
              <Typography gutterBottom variant="h5" component="div">
                Buy Online, Pick Up In-Store
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Many products are available on our site for pickup in-store, or
                get free shipping to your local store on most orders.
              </Typography>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default HomeInfo;
