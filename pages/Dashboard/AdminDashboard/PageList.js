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
import { AppBar, Button, IconButton, Input, Toolbar, Typography } from '@mui/material';
import UserService from '../../../Service/UserService';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

import { useRouter } from 'next/router';

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

    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));


const PageList = () => {
    const route = useRouter()
    const [pageArray, setPageArray] = useState([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        getAllPage()
    }, [])

    const getAllPage = async () => {
        const accestoken = localStorage.getItem('accessToken');
        await UserService.getAllPages(accestoken).then((pagedata) => {
            setPageArray(pagedata.data)
        })
    }

    const handleClickOpen = async () => {
        route.push('/Editor/RichTextEditor')
    }

    const detailsFn = async (slug,status) => {
        console.log("--------",slug)
        if(status === 'UnPublished'){
            toast.error("This page in unpublish , Can't view this page", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
        }else{
            // route.push(`/Editor/ViewPage/${slug}`);
            localStorage.setItem('viewFlag',slug);
            window.open(`/Editor/ViewPage/${slug}`);
        }
    }

    const handleSearch = async () => {
        const accestoken = localStorage.getItem('accessToken');
        setLoading(true);
        const config = {
            headers: {
                Authorization: `Bearer ${accestoken}`,
            },  
        };
        const { data } = await axios.get(`http://192.168.168.29:8080/api/page/getpages?search=${search}`, config);
        setLoading(false);
        setPageArray(data)
    };

    const editPageFn = async (id) => {
        route.push(`/Editor/EditPage/${id}`)
    }

    const removeFn = async (id) => {
        const accestoken = localStorage.getItem('accessToken');
        await UserService.removePage(id, accestoken).then((res) => {
           if(res.status === 200){
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
              getAllPage();
           }else{
            toast.error('somthing went wrong to delete page', {
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
            <ToastContainer/>
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
                        <Button onClick={handleClickOpen}>create New Page</Button>

                    </Toolbar>
                </AppBar>
            </Box>
            <TableContainer component={Paper} style={{ marginTop: '10px' }}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Id</StyledTableCell>
                            <StyledTableCell>Name</StyledTableCell>
                            <StyledTableCell>Author</StyledTableCell>
                            {/* <StyledTableCell>description</StyledTableCell> */}
                            <StyledTableCell>status</StyledTableCell>
                            <StyledTableCell align="center-right">Actions</StyledTableCell>



                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            pageArray?.map((row) => (
                               
                                <StyledTableRow key={row.name}>
                                    <StyledTableCell component="th" scope="row">
                                        {row.id}
                                    </StyledTableCell>
                                    <StyledTableCell>{row.name}</StyledTableCell>
                                    <StyledTableCell>{row.author.title}</StyledTableCell>

                                    {/* <StyledTableCell>
                                        {row.description}
                                    </StyledTableCell> */}
                                    <StyledTableCell>{row.status}</StyledTableCell>
                                    <StyledTableCell>
                                        <Button onClick={() => { detailsFn(row.slug,row.status) }}>view</Button>
                                        <Button onClick={() => { editPageFn(row.id) }}>Edit</Button>
                                        <Button onClick={() => { removeFn(row.id) }}>Remove</Button>
                                    </StyledTableCell>
                                </StyledTableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default PageList