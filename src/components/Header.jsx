import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Logo from '../Images/logo.svg';
import { NavLink } from 'react-router';
import { Box, Divider, Drawer, IconButton } from '@mui/material';
import styles from "../styles/header.module.css"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Header = () => {
    const [open, setOpen] = useState(false);
    function toogleDrawer(trigger) {
        setOpen(trigger);
    }

    const Drawerlist = (<Box sx={{ padding: 1 }} onClick={() => { toogleDrawer(false) }}>
        <Typography component={"div"} display={"flex"} onClick={() => { window.location.href = '/' }} sx={{ cursor: 'pointer' }}>
            <img src={Logo} alt="Logo_Brand" height={"70px"} width={"250px"} />
        </Typography>
        <Divider></Divider>
        <Box>
            <ul className={styles.lists_mobile}>
                <li>
                    <NavLink to="/" className={({ isActive }) => isActive ? styles.active : ""}>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about" className={({ isActive }) => isActive ? styles.active : ""}>About</NavLink>
                </li>
                <li>
                    <NavLink to="/contact" className={({ isActive }) => isActive ? styles.active : ""}>Contact</NavLink>
                </li>
                <li>
                    <NavLink to="/menu" className={({ isActive }) => isActive ? styles.active : ""}>Menu</NavLink>
                </li>
                <li>
                    <button onClick={() => { toogleDrawer(false) }} className={styles.close_drawer_btn}> <CloseIcon /></button>
                </li>
            </ul>
        </Box>
    </Box>);
    return (
        <AppBar position="static" sx={{
            bgcolor: "black"
        }}>
            <Toolbar sx={{
                display: "flex", justifyContent: "space-between", height: "100%", '& button svg': {
                    color: "white",
                    fontSize: "2rem",
                    display: {
                        xs: "block",
                        sm: 'none'
                    }
                },
            }} >
                <Typography component={"div"} onClick={() => { window.location.href = '/' }} sx={{ cursor: 'pointer' }}>
                    <img src={Logo} alt="Logo_Brand" height={"70px"} width={"250px"} />
                </Typography>
                <IconButton bgcolor="white" onClick={() => { toogleDrawer(true) }}>
                    <MenuIcon color='white'></MenuIcon>
                </IconButton>
                <Drawer open={open} onClose={() => { toogleDrawer(false) }}>
                    {Drawerlist}
                </Drawer>
                <Box sx={{
                    display: {
                        xs: "none",
                        sm: "block"
                    }
                }}>
                    <ul className={styles.lists_desktop}>
                        <li>
                            <NavLink to="/" className={({ isActive }) => isActive ? styles.active : ""}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" className={({ isActive }) => isActive ? styles.active : ""}>About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" className={({ isActive }) => isActive ? styles.active : ""}>Contact</NavLink>
                        </li>
                        <li>
                            <NavLink to="/menu" className={({ isActive }) => isActive ? styles.active : ""}>Menu</NavLink>
                        </li>
                    </ul>
                </Box>
            </Toolbar>
        </AppBar >
    )
}

export default Header