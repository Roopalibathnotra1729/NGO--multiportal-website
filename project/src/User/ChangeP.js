import React, { useEffect, useState } from "react";
import UserNav from "./UserNav";
import { db } from "../Firebase";
import firebase from "firebase";
import { styled, useTheme } from "@mui/material/styles";
import {
    CardContent, Grid, TextField, Typography, Button
} from "@mui/material";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";

import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const drawerWidth = 230;
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

function UserChangeP() {

    const [oldpass, setOldpass] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setConfirmPassword] = useState("");

    // Password visibility
    const [show, setShow] = useState(false);
    const visibility = () => {
        setShow(show ? false : true);
    };
    const theme = useTheme();
    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };
    var id = localStorage.getItem('Userlog');


    const updatepassword = (e) => {
        e.preventDefault();
        db.collection('User').doc(id).get().then(function(succ){
            if(succ.data().Password != oldpass){
                alert('Sorry Old Password dont match');
            }else{
                db.collection('User').id(id).update({
                    Password:password
                }).then(function(succ){
                    alert('Password Updated');
                })
            }
        })
    }



    return (
        <>
            <Box sx={{ display: "flex" }}>
                <UserNav />

                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <DrawerHeader />

                    <form onSubmit={updatepassword}>
                    <Grid lg={4} style={{margin:'auto'}}>
                        <CardContent>
                            <InputLabel htmlFor="standard-adornment-password">
                                Previous Password
                            </InputLabel>
                            <Input
                                id="standard-adornment-password"
                                required
                                size="small"
                                type={show ? "text" : "password"}
                                label="Password"
                                onChange={(e) => setOldpass(e.target.value)}
                                startAdornment={
                                    <InputAdornment position="start">
                                        <IconButton sx={{ color: 'action.active', mr: 1, my: 0.5 }}
                                            aria-label="toggle password visibility"
                                            onClick={visibility}
                                            edge="start"
                                        >
                                            {show ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                fullWidth/>
                        </CardContent>
                        <CardContent>
                                <InputLabel htmlFor="standard-adornment-password">
                                    New Password
                                </InputLabel>
                                <Input
                                    id="standard-adornment-password"
                                    fullWidth
                                    required
                                    size="small"
                                    type={"password"}
                                    label="New Password"
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                        </CardContent>
                        <CardContent>
                                <InputLabel htmlFor="standard-adornment-password">
                                    Confirm Password
                                </InputLabel>
                                <Input
                                    id="standard-adornment-password"
                                    fullWidth
                                    required
                                    size="small"
                                    type={"password"}
                                    label="New Password"
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                        </CardContent>
                        <Grid>
                            <CardContent>
                                <Button type='submit' variant='contained'>Update Password</Button>
                            </CardContent>
                        </Grid>
                    </Grid>
                    </form>
                </Box>
            </Box>

        </>
    );


}
export default UserChangeP;
