import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  styled,
  Box,
  Typography,
  InputBase,
} from "@mui/material";
import { logoURL } from "../../assets/Constants";
import { Menu, BookmarkAdd, ArrowDropDown } from "@mui/icons-material";

//Components
import HeaderMenu from "./HeaderMenu";

//Customise the css for ToolBar
const StyledToolBar = styled(Toolbar)`
  background: #121212;
  min-height: 56px !important;
  padding: 0 150px !important;
  justify-content: space-between;

  & > * {
    padding: 0 16px;
  }
  & > div {
    display: flex;
    align-items: center;
    cursor: pointer;
    & > p {
      font-size: 14px;
      font-weight: 600;
    }
  }

  & > p {
    font-size: 14px;
    font-weight: 600;
  }
`;

//Customise the css for Logo
const Logo = styled("img")({
  width: 64,
});

//Customize css for InputBase Search field
const InputSearchField = styled(InputBase)`
  background: #fff;
  height: 30px;
  width: 55%;
  border-radius: 5px;
`;

function Header() {

    const [open, setOpen] = useState(null);

    const handleClick= (e) =>{
        setOpen(e.currentTarget);
    }

    const handleClose = () =>{
        setOpen(null)
    }

  return (
    <AppBar position="static">
      <StyledToolBar>
        <Logo src={logoURL} alt="logo" />
        {/* Box is the replacement for div tag */}
        <Box onClick={handleClick}>
          <Menu />
          {/* Typography is the replacement for p tag a;so h1 to h6 */}
          <Typography>Menu</Typography>
        </Box>
        <HeaderMenu open={open} handleClose={handleClose}/>
        <InputSearchField />
        <Typography>
          IMDb<Box component="span">Pro</Box>
        </Typography>
        <Box>
          <BookmarkAdd />
          <Typography>Watchlist</Typography>
        </Box>
        <Typography>Sign In</Typography>
        <Box>
          <Typography>EN</Typography>
          <ArrowDropDown />
        </Box>
      </StyledToolBar>
    </AppBar>
  );
}

export default Header;
