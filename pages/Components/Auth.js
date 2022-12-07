import React,{useState,useEffect} from 'react'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import Paper from '@material-ui/core/Paper';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Login from '../Components/Login/index'
import Signup from '../Components/SignUp/index'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar } from '@mui/material';
import Navbar from '../Navbar';

const Auth = () => {
    const [value, setValue] = useState('1');
    const [loginuser, setLoginUser] = useState()
    const [loginUserImg, setLoginUserImg] = useState(); 

    useEffect(() => {
        const u = JSON.parse(localStorage.getItem('loginUser'));
        const pic = u?.pic
        setLoginUser(JSON.parse(localStorage.getItem('loginUser')));
        setLoginUserImg(pic)
    }, [])
 

    const paperStyle = { width: 400, margin: "20px auto" }
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div>
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
                                loginuser ?

                                    <Profile>
                                        <Avatar alt="Remy Sharp" ></Avatar>
                                    </Profile>
                                    : 'Account'}
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
            {/* <Navbar/> */}
            <Paper elevation={20} style={paperStyle}>
                <Box sx={{ width: '100%', typography: 'body1' }}>
                    <TabContext value={value}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <TabList onChange={handleChange} aria-label="lab API tabs example" centered>
                                <Tab label="SignIn" value="1" />
                                <Tab label="SignUp" value="2" />
                            </TabList>
                        </Box>
                        <TabPanel value="1"><Login /></TabPanel>
                        <TabPanel value="2"><Signup /></TabPanel>
                    </TabContext>
                </Box>
            </Paper>
        </div>
    )
}

export default Auth