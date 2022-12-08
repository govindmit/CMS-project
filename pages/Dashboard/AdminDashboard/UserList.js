import React, { useEffect, useRef, useState } from 'react';

import { Grid, Paper, Avatar, Typography, TextField, Button, NativeSelect, OutlinedInput, InputAdornment, IconButton, FilledInput, Input, } from '@material-ui/core'
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@mui/material/InputLabel';



import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Box } from '@mui/system';
import { AppBar, Dialog, DialogActions, DialogContent, Toolbar } from '@mui/material';
import UserService from '../../../Service/UserService';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
import AddUser from './addUser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function UserList() {
  const [open, setOpen] = useState(false);

  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [loading1, setLoading1] = useState(false);
  const [users, setUsers] = useState([]);
  const [roleArray, setRoleArray] = useState([]);

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [roleValue, setRoleValue] = useState();
  const [roleName, setRoleName] = useState();
  const [userId, setUserId] = useState();
  const [status, setStatus] = useState();

  const [nameErr, setNameErr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);
  const [phoneErr, setPhoneErr] = useState(false);



  const paperStyle = { padding: 20, width: 300, margin: "0 auto" }
  const avatarStyle = { backgroundColor: '#1bbd7e' }

  useEffect(() => {
    const u = JSON.parse(localStorage.getItem('loginUser'))
    getAlluser();
    getallroles()
  }, []);

  const handleClickOpen = async (id) => {

    if (!name) { setNameErr(true) }
    if (!email) { setEmailErr(true) }
    if (!phone) { setPhoneErr(true) }
    
    setUserId(id)
    const accestoken = localStorage.getItem('accessToken');
    await UserService.getUserProfile(id, accestoken).then((userData) => {

      setRoleValue(userData.data.role.id)
      setRoleName(userData.data.role.title)
      setName(userData.data.name)
      setStatus(userData.data.status)
      setEmail(userData.data.email)
      setPhone(userData.data.phone)

    })
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const getAlluser = async () => {
    setLoading(true);
    const accestoken = localStorage.getItem('accessToken');
    await UserService.getAllUser(accestoken).then((res) => {
      setUsers(res.data)
      setLoading(false);

    })
  }

  const handleSearch = async () => {
    const accestoken = localStorage.getItem('accessToken');
    setLoading(true);
    const config = {
      headers: {
        Authorization: `Bearer ${accestoken}`,
      },
    };
    // const { data } = await axios.get(`http://192.168.168.29:8080/api/user/getusers?search=${search}`, config);
    const { data } = await axios.get(`https://curious-veil-frog.cyclic.app/api/user/getusers?search=${search}`, config);

    setLoading(false);
    setUsers(data)
  };

  const removeFn = async (id) => {
    const accestoken = localStorage.getItem('accessToken');
    await UserService.removeUser(id, accestoken).then((res) => {
      toast.success("user delete successfully", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      getAlluser();
    })
  }

  const getallroles = async () => {
    await UserService.getAllRole().then((roleData) => {
      // console.log(roleData)
      setRoleArray(roleData?.data)
    })
  }

  const updateFn = async () => {
    const data = {
      name: name,
      email: email,
      phone: phone,
      role: roleValue,
      status: status
    }
    const accestoken = localStorage.getItem('accessToken');

    await UserService.updateprofile(userId, data, accestoken).then((data) => {
      if (data.status === 200) {
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
        getAlluser()
      } else {
        toast.error(data.data.message, {
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

  const changeStatus = async (id, status) => {
    const data = {
      status: status
    }
    const accestoken = localStorage.getItem('accessToken');

    await UserService.updateprofile(id, data, accestoken).then((data) => {
      setLoading1(true);
      if (data.data.status === 200) {
        setLoading1(false)
      }
      getAlluser()
    })
  }

  return (
    <div>
      <ToastContainer />
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{ backgroundColor: 'Silver' }}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <Input
                placeholder="Search by name or email"
                mr={2}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Button onClick={handleSearch} >Go</Button>
            </Typography>
            <AddUser variant="contained">
              Add New User
            </AddUser>
          </Toolbar>
        </AppBar>
      </Box>
      {/* ------------------------------------------------ */}

      {loading ?
        <div>
          <Box sx={{ position: 'relative', display: 'inline-flex', padding: '125px' }} >
            <CircularProgress color="success" />
          </Box>
        </div>
        :
        <div>
          <TableContainer component={Paper} style={{ marginTop: '10px' }}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Name</StyledTableCell>
                  <StyledTableCell align="right">Phone</StyledTableCell>
                  <StyledTableCell align="right">Email&nbsp;</StyledTableCell>
                  <StyledTableCell align="right">Role&nbsp;</StyledTableCell>

                  <StyledTableCell align="right">Status&nbsp;</StyledTableCell>
                  <StyledTableCell align="right">Remove&nbsp;</StyledTableCell>
                  <StyledTableCell align="right">Edit&nbsp;</StyledTableCell>

                  <StyledTableCell align="right">Change Status&nbsp;</StyledTableCell>


                </TableRow>
              </TableHead>
              <TableBody>
                {
                  users?.map((row) => (
                    <StyledTableRow key={row.name}>
                      <StyledTableCell component="th" scope="row">
                        {row.name}
                      </StyledTableCell>
                      <StyledTableCell align="right">{row.phone}</StyledTableCell>
                      <StyledTableCell align="right">{row.email}</StyledTableCell>
                      <StyledTableCell align="right">{row.role.title}</StyledTableCell>

                      <StyledTableCell align="right">{row.status}</StyledTableCell>
                      <StyledTableCell align="right"><Button style={{ backgroundColor: 'red', color: "white" }} onClick={() => { removeFn(row.id) }}>Remove</Button> &nbsp;&nbsp;
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        <Button style={{ backgroundColor: 'orange', color: "white" }} onClick={() => { handleClickOpen(row.id) }}>Edit</Button></StyledTableCell>
                      <StyledTableCell align="right">
                        <Button style={{ backgroundColor: 'green', color: "white" }} onClick={() => { changeStatus(row.id, row.status === 'verified' ? 'unverified' : 'verified') }}>
                          {row.status === 'verified' ? 'unverified' : 'verified'}
                        </Button>
                      </StyledTableCell>
                    </StyledTableRow>

                  ))
                }
              </TableBody>

            </Table>
          </TableContainer>
          {/* ------------------------------------------------------------------------------------ */}

          {/* <Dialog open={open} onClose={handleClose}>
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
                        defaultValue={roleName}
                        onChange={(e) => { setRoleValue(e.target.value) }}
                      >
                        <option defaultValue={roleValue} >{roleName}</option>
                        {
                          roleArray?.map((role) => {
                            return (
                              <>
                                <option value={role?.id}>{role?.title}</option>
                              </>
                            )
                          })
                        }
                      </NativeSelect>
                    </FormControl>
                    <FormControl fullWidth>
                      <InputLabel variant="standard" htmlFor="uncontrolled-native">
                        Status
                      </InputLabel>
                      <NativeSelect
                        defaultValue={status}
                        onChange={(e) => { setStatus(e.target.value) }}
                      >
                        <option defaultValue={status} >{status}</option>
                        <option value={status === 'verified' ? 'unverified' : 'verified'}>{status === 'verified' ? 'unverified' : 'verified'}</option>
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
              <Button onClick={(e) => { updateFn(); handleClose() }}>Update</Button>
            </DialogActions>
          </Dialog> */}


          <Dialog open={open} onClose={handleClose}>
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
                        defaultValue={roleName}
                        onChange={(e) => { setRoleValue(e.target.value) }}
                      >
                        <option defaultValue={roleValue} >{roleName}</option>
                        {
                          roleArray?.map((role) => {
                            return (
                              <>
                                <option value={role?.id}>{role?.title}</option>
                              </>
                            )
                          })
                        }
                      </NativeSelect>
                    </FormControl>

                    <TextField fullWidth label='Name' placeholder="Enter your name" style={{ marginTop: '20px' }} defaultValue={name} onChange={(e) => { setName(e.target.value) }} />
                    <TextField fullWidth label='Email' placeholder="Enter your email" style={{ marginTop: '20px' }} defaultValue={email} onChange={(e) => { setEmail(e.target.value) }} />
                    <TextField fullWidth label='Phone' placeholder="Enter your Phone" style={{ marginTop: '20px' }} defaultValue={phone} onChange={(e) => { setPhone(e.target.value) }} />
                  </form>
                </Paper>
              </Grid>
            </DialogContent>

            <DialogActions style={{ marginTop: '15px' }} >
              <Button onClick={handleClose}>Cancel</Button>
              <Button onClick={(e) => { updateFn(); handleClose() }}>Update</Button>
            </DialogActions>

          </Dialog>

        </div>
      }

    </div>
  );
}
