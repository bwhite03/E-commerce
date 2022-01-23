import React from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function HomeShop() {
  return (
    <div>
      <Typography variant="h4" component="div" sx={{ paddingBottom: "10px" }}>
        Shop
      </Typography>
      <div
        className="shop-container"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <Link
          className="shop-card"
          to="/products"
          style={{ color: "#000000DE", width: "32%" }}
        >
          <Card>
            <CardMedia
              component="img"
              image="//static.guitarcenter.com/static/gc/2021/page-collection/guitars/desktop/gc-md-cat-01-guitars-10-26-21.jpg"
              alt="electric guitars"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Massive Selection Of Electric Guitars
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Our collection runs deep with guitars that suit every player
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Shop now</Button>
            </CardActions>
          </Card>
        </Link>
        <Link
          className="shop-card"
          to="/products"
          style={{ color: "#000000DE", width: "32%" }}
        >
          <Card>
            <CardMedia
              component="img"
              image="//static.guitarcenter.com/static/gc/2021/page-collection/guitars/desktop/gc-md-cat-02-guitars-10-26-21.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Massive Selection Of Acoustic Guitars
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Our collection runs deep with guitars that suit every player
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Shop now</Button>
            </CardActions>
          </Card>
        </Link>
        <Link
          className="shop-card"
          to="/products"
          style={{ color: "#000000DE", width: "32%" }}
        >
          <Card>
            <CardMedia
              component="img"
              image="//static.guitarcenter.com/static/gc/2021/page-collection/guitars/desktop/gc-md-cat-06-guitars-10-26-21.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Massive Selection Of Vintage Guitars
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Our collection runs deep with guitars that suit every player
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Shop now</Button>
            </CardActions>
          </Card>
        </Link>
      </div>
    </div>
  );
}

export default HomeShop;
