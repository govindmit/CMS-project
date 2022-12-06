import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/system';
import { AppBar, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, Grid, IconButton, Input, InputLabel, NativeSelect, Toolbar, Typography } from '@mui/material';
import UserService from '../../../Service/UserService';
import axios from 'axios';
import { TextField, } from '@material-ui/core';
import CircularProgress from '@mui/material/CircularProgress';
;
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




export default function RoleList() {
  const [open, setOpen] = React.useState(false);

  const [search, setSearch] = useState("");
  const [loginUser, setLoginUser] = useState();

  const [loading, setLoading] = useState(false);

  const [roles, setRoles] = useState([]);
  const [description, setDescription] = useState();
  const [roleValue, setRoleValue] = useState();

  var token;
  const paperStyle = { padding: 20, width: 300, margin: "0 auto" }
  const [isUpdate, setIsUpdate] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {  
    const u = JSON.parse(localStorage.getItem('loginUser'))
    getallRoles()
},[!roles])



  const getallRoles = async () => {
    setLoading(true);
    await UserService.getAllRole(token).then((res) => {
      setRoles(res.data)
      setLoading(false);
    })
  }

  const addRole = async () => {
    const accestoken = localStorage.getItem('accessToken');
    const data = {
      title: roleValue,
      description: description
    }

    await UserService.addRole(data, accestoken).then((data) => {
      console.log("datatatat", data)
      if (data.status === 200) {
        toast.success('Role added successFully', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        getallRoles()
      } else {
        toast.error('Somthing went wrong ', {
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

  // const handleSearch = async () => {
  //   setLoading(true);
  //   const config = {
  //     headers: {
  //       Authorization: `Bearer ${loginUser.token}`,
  //     },
  //   };

  //   const { data } = await axios.get(`https://chat-application-call.herokuapp.com/api/user?search=${search}`, config);
  //   setLoading(false);
  //   setUsers(data)
  // };


  const removeFn = async (id) => {
    const accestoken = localStorage.getItem('accessToken');
    await UserService.deletRole(id, accestoken).then(data => {
     if(data.status === 200){
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
      getallRoles()
     }else{
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

  return (
    <div>
      <ToastContainer />
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{ backgroundColor: 'Silver' }}>
          <Toolbar>
            {/* <IconButton
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
            </Typography> */}
            <Button onClick={handleClickOpen}>AddNew role</Button>
          </Toolbar>
        </AppBar>
      </Box>
      {/* ------------------------------------------------ */}



      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add New Role</DialogTitle>
        <DialogContent>
          <Grid>
            <Paper style={paperStyle}>
              <TextField fullWidth label='Title' placeholder="Enter title" onChange={(e) => setRoleValue(e.target.value)} />
              <TextField fullWidth label='Description' placeholder="Enter description" onChange={(e) => { setDescription(e.target.value) }} />
            </Paper>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={() => { addRole(); handleClose() }}>Add</Button>
        </DialogActions>
      </Dialog>
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
                  <StyledTableCell>Id</StyledTableCell>
                  <StyledTableCell>Title</StyledTableCell>
                  <StyledTableCell>Actions</StyledTableCell>

                </TableRow>
              </TableHead>
              <TableBody>
                {
                  roles?.map((row) => (
                    <StyledTableRow key={row.name}>
                      <StyledTableCell component="th" scope="row">
                        {row.id}
                      </StyledTableCell>
                      <StyledTableCell>{row.title}</StyledTableCell>
                      <StyledTableCell>
                        <Button onClick={() => { removeFn(row.id) }}>Remove</Button>
                      </StyledTableCell>

                    </StyledTableRow>
                  ))
                }
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      }

    </div>
  );
}
