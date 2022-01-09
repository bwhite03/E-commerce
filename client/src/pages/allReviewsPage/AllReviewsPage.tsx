import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchReviews } from "../../store/actions/productActions";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

function AllReviewsPage(props: any) {
  let { id } = useParams();
  useEffect(() => {
    props.fetchReviews(id);
  }, []);

  return (
    <div style={{ paddingTop: "20px" }}>
      <Typography variant="h6" component="div" gutterBottom>
        Customer reviews
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
      <Grid container spacing={2} sx={{ pt: 2 }}>
        {props.productReviews.map((review: any) => (
          <Grid item xs={4}>
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

const mapStateToProps = (state: any) => {
  let totalRating = state.productReducer.productReviews.reduce(
    (acc: any, obj: any) => acc + obj.rating,
    0
  );
  totalRating = (
    totalRating / state.productReducer.productReviews.length
  ).toFixed(1);
  return {
    productReviews: state.productReducer.productReviews,
    totalRating: totalRating,
  };
};

export default connect(mapStateToProps, { fetchReviews })(AllReviewsPage);
