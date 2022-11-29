import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Grid, List, ListItem, ListItemText, Divider, } from '@mui/material';

function Home() {

    return (
        <>
            <Grid container>

                <List>

                    <Link to="/Landing" style={{ textDecoration: "none", color: '#fdfdfd' }}>
                        <ListItem button>
                            <ListItemText style={{ color: '#000' }} primary="Landing" />
                        </ListItem>
                    </Link><Divider />
                </List>
                <br />
                {/* Admin */}
                <List>

                    <Link to="/AdminLog" style={{ textDecoration: "none", color: '#fdfdfd' }}>
                        <ListItem button>
                            <ListItemText style={{ color: '#000' }} primary="AdminLog" />
                        </ListItem>
                    </Link><Divider />

                    <Link to="/AdminDash" style={{ textDecoration: "none", color: '#fdfdfd' }}>
                        <ListItem button>
                            <ListItemText style={{ color: '#000' }} primary="AdminDash" />
                        </ListItem>
                    </Link><Divider />

                    <Link to="/Users" style={{ textDecoration: "none", color: '#fdfdfd' }}>
                        <ListItem button>
                            <ListItemText style={{ color: '#000' }} primary="Users" />
                        </ListItem>
                    </Link><Divider />

                    <Link to="/Approve" style={{ textDecoration: "none", color: '#fdfdfd' }}>
                        <ListItem button>
                            <ListItemText style={{ color: '#000' }} primary="NGOs" />
                        </ListItem>
                    </Link><Divider />

                </List>
                &nbsp;&nbsp;
                {/* NGO */}
                <List>
                    <Link to="/NgoReg" style={{ textDecoration: "none", color: '#fdfdfd' }}>
                        <ListItem button>
                            <ListItemText style={{ color: '#000' }} primary="NgoReg" />
                        </ListItem>
                    </Link><Divider />

                    <Link to="/NgoLog" style={{ textDecoration: "none", color: '#fdfdfd' }}>
                        <ListItem button>
                            <ListItemText style={{ color: '#000' }} primary="NgoLog" />
                        </ListItem>
                    </Link><Divider />

                    <Link to="/NgoProfile" style={{ textDecoration: "none", color: '#fdfdfd' }}>
                        <ListItem button>
                            <ListItemText style={{ color: '#000' }} primary="NgoProfile" />
                        </ListItem>
                    </Link><Divider />

                    <Link to="/NgoDash" style={{ textDecoration: "none", color: '#fdfdfd' }}>
                        <ListItem button>
                            <ListItemText style={{ color: '#000' }} primary="NgoDash" />
                        </ListItem>
                    </Link><Divider />

                    <Link to="/Events" style={{ textDecoration: "none", color: '#fdfdfd' }}>
                        <ListItem button>
                            <ListItemText style={{ color: '#000' }} primary="Events" />
                        </ListItem>
                    </Link><Divider />
                </List>
                &nbsp;&nbsp;
                {/* User */}
                <List>
                    <Link to="/UserReg" style={{ textDecoration: "none", color: '#fdfdfd' }}>
                        <ListItem button>
                            <ListItemText style={{ color: '#000' }} primary="UserReg" />
                        </ListItem>
                    </Link><Divider />

                    <Link to="/UserLog" style={{ textDecoration: "none", color: '#fdfdfd' }}>
                        <ListItem button>
                            <ListItemText style={{ color: '#000' }} primary="UserLog" />
                        </ListItem>
                    </Link><Divider />

                    <Link to="/UserProfile" style={{ textDecoration: "none", color: '#fdfdfd' }}>
                        <ListItem button>
                            <ListItemText style={{ color: '#000' }} primary="UserProfile" />
                        </ListItem>
                    </Link><Divider />

                </List>
            </Grid>
        </>

    );
}


export default Home;