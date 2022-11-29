import React, { useEffect, useState } from "react";
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
import { db } from "./Firebase";
import Delete from "@mui/icons-material/Delete";
import { Pattern } from "@mui/icons-material";
import Navbar from "./Navbar";

function Finddonar() {
  const navigate = useNavigate();
    const [rows, setrows] = useState([]);

    const [name,setName] = useState('');
    const [age,setAge] = useState('');
    const [blood,setselBlood] = useState('');
    const [gender,setselGender] = useState('');
    const [city,setselCity] = useState('');
    const [contact,setContact] = useState('');
  
      function setBlood(x){
          setselBlood(x);
      }
      function setGender(x){
          setselGender(x);
      }
      function setCity(x){
          setselCity(x);
      }
    
      const send = (e) => {
            e.preventDefault();
            var path = '/Finddonar?blood='+blood+'&city='+city;
            navigate(path)
      }
      var qr = new URLSearchParams(window.location.search);

    function getblood(){
        // var blood = qr.get('blood').toString();
        // var city = qr.get('city');
        var gqr = db.collection('Blood');
        // console.log(blood);
        // console.log(city);
        // if(blood){
        //     gqr = gqr.where('Blood','==',blood)
        // }
        // if(city){
        //     gqr = gqr.where('City','==',city)
        // }
        gqr.onSnapshot(function(succ){
            var arr = [];
            succ.forEach(function(suc){
                arr.push(suc);
            })
            setrows(arr);
        })
    }

  useEffect(() => {
      getblood();
  }, [])
  return (
    <>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style={{position:'absolute', zIndex:0}}>
  <path fill="#ff5500" fill-opacity="1" d="M0,256L6.2,234.7C12.3,213,25,171,37,165.3C49.2,160,62,192,74,213.3C86.2,235,98,245,111,245.3C123.1,245,135,235,148,208C160,181,172,139,185,144C196.9,149,209,203,222,208C233.8,213,246,171,258,160C270.8,149,283,171,295,170.7C307.7,171,320,149,332,117.3C344.6,85,357,43,369,37.3C381.5,32,394,64,406,101.3C418.5,139,431,181,443,181.3C455.4,181,468,139,480,133.3C492.3,128,505,160,517,176C529.2,192,542,192,554,165.3C566.2,139,578,85,591,74.7C603.1,64,615,96,628,106.7C640,117,652,107,665,106.7C676.9,107,689,117,702,149.3C713.8,181,726,235,738,218.7C750.8,203,763,117,775,90.7C787.7,64,800,96,812,101.3C824.6,107,837,85,849,74.7C861.5,64,874,64,886,85.3C898.5,107,911,149,923,192C935.4,235,948,277,960,266.7C972.3,256,985,192,997,149.3C1009.2,107,1022,85,1034,96C1046.2,107,1058,149,1071,144C1083.1,139,1095,85,1108,106.7C1120,128,1132,224,1145,218.7C1156.9,213,1169,107,1182,80C1193.8,53,1206,107,1218,160C1230.8,213,1243,267,1255,256C1267.7,245,1280,171,1292,165.3C1304.6,160,1317,224,1329,218.7C1341.5,213,1354,139,1366,138.7C1378.5,139,1391,213,1403,224C1415.4,235,1428,181,1434,154.7L1440,128L1440,0L1433.8,0C1427.7,0,1415,0,1403,0C1390.8,0,1378,0,1366,0C1353.8,0,1342,0,1329,0C1316.9,0,1305,0,1292,0C1280,0,1268,0,1255,0C1243.1,0,1231,0,1218,0C1206.2,0,1194,0,1182,0C1169.2,0,1157,0,1145,0C1132.3,0,1120,0,1108,0C1095.4,0,1083,0,1071,0C1058.5,0,1046,0,1034,0C1021.5,0,1009,0,997,0C984.6,0,972,0,960,0C947.7,0,935,0,923,0C910.8,0,898,0,886,0C873.8,0,862,0,849,0C836.9,0,825,0,812,0C800,0,788,0,775,0C763.1,0,751,0,738,0C726.2,0,714,0,702,0C689.2,0,677,0,665,0C652.3,0,640,0,628,0C615.4,0,603,0,591,0C578.5,0,566,0,554,0C541.5,0,529,0,517,0C504.6,0,492,0,480,0C467.7,0,455,0,443,0C430.8,0,418,0,406,0C393.8,0,382,0,369,0C356.9,0,345,0,332,0C320,0,308,0,295,0C283.1,0,271,0,258,0C246.2,0,234,0,222,0C209.2,0,197,0,185,0C172.3,0,160,0,148,0C135.4,0,123,0,111,0C98.5,0,86,0,74,0C61.5,0,49,0,37,0C24.6,0,12,0,6,0L0,0Z"></path>
</svg>
    <Navbar/>
      <Grid container style={{position:'relative',zIndex:1}}>
          <Grid lg={12}>
            <CardContent>
                <br/><br/>
            <Card>
                <form onSubmit={send}>
                <Grid container>
                    <Grid lg={3}>
                <CardContent>
                    <label>Blood Group</label>
                      <Select label='Blood Group' name='blood' fullWidth size='small' variant='outlined' required onChange={(e) => setBlood(e.target.value)}>
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
                    </Grid>
                    <Grid lg={3}>
                    <CardContent>
                        <label>City</label>
                      <Select label='City'
                      fullWidth size='small' name='city' variant='outlined' required onChange={(e) => setCity(e.target.value)}>
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
                    </Grid>
                    <Grid lg={1}>
                    <CardContent>
                        <br/>
                        <Button type='submit' variant='contained'>Search</Button>
                    </CardContent>
                    </Grid>
                    </Grid>
                </form>
            </Card>



<Grid container>
                            {rows.map((row) => (
                                <Grid
                                lg={3}
                                >
                                    <CardContent>
                                        <Card>
                                            <CardContent>
                                                <Typography><b>Name -</b> {row.data().Name}</Typography>
                                                <Typography><b>Age -</b> {row.data().Age}</Typography>
                                                <Typography><b>Blood Group -</b> {row.data().Blood}</Typography>
                                                <Typography><b>Gender -</b> {row.data().Gender}</Typography>
                                                <Typography><b>City -</b> {row.data().City}</Typography>
                                                <Typography><b>Contact -</b> {row.data().Contact}</Typography>
                                            </CardContent>
                                        </Card>
                                    </CardContent>
                                </Grid>
                            ))}
</Grid>
            </CardContent>
          </Grid>
        </Grid>
    </>
  );
}
export default Finddonar;
