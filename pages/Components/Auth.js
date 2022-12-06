import React from 'react'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import Paper from '@material-ui/core/Paper';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Login from '../Components/Login/index'
import Signup from '../Components/SignUp/index'
import Navbar from '../Navbar';

const Auth = () => {
    const [value, setValue] = React.useState('1');
    const paperStyle = { width: 400, margin: "20px auto" }
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div>
          
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