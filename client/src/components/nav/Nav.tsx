import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Badge from "@mui/material/Badge";
import Cart from "../cart/Cart";
import { logout, fetchCartItems } from "../../store/actions/userActions";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

function Nav(props: any) {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const openMenu = Boolean(anchorEl);

  const handleClickMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClickOpen = () => {
    if (props.userInfo) {
      props.fetchCartItems(props.userInfo.id);
    }
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const logout = () => {
    props.logout();
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/">Guitar World</Link>
          </Typography>
          <Button color="inherit">
            <Link to="/products">Products</Link>
          </Button>
          {props.userInfo ? (
            <div>
              <Button
                color="inherit"
                aria-controls="basic-menu"
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClickMenu}
              >
                <AccountCircleOutlinedIcon style={{ marginRight: "5px" }} />
                <Typography
                  variant="body2"
                  component="div"
                  sx={{ flexGrow: 1 }}
                >
                  Hi, {props.userInfo.firstName}
                </Typography>
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={openMenu}
                onClose={handleCloseMenu}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={logout}>
                  <Link to="/signin" style={{ color: "#000000DE" }}>
                    Account
                  </Link>
                </MenuItem>
                <MenuItem onClick={logout}>
                  <Link to="/signup" style={{ color: "#000000DE" }}>
                    Logout
                  </Link>
                </MenuItem>
              </Menu>
            </div>
          ) : (
            <div>
              <Button
                color="inherit"
                aria-controls="basic-menu"
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClickMenu}
              >
                <AccountCircleOutlinedIcon />
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={openMenu}
                onClose={handleCloseMenu}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={handleCloseMenu}>
                  <Link to="/signin" style={{ color: "#000000DE" }}>
                    Sign In
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleCloseMenu}>
                  <Link to="/signup" style={{ color: "#000000DE" }}>
                    Sign Up
                  </Link>
                </MenuItem>
              </Menu>
            </div>
          )}

          <Button color="inherit" onClick={handleClickOpen}>
            <Badge badgeContent={props.cart.length} color="warning">
              <ShoppingCartOutlinedIcon />
            </Badge>
          </Button>
        </Toolbar>
      </AppBar>
      <Cart open={open} onClose={handleClose} />
    </Box>
  );
}

const mapStateToProps = (state: any) => {
  return {
    userInfo: state.userReducer.userInfo,
    cart: state.userReducer.cart,
  };
};

export default connect(mapStateToProps, { logout, fetchCartItems })(Nav);
