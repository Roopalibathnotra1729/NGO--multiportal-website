import React, { useEffect, useState } from "react";
import NgoNav from "./NgoNav";
import firebase from "firebase";
import { db } from "../Firebase";
import { useNavigate } from "react-router-dom";
import { Button,ButtonGroup,Card,CardContent,
Grid, Select, MenuItem,TextField,Typography,  Paper,
} from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";

import dp from '../images/dp.jpg';


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

const AppBar = styled(MuiAppBar, {
shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
zIndex: theme.zIndex.drawer + 1,
transition: theme.transitions.create(["width", "margin"], {
  easing: theme.transitions.easing.sharp,
  duration: theme.transitions.duration.leavingScreen,
}),
...(open && {
  marginLeft: drawerWidth,
  width: `calc(100% - ${drawerWidth}px)`,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
}),
}));

const Drawer = styled(MuiDrawer, {
shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
width: drawerWidth,
flexShrink: 0,
whiteSpace: "nowrap",
boxSizing: "border-box",
...(open && {
  ...openedMixin(theme),
  "& .MuiDrawer-paper": openedMixin(theme),
}),
...(!open && {
  ...closedMixin(theme),
  "& .MuiDrawer-paper": closedMixin(theme),
}),
}));




function NgoProfile() {

//const [uname, setUname] = useState("");
const [ngo_name, setNgoname] = useState("");
const [email, setEmail] = useState("");
const [contact, setContact] = useState();
//const [owner_photo, setOwnerphoto] = useState("");

const [tele, setTele] = useState();
const [state, setState] = useState("");
const [city, setCity] = useState("");
const [addr, setAddr] = useState("");
// const [pincode, setPincode] = useState();
const [regno, setRegno] = useState('');
const [unique_id, setUniqueid] = useState('');
const [doreg, setDoreg] = useState(new Date());  //  ???
const [type, setType] = useState('');
const [sector, setSector] = useState('');

const [opr_state, setOprstate] = useState('');
const [opr_city, setOprcity] = useState('');
const [website, setWebsite] = useState('');     //pattern?
const [reg_certi, setRegcerti] = useState('');
const [id_proof, setIdproof] = useState("");
const [ngo_logo, setNgologo] = useState("");
//const [password, setPassword] = useState("");

const navigate = useNavigate();


const id = localStorage.getItem('NgoLog');
if (!id) { 
  navigate('/NgoLog'); 
}

function gtdta() {
  console.log(id);
  db.collection('Ngo').doc(id).onSnapshot(function (suc) {
    setNgoname(suc.data().Ngo_Name);
    setEmail(suc.data().Email);
    setContact(suc.data().Contact);
  })
}



const theme = useTheme();
const [open, setOpen] = useState(false);

const handleDrawerOpen = () => {
  setOpen(true);
};
const handleDrawerClose = () => {
  setOpen(false);
};

function selectCity(x) {  setCity(x); }
function selectState(x) { setState(x);  }
function selectOprcity(x) { setOprcity(x);  }
function selectOprstate(x) {  setOprstate(x); }
function selectType(x) {  setType(x); } 
function selectSector(x) { setSector(x);  }

const nprofile = (event) => {
  event.preventDefault();
  db.collection("Ngo")
    .doc(id).update({
      // Ngo_Name: ngo_name,
      // Email: email.toLowerCase(),
      Contact: contact,
      
      Address: addr.toLowerCase(),
      City: city.toLowerCase(),
      State: state.toLowerCase(),
      Telephone: tele,
      Reg_No: regno,
      Unique_Id: unique_id.toLowerCase(),
      Date_of_Reg: doreg,
      Type: type.toLowerCase(),
      Sector: sector.toLowerCase(),
      Operational_State: opr_state.toLowerCase(),
      Operational_City: opr_city.toLowerCase(),
      Website: website.toLowerCase(),
      // Reg_certi: reg_certi,
      // Ngo_Logo: ngo_logo,
      // ngo_id_proof: id_proof,

    }).then(function (succ) {
      alert('Your Profile has been updated.');
    }).catch(function (err) {
      alert('Something went wrong, please try again later');
    })
};



useEffect(() => {
  gtdta()
}, [])



return (
  <>
    <Box sx={{ display: "flex" }}>
      <NgoNav />

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />

        <Grid container>

          <Grid lg={9}>

            <CardContent lg={10} style={{ textAlign: "center" }}>
              <Typography variant="h5" fontWeight={'400'} className="" color='#0b7c71'>
                ＮＧＯ Ｄｅｔａｉｌｓ
              </Typography>

              <form
                onSubmit={nprofile}
                encType="multipart/form-data">

                <Grid container>
                  <Grid container>

                    {/* ngo_name */}
                    <Grid lg={3}>
                      <CardContent>
                        <FormControl variant="standard" fullWidth>
                          <InputLabel shrink htmlFor="component-simple">
                          ＮＡＭＥ ｏｆ ＮＧＯ
                          </InputLabel>
                          <Input
                            value={ngo_name}
                            disabled
                          />
                        </FormControl>
                      </CardContent>
                    </Grid>

                    {/* email */}
                    <Grid lg={3}>
                      <CardContent>
                        <FormControl variant="standard" fullWidth>
                          <InputLabel shrink htmlFor="component-simple">
                          ＥＭＡＩＬ
                          </InputLabel>
                          <Input
                            value={email}
                            disabled
                          />
                        </FormControl>
                      </CardContent>
                    </Grid>

                    {/* contact */}
                    <Grid lg={3}>
                      <CardContent>
                        <FormControl variant="standard" fullWidth>
                          <InputLabel shrink htmlFor="component-simple">
                          ＣＯＮＴＡＣＴ    
                          </InputLabel>
                          <Input
                            value={contact}
                            disabled
                          />
                        </FormControl>
                      </CardContent>
                    </Grid>

                    {/* tele */}
                    <Grid lg={3}>
                      <CardContent>
                        <FormControl variant="standard" fullWidth>
                          <InputLabel htmlFor="component-simple">
                          ＴＥＬＥＰＨＯＮＥ (OPTIONAL)
                          </InputLabel>
                          <Input
                            onChange={(e) => setTele(e.target.value)}
                            id="component-simple"
                            inputProps={{
                              pattern: "[0-9]{11}",
                              // title: "Please Fill Numbers Only",
                            }}
                          />
                        </FormControl>
                      </CardContent>
                    </Grid>

                  </Grid>

                  <Grid container>

                    {/* state */}
                    <Grid lg={3} md={4} sm={6}>
                      <CardContent>
                        <FormControl variant="standard" fullWidth>
                          <InputLabel id="demo-simple-select-helper-label">
                          ＳＴＡＴＥ
                          </InputLabel>
                          <Select
                            size="small" fullWidth
                            labelId="demo-simple-select-helper-label"
                            type="text" 
                            onChange={(e) => selectState(e.target.value)}
                          >
                            <MenuItem value="Punjab">Punjab</MenuItem>
                            <MenuItem value="Haryana">Haryana</MenuItem>
                            <MenuItem value="Himachal">Himachal</MenuItem>
                            <MenuItem value="Rajasthan">Rajasthan</MenuItem>
                            {/* <MenuItem value="none">None</MenuItem> */}
                          </Select>
                        </FormControl>
                      </CardContent>
                    </Grid>

                    {/* city */}
                    <Grid lg={3} md={4} sm={6}>
                      <CardContent>
                        <FormControl variant="standard" fullWidth>
                          <InputLabel id="demo-simple-select-helper-label">
                          ＣＩＴＹ
                          </InputLabel>
                          <Select
                            size="small"
                            width='150'
                            labelId="demo-simple-select-helper-label"
                            type="text"
                            label="City"
                            onChange={(e) => selectCity(e.target.value)}
                          >
                            <MenuItem value="amritsar">Amritsar</MenuItem>
                            <MenuItem value="ludhiana">Ludhiana</MenuItem>

                          </Select>
                        </FormControl>
                      </CardContent>
                    </Grid>

                    {/* addr */}
                    <Grid lg={3}>
                      <CardContent>
                        <FormControl variant="standard" fullWidth>
                          <InputLabel htmlFor="component-simple">
                          ＡＤＤＲＥＳＳ
                          </InputLabel>
                          <Input
                            onChange={(e) => setAddr(e.target.value)}
                            id="standard-required" maxRows={1}
                            required
                            id="standard-required"
                          />
                        </FormControl>
                      </CardContent>
                    </Grid>
                  
                  </Grid>

                  <Grid container>
                    {/* regno */}
                    <Grid lg={3}>
                      <CardContent>
                        <FormControl variant="standard" fullWidth>
                          <InputLabel htmlFor="component-simple">
                          ＲＥＧＩＳＴＲＡＴＩＯＮ ＮＯ．
                          </InputLabel>
                          <Input
                            onChange={(e) => setRegno(e.target.value)}
                            id="component-simple"
                            startAdornment={
                              <InputAdornment position="start">
                              </InputAdornment>
                            }
                            required

                          />
                        </FormControl>
                      </CardContent>
                    </Grid>

                    {/* unique_id */}
                    <Grid lg={3}>
                      <CardContent>
                        <FormControl variant="standard" fullWidth>
                          <InputLabel htmlFor="component-simple">
                          ＵＮＩＱＵＥ ＩＤ
                          </InputLabel>
                          <Input
                            onChange={(e) => setUniqueid(e.target.value)}
                            id="component-simple"
                            startAdornment={
                              <InputAdornment position="start">
                              </InputAdornment>
                            }
                            required

                          />
                        </FormControl>
                      </CardContent>
                    </Grid>

                    {/* doreg */}
                    <Grid lg={3}>
                      <CardContent>
                        <FormControl variant="standard" fullWidth>
                          <InputLabel htmlFor="component-simple">
                          ＮＧＯ ＲＥＧＩＳＴＲＡＴＩＯＮ ＤＡＴＥ
                          </InputLabel>
                          <Input type="date"
                            onChange={(e) => setDoreg(e.target.value)}
                            id="component-simple"
                            startAdornment={
                              <InputAdornment position="start">
                              </InputAdornment>
                            }
                            required
                          />
                        </FormControl>
                      </CardContent>
                    </Grid>
                  </Grid>

                  <Grid container>

                    {/* type */}
                    <Grid lg={3} md={4} sm={6}>
                      <CardContent>
                        <FormControl variant="standard" fullWidth>
                          <InputLabel id="demo-simple-select-helper-label">
                          ＴＹＰＥ
                          </InputLabel>
                          <Select
                            size="small"
                            fullWidth
                            labelId="demo-simple-select-helper-label"
                            type="text"
                            label="Type"
                            onChange={(e) => selectType(e.target.value)}
                          >
                            <MenuItem value="private sector companies (Sec 8/25)">Private Sector Companies (Sec 8/25)</MenuItem>
                            <MenuItem value="Registered Societies">Registered Societies (Non-Government)</MenuItem>
                            <MenuItem value="Trust">Trust (Non-Government)</MenuItem>
                            <MenuItem value="Other Registered Entities">Other Registered Entities (Non-Government)</MenuItem>
                            <MenuItem value="Academic Institutions">Academic Institutions (Private)</MenuItem>
                            <MenuItem value="Other"> Other</MenuItem>
                            {/* <MenuItem value="none">None</MenuItem> */}
                          </Select>
                        </FormControl>
                      </CardContent>
                    </Grid>

                    {/* sector */}
                    <Grid lg={3} md={4} sm={6}>
                      <CardContent>
                        <FormControl variant="standard" fullWidth>
                          <InputLabel id="demo-simple-select-helper-label">
                          Ｓｅｃｔｏｒ／ Ｋｅｙ Ｉｓｓｕｅｓ
                          </InputLabel>
                          <Select
                            size="small" fullWidth
                            labelId="demo-simple-select-helper-label"
                            type="text" label="Sector"
                            onChange={(e) => selectSector(e.target.value)}
                          >
                            <MenuItem value="Animal Husbandry, Dairying & Fisheries">Animal Husbandry, Dairying & Fisheries</MenuItem>
                            <MenuItem value="Aged/Elderly">Aged/Elderly</MenuItem>
                            <MenuItem value="Agriculture">Agriculture</MenuItem>
                            <MenuItem value="Art & Culture">Art & Culture</MenuItem>
                            <MenuItem value="Biotechnology">Biotechnology</MenuItem>
                            <MenuItem value="Children">Children</MenuItem>
                            <MenuItem value="Civic Issues">Civic Issues</MenuItem>
                            <MenuItem value="Differently Abled">Differently Abled</MenuItem>
                            <MenuItem value="Disaster Management">Disaster Management</MenuItem>
                            <MenuItem value="Dalit Upliftment">Dalit Upliftment</MenuItem>
                            <MenuItem value="Drinking Water">Drinking Water</MenuItem>
                            <MenuItem value="Education & Literacy">Education & Literacy</MenuItem>
                            <MenuItem value="Environment & Forests">Environment & Forests</MenuItem>
                            <MenuItem value="Food Processing">Food Processing</MenuItem>
                            <MenuItem value="Health & Family Welfare">Health & Family Welfare</MenuItem>
                            <MenuItem value="HIV/AIDS">HIV/AIDS</MenuItem>
                            <MenuItem value="Housing">Housing</MenuItem>
                            <MenuItem value="Human Rights">Human Rights</MenuItem>
                            <MenuItem value="Information & Communication Technology">Information & Communication Technology</MenuItem>
                            <MenuItem value="Legal Awareness & Aid">Legal Awareness & Aid</MenuItem>
                            <MenuItem value="Labour & Employment">Labour & Employment</MenuItem>
                            <MenuItem value="Land Resources">Land Resources</MenuItem>
                            <MenuItem value="Micro Finance (SHGs)"> Micro Finance (SHGs)</MenuItem>
                            <MenuItem value="Minority Issues"> Minority Issues</MenuItem>
                            <MenuItem value="Micro Small & Medium Enterprises">Micro Small & Medium Enterprises</MenuItem>
                            <MenuItem value="New & Renewable Energy">New & Renewable Energy</MenuItem>
                            <MenuItem value="Nutrition">Nutrition</MenuItem>
                            <MenuItem value="Panchayati Raj">Panchayati Raj</MenuItem>
                            <MenuItem value="Prisoner's Issues">Prisoner's Issues</MenuItem>
                            <MenuItem value="Right To Information & Advocacy">Right To Information & Advocacy</MenuItem>
                            <MenuItem value="Rural Development & Poverty Alleviation">Rural Development & Poverty Alleviation</MenuItem>
                            <MenuItem value="Scientific & Industrial Research">Scientific & Industrial Research</MenuItem>
                            <MenuItem value="Skill Development">Skill Development</MenuItem>
                            <MenuItem value="Science & Technology">Science & Technology</MenuItem>
                            <MenuItem value="Sports">Sports</MenuItem>
                            <MenuItem value="Tribal Affairs">Tribal Affairs</MenuItem>
                            <MenuItem value="Tourism">Tourism</MenuItem>
                            <MenuItem value="Urban Development & Poverty Alleviation">Urban Development & Poverty Alleviation</MenuItem>
                            <MenuItem value="Vocational Training">Vocational Training</MenuItem>
                            <MenuItem value="Water Resources">Water Resources</MenuItem>
                            <MenuItem value="Women's Development & Empowerment">Women's Development & Empowerment</MenuItem>
                            <MenuItem value="Youth Affairs">Youth Affairs</MenuItem>
                            <MenuItem value="Any Other">Any Other</MenuItem>
                            {/* <MenuItem value="none">None</MenuItem> */}
                          </Select>
                        </FormControl>
                      </CardContent>
                    </Grid>

                    {/* opr_state */}
                    <Grid lg={3} md={4} sm={6}>
                      <CardContent>
                        <FormControl variant="standard" fullWidth>
                          <InputLabel id="demo-simple-select-helper-label">
                          ＯＰＥＲＡＴＩＯＮＡＬ ＳＴＡＴＥＳ
                          </InputLabel>
                          <Select
                            size="small"
                            fullWidth
                            labelId="demo-simple-select-helper-label"
                            type="text"
                            label="States of Operation"
                            onChange={(e) => selectOprstate(e.target.value)}
                          >
                            <MenuItem value="Punjab">Punjab</MenuItem>
                            <MenuItem value="Haryana">Haryana</MenuItem>
                            <MenuItem value="Himachal">Himachal Pradesh</MenuItem>
                            <MenuItem value="Rajasthan">Rajasthan</MenuItem>
                            {/* <MenuItem value="none">None</MenuItem> */}
                          </Select>
                        </FormControl>
                      </CardContent>
                    </Grid>

                    {/* opr_city */}
                    <Grid lg={3} md={4} sm={6}>
                      <CardContent>
                        <FormControl variant="standard" fullWidth>
                          <InputLabel id="demo-simple-select-helper-label">
                          ＯＰＥＲＡＴＩＯＮＡＬ ＣＩＴＩＥＳ
                          </InputLabel>
                          <Select
                            size="small"
                            width='150'
                            labelId="demo-simple-select-helper-label"
                            type="text"
                            label="Cities of Operation"
                            onChange={(e) => selectOprcity(e.target.value)}
                          >
                            <MenuItem value="amritsar">Amritsar</MenuItem>
                            <MenuItem value="ludhiana">Ludhiana</MenuItem>

                          </Select>
                        </FormControl>
                      </CardContent>
                    </Grid>

                    {/* website */}
                    <Grid lg={3}>
                      <CardContent>
                        <FormControl variant="standard" fullWidth>
                          <InputLabel htmlFor="component-simple" style={{ color: 'action.active' }}>
                          ＷＥＢＳＩＴＥ ＵＲＬ
                          </InputLabel>
                          <Input
                            // value={website}
                            onChange={(e) => setWebsite(e.target.value)}
                            id="component-simple"
                            type='url'
                            inputProps={{
                              // pattern: "[A-Za-z]{2,15}[.][a-z ]{2,}[.]*[a-z]*{2,}",

                            }}
                          />
                        </FormControl>
                      </CardContent>
                    </Grid>
                  </Grid>
                  {/* ////////////////////////////////////////// */}
                  <Grid container>

                    {/* reg_certi */}
                    <Grid lg={3}>
                      <CardContent>
                        <FormControl variant="standard" fullWidth>
                          <InputLabel shrink htmlFor="component-simple">
                          ＲＥＧＩＳＴＲＡＴＩＯＮ ＣＥＲＴＩＦＩＣＡＴＥ
                          </InputLabel>
                          <Input
                            type="file"
                            onChange={(e) => setRegcerti(e.target.files[0])}
                            id="component-simple"
                            required
                          />
                        </FormControl>
                      </CardContent>
                    </Grid>
                  </Grid>

                  <CardContent>
                    <Button type="submit" variant="contained" color="primary">
                    ＳＵＢＭＩＴ
                    </Button>
                  </CardContent>
                </Grid>
              </form >

            </CardContent>
            
          </Grid>

          {/* ngo_logo */}
          <Grid lg={3}>
            <CardContent >
              <form>
                <Grid container>

                  <Grid>
                    <CardContent >
                      <img src={dp} style={{ width: "200px" }} />
                    </CardContent>
                    <FormControl variant="standard" fullWidth>
                      <InputLabel shrink htmlFor="component-simple" style={{ color: 'action.active' }}>
                      ＮＧＯ ＬＯＧＯ
                      </InputLabel>
                      <Input
                        type="file"
                        onChange={(e) =>
                          setNgologo(e.target.files[0])
                        }
                        id="component-simple"

                        required
                      />
                    </FormControl>

                    <CardContent>
                      <Button type="submit" variant="contained" color="primary">
                      ＵＰＤＡＴＥ
                      </Button>
                    </CardContent>
                  </Grid>
                </Grid>
              </form>
            </CardContent>
          </Grid>
        </Grid>
      </Box>
    </Box>
  </>
)

}

export default NgoProfile;