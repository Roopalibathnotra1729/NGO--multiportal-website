import React, { useEffect, useState } from "react";
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
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import city from "../city";
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
import { db } from "../Firebase";
import Delete from "@mui/icons-material/Delete";
import { Pattern } from "@mui/icons-material";
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



function UserPost() {
  const navigate = useNavigate();

  var id = localStorage.getItem('Userlog');
  if(!id){
    navigate('/UserLog');
  }

  const [name,setName] = useState('');
  const [desc,setDesc] = useState('');
  const [gender,setselGender] = useState('');
  const [city,setselCity] = useState('');
  const [contact,setContact] = useState('');

    function setGender(x){
        setselGender(x);
    }
    function setCity(x){
        setselCity(x);
    }

    const Addvoll = (e) => {
        e.preventDefault();
            db.collection('Donation').add({
                uid:id,
                Name:name,
                Desc:desc,
                City:city,
                Contact:contact
            }).then(function(succ){
                alert('Product Added');
                e.target.reset();
            })
    }

    console.log(city);
    const [rows, setrows] = useState([]);

    function getblood(){
        db.collection('Donation').where('uid','==',id).onSnapshot(function(succ){
            var ar = [];
            succ.forEach(function(suc){
                ar.push(suc);
            })
            setrows(ar);
        })
    }

    function del(x){
        db.collection('Donation').doc(x).delete();
    }

  useEffect(() => {
      getblood();
    //   findcity();
  }, [])
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <UserNav />

        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />

      <Grid container>
          <Grid lg={4}>
            <CardContent>
              <Card>
                <CardContent>
                  Shareable Content
                  <form onSubmit={Addvoll}>
                    <CardContent>
                      <TextField label='Product Name' fullWidth size='small' variant='outlined' required onChange={(e) => setName(e.target.value)} />
                    </CardContent>
                    <CardContent>
                        <label>City</label>
                      <Select label='City'
                      fullWidth size='small' variant='outlined' required onChange={(e) => setCity(e.target.value)}>
                            <MenuItem value='Ludhiana'>Ludhiana</MenuItem>
                            <MenuItem value='Amritsar'>Amritsar</MenuItem>
                            <MenuItem value='Jalandhar'>Jalandhar</MenuItem>
                            <MenuItem value='Patiala'>Patiala</MenuItem>
                            <MenuItem value='Bathinda'>Bathinda</MenuItem>
                            <MenuItem value='Mohali'>Mohali</MenuItem>
                            <MenuItem value='Hoshiarpur'>Hoshiarpur</MenuItem>
                            <MenuItem value='Batala'>Batala</MenuItem>
                            <MenuItem value='Pathankot'>Pathankot</MenuItem>
                            <MenuItem value='Moga'>Moga</MenuItem>
                            <MenuItem value='Abohar'>Abohar</MenuItem>
                            <MenuItem value='Malerkotla'>Malerkotla</MenuItem>
                            <MenuItem value='Khanna'>Khanna</MenuItem>
                            <MenuItem value='Phagwara'>Phagwara</MenuItem>
                            <MenuItem value='Muktsar'>Muktsar</MenuItem>
                            <MenuItem value='Barnala'>Barnala</MenuItem>
                            <MenuItem value='Rajpura'>Rajpura</MenuItem>
                            <MenuItem value='Firozpur'>Firozpur</MenuItem>
                            <MenuItem value='Kapurthala'>Kapurthala</MenuItem>
                            <MenuItem value='Faridkot'>Faridkot</MenuItem>
                            <MenuItem value='Sunam'>Sunam</MenuItem>
                        </Select>
                    </CardContent>
                    <CardContent>
                      <TextField label='Contact'
                      fullWidth size='small' variant='outlined' inputProps={{
                          Pattern:'^[0-9]{10}',
                          Title:'Please Fill Corrent Number'
                      }} required onChange={(e) => setContact(e.target.value)} />
                    </CardContent>
                    <CardContent>
                      <TextField label='Description' multiline fullWidth size='small' variant='outlined' required onChange={(e) => setDesc(e.target.value)} />
                    </CardContent>
                    <CardContent>
                      <Button type='submit' variant='outlined'>Submit</Button>
                    </CardContent>
                  </form>
                </CardContent>
              </Card>
            </CardContent>
          </Grid>
          <Grid lg={8}>
            <CardContent>
                    <TableContainer>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                            <TableRow>
                                <TableCell>Product Name</TableCell>
                                <TableCell align="right">Desc</TableCell>
                                <TableCell align="right">Contact</TableCell>
                                <TableCell align="right">City</TableCell>
                                <TableCell align="right">Action</TableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                <TableCell component="th" scope="row">
                                    {row.data().Name}
                                </TableCell>
                                <TableCell align="right">{row.data().Desc}</TableCell>
                                <TableCell align="right">{row.data().Contact}</TableCell>
                                <TableCell align="right">{row.data().City}</TableCell>
                                <TableCell align="right"><Button onClick={() => del(row.id)} variant='contained'><Delete/></Button></TableCell>
                                </TableRow>
                            ))}
                            </TableBody>
                        </Table>
                        </TableContainer>
            </CardContent>
          </Grid>
        </Grid>
        </Box>
      </Box>

      {/* <Footer /> */}
    </>
  );
}
export default UserPost;
