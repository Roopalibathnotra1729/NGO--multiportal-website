import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { teal, cyan } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";

// Drawer //
import { styled, useTheme } from "@mui/material/styles";
import { Typography } from "@mui/material";
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
import LogoutIcon from '@mui/icons-material/Logout';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import InfoIcon from '@mui/icons-material/Info';
// import LockResetIcon from '@mui/icons-material/LockReset';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import { db } from "../Firebase";

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

function UserNav() {


  const theme = useTheme();
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();
  const handleDrawerOpen = () => { setOpen(true); };
  const handleDrawerClose = () => { setOpen(false); };

  const c9 = cyan[900];
  var id = localStorage.getItem('Userlog');

  const [status, setstatus] = useState();

  console.log(id);
  function checkstatus() {
    db.collection('User').doc(id).onSnapshot(function (succ) {
      setstatus(succ.data().status)
      // console.log(succ.data().status)
    })
  }

  useEffect(() => {
    checkstatus();
  }, [])

  function logout() {
    localStorage.removeItem('UserLog');
    navigate('/UserLog');
  }


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
            Project Name
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
          <Link to="/UserDash" style={{ textDecoration: "none", color: c9 }}>
            <ListItem button>
              <ListItemIcon>
                <AutoAwesomeMosaicIcon style={{ color: c9 }} />
              </ListItemIcon>
              <ListItemText style={{ color: c9 }} primary="Dashboard" />
            </ListItem>
          </Link>

          <Divider />

          <Link to="/UserProfile" style={{ textDecoration: "none", color: c9 }}>
            <ListItem button>
              <ListItemIcon>
                <InfoIcon style={{ color: c9 }} />
              </ListItemIcon>
              <ListItemText style={{ color: c9 }} primary="Profile" />
            </ListItem>
          </Link>

          <Divider />

          {status == 0 && (<>

            <Link style={{ textDecoration: "none", color: c9 }}
            to="/UserPost"
            >
              <ListItem button>
                <ListItemIcon>
                  {" "}
                  <InboxIcon style={{ color: c9 }} />
                </ListItemIcon>
                <ListItemText style={{ color: c9 }} primary="Posts" />
              </ListItem>
            </Link>
            <Divider />


            <Link style={{ textDecoration: "none", color: c9 }}
            to="/Blood"
            >
              <ListItem button>
                <ListItemIcon>
                  {" "}
                  <InboxIcon style={{ color: c9 }} />
                </ListItemIcon>
                <ListItemText style={{ color: c9 }} primary="Volunteer Blood" />
              </ListItem>
            </Link>


          </>)}

          <Divider />
          <Link to="/UserChangeP" style={{ textDecoration: "none", color: c9 }}>
            <ListItem button>
              <ListItemIcon>
                <VpnKeyIcon
                  style={{ color: c9 }} />
              </ListItemIcon>
              <ListItemText style={{ color: c9 }} primary="Change Password" />
            </ListItem>
          </Link>

          <Divider />
          {/* <Link to="/UserLog" style={{ textDecoration: "none", color: c9 }}> */}
          <ListItem button>
            <ListItemIcon>
              <LogoutIcon style={{ color: c9 }} />
            </ListItemIcon>
            <ListItemText style={{ color: c9 }} primary={"Logout"} onClick={logout} />
          </ListItem>
          {/* </Link> */}

        </List>
        <Divider />
      </Drawer>
    </>
  );
}
export default UserNav;
