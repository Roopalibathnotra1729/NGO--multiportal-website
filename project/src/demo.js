import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Grid, Card, CardContent, TextField } from "@mui/material";
import Nav from "./Nav";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import AccountCircle from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";

import PhoneIcon from "@mui/icons-material/Phone";
import HomeIcon from "@mui/icons-material/Home";
import { Select, MenuItem } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";

import { db } from "../Firebase";
import firebase from "firebase";

// import PersonIcon from '@mui/icons-material/Person';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Ngoprofile() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");
  const [address, setAddress] = useState("");
  const [pic, setPic] = useState();
  const [doc, setDoc] = useState();
  const [license, setLc] = useState("");
  const [ngo_pic, setNgo_pic] = useState("");

//   console.log(ngo_logo);

  function selectGender(x) {
    setGender(x);
  }

  function selectCity(x) {
    setCity(x);
  }

  function selectState(x) {
    setState(x);
  }

  const nprofile = (event) => {
    event.preventDefault();

    db.collection("Doctors_reg")
      .add({
        Name: name,
        Email: email,
        Address: address,
        City: city,
        Consulting_Fee: consulting_fee,
        Gender: gender,
        Pincode: pincode,
        ngo_pic: ngo_pic,
        Qualification: qualification,
        State: state,
        doc_Id_proof: docidproof,
        Date: firebase.firestore.Timestamp.now(),
        status: 0,
      })
      .then(function (succ) {
        alert("Yes");
      })
      .catch(function (err) {
        alert("No");
      });
  };

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Nav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Card>
            <CardContent style={{ textAlign: "center", marginTop: 40 }}>
              <img src={image1} />
              <h3>Profile</h3>
              <form onSubmit={nprofile} encType="multipart/form-data">
                <Grid>
                  <Grid container>
                    <Grid lg={3}>
                      <CardContent>
                        <FormControl variant="standard" fullWidth>
                          <InputLabel htmlFor="input-with-icon-adornment">
                            Name
                          </InputLabel>
                          <Input
                            onChange={(e) => setName(e.target.value)}
                            id="input-with-icon-adornment"
                            startAdornment={
                              <InputAdornment position="start">
                                <AccountCircle />
                              </InputAdornment>
                            }
                            required
                            inputProps={{
                              pattern: "[A-Za-z ]{2,15}",
                              title: "Please Fill Alphabet Only",
                            }}
                          />
                        </FormControl>
                      </CardContent>
                    </Grid>

                    <Grid lg={3}>
                      <CardContent>
                        <FormControl variant="standard" fullWidth>
                          <InputLabel htmlFor="input-with-icon-adornment">
                            Email
                          </InputLabel>
                          <Input
                            type="email"
                            onChange={(e) => setEmail(e.target.value)}
                            id="input-with-icon-adornment"
                            startAdornment={
                              <InputAdornment position="start">
                                <EmailIcon />
                              </InputAdornment>
                            }
                            required
                          />
                        </FormControl>
                      </CardContent>
                    </Grid>

                    <Grid lg={3}>
                      <CardContent>
                        <FormControl variant="standard" fullWidth>
                          <InputLabel htmlFor="input-with-icon-adornment">
                            Contact
                          </InputLabel>
                          <Input
                            onChange={(e) => setContact(e.target.value)}
                            id="input-with-icon-adornment"
                            startAdornment={
                              <InputAdornment position="start">
                                <PhoneIcon />
                              </InputAdornment>
                            }
                          />
                        </FormControl>
                      </CardContent>
                    </Grid>

                    <Grid lg={3}>
                      <CardContent>
                        <FormControl variant="standard" fullWidth>
                          <InputLabel id="demo-simple-select-helper-label">
                            Gender
                          </InputLabel>
                          <Select
                            size="small"
                            fullWidth
                            labelId="demo-simple-select-helper-label"
                            type="text"
                            label="City"
                            onChange={(e) => selectGender(e.target.value)}
                          >
                            <MenuItem value="Male">Male</MenuItem>
                            <MenuItem value="Female">Female</MenuItem>
                            <MenuItem value="Other">Other</MenuItem>
                          </Select>
                        </FormControl>
                      </CardContent>
                    </Grid>

                    <Grid lg={3}>
                      <CardContent>
                        <FormControl variant="standard" fullWidth>
                          <InputLabel htmlFor="input-with-icon-adornment">
                            Address
                          </InputLabel>
                          <Input
                            onChange={(e) => setAddress(e.target.value)}
                            id="input-with-icon-adornment"
                            startAdornment={
                              <InputAdornment position="start">
                                <HomeIcon />
                              </InputAdornment>
                            }
                          />
                        </FormControl>
                      </CardContent>
                    </Grid>

                    <Grid lg={3}>
                      <CardContent>
                        <FormControl variant="standard" fullWidth>
                          <InputLabel id="demo-simple-select-helper-label">
                            {" "}
                            City
                          </InputLabel>

                          <Select
                            size="small"
                            fullWidth
                            labelId="demo-simple-select-helper-label"
                            type="text"
                            label="City"
                            onChange={(e) => selectCity(e.target.value)}
                          >
                            <MenuItem value="amritsar">Amritsar</MenuItem>
                            <MenuItem value="ludhiana">Ludhiana</MenuItem>
                            <MenuItem value="chandigarh">Chandigarh</MenuItem>
                            <MenuItem value="patiala">Patiala</MenuItem>
                            <MenuItem value="none">None</MenuItem>
                          </Select>
                        </FormControl>
                      </CardContent>
                    </Grid>

                    <Grid lg={3}>
                      <CardContent>
                        <FormControl variant="standard" fullWidth>
                          <InputLabel id="demo-simple-select-helper-label">
                            State
                          </InputLabel>
                          <Select
                            size="small"
                            fullWidth
                            labelId="demo-simple-select-helper-label"
                            type="text"
                            label="City"
                            onChange={(e) => selectState(e.target.value)}
                          >
                            <MenuItem value="punjab">punjab</MenuItem>
                            <MenuItem value="Haryana">Haryana</MenuItem>
                            <MenuItem value="Himachal">Himachal</MenuItem>
                            <MenuItem value="Rajasthan">Rajasthan</MenuItem>
                            <MenuItem value="none">None</MenuItem>
                          </Select>
                        </FormControl>
                      </CardContent>
                    </Grid>

                    <Grid lg={3}>
                      <CardContent>
                        <FormControl variant="standard" fullWidth>
                          <InputLabel htmlFor="input-with-icon-adornment">
                            Pincode *
                          </InputLabel>
                          <Input
                            onChange={(e) => setPincode(e.target.value)}
                            id="input-with-icon-adornment"
                            startAdornment={
                              <InputAdornment position="start">
                                {/* <AccountCircle /> */}
                              </InputAdornment>
                            }
                          />
                        </FormControl>
                      </CardContent>
                    </Grid>

                    <Grid lg={3}>
                      <CardContent>
                        <FormControl variant="standard" fullWidth>
                          <InputLabel htmlFor="input-with-icon-adornment">
                            Qualification
                          </InputLabel>
                          <Input
                            onChange={(e) => setDqua(e.target.value)}
                            id="input-with-icon-adornment"
                            startAdornment={
                              <InputAdornment position="start">
                                <SchoolIcon />
                              </InputAdornment>
                            }
                          />
                        </FormControl>
                      </CardContent>
                    </Grid>

                    <Grid lg={3}>
                      <CardContent>
                        <FormControl variant="standard" fullWidth>
                          <InputLabel htmlFor="input-with-icon-adornment">
                            Consulting Fee
                          </InputLabel>
                          <Input
                            onChange={(e) => setConsulting_Fee(e.target.value)}
                            id="input-with-icon-adornment"
                            startAdornment={
                              <InputAdornment position="start">
                                {/* <AccountCircle /> */}₹
                              </InputAdornment>
                            }
                          />
                          -
                        </FormControl>
                      </CardContent>
                    </Grid>

                    <Grid lg={3}>
                      <CardContent>
                        <FormControl variant="standard" fullWidth>
                          <InputLabel htmlFor="input-with-icon-adornment">
                            Your Pic
                          </InputLabel>
                          <Input
                            type="file"
                            onChange={(e) => setPic(e.target.files[0])}
                            id="input-with-icon-adornment"
                            startAdornment={
                              <InputAdornment position="start">
                                <AccountCircle />
                              </InputAdornment>
                            }
                          />
                        </FormControl>
                      </CardContent>
                    </Grid>

                    <Grid lg={3}>
                      <CardContent>
                        <FormControl variant="standard" fullWidth>
                          <InputLabel htmlFor="input-with-icon-adornment">
                            Your Document
                          </InputLabel>
                          <Input
                            onChange={(e) => setDoc(e.target.files[0])}
                            type="file"
                            id="input-with-icon-adornment"
                            startAdornment={
                              <InputAdornment position="start">
                                <AccountCircle />
                              </InputAdornment>
                            }
                          />
                        </FormControl>
                      </CardContent>
                    </Grid>
                  </Grid>
                </Grid>
                <CardContent>
                  <br />
                  <br />
                  <Button type="submit" variant="contained" color="primary">
                    Submit
                  </Button>
                  <br />
                </CardContent>
              </form>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </>
  );
}
export default Ngoprofile;