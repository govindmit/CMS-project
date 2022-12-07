import React, { useEffect, useRef, useState } from 'react'
import { Grid, Paper, Avatar, Typography, TextField, Button, NativeSelect } from '@material-ui/core'
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import FormControl from '@material-ui/core/FormControl';
import UserService from '../../../Service/UserService';
import InputLabel from '@mui/material/InputLabel';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router';
const Signup = () => {
    const paperStyle = { padding: 20, width: 300, margin: "0 auto" }
    const headerStyle = { margin: 0 }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const marginTop = { marginTop: 5 }

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [phone, setPhone] = useState();
    const [role, setRole] = useState();

    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const phoneRef = useRef(null);
    const roleRef = useRef(null);

    const [picLoading, setPicLoading] = useState(false);

    const [roleArray, setRoleArray] = useState([]);
    const route = useRouter()

    useEffect(() => {
        getallroles()
       
    },[]);
    
    const getallroles = async () => {
        await UserService.getAllRole().then((roleData) => {
            console.log("roles ===",roleData)
            // setRole(roleData?.data[0].id)
            setRoleArray(roleData?.data)
        })
    }


    const signUpFn = async (e) => {
        e.preventDefault();

        // setPicLoading(true);
        const data = {
            name: name,
            email: email,
            password: password,
            phone: phone,
            role: role
        }
        console.log(role)

        await UserService.addUser(data).then(res => {
            console.log(res)
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
                route.push('/Components/Auth')
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
        nameRef.current.value = '';
        emailRef.current.value = '';
        passwordRef.current.value = '';
        phoneRef.current.value = '';
        // roleRef.current.value = '';

    }

    // const postDetails = (pics) => {
    //     setPicLoading(true);
    //     if (pics.type === "image/jpeg" || pics.type === "image/png") {
    //         const data = new FormData();
    //         data.append("file", pics);
    //         data.append("upload_preset", "chat-app");
    //         data.append("cloud_name", "piyushproj");
    //         fetch("https://api.cloudinary.com/v1_1/piyushproj/image/upload", {
    //             method: "post",
    //             body: data,
    //         })
    //             .then((res) => res.json())
    //             .then((data) => {
    //                 setPic(data.url.toString());
    //                 setPicLoading(false);
    //             })
    //             .catch((err) => {
    //                 setPicLoading(false);
    //             });
    //     } else {
    //         setPicLoading(false);
    //         return;
    //     }
    // };

    return (
        <div>

            <ToastContainer />
            <Grid>
                <Paper style={paperStyle}>
                    <Grid align='center'>
                        <Avatar style={avatarStyle}>
                            <AddCircleOutlineOutlinedIcon />
                        </Avatar>
                        <h2 style={headerStyle}>Sign Up</h2>
                    </Grid>
                    <form>
                        <FormControl fullWidth>
                            <InputLabel variant="standard" htmlFor="uncontrolled-native">
                                Role
                            </InputLabel>
                            <NativeSelect
                                defaultValue={1}
                                onChange={(e) => setRole(e.target.value)}
                                // ref={roleRef}
                            >
                                {
                                    roleArray?.map((role,index) => {
                                        return (
                                            <option value={role?.id} key={role?.id} >{role?.title}</option>
                                        )
                                    })
                                }
                            </NativeSelect>
                        </FormControl>
                        <TextField fullWidth label='Name' placeholder="Enter your name" ref={nameRef} onChange={(e) => { setName(e.target.value) }} />
                        <TextField fullWidth label='Email' placeholder="Enter your email" ref={emailRef} onChange={(e) => { setEmail(e.target.value) }} />
                        <TextField fullWidth label='Phone' placeholder="Enter your Phone" ref={phoneRef} onChange={(e) => { setPhone(e.target.value) }} />
                        {/* <TextField fullWidth label='Image' type='file' onChange={(e) => postDetails(e.target.files[0])} /> */}
                        <TextField fullWidth label='Password' placeholder="Enter your password" ref={passwordRef} onChange={(e) => { setPassword(e.target.value) }} />
                        <TextField fullWidth label='Confirm Password' placeholder="Confirm your password" />
                        <Button type='submit' variant='contained' color='primary' onClick={(e) => { signUpFn(e) }}>Sign up</Button>

                    </form>
                </Paper>
            </Grid>
        </div>
    )
}

export default Signup;
