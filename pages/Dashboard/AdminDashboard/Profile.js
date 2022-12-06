import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import { Grid, Paper, Avatar, Typography, TextField, Button, NativeSelect, DialogTitle } from '@material-ui/core'
import { Dialog, DialogActions, DialogContent, FormControl, InputLabel } from '@mui/material';

import EditIcon from '@mui/icons-material/Edit';
import UserService from '../../../Service/UserService';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Profile() {
    const [open, setOpen] = useState(false);
    const [loginuser, setLoginuser] = useState();
    const [myData,setMyData] = useState();
    const [roleArray,setRoleArray] = useState([])

    const [roleValue,setRoleValue] = useState();
    const [roleTitle,setRoleTitle] = useState();

    const [name,setName] = useState();
    const [email,setEmail] = useState();
    const [phone,setPhone] = useState();

     const paperStyle = { padding: 20, width: 300, margin: "0 auto" }
    const avatarStyle = { backgroundColor: '#1bbd7e' }

    const handleClickOpen = () => {
        setOpen(true);
    };
  
    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        setLoginuser(JSON.parse(localStorage.getItem('loginUser')));
        getallroles()
        myProfile()
    }, [])

    const getallroles = async () => {
        await UserService.getAllRole().then((roleData) => {
            setRoleArray(roleData?.data)
        })
    }

    const myProfile = async () =>{
        const u = JSON.parse(localStorage.getItem('loginUser'))
        const accestoken = localStorage.getItem('accessToken');
       await  UserService.getUserProfile(u?.id,accestoken).then((userData) => {
            setMyData(userData.data);

            setRoleValue(userData.data.role.id)
            setRoleTitle(userData.data.role.title)
            setName(userData.data.name)
            setEmail(userData.data.email)
            setPhone(userData.data.phone)

        })
    }
   const updateProfile = async()=>{
    const u = JSON.parse(localStorage.getItem('loginUser'));
    const accestoken = localStorage.getItem('accessToken');
       const data = {
        name,
        email,
        phone,
        role:roleValue
       }
       await UserService.updateprofile(u.id,data,accestoken).then(data=>{
        if(data.status ===200){
            toast.success(data.data.message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
              myProfile()
        }
       })
   }
    return (
        <div>
              <ToastContainer />
            <Card sx={{ maxWidth: 345 }}>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: red[500] }} src={loginuser?.pic} aria-label="avatar" />
                    }
                    action={
                        <IconButton aria-label="settings">
                            <EditIcon onClick={handleClickOpen}  />
                        </IconButton>
                    }
                    title={myData?.name}
                />

                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        {myData?.email}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {myData?.phone}
                    </Typography>
                </CardContent>
            </Card>

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle></DialogTitle>
                <DialogContent>
                    <Grid>
                        <Paper style={paperStyle}>
                            <Grid align='center'>
                                <Avatar style={avatarStyle}>
                                </Avatar>
                            </Grid>
                            <form>
                                <FormControl fullWidth>
                                    <InputLabel variant="standard" htmlFor="uncontrolled-native">
                                        Role
                                    </InputLabel>
                                    <NativeSelect
                                        defaultValue={roleValue}
                                        inputProps={{
                                          id: 'uncontrolled-native',
                                        }}
                                        onChange={(e) => { setRoleValue(e.target.value) }} 
                                    >
                                        {roleArray?.map((r)=>{
                                            return(
                                                <option value={r.id} key={r.id}>{r.title}</option>
                                            )
                                        })}
                                        {/* <option value={'Admin'}>Admin</option>
                                        <option value={'Editor'}>Editor</option>
                                        <option value={'Author'}>Author</option>
                                        <option value={'Subscriber'}>Subscriber</option> */}

                                    </NativeSelect>
                                </FormControl>
                                <TextField fullWidth label='Name' placeholder="Enter your name" defaultValue={name} onChange={(e) => { setName(e.target.value) }} />
                                <TextField fullWidth label='Email' placeholder="Enter your email" defaultValue={email} onChange={(e) => { setEmail(e.target.value) }} />
                                <TextField fullWidth label='Phone' placeholder="Enter your Phone" defaultValue={phone} onChange={(e) => { setPhone(e.target.value) }} />
        
                            </form>
                        </Paper>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={()=>{updateProfile();handleClose()}}>Update</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}