import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,IconButton, Grid, TextField, Typography, Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, getListSubheaderUtilityClass,
} from "@mui/material";

import AdminNav from "./AdminNav";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ToggleButton from '@mui/material/ToggleButton';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import InfoIcon from '@mui/icons-material/Info';
import CancelIcon from '@mui/icons-material/Cancel';
import BlockIcon from '@mui/icons-material/Block';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { db } from "../Firebase";
import Block from "@mui/icons-material/Block";
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




function Users() {

  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };


  const [urs, seturs] = useState([]);
  function getusers() {
    db.collection('User').orderBy('Name', 'asc').onSnapshot(function (succ) {
      const ar = [];
      succ.forEach(function (suc) {
        ar.push(suc);
      })
      seturs(ar);
    })
  }

  function setApprove(x) {
    db.collection('User').doc(x).update({
      status: 1
    })
  }
  function setDisapprove(x) {
    db.collection('User').doc(x).update({
      status: 0
    })
  }
  function setUnblock(x) {
    db.collection('User').doc(x).update({
      status: 1
    })
  }
  function setblock(x) {
    db.collection('User').doc(x).update({
      status: 3
    })
  }

  useEffect(() => {
    getusers();
  }, [])

  const [selected, setSelected] = React.useState(false);

  function ViewPost(x){
    var path = '/ViewPost?id='+x;
    navigate(path)
  }

  // const id = localStorage.getItem('Admin_login');
  // if (!id) { navigate('/AdminLog'); }

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <AdminNav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          <Grid container>

            <Grid item xs={12} md={12}>
              <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                Users
              </Typography>

              <TableContainer style={{ fontSize: 20 }} component={Paper}>
                <Table aria-label="simple table">
                  <TableHead>
                    <TableRow style={{ fontWeight: 'bold' }}>
                      <TableCell>Name</TableCell>
                      <TableCell align="right">Email</TableCell>
                      <TableCell align="right">Contact</TableCell>
                      <TableCell align="right">City</TableCell>
                      <TableCell align="right">Operations</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {urs.map((row) => (
                      <TableRow
                        key={row.id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        <TableCell component="th" scope="row">
                          {row.data().Name}
                        </TableCell>
                        <TableCell align="right">{row.data().Email}</TableCell>
                        <TableCell align="right">{row.data().Contact}</TableCell>
                        <TableCell align="right">{row.data().City}</TableCell>
                        <TableCell align="right">
                          &nbsp;
                          
                          &nbsp;
                          {row.data().status === 3 ?
                            <>
                              <Button variant='outlined' onClick={() => setUnblock(row.id)} color='success'>
                                UNBLOCK</Button>
                            </>
                            :

                            <>
                              {row.data().status === 0 ? 
                               
                              <IconButton variant='contained' onClick={() => setApprove(row.id)} color='success' > 
                              {/* Approve */}<CheckCircleIcon />
                              </IconButton> 
                              : 
                              <IconButton onClick={() => setDisapprove(row.id)} variant='contained' color='error'>
                                {/* Disapprove */}<CancelIcon/>
                                
                                </IconButton>}
                              &nbsp;&nbsp;

                              <IconButton onClick={() => setblock(row.id)} variant='contained' color='warning' >
                                {/* Block */} <Block />
                              </IconButton>
                            </>
                          }
                          &nbsp;&nbsp;
                          <Button onClick={() => ViewPost(row.id)} variant='contained' color='secondary'><ArrowRight/></Button>

                        </TableCell>
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
export default Users;
