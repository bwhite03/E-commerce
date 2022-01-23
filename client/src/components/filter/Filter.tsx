import React, { MouseEvent } from "react";
import { connect } from "react-redux";
import { filterProducts } from "../../store/actions/productActions";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Typography from "@mui/material/Typography";

function Filter(props: any) {
  const [brand, setBrand] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [type, setType] = React.useState("");

  const handleChangeType = (event: SelectChangeEvent) => {
    setType(event.target.value as string);
  };

  const handleChangeBrand = (event: SelectChangeEvent) => {
    setBrand(event.target.value as string);
  };

  const handleChangePrice = (event: SelectChangeEvent) => {
    setPrice(event.target.value as string);
  };

  const handleSearch = (event: MouseEvent) => {
    props.filterProducts(type, brand, price);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <Typography variant="h6" component="div" gutterBottom sx={{ m: 1 }}>
        Products ({props.products.totalElements})
      </Typography>
      <div
        className="filter-container"
        style={{ display: "flex", alignItems: "end" }}
      >
        <FormControl
          className="filter-select"
          variant="standard"
          sx={{ m: 1, minWidth: 120 }}
        >
          <InputLabel id="demo-simple-select-label">Type</InputLabel>
          <Select
            className="filter-select"
            labelId="demo-simple-select-label"
            style={{ width: "150px" }}
            id="demo-simple-select"
            value={type}
            label="Brand"
            onChange={handleChangeType}
          >
            <MenuItem value="">
              <em>All</em>
            </MenuItem>
            <MenuItem value={"Acoustic"}>Acoustic</MenuItem>
            <MenuItem value={"Electric"}>Electric</MenuItem>
            <MenuItem value={"Acoustic-Electric"}>Acoustic-Electric</MenuItem>
          </Select>
        </FormControl>
        <FormControl
          className="filter-select"
          variant="standard"
          sx={{ m: 1, minWidth: 120 }}
        >
          <InputLabel id="demo-simple-select-label">Brand</InputLabel>
          <Select
            className="filter-select"
            labelId="demo-simple-select-label"
            style={{ width: "150px" }}
            id="demo-simple-select"
            value={brand}
            label="Brand"
            onChange={handleChangeBrand}
          >
            <MenuItem value="">
              <em>All</em>
            </MenuItem>
            <MenuItem value={"Epiphone"}>Epiphone</MenuItem>
            <MenuItem value={"Jackson"}>Jackson</MenuItem>
            <MenuItem value={"Fender"}>Fender</MenuItem>
            <MenuItem value={"Schecter"}>Schecter</MenuItem>
            <MenuItem value={"Mitchell"}>Mitchell</MenuItem>
            <MenuItem value={"Squier"}>Squier</MenuItem>
            <MenuItem value={"Sterling"}>Sterling</MenuItem>
            <MenuItem value={"D'Angelico"}>D'Angelico</MenuItem>
          </Select>
        </FormControl>
        <FormControl
          className="filter-select"
          variant="standard"
          sx={{ m: 1, minWidth: 120 }}
        >
          <InputLabel id="demo-simple-select-label">Price</InputLabel>
          <Select
            className="filter-select"
            labelId="demo-simple-select-label"
            style={{ width: "150px" }}
            id="demo-simple-select"
            value={price}
            label="Price"
            onChange={handleChangePrice}
          >
            <MenuItem value="">
              <em>All</em>
            </MenuItem>
            <MenuItem value={"100"}>$100-</MenuItem>
            <MenuItem value={"200"}>$200-</MenuItem>
            <MenuItem value={"300"}>$300-</MenuItem>
          </Select>
        </FormControl>
        <FormControl
          className="filter-select"
          variant="standard"
          sx={{ m: 1, minWidth: 120 }}
        >
          <Button variant="contained" onClick={handleSearch}>
            Search
          </Button>
        </FormControl>
      </div>
    </Box>
  );
}

const mapStateToProps = (state: any) => {
  return {
    products: state.productReducer.products,
  };
};

export default connect(mapStateToProps, { filterProducts })(Filter);
