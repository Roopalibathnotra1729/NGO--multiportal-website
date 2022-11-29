import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import firebase from "firebase";
import { db } from '../Firebase';

import {
  Button, Radio, Box,
  //ButtonGroup,  Card, Paper,  Checkbox, FormControlLabel,
  CardContent, Grid, TextField, Typography,

} from "@mui/material";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import MailIcon from '@mui/icons-material/Mail';
import CallIcon from '@mui/icons-material/Call';
import AccountCircle from '@mui/icons-material/AccountCircle';

import { useTheme } from "@mui/material/styles";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Navbar from "../Navbar";
// import MuiPhoneNumber from "material-ui-phone-number";
// import ReactPhoneInput from "react-phone-input-mui";

function UserReg() {

  const c5 = "#0f4c5c"; // blue

  const [title, setTitle] = useState();
  const [uname, setUname] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState();

  const [addr, setAddr] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  // const [pincode, setPincode] = useState(); 
  const [id_proof, setIdproof] = useState("");
  const [profile_pic, setProfilepic] = useState("");
  const [password, setPassword] = useState("");

  // Password visibility
  const [show, setShow] = useState(false);
  const visibility = () => {
    setShow(show ? false : true);
  };
  //
  const navigate = useNavigate();

  const theme = useTheme();

  const submit = (e) => {
    e.preventDefault();
    db.collection('User').where('Email', '==', email).get().then(function (suc) {
      if (suc.size == 0) {
        db.collection("User").add({
          //Title: title,
          Name: uname.toLowerCase(),
          Contact: contact,
          Email: email.toLowerCase(),
          Password: password,
          status: 0,
          Date: firebase.firestore.FieldValue.serverTimestamp()
          //Address: addr,
          //State:state,
          //City:city,
          //Pin:pin,
        })
          .then(function (succ) {
            localStorage.setItem("Userlog", succ.id);
            navigate("/UserProfile");
          }).catch(function (err) {
            alert('Something went wrong, please try again later.');
          })
      }
      else {
        alert('Sorry, this user already exists.');
      }
    })
  }


  return (
    <>
      <Grid container className="rect" style={{background:'url("https://www.azdo.ly/wp-content/uploads/2020/03/ngos-hero-background.jpg")', backgroundSize:'auto 100%', backgroundPosition:'center', backgroundAttachment:'fixed' , minHeight:'100vh'}}>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style={{position:'absolute', zIndex:0, opacity:.9}}>
  <path fill="#ff5500" fill-opacity="1" d="M0,224L60,229.3C120,235,240,245,360,208C480,171,600,85,720,80C840,75,960,149,1080,170.7C1200,192,1320,160,1380,144L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
</svg>
        <Navbar/>
        <Grid
          style={{ margin: "auto", marginTop: '10vh' }}
          className="Glass"
        >
          <Typography variant="h2" className="" style={{ color: c5 }}>
            Ｊｏｉｎ Ｕｓ
          </Typography>

          {/*  */}
          <form
            onSubmit={submit}
            encType="multipart/form-data">
            {/* radio-btns */}
            {/* <CardContent>
            <FormControl component="fieldset" >
              <Typography  >JOIN AS</Typography>
              <RadioGroup row aria-label="user" name="row-radio-buttons-group">
                <FormControlLabel value="individual" control={<Radio />} label="Individual" />
                <FormControlLabel value="organization" control={<Radio />} label="Organization" />
              </RadioGroup>
            </FormControl>
          </CardContent> */}
            <br />

            {/* uname */}
            <Box sx={{ display: 'flex', alignItems: 'flex-end', ml: 1 }}>
              <AccountCircle sx={{ color: c5, mr: 2, my: 0.5 }} />
              <TextField
                id="standard-basic"
                variant="standard"
                onChange={(e) => setUname(e.target.value)}
                required
                inputProps={{
                  pattern: "{3,25}",
                  title: "Must contain 3 - 25 alphabets.",
                }}
                style={{ width: '30em' }}
                type="text"
                size="small"
                placeholder="ＵＳＥＲＮＡＭＥ"
              />
            </Box>
            <br />

            {/* email */}
            <Box sx={{ display: 'flex', alignItems: 'flex-end', ml: 1 }}>
              <MailIcon sx={{ color: c5, mr: 2, my: 0.5 }} />

              <TextField
                id="standard-basic"
                required
                variant="standard"
                style={{ color: c5, width: '30em' }}
                onChange={(e) => setEmail(e.target.value)}
                className="txtf"
                fullWidth
                type="email"
                size="small"
                placeholder="ＥＭＡＩＬ"
              />
            </Box>
            <br />
            {/* contact */}
            <Box sx={{ display: 'flex', alignItems: 'flex-end', ml: 1 }}>
              <CallIcon sx={{ color: c5, mr: 2, my: 0.5 }} />
              <TextField
                id="standard-basic"
                variant="standard"
                style={{ color: c5, width: '30em' }}
                required
                onChange={(e) => setContact(e.target.value)}
                inputProps={{
                  pattern: '[0-9]{10}',
                }}
                fullWidth
                size="small"
                placeholder="ＣＯＮＴＡＣＴ"
              />
            </Box>
           

            {/* password */}

            <CardContent>

              <Box sx={{ display: 'flex', alignItems: 'flex-end', ml: 1 }}>
                <InputAdornment position="start" >
                  <IconButton
                    style={{ color: c5, marginBottom: 20, marginLeft: -20, }}
                    aria-label="toggle password visibility"
                    onClick={visibility}
                    edge="start"
                  >
                    {show ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
                <TextField
                  id="standard-basic"
                  variant="standard"
                  style={{ color: "#f79d65", width: '30em' }}
                  required min='8'
                  // inputProps={{
                  //   pattern: "[A-Z]*[a-b]{8,20}[#]*[@]*[$]*[%]*[&]*[*]*",
                  // }}
                  onChange={(e) => setPassword(e.target.value)}
                  fullWidth
                  type={show ? "text" : "password"}
                  size="small"
                  placeholder="ＰＡＳＳＷＯＲＤ"
                />
              </Box>

              {/* //cnfrm Pswrd
            <FormControl sx={{ m: 1, width: "46%" }} variant="outlined">
              <InputLabel htmlFor="standard-adornment-password">
                ＰＡＳＳＷＯＲＤ
              </InputLabel>
              <Input
                id="standard-adornment-password"
                fullWidth
                required
                size="small"
                type={show ? "text" : "password"}
                label="Confirm Password"
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      style={{ marginRight: 5 }}
                      aria-label="toggle password visibility"
                      onClick={visibility}
                      edge="end"
                    >
                      {show ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              // variant="standard"
              />
            </FormControl> */}
            </CardContent>

            <CardContent>
              {/* <Button variant='contained' style={{background:theme.palette.primary.light}} >Register</Button> */}
              <Button
                variant="contained"
                type='submit'
                size="large"
                style={{ background: c5, color: '#a3d6d1', fontSize: 14 }}
              >
                <b>  ＲＥＧＩＳＴＥＲ</b>
              </Button>
            </CardContent>
          </form>

          <CardContent>
            <Button
              variant="contained" size="large"
              style={{ background: "#a3d6d1", color: c5 }}
            >
              <Link
                to="/UserLog"
                className="lnk"
                style={{ textDecoration: "none", color: c5 }}
              >
                <b>Ａｌｒｅａｄｙ ｈａｖｅ ａｎ ａｃｃｏｕｎｔ？ Ｌｏｇｉｎ</b>

              </Link>
            </Button>
          </CardContent>
        </Grid>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"style={{position:"fixed", bottom:0, zIndex:-1, opacity:.8}}>
  <path fill="#ff5500" fill-opacity="1" d="M0,192L60,160C120,128,240,64,360,64C480,64,600,128,720,149.3C840,171,960,149,1080,154.7C1200,160,1320,192,1380,208L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
</svg>
      </Grid>



    </>
  );
}
export default UserReg;
