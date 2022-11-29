import React, { useEffect, useState } from "react";
import UserNav from "./UserNav";
import { db } from "../Firebase";
import firebase from "firebase";
import { useNavigate } from "react-router-dom";
import {
  Button,
  ButtonGroup,
  Card,
  CardContent,
  Grid, Select, MenuItem,
  TextField,
  Typography,
  Paper,
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
import FormHelperText from '@mui/material/FormHelperText';

//ICONS//

import dp from '../images/dp.jpg';


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


function UserProfile() {

  const [uname, setUname] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState();

  const [addr, setAddr] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [title, setTitle] = useState();

  const [pincode, setPincode] = useState();

  const [id_proof, setIdproof] = useState("");
  const [profile_pic, setProfilepic] = useState("");

  //const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  function selectCity(x) {
    setCity(x);
  }
  function selectState(x) {
    setState(x);
  }
  function selectTitle(x) {
    setTitle(x);
  }
  var uid = localStorage.getItem('Userlog');

  const uprofile = (event) => {
    event.preventDefault();
    db.collection("User")
      .doc(uid).update({
        // Title:title,
        User_Name: uname.toLowerCase(),
        Email: email,
        Contact: contact,

        Address: addr.toLowerCase(),
        City: city.toLowerCase(),
        State: state.toLowerCase(),
        Pincode: pincode,
        // Id_proof: id_proof,
        // Profile_pic: profile_pic,
      }).then(function (succ) {
        alert('Your Profile has been updated');
      }).catch(function (err) {
        alert('Something went wrong, please try again later');
      })
  };

  function gtdta() {
    db.collection('User').doc(uid).onSnapshot(function (suc) {
      setUname(suc.data().Name);
      setEmail(suc.data().Email);
      setContact(suc.data().Contact);
    })
  }

  useEffect(() => {
    gtdta()
  }, [])





  return (
    <>
      <Box sx={{ display: "flex" }}>
        <UserNav />

        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />

          <Grid container>
            <Grid lg={9}>
              <CardContent style={{ textAlign: "center" }}>
                <Typography variant="h5" fontWeight={'400'} className="" color='#0b7c71'>
                  ＵＳＥＲ'S  ＤＥＴＡＩＬＳ
                </Typography>
                <form
                  onSubmit={uprofile}
                  encType="multipart/form-data">

                  <Grid container>
                    <Grid container>
                      {/* title */}
                      <Grid lg={2}>
                        <CardContent>
                          <FormControl sx={{ mr: 1 }}>
                            <InputLabel variant="standard" style={{}}>
                              ＴＩＴＬＥ
                            </InputLabel>
                            <Select variant="standard"
                              style={{ width: "100px", }}
                              size="small"
                              required
                              label="Title"
                              onChange={(e) => selectTitle(e.target.value)}
                              placeholder="Title"
                            >
                              <MenuItem value="Mr">Mr</MenuItem>
                              <MenuItem value="Ms">Ms</MenuItem>
                              <MenuItem value="Other">Other</MenuItem>
                            </Select>
                          </FormControl>

                        </CardContent>
                      </Grid>

                      {/* uname */}
                      <Grid lg={3}>
                        <CardContent>
                          <FormControl variant="standard" fullWidth>
                            <InputLabel shrink htmlFor="component-simple">
                              ＵＳＥＲＮＡＭＥ
                            </InputLabel>
                            <Input
                              onChange={(e) => setUname(e.target.value)}
                              id='standard' value={uname.toUpperCase()}
                              disabled
                              inputProps={{
                                pattern: "[A-Za-z ]{2,20}",
                              }}
                            />
                          </FormControl>
                        </CardContent>
                      </Grid>

                      {/* email */}
                      <Grid lg={3}>
                        <CardContent>
                          <FormControl variant="standard" fullWidth>
                            <InputLabel htmlFor="component-simple">
                              ＥＭＡＩＬ
                            </InputLabel>
                            <Input
                              // type="email"
                              value={email}
                              id="component-simple"
                              disabled
                            />
                          </FormControl>
                        </CardContent>
                      </Grid>

                      {/* contact */}
                      <Grid lg={3}>
                        <CardContent>
                          <FormControl variant="standard" fullWidth>
                            <InputLabel shrink htmlFor="component-simple">
                              ＣＯＮＴＡＣＴ
                            </InputLabel>
                            <Input
                              value={contact}
                              id="component-simple"
                              onChange={(e) => setContact(e.target.value)}
                            />
                          </FormControl>
                        </CardContent>
                      </Grid>
                    </Grid>

                    {/* tele */}
                    {/* <Grid lg={3}>
                        <CardContent>
                          <FormControl variant="standard" fullWidth>
                            <InputLabel htmlFor="component-simple">
                             ＴＥＬＥＰＨＯＮＥ ＮＯ．
                            </InputLabel>
                            <Input
                              onChange={(e) => setTele(e.target.value)}
                              id="component-simple"
                              inputProps={{
                                pattern: "[0-9]{11}",
                              }}
                            />
                          </FormControl>
                        </CardContent>
                      </Grid> 
                       </Grid> */}

                    <Grid container>
                      {/* state */}
                      <Grid lg={3} md={4} sm={6}>
                        <CardContent>
                          <FormControl variant="standard" fullWidth>
                            <InputLabel id="demo-simple-select-helper-label">
                              ＳＴＡＴＥ
                            </InputLabel>
                            <Select
                              size="small" fullWidth
                              labelId="demo-simple-select-helper-label"
                              type="text" label="State"
                              onChange={(e) => selectState(e.target.value)}
                            >
                              <MenuItem value="Punjab">Punjab</MenuItem>
                              <MenuItem value="Haryana">Haryana</MenuItem>
                              <MenuItem value="Himachal">Himachal</MenuItem>
                              <MenuItem value="Rajasthan">Rajasthan</MenuItem>
                              {/* <MenuItem value="none">None</MenuItem> */}
                            </Select>
                          </FormControl>
                        </CardContent>
                      </Grid>

                      {/* city */}
                      <Grid lg={3} md={4} sm={6}>
                        <CardContent>
                          <FormControl variant="standard" fullWidth>
                            <InputLabel id="demo-simple-select-helper-label">
                              ＣＩＴＹ
                            </InputLabel>
                            <Select
                              size="small"
                              width='150'
                              labelId="demo-simple-select-helper-label"
                              type="text"
                              label="City"
                              onChange={(e) => selectCity(e.target.value)}
                            >
                              <MenuItem value="amritsar">Amritsar</MenuItem>
                              <MenuItem value="ludhiana">Ludhiana</MenuItem>

                            </Select>
                          </FormControl>
                        </CardContent>
                      </Grid>

                      {/* addr */}
                      <Grid lg={3}>
                        <CardContent>
                          <FormControl variant="standard" fullWidth>
                            <InputLabel htmlFor="component-simple">
                              ＡＤＤＲＥＳＳ
                            </InputLabel>
                            <Input
                              onChange={(e) => setAddr(e.target.value)}
                              id="standard-required" maxRows={1}
                              required value={addr}
                              id="standard-required"
                            />
                          </FormControl>
                        </CardContent>
                      </Grid>

                      {/* pincode */}
                      <Grid lg={3}>
                        <CardContent>
                          <FormControl variant="standard" fullWidth>
                            <InputLabel htmlFor="component-simple">
                              ＰＩＮＣＯＤＥ
                            </InputLabel>
                            <Input value={pincode}
                              onChange={(e) => setPincode(e.target.value)}
                              id="standard-required"
                              required
                              inputProps={{
                                pattern: '[0-9]{6}'
                              }}
                              id="standard-required"
                            />
                          </FormControl>
                        </CardContent>
                      </Grid>
                      {/* ////////////////////////////////////////// */}

                      {/* id_proof */}
                      <Grid lg={4}>
                        <CardContent>
                          <FormControl variant="standard" fullWidth>
                            <InputLabel shrink htmlFor="component-simple" style={{ color: 'action.active', fontSize: '15px' }}>
                              ＩＤ ＰＲＯＯＦ
                            </InputLabel>
                            <Input
                              onChange={(e) => setIdproof(e.target.files[0])}
                              type="file"
                              id="component-simple"
                              required
                            />
                          </FormControl>
                        </CardContent>
                      </Grid>

                    </Grid>
                    
                  </Grid>
                  <CardContent>
                    <Button type="submit" variant="contained" color="primary">
                      ＳＵＢＭＩＴ
                    </Button>
                  </CardContent>
                </form>
              </CardContent>
            </Grid>

            {/* profile_pic */}
            <Grid lg={3}>
              <CardContent>
                <form>
                  <Grid container>
                    <Grid>
                      <CardContent ><img src={dp} style={{ width: "200px" }} /></CardContent>
                      <FormControl variant="standard" fullWidth>
                        <InputLabel shrink htmlFor="component-simple" style={{ color: 'action.active' }}>
                          ＰＲＯＦＩＬＥ  ＰＩＣＴＵＲＥ
                        </InputLabel>
                        <Input
                          type="file"
                          onChange={(e) =>
                            setProfilepic(e.target.files[0])
                          }
                          id="component-simple"
                          required
                        />
                      </FormControl>

                      <CardContent>
                        <Button type="submit" variant="contained" color="primary">
                          UPDATE
                        </Button>
                      </CardContent>
                    </Grid>
                  </Grid>
                </form>
              </CardContent>

            </Grid>

          </Grid>
        </Box>
      </Box>
    </>
  )

}

export default UserProfile;