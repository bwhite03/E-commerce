import React from "react";
import { Link } from "react-router-dom";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import Divider from "@mui/material/Divider";
import LogoutIcon from "@mui/icons-material/Logout";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

function AccountNav() {
  return (
    <List
      className="account-nav-container"
      sx={{
        marginTop: "20px",
        width: "25%",
        borderRight: "1px solid rgba(0, 0, 0, 0.12);",
      }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader
          component="div"
          id="nested-list-subheader"
          sx={{ color: "black" }}
        >
          Hi, Blake
        </ListSubheader>
      }
    >
      <Link to="/account/" style={{ color: "black" }}>
        <ListItemButton>
          <ListItemIcon>
            <HomeOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItemButton>
      </Link>
      <Link to="/account/purchase-history" style={{ color: "black" }}>
        <ListItemButton>
          <ListItemIcon>
            <ShoppingBasketOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Purchase History" />
        </ListItemButton>
      </Link>
      <Link to="/account/wish-list" style={{ color: "black" }}>
        <ListItemButton>
          <ListItemIcon>
            <ListAltOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Wish List" />
        </ListItemButton>
      </Link>
      <Divider />
      <ListSubheader
        component="div"
        id="nested-list-subheader"
        sx={{ color: "black" }}
      >
        Manage Account
      </ListSubheader>
      <ListItemButton>
        <ListItemIcon>
          <AccountCircleOutlinedIcon />
        </ListItemIcon>
        <ListItemText primary="Personal Info" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <LogoutIcon />
        </ListItemIcon>
        <ListItemText primary="Sign Out" />
      </ListItemButton>
    </List>
  );
}

export default AccountNav;
