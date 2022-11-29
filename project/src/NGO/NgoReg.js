import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { db } from '../Firebase';
import firebase from "firebase";
import {
  Button,Radio, Box,
  //ButtonGroup,  Card,
  CardContent,Grid,TextField,Typography,
  //Paper, Checkbox, FormControlLabel,
} from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import CallIcon from '@mui/icons-material/Call';
// import MuiPhoneNumber from "material-ui-phone-number";
//import ReactPhoneInput from "react-phone-input-mui";
import ngo from './../images/ngo.png';
import { useTheme } from "@mui/material/styles";
import Navbar from "../Navbar";

function NgoReg() {

  //#f79d65
  const [ngo_name, setNgoname] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState();
  const [tele, setTele] = useState();
  const [password, setPassword] = useState("");
  const [cpass, setCpass] = useState("");

  const [addr, setAddr] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState();
  const [city, setCity] = useState("");
  const [ngo_logo, setNgologo] = useState("");
  const [owner_photo, setOwnerphoto] = useState("");
  const [ngo_id_proof, setNgoidproof] = useState("");

  const navigate = useNavigate();

  // Password visibility
  const [show, setShow] = useState(false);
  const visibility = () => {
    setShow(show ? false : true);
  };

  const submit = (e) => {
    e.preventDefault();

    db.collection('Ngo').where('Email', '==', email).get().then(function (suc) {
      if (suc.size == 0) {
        db.collection('Ngo').add({
          Ngo_Name: ngo_name.toLowerCase(),
          Contact: contact,
          Email: email.toLowerCase(),
          Password: password,
          status: 0,
          date: firebase.firestore.FieldValue.serverTimestamp()
        }).then(function (succ) {
          localStorage.setItem('Ngo', succ.id);
          navigate('/NgoProfile');
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
      <Grid container className="bg1">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style={{position:'absolute',zIndex:0}}>
  <path fill="#ff5500" fill-opacity="1" d="M0,64L40,58.7C80,53,160,43,240,48C320,53,400,75,480,90.7C560,107,640,117,720,106.7C800,96,880,64,960,64C1040,64,1120,96,1200,106.7C1280,117,1360,107,1400,101.3L1440,96L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path>
</svg>
      <Navbar/>
      <Grid container  style={{background:'url("https://www.azdo.ly/wp-content/uploads/2020/03/ngos-hero-background.jpg")', backgroundSize:'auto 100%', backgroundPosition:'center', backgroundAttachment:'fixed' , minHeight:'100vh'}}>
        <Grid lg={1}>
        </Grid>
        <Grid lg={4}>
          <img src={ngo} style={{ marginTop:100 }}/>
        </Grid>
        <Grid lg={2}>
        </Grid>
        <Grid lg={4}
        style={{height:'700px', marginTop:100}}
          className="Glass rform_img" >
          <Typography variant="h2" fontWeight={'400'} className="Head" color='#cc0000'>
            Ｊｏｉｎ Ｕｓ
          </Typography>

          <form
            onSubmit={submit}
            encType="multipart/form-data">


            <Box sx={{ display: 'flex', alignItems: 'flex-end', ml: 1, p:1 }}>
              <AccountCircle sx={{ color: '#cc0000', mr: 2, my: 0.5 }} />
              <TextField
                variant="standard"
                onChange={(e) => setNgoname(e.target.value)}              
                required
                style={{ color: "#f79d65", width: '30em' }}
                type="text"
                size="small"
                label="ＮＡＭＥ ＯＦ ＮＧＯ"
              />
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'flex-end', ml: 1, p:1 }}>
              <MailIcon sx={{ color: '#cc0000', mr: 2, my: 0.5 }} />
              <TextField
                id="standard-basic"
                required
                inputProps={{
                  // pattern: '[a-z]+ [0-9]* [_]* [a-z]+ [0-9]* [@][a-z]+ [.] [a-z]+ [.a-z]* '
                }}
                variant="standard"
                style={{ color: "#f79d65", width: '30em' }}
                onChange={(e) => setEmail(e.target.value)}
                className="txtf"
                fullWidth
                type="email"
                size="small"
                label="ＥＭＡＩＬ"
              />
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'flex-end', ml: 1, p:1 }}>
              <CallIcon sx={{ color: '#cc0000', mr: 2, my: 0.5 }} />
              <TextField
                id="standard-basic"
                variant="standard"
                style={{ color: "#f79d65", width: '30em' }}
                required
                inputProps={{
                  pattern: "[0-9]{10}",
                  // title: "Please Fill Numbers Only",
                }}
                onChange={(e) => setContact(e.target.value)}
                fullWidth
                size="small"
                label="ＣＯＮＴＡＣＴ"
              />
            </Box>

            <CardContent>

              <Box sx={{ display: 'flex', alignItems: 'flex-end', ml: 1,p:1 }}>
                <InputAdornment position="start" >
                  <IconButton
                    style={{ color: '#cc0000', marginBottom:20,marginLeft:-20 , }}
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
                  onChange={(e) => setPassword(e.target.value)}
                  fullWidth
                  type={show ? "text" : "password"}
                  size="small"
                  label="ＰＡＳＳＷＯＲＤ"
                />
              </Box>

              {/* <FormControl sx={{ m: 1,width: '15em'  }}  variant="outlined"> 
                <InputLabel htmlFor="standard-adornment-password">
                  Password
                </InputLabel>
                <Input
                 id="input-with-sx"
                  fullWidth required
                  inputProps={{
                    pattern: "{8}",
                    title: "Password must have atleast 8 characters.",
                  }}
                  size="small"
                  type={show ? "text" : "password"}
                  onChange={(e) => setPassword(e.target.value)}
                  startAdornment={
                    <InputAdornment position="start" >
                      <IconButton
                        style={{ marginRight: 5, color: '#cc0000' }}
                        aria-label="toggle password visibility"
                        onClick={visibility}
                        edge="start"
                      >
                        {show ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl> */}

            </CardContent>

            <CardContent>
              <Button
                type='submit'
                variant="contained"
                // fullWidth
                size="large"
                style={{ background: '#cc0000', fontWeight: 'bold' }}
              >
                <b>ＲＥＧＩＳＴＥＲ</b>
              </Button>
            </CardContent>


            <CardContent>
              <Link
                to="/NgoLog"
                style={{ textDecoration: "none" }}
              >
                <Button
                  variant="contained"
                  // fullWidth
                  size="large"
                  style={{ background: "radial-gradient(#f8c9b2 10%,#db865b)", color: '#9c4332', fontWeight: 'bold' }}
                >
                  <b>Ａｌｒｅａｄｙ ｈａｖｅ ａｎ ａｃｃｏｕｎｔ？ Ｌｏｇｉｎ</b>
                </Button>
              </Link>

            </CardContent>
          </form>
          <CardContent >

          </CardContent>
        </Grid>
        </Grid>
        </Grid>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style={{position:'fixed',bottom:0,zIndex:0}}>
  <path fill="#ff5500" fill-opacity="1" d="M0,256L40,245.3C80,235,160,213,240,202.7C320,192,400,192,480,181.3C560,171,640,149,720,144C800,139,880,149,960,176C1040,203,1120,245,1200,234.7C1280,224,1360,160,1400,128L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
</svg>
    </>
  );
}
export default NgoReg;
