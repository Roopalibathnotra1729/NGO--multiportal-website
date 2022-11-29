import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../Firebase";

import {
  Button, IconButton, Grid, TextField, Typography, Paper,
} from "@mui/material";

import AdminNav from "./AdminNav";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
// icons //
import CancelIcon from '@mui/icons-material/Cancel';
import BlockIcon from '@mui/icons-material/Block';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import InfoIcon from '@mui/icons-material/Info';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { ArrowRight } from "@mui/icons-material";
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




function ViewPost() {

  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [ngo, setngo] = useState([]);

  const uid = new URLSearchParams(window.location.search).get('id');


  function getngo() {
    db.collection('Blood').where('uid','==', uid).onSnapshot(function (succ) {
      const ar = [];
      succ.forEach(function (suc) {
        ar.push(suc);
      })
      setngo(ar);
    })
  }

  function setApprove(x) {
    db.collection('Ngo').doc(x).update({
      status: 1
    })
  }
  function setDisapprove(x) {
    db.collection('Ngo').doc(x).update({
      status: 0
    })
  }
  function setUnblock(x) {
    db.collection('Ngo').doc(x).update({
      status: 1
    })
  }
  function setblock(x) {
    db.collection('Ngo').doc(x).update({
      status: 3
    })
  }

  useEffect(() => {
    getngo();
  }, [])

  const id = localStorage.getItem('Admin_login');
  console.log(id);
  // if (!id) { navigate('/AdminLog'); }

  const viewngo = (x) => {
    var path = '/ViewNgo?id='+x;
    navigate(path);
  }


  return (
    <>
      <Box sx={{ display: "flex" }}>
        <AdminNav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          <Grid container>

            <Grid item lg={12} xs={12} md={10} >
              <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                ＮＧＯ
              </Typography>

              <TableContainer style={{ fontSize: 20 }} component={Paper}>
                <Table aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Name</TableCell>
                      <TableCell>Gender</TableCell>
                      <TableCell>City</TableCell>
                      <TableCell>Contact</TableCell>
                      <TableCell>Blood</TableCell>
                      <TableCell>Age</TableCell>
                    </TableRow>
                  </TableHead>

                  <TableBody>
                    {ngo.map((row) => (
                      <TableRow
                        key={row.id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        <TableCell>{row.data().Name}</TableCell>
                        <TableCell>{row.data().Gender}</TableCell>
                        <TableCell>{row.data().City}</TableCell>
                        <TableCell>{row.data().Contact}</TableCell>
                        <TableCell>{row.data().Blood}</TableCell>
                        <TableCell>{row.data().Age}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>

            </Grid>


          </Grid>
        </Box>
      </Box>
    </>
  );
}
export default ViewPost;
