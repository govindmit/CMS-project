import React, { useEffect, useRef, useState } from 'react'
import { Grid, Paper, Avatar, Typography, TextField, Button, NativeSelect, DialogTitle } from '@material-ui/core'
import FormControl from '@material-ui/core/FormControl';
import UserService from '../../../Service/UserService';
import InputLabel from '@mui/material/InputLabel';
import { Dialog, DialogActions, DialogContent } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-phone-number-input/style.css'

const AddUser = ({ children }) => {
    const [open, setOpen] = useState(false);
    const paperStyle = { padding: 20, width: 300, margin: "0 auto" }
    const headerStyle = { margin: 0 }
    const avatarStyle = { backgroundColor: '#1bbd7e' }

    const [isUpdate, setIsUpdate] = useState(false);
    const [roleArray, setRoleArray] = useState([]);

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [phone, setPhone] = useState();
    const [role, setRole] = useState();

    const [nameErr, setNameErr] = useState(false);
    const [emailErr, setEmailErr] = useState(false);
    const [passErr, setPassErr] = useState(false);
    const [phoneErr, setPhoneErr] = useState(false);
    const [isError, setIsError] = useState(false);
    const [validEmailError, setValidEmailError] = useState(null);

    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const phoneRef = useRef(null);
    const roleRef = useRef(null);

    useEffect(() => {
        getallroles()
    }, []);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    }

    const getallroles = async () => {
        await UserService.getAllRole().then((roleData) => {
            setRoleArray(roleData?.data)
        })
    }

    const addUserFn = async (e) => {
        e.preventDefault();

        const data = {
            name: name,
            email: email,
            password: password,
            phone: phone,
            role: role
        }

        if (!name) { setNameErr(true) }
        if (!email) { setEmailErr(true) }
        if (!password) { setPassErr(true) }
        if (!phone) { setPhoneErr(true) }

        if (!name || !email || !phone || !password) {
            toast.error("Please fill all fields", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        } else {
            await UserService.addUser(data).then(res => {
                window.location.reload()
                getAlluser();
                if (res.status === 200) {
                    toast.success(res.data.message, {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                    setOpen(false);
                } else {
                    toast.error(res.data.message, {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                }
            })
        }
    }

    const getAlluser = async () => {
        const accestoken = localStorage.getItem('accessToken');
        await UserService.getAllUser(accestoken).then((res) => {

        })
    }

    return (
        <div>
            <ToastContainer />
            <Button variant="outlined" onClick={handleClickOpen}>
                {children}
            </Button>
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
                                        defaultValue={'Admin'}
                                        inputProps={{
                                            name: 'age',
                                            id: 'uncontrolled-native',
                                        }}
                                        onChange={(e) => { setRole(e.target.value) }}
                                    >
                                        {
                                            roleArray?.map((role) => {
                                                return (
                                                    <option value={role?.id} key={role?.id}>{role?.title}</option>
                                                )
                                            })
                                        }
                                    </NativeSelect>
                                </FormControl>
                                <TextField fullWidth label='Name' placeholder="Enter your name" onChange={(e) => { setName(e.target.value) }} onKeyUp={() => { setNameErr(false) }} />
                                {nameErr ? <span style={{ color: 'red' }}>Please fill Name </span> : ''}

                                <TextField fullWidth label='Email' placeholder="Enter your email"
                                    onChange={(e) => { setEmail(e.target.value); if (!isValidEmail(e.target.value)) { setValidEmailError('Email is invalid'); } else { setValidEmailError(null); } }}
                                    onKeyUp={(e) => { setEmailErr(false); if (isValidEmail(e.target.value)) { setValidEmailError(null); } }} />
                                {emailErr ? <span style={{ color: 'red' }}>Please fill valid email</span> : ''}
                                {validEmailError ? <span style={{ color: 'red' }}>Invalid email</span> : ''}

                                <TextField type="tel" error={isError} fullWidth label='Phone' placeholder="Enter your Phone"
                                    onChange={(e) => { setPhone(e.target.value); if (e.target.value.length > 10) { setIsError(true); } }}
                                    onKeyUp={(e) => { setPhoneErr(false); if (e.target.value.length === 10) { setIsError(false); } }} />
                                {phoneErr ? <span style={{ color: 'red' }}>Please fill phone number</span> : ''}
                                {isError ? <span style={{ color: 'red' }}>Phone number must be 10 digits</span> : ''}

                                <TextField fullWidth label='Password' placeholder="Enter your password" onChange={(e) => { setPassword(e.target.value) }} />
                            </form>
                        </Paper>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={(e) => { addUserFn(e) }}>Add</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default AddUser