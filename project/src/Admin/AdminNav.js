import {
  Button,ButtonGroup,Card,
  CardContent,Grid,TextField,
  Typography,Paper,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { teal, cyan } from "@mui/material/colors";

// Drawer //
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

//ICONS//
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import AutoAwesomeMosaicIcon from "@mui/icons-material/AutoAwesomeMosaic";
import ListAltIcon from "@mui/icons-material/ListAlt";
import LogoutIcon from '@mui/icons-material/Logout';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
// import LockResetIcon from '@mui/icons-material/LockReset';
import VpnKeyIcon from '@mui/icons-material/VpnKey';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

function AdminNav() {
  const theme = useTheme();
  const [open, setOpen] = useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const navi = useNavigate();
  function Logout(){
    localStorage.removeItem('Admin_Login');
    navi('/AdminLog')
  }

  const c9 = cyan[900];
  
  return (
    <>
      {/* <Box sx={{ display: 'flex' }}> */}
      <CssBaseline />
      <AppBar style={{ background: "#00796b" }} position="fixed" open={open}>
        <Toolbar className="">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: "36px",
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h5" noWrap color="#d3ecea" component="div">
          N G O
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer variant="permanent" open={open} className="">
        <DrawerHeader style={{ background: "#00796b",align: 'justify', color: "#d3ecea"}}>
          <Typography style={{fontWeight:400,paddingRight:20  }} variant="subtitle" >
          ＭＥＮＵ
          </Typography>
          <IconButton onClick={handleDrawerClose} style={{paddingLeft:20}}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        
        <Divider />

        <List className="">
          <Link to="/AdminDash" style={{ textDecoration: "none", color: c9 }}>
            <ListItem button>
              <ListItemIcon style={{ marginRight: 0}}>
                <AutoAwesomeMosaicIcon style={{ color: c9 }} />
              </ListItemIcon>
              <ListItemText style={{ color: c9 }} primary="DASHBOARD" /> 
              {/* ＤＡＳＨＢＯＡＲＤ */}
            </ListItem>
          </Link>
          <Divider />

          <Link to="/Users" style={{ textDecoration: "none", color: c9 }}>
            <ListItem button>
              <ListItemIcon>
                <PersonAddAlt1Icon style={{ color: c9 }} />
              </ListItemIcon>
              <ListItemText style={{ color: c9 }} primary="VIEW USERS" />
            </ListItem>
          </Link>
          <Divider />

          <Link to="/Ngo" style={{ textDecoration: "none", color: c9 }}>
            <ListItem button>
              <ListItemIcon style={{ marginRight: 0}} > 
                <GroupAddIcon style={{ color: c9}} />
              </ListItemIcon>
              <ListItemText variant='button' style={{ color: c9, marginLeft:0 }} 
              primary="VIEW NGO" />
              {/* ＡＰＰＲＯＶＥ   */}
            </ListItem>
          </Link>
          <Divider />

          
          {/* <Link to="/ChangeP" style={{ textDecoration: "none", color: c9 }}>
            <ListItem button>
              <ListItemIcon style={{ marginRight: 0}}>
                <VpnKeyIcon
                 style={{ color: c9 }} />
              </ListItemIcon>
              <ListItemText style={{ color: c9,}}  variant='button'
              primary="ＣＨＡＮＧＥ ＰＡＳＳＷＯＲＤ" />
            </ListItem>
          </Link>
          <Divider /> */}

            <ListItem button onClick={Logout}>
              <ListItemIcon style={{ marginRight: 0}}>
                <LogoutIcon style={{ color: c9 }} />
              </ListItemIcon>
              <ListItemText style={{ color: c9 }}  variant='button'
              primary="ＬＯＧＯＵＴ" />
            </ListItem>

        </List>
        <Divider />
      </Drawer>
    </>
  );
}
export default AdminNav;
