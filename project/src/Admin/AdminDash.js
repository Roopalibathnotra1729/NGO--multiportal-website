import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import AdminNav from "./AdminNav";
import {
  Button, ButtonGroup, Card, CardContent,
  Grid, TextField, Typography, Paper,
  Box, List, Toolbar, Divider,
} from "@mui/material";

import {
  Chart as ChartJS, CategoryScale, LinearScale,
  PointElement, LineElement, Title, Tooltip, Legend,
} from "chart.js";
import {
  Bar, Bubble, Line, Pie, PolarArea, Radar, Scatter,
} from "react-chartjs-2";
import { styled, useTheme } from "@mui/material/styles";
import { db } from "../Firebase";

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



function Dashboard() {
  const navigate = useNavigate();

  const id = localStorage.getItem('Admin_Login');
  console.log(id);
  if (!id) { navigate('/AdminLog'); }

  const [ngo, setngo] = useState();
  const [users, setusers] = useState();
  const [blood, setblood] = useState();
  const [events, setevents] = useState();

  function getdta(){
    db.collection('User').onSnapshot(function(succ){
      setusers(succ.size);
    })
    db.collection('Ngo').onSnapshot(function(suc){
      setngo(suc.size);
    })
    db.collection('Blood').onSnapshot(function(suc){
      setblood(suc.size);
    })
    db.collection('Events').onSnapshot(function(suc){
      setevents(suc.size);
    })
  }


  const data = {
    labels: ["Users", "Ngo", "Blood Donars", "Events"],
    datasets: [
      {
        label: "data",
        data: [users, ngo, blood, events],
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

  useEffect(() => {
    getdta();
  }, [])


  return (
    <>
      <Box sx={{ display: "flex" }}>
        <AdminNav />

        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />

          <Grid container>
          <Grid lg={3}>
              <CardContent>
                <Card>
                  <CardContent>
                  <Typography variant='h5'>
                    Total Ngo Registered <br/> {ngo}
                  </Typography>
                  </CardContent>
                </Card>
              </CardContent>
            </Grid>

            <Grid lg={3}>
              <CardContent>
                <Card>
                  <CardContent>
                  <Typography variant='h5'>
                    Total Users Registered <br/> {users}
                  </Typography>
                  </CardContent>
                </Card>
              </CardContent>
            </Grid>

            <Grid lg={3}>
              <CardContent>
                <Card>
                  <CardContent>
                  <Typography variant='h5'>
                    Total Blood Donars <br/> {blood}
                  </Typography>
                  </CardContent>
                </Card>
              </CardContent>
            </Grid>

            <Grid lg={3}>
              <CardContent>
                <Card>
                  <CardContent>
                  <Typography variant='h5'>
                    Total Events <br/> {events}
                  </Typography>
                  </CardContent>
                </Card>
              </CardContent>
            </Grid>


            </Grid>
            <Grid container>
            <Grid lg={8} style={{margin:'auto'}}>
              <Card>
                <CardContent>
                  <Bar data={data} height='80' />
                </CardContent>
              </Card>
            </Grid>


          </Grid>
        </Box>
      </Box>

      {/* <Footer /> */}
    </>
  );
}
export default Dashboard;
