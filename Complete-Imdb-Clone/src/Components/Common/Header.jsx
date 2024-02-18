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
import { useNavigate } from "react-router-dom";
import { routePath } from "../../assets/Route";

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

const ProColor = styled(Box)`
  color : dodgerblue;
`

function Header() {

    const [open, setOpen] = useState(null);
    const navigate = useNavigate();

    const handleClick= (e) =>{
        setOpen(e.currentTarget);
    }

    const handleClose = () =>{
        setOpen(null)
    }

  return (
    <AppBar position="static">
      <StyledToolBar>
        <Logo src={logoURL} alt="logo" onClick={()=> navigate(routePath.home) } />
        {/* Box is the replacement for div tag */}
        <Box onClick={handleClick}>
          <Menu />
          {/* Typography is the replacement for p tag a;so h1 to h6 */}
          <Typography>Menu</Typography>
        </Box>
        <HeaderMenu open={open} handleClose={handleClose}/>
        <InputSearchField placeholder="Search For Movies" />
        <Typography>
          IMDb<ProColor component="span">Pro</ProColor>
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
