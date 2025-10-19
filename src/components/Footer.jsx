import React from 'react'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Logo from '../Images/logo.svg';
import { Box, Stack } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
    function SVGclick() {
        console.log('Hie')
    }
    return (
        <Toolbar sx={{
            bgcolor: "black",
            display: "flex", justifyContent: "space-between",
            flexDirection: 'row'
            , '@media(max-width:600px)': {
                flexDirection: 'column'
            }
        }} >
            <Typography component={"div"}>
                <img src={Logo} alt="Logo_Brand" height={"60px"} width={"250px"} />
            </Typography>
            <Box sx={{
                '& p': {
                    color: 'whitesmoke'
                }
            }}>
                <Box sx={{
                    '& svg': {
                        color: 'whitesmoke',
                        cursor: "pointer"
                    },
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: "center",
                    gap: 1,
                    '& svg:hover': {
                        color: 'goldenrod',
                        transform: "translateX(5px)",
                        transition: 'all .2s linear'
                    }
                }}>
                    <InstagramIcon onClick={() => window.location.href = 'https://github.com/Basudev-Pokharel'} />
                    <FacebookIcon onClick={() => window.location.href = 'https://github.com/Basudev-Pokharel'} />
                    <TwitterIcon onClick={() => window.location.href = 'https://github.com/Basudev-Pokharel'} />
                    <GitHubIcon onClick={() => window.location.href = 'https://github.com/Basudev-Pokharel'} />
                    <LinkedInIcon onClick={() => window.location.href = 'https://www.linkedin.com/in/basudev-pokharel/'} />
                </Box>
                <p>All rights reserved &copy; 2025 and beyond</p>
            </Box>
        </Toolbar>
    )
}

export default Footer