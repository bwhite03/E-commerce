import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

function ProductReviews(props: any) {
  return (
    <div style={{ paddingTop: "40px" }}>
      <Typography variant="h6" component="div" gutterBottom>
        Customer reviews & ratings
      </Typography>
      <div style={{ display: "flex", alignItems: "end" }}>
        {isNaN(props.totalRating) ? (
          <Typography
            variant="h2"
            component="div"
            gutterBottom
            sx={{ margin: "0" }}
          >
            0
          </Typography>
        ) : (
          <Typography
            variant="h2"
            component="div"
            gutterBottom
            sx={{ margin: "0" }}
          >
            {props.totalRating}
          </Typography>
        )}
        <Typography variant="subtitle2" component="div" gutterBottom>
          out of
        </Typography>
        <Typography
          variant="h2"
          component="div"
          gutterBottom
          sx={{ margin: "0" }}
        >
          5
        </Typography>
      </div>
      <div style={{ display: "flex" }}>
        <Rating name="read-only" value={props.totalRating} readOnly />
        <Typography variant="subtitle1" component="div" gutterBottom>
          ({props.productReviews.length} reviews)
        </Typography>
      </div>
      <div style={{ paddingTop: "10px" }}>
        <Link to={`/all-reviews/${props.product.id}`}>
          <Button variant="outlined" size="small" sx={{ marginRight: "15px" }}>
            See all reviews
          </Button>
        </Link>
        <Link to={`/review/${props.product.id}`}>
          <Button variant="contained" size="small">
            Write a review
          </Button>
        </Link>
      </div>
      <Grid container spacing={2} sx={{ pt: 2 }}>
        {props.productReviews.slice(0, 3).map((review: any) => (
          <Grid item xs={12} sm={6} md={4} key={review.id}>
            <Card>
              <CardContent>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Rating
                    name="read-only"
                    value={review.rating}
                    readOnly
                    size="small"
                  />
                  <Typography gutterBottom variant="subtitle1">
                    {review.date}
                  </Typography>
                </div>
                <Typography gutterBottom variant="subtitle1">
                  {review.title}
                </Typography>
                <Typography gutterBottom variant="body2">
                  {review.content}
                </Typography>
                <Typography gutterBottom variant="body1">
                  {review.name}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default ProductReviews;
