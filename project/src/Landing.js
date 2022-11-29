import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';
import { db } from "./Firebase";
import firebase from "firebase";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { useNavigate, Link } from "react-router-dom";
import Navbar from "./Navbar";
import {
    Button, CardActionArea, CardMedia, Card, CardContent, Box,
    Grid, Select, MenuItem, TextField, Typography, Paper, Stack,
} from "@mui/material";
import img1 from './images/kids1.jpg';
import event from './images/event.jpg';
import img3 from './images/img4.jpg';
import heart from './images/heart.png'
import hndshk from './images/handshake.png';
import blood from './images/blood.svg';
import forever from './images/free.svg';
import location from './images/localisation.svg';
import sharehrt from './images/savelife.svg';
import contact from './images/contact.svg';

function Landing() {




    return (
        <>
            <Navbar />
            <Grid container>
                <Grid container>
                    <Carousel style={{ height: '90vh' }} infiniteLoop={true} showThumbs={false} showStatus={false}>
                        <Carousel style={{ height: '90vh' }} showThumbs={false} showStatus={false} infiniteLoop={true} >
                            <div>
                                <img src={img3} style={{width:'100%',height:'90vh'}} />
                            </div>
                            <div>
                                <img src={event} style={{width:'100%',height:'90vh'}} />
                            </div>
                            <div>
                                <img src={img1} style={{width:'100%',height:'90vh'}} />
                            </div>
                        </Carousel>
                    </Carousel>
                </Grid>

                <Grid lg={12} className="container1">
                    <br/>
                <Typography variant="h6">
                        <Typography variant='h4'>We Save Lives</Typography>
                        Find blood donors near your location and make a blood request in less than 5 minutes.
                    </Typography>
                    <br/>
                    <Grid container>
                    <Grid lg={4}>
                    </Grid>
                    <Grid lg={2}>
                        <CardContent>
                            <img src={blood} style={{width:'30%'}} />
                            <Typography variant='h5'>
                                Find Blood
                            </Typography>
                            <Typography variant='p'>
                                Find blood donors near your location and request the needed blood type
                            </Typography>
                        </CardContent>
                        </Grid>
                        <Grid lg={2}>
                            <CardContent>
                            <img src={forever} style={{width:'30%'}} />
                            <Typography variant='h5'>
                                Forever Free
                            </Typography>
                            <Typography variant='p'>
                               You don't have to pay anything, Save Life Connect is forever Free !
                            </Typography>
                            </CardContent>
                        </Grid>
                    </Grid>
                    <br/>
                </Grid>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="rgb(163, 17, 6)" fill-opacity="1" d="M0,64L21.8,53.3C43.6,43,87,21,131,32C174.5,43,218,85,262,85.3C305.5,85,349,43,393,37.3C436.4,32,480,64,524,101.3C567.3,139,611,181,655,165.3C698.2,149,742,75,785,90.7C829.1,107,873,213,916,213.3C960,213,1004,107,1047,64C1090.9,21,1135,43,1178,80C1221.8,117,1265,171,1309,176C1352.7,181,1396,139,1418,117.3L1440,96L1440,0L1418.2,0C1396.4,0,1353,0,1309,0C1265.5,0,1222,0,1178,0C1134.5,0,1091,0,1047,0C1003.6,0,960,0,916,0C872.7,0,829,0,785,0C741.8,0,698,0,655,0C610.9,0,567,0,524,0C480,0,436,0,393,0C349.1,0,305,0,262,0C218.2,0,175,0,131,0C87.3,0,44,0,22,0L0,0Z"></path>
</svg>
                <Grid container style={{marginTop:-150}}>
                    <Grid lg={12}>
                        <CardContent style={{textAlign:'center'}}>
                        <Typography style={{fontSize:35}} vairant="h4">Join the Cause</Typography>
                        <Typography variant='p'>Join our cause and help us save more lives. Everyone should have the right to get a better life.</Typography>
                        </CardContent>
                    </Grid>

                    <Grid lg={3}></Grid>
                    <Grid lg={3} style={{textAlign:'center'}}>
                        <br/><br/><br/><br/><br/>
                        <Typography variant='h4'>Find Helper in your Area</Typography>
                        <Typography variant='p'>Get connected in a matter of minutes at zero cost. Our App ships with a smart system that finds the closest blood donors. Our automated blood donation system works efficiently whenever someone needs a blood transfusion.</Typography>
                    </Grid>
                    <Grid lg={3}>
                        <img src={location} style={{width:'100%'}} />
                    </Grid>


                    <Grid lg={3}></Grid>
                    <Grid lg={3}></Grid>
                    <Grid lg={3}>
                        <img src={sharehrt} style={{width:'100%'}} />
                    </Grid>
                    <Grid lg={3} style={{textAlign:'center'}}>
                        <br/><br/><br/><br/><br/>
                        <Typography variant='h4'>You are someone's Hero</Typography>
                        <Typography variant='p'>In as little as few minutes, you can become someone's unnamed, unknown, but all-important Hero. Saving a life is a noble work that starts very simply and easily. Donate Blood or donate Money, every form of contribution you make is important, valued and essential in our shared mission to save lives.</Typography>
                    </Grid>


                </Grid>
            </Grid>
            <Grid container>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#ff5500" fill-opacity="1" d="M0,256L6.2,234.7C12.3,213,25,171,37,165.3C49.2,160,62,192,74,213.3C86.2,235,98,245,111,245.3C123.1,245,135,235,148,208C160,181,172,139,185,144C196.9,149,209,203,222,208C233.8,213,246,171,258,160C270.8,149,283,171,295,170.7C307.7,171,320,149,332,117.3C344.6,85,357,43,369,37.3C381.5,32,394,64,406,101.3C418.5,139,431,181,443,181.3C455.4,181,468,139,480,133.3C492.3,128,505,160,517,176C529.2,192,542,192,554,165.3C566.2,139,578,85,591,74.7C603.1,64,615,96,628,106.7C640,117,652,107,665,106.7C676.9,107,689,117,702,149.3C713.8,181,726,235,738,218.7C750.8,203,763,117,775,90.7C787.7,64,800,96,812,101.3C824.6,107,837,85,849,74.7C861.5,64,874,64,886,85.3C898.5,107,911,149,923,192C935.4,235,948,277,960,266.7C972.3,256,985,192,997,149.3C1009.2,107,1022,85,1034,96C1046.2,107,1058,149,1071,144C1083.1,139,1095,85,1108,106.7C1120,128,1132,224,1145,218.7C1156.9,213,1169,107,1182,80C1193.8,53,1206,107,1218,160C1230.8,213,1243,267,1255,256C1267.7,245,1280,171,1292,165.3C1304.6,160,1317,224,1329,218.7C1341.5,213,1354,139,1366,138.7C1378.5,139,1391,213,1403,224C1415.4,235,1428,181,1434,154.7L1440,128L1440,320L1433.8,320C1427.7,320,1415,320,1403,320C1390.8,320,1378,320,1366,320C1353.8,320,1342,320,1329,320C1316.9,320,1305,320,1292,320C1280,320,1268,320,1255,320C1243.1,320,1231,320,1218,320C1206.2,320,1194,320,1182,320C1169.2,320,1157,320,1145,320C1132.3,320,1120,320,1108,320C1095.4,320,1083,320,1071,320C1058.5,320,1046,320,1034,320C1021.5,320,1009,320,997,320C984.6,320,972,320,960,320C947.7,320,935,320,923,320C910.8,320,898,320,886,320C873.8,320,862,320,849,320C836.9,320,825,320,812,320C800,320,788,320,775,320C763.1,320,751,320,738,320C726.2,320,714,320,702,320C689.2,320,677,320,665,320C652.3,320,640,320,628,320C615.4,320,603,320,591,320C578.5,320,566,320,554,320C541.5,320,529,320,517,320C504.6,320,492,320,480,320C467.7,320,455,320,443,320C430.8,320,418,320,406,320C393.8,320,382,320,369,320C356.9,320,345,320,332,320C320,320,308,320,295,320C283.1,320,271,320,258,320C246.2,320,234,320,222,320C209.2,320,197,320,185,320C172.3,320,160,320,148,320C135.4,320,123,320,111,320C98.5,320,86,320,74,320C61.5,320,49,320,37,320C24.6,320,12,320,6,320L0,320Z"></path>
</svg>
                    <Grid className='Contact' lg={12} style={{background:'#ff5500', color:'white', textAlign:'center'}}>
                        <Typography style={{fontSize:35}} vairant="h4">Contact Us</Typography>
                <Grid container>
                    <Grid lg={1}></Grid>
                    <Grid lg={4}>
                        <form>
                            <Card style={{background:'rgb(255,255,255,.8)'}}>
                                <CardContent>
                            <Grid container>
                            <Grid lg={12}>
                                    <CardContent>
                                        <TextField label='Name' variant='standard' fullWidth required />
                                    </CardContent>
                                </Grid>
                                <Grid lg={12}>
                                    <CardContent>
                                        <TextField label='Mobile' variant='standard' fullWidth required />
                                    </CardContent>
                                </Grid>
                                <Grid lg={12}>
                                    <CardContent>
                                        <TextField label='Email' variant='standard' fullWidth required />
                                    </CardContent>
                                </Grid>
                                <Grid lg={12}>
                                    <CardContent>
                                        <TextField label='Message' multiline variant='standard' fullWidth required />
                                    </CardContent>
                                </Grid>
                                <Grid lg={12}>
                                    <CardContent>
                                        <Button color='inherit' type='submit' label='Mobile' variant='outlined' fullWidth >Send Message</Button>
                                    </CardContent>
                                </Grid>
                            </Grid>
                            </CardContent>
                            </Card>
                        </form>
                    </Grid>
                    <Grid lg={2}></Grid>
                    <Grid lg={4}>
                        <img src={contact} style={{width:'100%'}} />
                    </Grid>
                </Grid>



                    </Grid>
                </Grid>


<Grid lg={12} style={{background:'black', color:'white'}}>
        <Grid container>
            <Grid lg={10} style={{margin:'auto', padding:10, textAlign:'center'}}>
                © All Rights Reserved
            </Grid>
        </Grid>
</Grid>

        </>
    )
}

export default Landing;