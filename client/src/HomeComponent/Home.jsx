import React, { useState } from 'react'
import { AppBar, Toolbar, IconButton, Button, Typography } from '@material-ui/core'
import MenuIcon from "@material-ui/icons/Menu"
import AccountCircleSharpIcon from '@material-ui/icons/AccountCircleSharp';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import config from "../ApiCalls/Config";
import { withRouter } from "react-router-dom";

import "./navbar.css";
import Notifier from '../Utils/Notifier';
import Sidebar from './Sidebar';

function NavBar(props) {

    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);



    const handleClose = () => {
        setAnchorEl(null);
    };

    const logout = () => {
        config.LOCAL_FORAGE.removeItem("token");
        localStorage.setItem("isAuthenticated", false);
        props.history.push("/signin");
        Notifier.notify("You are Logged out  Successfully!.", Notifier.notificationType.WARNING);
        //window.location.href = "/signin"
    }
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    }


    return (
        <div>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={anchorEl}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={logout}>Logout</MenuItem>
            </Menu>
            <AppBar title="Java Quiz Application" variant="elevation" className="nav-bar">
                <Toolbar>
                    <IconButton onClick={() => setSidebarOpen(true)} >
                        <MenuIcon style={{ color: "white", fontSize: "2.5rem" }} />
                    </IconButton>
                    <Typography variant="h6" >
                        Java Quiz Appliocation
                    </Typography>
                    <AccountCircleSharpIcon onClick={handleClick} style={{ color: "white", fontSize: "2.5rem" }} />
                </Toolbar>
            </AppBar>
            <Sidebar open={sidebarOpen} onHide={() => setSidebarOpen(false)} />
        </div>
    )
}

export default withRouter(NavBar)
