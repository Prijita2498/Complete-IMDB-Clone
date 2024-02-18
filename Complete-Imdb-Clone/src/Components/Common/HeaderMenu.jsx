import React from "react";
import { Menu, MenuItem } from "@mui/material";
import { Link } from "react-router-dom";
import { routePath } from "../../assets/Route";

function HeaderMenu({ open, handleClose }) {
  const openMenu = Boolean(open);
  return (
    <Menu
      id="basic-menu"
      anchorEl={open}
      open={openMenu}
      onClose={handleClose}
      MenuListProps={{
        "aria-labelledby": "basic-button",
      }}
    >
      <Link to={`${routePath.moviescategory}?category=popular`} style={{textDecoration:'none', color:'inherit'}}><MenuItem onClick={handleClose}>Popular</MenuItem></Link>
      <Link to={`${routePath.moviescategory}?category=toprated`} style={{textDecoration:'none' , color:'inherit'}}><MenuItem onClick={handleClose}>Top Rated</MenuItem></Link>
      <Link to={`${routePath.moviescategory}?category=upcoming`} style={{textDecoration:'none' , color:'inherit'}}><MenuItem onClick={handleClose}>Up Coming</MenuItem></Link>
    </Menu>
  );
}

export default HeaderMenu;
