import React, { useEffect, useState } from "react";
import { db } from "./Firebase";
import firebase from "firebase";
import { useNavigate } from "react-router-dom";
import {
  Button, CardContent, Grid, TextField, Typography,
  Divider, Paper, Card, CardActions, CardMedia, IconButton,
} from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Stack from '@mui/material/Stack';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateRangePicker from '@mui/lab/DateRangePicker';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import event from './images/event.jpg';
import Navbar from "./Navbar";


const drawerWidth = 230;
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


function Post() {

  const [heading, setHeading] = useState("");
  const [desc, setDesc] = useState("");
  const [venue, setVenue] = useState("");
  const [contact, setContact] = useState();
  const [date, setDate] = useState([null, null]);
  const [epic, setEpic] = useState();
  const [link, setLink] = useState();

  // const [value, setvalue] = useState([null,null])


  const navigate = useNavigate();

  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [events, setevents] = useState([]);
  function getngo() {
    db.collection('Events').orderBy('Date_submit', 'desc').onSnapshot(function (succ) {
      const ar = [];
      succ.forEach(function (suc) {
        ar.push(suc);
      })
      setevents(ar);
    })
  }


    useEffect(() => {
      getngo()
    }, [])

  return (
    <>
    <Navbar/>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style={{position:'absolute',zIndex:0,top:0, opacity:.8}}>
  <path fill="#ff5500" fill-opacity="1" d="M0,160L21.8,154.7C43.6,149,87,139,131,144C174.5,149,218,171,262,176C305.5,181,349,171,393,144C436.4,117,480,75,524,90.7C567.3,107,611,181,655,218.7C698.2,256,742,256,785,240C829.1,224,873,192,916,160C960,128,1004,96,1047,69.3C1090.9,43,1135,21,1178,21.3C1221.8,21,1265,43,1309,48C1352.7,53,1396,43,1418,37.3L1440,32L1440,0L1418.2,0C1396.4,0,1353,0,1309,0C1265.5,0,1222,0,1178,0C1134.5,0,1091,0,1047,0C1003.6,0,960,0,916,0C872.7,0,829,0,785,0C741.8,0,698,0,655,0C610.9,0,567,0,524,0C480,0,436,0,393,0C349.1,0,305,0,262,0C218.2,0,175,0,131,0C87.3,0,44,0,22,0L0,0Z"></path>
</svg>
      <Box sx={{ display: "flex" }} style={{background:'url("https://www.azdo.ly/wp-content/uploads/2020/03/ngos-hero-background.jpg")', backgroundSize:'auto 100%', backgroundPosition:'center', backgroundAttachment:'fixed' , minHeight:'100vh'}}>

        <Box component="main" style={{position:'relative', zIndex:1}} sx={{ flexGrow: 1, p: 3 }}>
        <br/><br/>
        <Grid container>
                
                {events.map((row) => (
                    <Grid lg={3} style={{margin:5}}>
                      <CardContent>
                      <Card>
                        <CardMedia
                          component="img"
                          height="140"
                          image={row.data().Link}
                          alt="green iguana"
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                            {row.data().Heading}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                          <b>Start Date - </b>{row.data().Start_Date.toDate().toString().slice(0,15)} <br/>
                          <b>End Date - </b>{row.data().End_Date.toDate().toString().slice(0,15)} <br/>
                            <b>Timing - </b>{row.data().Timings}<br/>
                          </Typography>

                          <Typography variant="body2" color="text.secondary">
                            <b>Description - </b>{row.data().Description}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            <b>Venue - </b>{row.data().Venue}
                          </Typography>
                        </CardContent>
                      </Card>

                      </CardContent>
                      </Grid>

                ))}


                
              </Grid>          

        </Box>
      </Box >
    </>
  )

}

export default Post;