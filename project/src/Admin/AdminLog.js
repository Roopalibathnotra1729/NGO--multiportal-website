import { db } from '../Firebase';
import {
  Button,
  ButtonGroup,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
  Paper,
} from "@mui/material";

import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import PersonIcon from "@mui/icons-material/Person";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function ALogin() {


  const [uid, setUid] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Password visibility
  const [show, setShow] = useState(false);
  const visibility = () => {
    setShow(show ? false : true);
  };  //

  const submit = (e) => {
    e.preventDefault();
    db.collection('Admin_login').where('Uid', '==', uid).where('Password', '==', password).get().then(function (suc) {
      suc.forEach(function (succ) {
        localStorage.setItem('Admin_Login', succ.id);
        navigate('/AdminDash');
      })
    }).catch(function (err) {
      alert('Something went wrong, please try again later.');
    })
  }

  return (
    <>
      <Grid container className="admin_log">
        <Grid
          style={{
            padding: 20,
            margin: "auto",
            borderRadius:5
            // marginRight: 0,
            // backgroundColor:"#c50125a4"
          }}
          className="admin_g"
        >
          <Typography
            variant="h4"
            style={{ color: "white", margin: "auto", textAlign: "center", fontWeight: 'bold' }}
          >
          Welcome Admin
          </Typography>

          <CardContent
            sx={{ m: 1, width: "350px" }}
            size="small"
            variant="outlined"
            style={{ textAlign: "center", margin: "auto" }}
          >
            <form onSubmit={submit} encType="multipart/form-data">
              <CardContent>
                <TextField
                  required
                  fullWidth
                  placeholder="ＵＳＥＲ ＩＤ"
                  style={{ color: "#00c5ae" }}
                  onChange={(e) => setUid(e.target.value)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment
                        position="start"
                        style={{ color: "white", marginRight: 5 }}
                      >
                        <PersonIcon />
                      </InputAdornment>
                    ),
                  }}
                  variant="outlined"
                />
              </CardContent>

              <CardContent>
                <TextField
                  fullWidth
                  type={show ? "text" : "password"}
                  placeholder="ＰＡＳＳＷＯＲＤ"
                  required 
                  onChange={(e) => setPassword(e.target.value)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          style={{ color: "white", marginRight: 5 }}
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

              <CardContent>
                <Button
                  variant="contained"
                  size="large"
                  style={{ backgroundColor: "white", color: "#000" }}
                  type='submit' 
                >
                  <b>ＬＯＧＩＮ</b>
                </Button>
              </CardContent>
            </form>
          </CardContent>
        </Grid>
      </Grid>
    </>
  );
}
export default ALogin;
