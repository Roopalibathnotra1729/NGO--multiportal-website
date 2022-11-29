import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from '../Firebase';
import { Link } from 'react-router-dom';

import {
  Button, ButtonGroup, Card,
  CardContent, Grid, TextField,
  Typography, Paper, Divider,
} from "@mui/material";

import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import PersonIcon from "@mui/icons-material/Person";
import GoogleIcon from '@mui/icons-material/Google';
import Navbar from "../Navbar";

function UserLog() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Password visibility
  const [show, setShow] = useState(false);
  const visibility = () => {
    setShow(show ? false : true);
  };
  //

  // const ulog = (e) => {
  //   e.preventDefault();
  //   db.collection('User').where('Email', '==', email).where('Password', '==', password).get().then(function (suc) {
  //     // alert(suc.size)
  //     suc.forEach(function (succ) {
  //       if(succ.data().status == 3){
  //         alert('Sry, your account has been blocked by admin');
  //       }else{
  //         localStorage.setItem('User', succ.id);
  //         navigate('/UserProfile');  
  //       }
  //     })
  //   }).catch(function (err) {
  //     alert('Something went wrong, please try again later.');
  //   })
  // }

  const ulog = (e) => {
    e.preventDefault();
    db.collection('User').where('Email','==',email).where('Password','==',password).get().then(function(succ){
      if(succ.size == 0){
        alert('Wrong Id or Password');
      }
      succ.forEach(function(succc){
        if(succc.data().status === 3){
          alert('Sry Your account has been blocked');
        }else{
          // console.log(succc.id);
          localStorage.setItem('Userlog', succc.id);
          navigate('/UserDash');
        }
      })
    })
  }


  return (
    <>
      <Grid container className="user_log"  style={{background:'url("https://www.azdo.ly/wp-content/uploads/2020/03/ngos-hero-background.jpg")', backgroundSize:'auto 100%', backgroundPosition:'center', backgroundAttachment:'fixed' , minHeight:'100vh'}}>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style={{position:'absolute',zIndex:0}}>
  <path fill="#ff5500" fill-opacity="1" d="M0,64L40,58.7C80,53,160,43,240,48C320,53,400,75,480,90.7C560,107,640,117,720,106.7C800,96,880,64,960,64C1040,64,1120,96,1200,106.7C1280,117,1360,107,1400,101.3L1440,96L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path>
</svg>
        <Navbar/>

        <Grid
          style={{ padding: 50, margin: "auto", }}
          className="admin_g"
        >
          <Typography variant="h4" className="Head"
            style={{ color: "#9a031fe0", margin: "auto", textAlign: "center" }}
          >
            ＬＯＧＩＮ
          </Typography>

          <CardContent
            sx={{ m: 1, width: "400px" }}
            size="small"
            variant="outlined"
            style={{ textAlign: "center", margin: "auto" }}
          >
            <form onSubmit={ulog} encType="multipart/form-data">

              {/* email */}
              <CardContent>
                <TextField
                  fullWidth
                  className="textf"
                  label="ＥＭＡＩＬ"
                  style={{ color: "#9a031fe0" }}
                  onChange={(e) => setEmail(e.target.value)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment
                        position="start"
                        style={{ color: "#9a031fe0", marginRight: 5 }}
                      >
                        <PersonIcon />
                      </InputAdornment>
                    ),
                  }}
                  variant="outlined"
                />
              </CardContent>

              {/* password */}
              <CardContent>
                <TextField
                 fullWidth
                  className="textf"
                  type={show ? "text" : "password"}
                  label="ＰＡＳＳＷＯＲＤ"
                  style={{ color: "#9a031fe0" }}
                  onChange={(e) => setPassword(e.target.value)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          style={{ color: "#9a031fe0", marginRight: 5 }}
                          aria-label="toggle password visibility"
                          onClick={visibility}
                          edge="start"
                        >
                          {show ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  variant="outlined"
                />
              </CardContent>
              {/* btn */}
              <CardContent>
                <Button
                  variant="contained" size="large" type='submit'
                  style={{ backgroundColor: "#9a031fe0", color: "#FFF" }}
                >
                  ＬＯＧＩＮ
                </Button>
              </CardContent>
            </form>

            <Divider />
            <Grid >
              <CardContent margin='auto'>
                <br />
                <Typography
                  variant="subtitle2"
                  style={{ color: '#9a031fe0', fontWeight: 'bold', }}
                >ＤＯＮ'Ｔ ＨＡＶＥ ＡＮ ＡＣＣＯＵＮＴ
                </Typography>


                <Link to='/UserReg' style={{ textDecoration: 'none' }}>
                  <Button variant="contained" size="large"
                    style={{ backgroundColor: "#9a031fe0", color: "#FFF", textDecoration: 'none' }}
                  >
                    <Typography  variant='button'>
                      ＲＥＧＩＳＴＥＲ</Typography>
                  </Button>
                </Link>
              </CardContent>
            </Grid>

          </CardContent>
        </Grid>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style={{position:'fixed', bottom:0}}>
  <path fill="#ff5500" fill-opacity="1" d="M0,256L30,261.3C60,267,120,277,180,240C240,203,300,117,360,74.7C420,32,480,32,540,69.3C600,107,660,181,720,186.7C780,192,840,128,900,122.7C960,117,1020,171,1080,176C1140,181,1200,139,1260,112C1320,85,1380,75,1410,69.3L1440,64L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path>
</svg>
      </Grid>

    </>
  );
}
export default UserLog;
