import React, { useEffect, useState } from "react";
import NgoNav from "./NgoNav";
import { db, storage } from "../Firebase";
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
import event from '../images/event.jpg';
import { Delete, Edit } from "@mui/icons-material";


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


function EditEvent() {

  const [heading, setHeading] = useState("");
  const [desc, setDesc] = useState("");
  const [venue, setVenue] = useState("");
  const [contact, setContact] = useState();
  const [date, setDate] = useState([null, null]);
  const [timing, setTiming] = useState('');
  const [epic, setEpic] = useState();
  const [link, setLink] = useState();

  if(!localStorage.getItem('NgoLog')){
    navigate('/NgoLog');
  }

  const navigate = useNavigate();

  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  var eid = new URLSearchParams(window.location.search).get('id');


  var id = localStorage.getItem('NgoLog');

  const event = (event) => {
    event.preventDefault();
          db.collection("Events").doc(eid).update({
            Heading: heading,
            Description: desc,
            Start_Date:date[0],
            End_Date:date[1],
            Timings:timing,
            Venue: venue,
          }).then(function (succ) {
            alert('Event created.');
            event.target.reset();
          }).catch(function (err) {
            alert('Something went wrong, please try again later');
          })
 };

  const [events, setevents] = useState([]);
  function getngo() {
    db.collection('Events').doc(eid).onSnapshot(function (succ) {

        setHeading(succ.data().Heading)
        setDesc(succ.data().Description)
        setVenue(succ.data().Venue)
        setDate([succ.data().Start_Date.toDate(),succ.data().End_Date.toDate()])
        setTiming(succ.data().Timings)
        setEpic(succ.data().Epic)      
    })
  }

    useEffect(() => {
      getngo()
    }, [])


  return (
    <>

      <Box sx={{ display: "flex" }}>
        <NgoNav />

        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />

          <Paper style={{  }}>
            <Grid container style={{ padding: '5px', paddingBottom: '0' }}>
              <Grid container>
                <Typography variant="h6">Update Event</Typography>
              </Grid>
              {/* <form 
                  // onSubmit={event}
                  encType="multipart/form-data"> */}
              <Grid lg={4} md={8} sm={8} style={{margin:'auto'}}>
                <Divider />
                {/* <form
                  // onSubmit={event}
                  encType="multipart/form-data"> */}
                  <form onSubmit={event}>
                <CardContent lg={9}>

                  <Stack>
                    <CardContent>
                      <TextField size="small"
                        onChange={(e) => setHeading(e.target.value)}
                        required
                        fullWidth
                        label="HEADING"
                        variant="outlined"
                        value={heading}
                      />
                    </CardContent>

                    <CardContent>
                      <TextField size="small"
                        onChange={(e) => setDesc(e.target.value)}
                        required
                        multiline
                        fullWidth
                        rows={4}
                        label="DESCRIPTION"
                        variant="outlined"
                        value={desc}
                      />
                    </CardContent>

                    <CardContent>
                      <TextField size="small"
                        fullWidth
                        onChange={(e) => setVenue(e.target.value)}
                        id="outlined-basic"
                        label="VENUE"
                        variant="outlined"
                        required
                        value={venue}
                      />
                    </CardContent>
                    <CardContent>
                      <TextField size="small"
                        required
                        fullWidth
                        label="TIMINGS"
                        variant="outlined"
                        value={timing}
                      onChange={(e) => setTiming(e.target.value)}
                      />
                    </CardContent>

                    <CardContent>
                      <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DateRangePicker
                          required style={{ width: '460px' }}
                          calendars={1}
                          startText='Start Date'
                          endText='End Date'
                          value={date}
                          fullWidth
                          onChange={(newValue) => {
                            setDate(newValue);
                          }}
                          renderInput={(startProps, endProps) => (
                            <React.Fragment>
                              <TextField {...startProps} />
                              <Box sx={{ mx: 2 }}> to </Box>
                              <TextField {...endProps} />
                            </React.Fragment>
                          )}
                        />
                      </LocalizationProvider>
                    </CardContent>
                  </Stack>

                  <CardContent>
                    <Button type="submit" variant="contained" color="primary" style={{ textAlign: 'center' }}>
                      CREATE EVENT
                    </Button>
                  </CardContent>

                </CardContent>
                </form>
              </Grid>

            </Grid>
          </Paper>
          <br />
          

        </Box>
      </Box >
    </>
  )

}

export default EditEvent;

// 58:41