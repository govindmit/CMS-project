import React, { useEffect, useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar } from '@mui/material';
import Profile from './Components/Profile';


const Navbar = () => {
    const [loginuser, setLoginUser] = useState()
    const [loginUserImg, setLoginUserImg] = useState();
    useEffect(() => {
        const u = JSON.parse(localStorage.getItem('loginUser'));
        const pic = u?.pic
        setLoginUser(JSON.parse(localStorage.getItem('loginUser')));
        setLoginUserImg(pic)
    }, [])
 
    return (
        <Box sx={{ flexGrow: 1 }}>
      
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        News
                    </Typography>
                    <Typography color="inherit">
                        { 
                        loginuser?
                        
                        <Profile>
                             <Avatar alt="Remy Sharp" ></Avatar>
                             </Profile>
                        : 'Account'}
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Navbar