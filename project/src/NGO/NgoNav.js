
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { cyan } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";
import { db } from "../Firebase";
import { styled, useTheme } from "@mui/material/styles";
import { Typography, Tooltip, Button, Chip } from "@mui/material";
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
import InboxIcon from "@mui/icons-material/MoveToInbox";
import AutoAwesomeMosaicIcon from "@mui/icons-material/AutoAwesomeMosaic";
import ListAltIcon from "@mui/icons-material/ListAlt";
import LogoutIcon from '@mui/icons-material/Logout';
import InfoIcon from '@mui/icons-material/Info';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import { EventSeat } from "@mui/icons-material";

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

function NgoNav() {


  const theme = useTheme();
  const [open, setOpen] = useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const c9 = cyan[900];
  const navigate = useNavigate();

  //_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_\\
  function logout() {
    localStorage.removeItem('NgoLog');
    navigate('/NgoLog');
  }

  var id = localStorage.getItem('NgoLog');
  console.log(id);
  const [status, setstatus] = useState(0);
  const [name, setname] = useState();
  function checkstatus() {
    db.collection('Ngo').doc(id).onSnapshot(function (succ) {
      setstatus(succ.data().status)
      setname(succ.data().Ngo_Name)
    })
  }

  useEffect(() => {
    checkstatus();
  }, [])




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
        <DrawerHeader style={{ background: "#00796b", align: 'justify', color: "#d3ecea" }}>
          <Typography style={{ fontWeight: 400, paddingRight: 20 }} variant="subtitle" >
            MENU
          </Typography>
          <IconButton onClick={handleDrawerClose} style={{ paddingLeft: 20 }}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>

        <Divider />

        <List className="">
          <Tooltip title="Dashboard" placement="right">
            <Link to="/NgoDash" style={{ textDecoration: "none", color: c9 }}>
              <ListItem button>

                <ListItemIcon>
                  {""}
                  <AutoAwesomeMosaicIcon style={{ color: c9 }} />
                </ListItemIcon>

                <ListItemText style={{ color: c9 }} primary="Dashboard" />
              </ListItem>
            </Link>
          </Tooltip>
          <Divider />

          <Tooltip title="Profile" placement="right">
            <Link to="/NgoProfile" style={{ textDecoration: "none", color: c9 }}>
              <ListItem button>
                <ListItemIcon>
                  {" "}
                  <InfoIcon style={{ color: c9 }} />
                </ListItemIcon>
                <ListItemText style={{ color: c9 }} primary="Profile" />
              </ListItem>
            </Link>
          </Tooltip>
          <Divider />

          <Tooltip title="Profile" placement="right">
            <Link to="/Events" style={{ textDecoration: "none", color: c9 }}>
              <ListItem button>
                <ListItemIcon>
                  <EventSeat style={{ color: c9 }} />
                </ListItemIcon>
                <ListItemText style={{ color: c9 }} primary="Events" />
              </ListItem>
            </Link>
          </Tooltip>
          <Divider />

          {status !== 0 ? <>
            <Tooltip title="Events" placement="right">
              <Link to="/Events" style={{ textDecoration: "none", color: c9 }}>
                <ListItem button>
                  <ListItemIcon>
                    {" "}
                    <ListAltIcon style={{ color: c9 }} />
                  </ListItemIcon>
                  <ListItemText style={{ color: c9 }} primary="Events" />
                </ListItem>
              </Link>
            </Tooltip>
            <Divider />



          </> : <></>}




          {/* <Divider />
          <Link to="/ChangeP" style={{ textDecoration: "none", color: c9 }}>
            <ListItem button>
              <ListItemIcon>
                {" "}
                <VpnKeyIcon
                 style={{ color: c9 }} />
              </ListItemIcon>
              <ListItemText style={{ color: c9 }} primary="Change Password" />
            </ListItem>
          </Link> */}

          <Tooltip title="Logout" placement="right">
            <Link to="/NgoLog" style={{ textDecoration: "none", color: c9 }}>
              <ListItem button>
                <ListItemIcon>
                  <LogoutIcon style={{ color: c9 }} />
                </ListItemIcon>
                <ListItemText style={{ color: c9 }} onClick={logout} primary="Logout" />
              </ListItem>
            </Link>
          </Tooltip>

        </List>
        <Divider />
      </Drawer>
    </>
  );
}
export default NgoNav;
