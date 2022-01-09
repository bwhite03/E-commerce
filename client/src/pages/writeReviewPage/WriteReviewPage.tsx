import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { useParams, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { fetchProduct, addReview } from "../../store/actions/productActions";
import Paper from "@mui/material/Paper";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function WriteReviewPage(props: any) {
  const navigate = useNavigate();
  const [rating, setRating] = React.useState<number | null>(0);
  const [name, setName] = React.useState("");
  const [content, setContent] = React.useState("");
  const [title, setTitle] = React.useState("");
  let { id } = useParams();

  useEffect(() => {
    props.fetchProduct(id);
  }, [id]);

  const handleAddReview = () => {
    const date = new Date();
    date.toISOString().slice(0, 10);
    const review = {
      productId: props.product.id,
      rating: rating,
      date: date,
      name: name,
      content: content,
      title: title,
    };

    props.addReview(review);
    navigate(`/product/${id}`);
  };

  return (
    <div
      style={{
        textAlign: "center",
        paddingTop: "25px",
        width: "50%",
        margin: "auto",
      }}
    >
      <img
        src={props.product.image}
        style={{ width: "200px", height: "200px" }}
      />
      <Typography variant="h6" component="div" gutterBottom>
        {props.product.model}
      </Typography>
      <Paper style={{ padding: "25px" }}>
        <Typography variant="body1" component="div" gutterBottom>
          Select a Rating (required)
        </Typography>
        <Rating
          name="simple-controlled"
          value={rating}
          onChange={(event, newValue) => {
            setRating(newValue);
          }}
        />
        <Stack component="form">
          <TextField
            sx={{ marginTop: "20px" }}
            id="standard-basic"
            label="Name"
            variant="outlined"
            required
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <TextField
            sx={{ marginTop: "20px" }}
            id="standard-basic"
            label="Details"
            variant="outlined"
            required
            onChange={(e) => {
              setContent(e.target.value);
            }}
          />
          <TextField
            sx={{ marginTop: "20px" }}
            id="standard-basic"
            label="Title"
            variant="outlined"
            required
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </Stack>
      </Paper>
      <Button
        variant="contained"
        style={{ marginTop: "20px" }}
        onClick={handleAddReview}
      >
        Submit Review
      </Button>
      <Link
        to={`/product/${id}`}
        style={{
          padding: "20px",
          cursor: "pointer",
          display: "block",
          color: "black",
          textDecoration: "underline",
        }}
      >
        Cancel
      </Link>
    </div>
  );
}

const mapStateToProps = (state: any) => {
  return {
    product: state.productReducer.product,
  };
};

export default connect(mapStateToProps, { fetchProduct, addReview })(
  WriteReviewPage
);
