import React, { useState } from "react";
import UserNav from "./UserNav";
import {
  Button,
  ButtonGroup,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
  Paper,
  //Drawer
  Box,
  MuiAppBar,
  MuiDrawer,
  CssBaseline,
  List,
  Toolbar,
  Divider,
  Select,
  MenuItem,
} from "@mui/material";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import {
  Bar,
  Bubble,
  Line,
  Pie,
  PolarArea,
  Radar,
  Scatter,
} from "react-chartjs-2";
import { useNavigate } from "react-router-dom";


import { styled, useTheme } from "@mui/material/styles";
// Drawer Started

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

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
// Drawer Ended



function UserDash() {
  const navigate = useNavigate();
  const data = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "data",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  var id = localStorage.getItem('Userlog');
  if(!id){
    navigate('/UserLog');
  }

  const [name,setName] = useState('');
  const [age,setAge] = useState('');
  const [blood,setBlood] = useState('');
  const [gender,setGender] = useState('');


  const Addvoll = (e) => {
    e.preventDefault();
  }

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <UserNav />

        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />

      <Grid container>
        <Grid lg={8}>
          <Grid container>
            <Grid lg={4} >
              <Card>
                <CardContent>
                  <Line data={data} />
                </CardContent>
              </Card>
            </Grid>
            <Grid lg={4}>
              <Card>
                <CardContent>
                  <Bar data={data} />
                </CardContent>
              </Card>
            </Grid>
            <Grid lg={4}>
              <Card>
                <CardContent>
                  <Pie data={data} />
                </CardContent>
              </Card>
            </Grid>
            <Grid lg={4}>
              <Card>
                <CardContent>
                  <Radar data={data} />
                </CardContent>
              </Card>
            </Grid>
            <Grid lg={4}>
              <Card>
                <CardContent>
                  <PolarArea data={data} />
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          </Grid>
          <Grid lg={4}>
            <CardContent>
              <Card>
                <CardContent>
                  Volunteer For Blood Band
                  <form onSubmit={Addvoll}>
                    <CardContent>
                      <TextField label='Name' fullWidth size='small' variant='outlined' onChange={(e) => setName(e.target.value)} />
                    </CardContent>
                    <CardContent>
                      <TextField label='Age' fullWidth size='small' variant='outlined' onChange={(e) => setAge(e.target.value)} />
                    </CardContent>
                    <CardContent>
                      <Select label='Blood Group' fullWidth size='small' variant='outlined' onChange={(e) => setBlood(e.target.value)}>
                        <MenuItem value='A+'>A+</MenuItem>
                        <MenuItem value='A-'>A-</MenuItem>
                        <MenuItem value='B+'>B+</MenuItem>
                        <MenuItem value='B-'>B-</MenuItem>
                        <MenuItem value='O+'>O+</MenuItem>
                        <MenuItem value='O-'>O-</MenuItem>
                        <MenuItem value='AB+'>AB+</MenuItem>
                        <MenuItem value='AB-'>AB-</MenuItem>
                      </Select>
                    </CardContent>
                    <CardContent>
                      <Select label='Gender' fullWidth size='small' variant='outlined' onChange={(e) => setGender(e.target.value)}>
                      <MenuItem value='Male'>Male</MenuItem>
                      <MenuItem value='Female'>Female</MenuItem>
                      </Select>
                    </CardContent>
                    <CardContent>
                      <Button type='submit' variant='outlined'>Submit</Button>
                    </CardContent>
                  </form>
                </CardContent>
              </Card>
            </CardContent>
          </Grid>
        </Grid>
        </Box>
      </Box>

      {/* <Footer /> */}
    </>
  );
}
export default UserDash;
