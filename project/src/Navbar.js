import React from "react";
import { AppBar, Card, Grid, CssBaseline, Toolbar, Typography, Button, Chip, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, NavLink } from "react-router-dom";

function Navbar() {


    return (<>

        <AppBar position="fixed" style={{ background: '#3c3c3c66', boxShadow: 'none' }}>
            <CssBaseline />
            <Toolbar>
                <IconButton>
                    <i class="gg-shape-hexagon"></i>
                </IconButton>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    NGO
                </Typography>
                <Link to="/" style={{textDecoration:'none'}}>
                    <Button variant='contained' style={{background:'transparent', boxShadow:'0px 0px 0px transparent', fontSize:17}}>Home</Button>
                </Link>
                <Link to="/Finddonar" style={{textDecoration:'none'}}>
                    <Button variant='contained' style={{background:'transparent', boxShadow:'0px 0px 0px transparent', fontSize:17}}>Find Blood Donar</Button>
                </Link>
                <Link to="/Donated" style={{textDecoration:'none'}}>
                    <Button variant='contained' style={{background:'transparent', boxShadow:'0px 0px 0px transparent', fontSize:17}}>Donated</Button>
                </Link>
                <Link to="/Post" style={{textDecoration:'none'}}>
                    <Button variant='contained' style={{background:'transparent', boxShadow:'0px 0px 0px transparent', fontSize:17}}>UpComing Events</Button>
                </Link>
                <Link to="/NgoReg" style={{textDecoration:'none'}}>
                    <Button variant='contained' style={{background:'transparent', boxShadow:'0px 0px 0px transparent', fontSize:17}}>Join As NGO</Button>
                </Link>
                <Link to="/UserReg" style={{textDecoration:'none'}}>
                    <Button variant='contained' style={{background:'transparent', boxShadow:'0px 0px 0px transparent', fontSize:17}}>Join As User</Button>
                </Link>

            </Toolbar>
        </AppBar>


    </>)
}
export default Navbar;