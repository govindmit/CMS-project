import React, { useEffect, useState } from 'react'
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Profile from './Components/Profile';
import { Avatar } from '@mui/material';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function Sidebar({ children }) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const [loginuser, setLoginUser] = useState()
  const [accessToken, setAccesstoken] = useState();
  const [menuLink, setMenuLink] = useState([])
  const [show, setShow] = useState('home');

  useEffect(() => {
    const u = JSON.parse(localStorage.getItem('loginUser'));
    setAccesstoken(localStorage.getItem('accessToken'))
    if (u && u?.role?.title === 'Admin') {
      setShow(u?.role?.title)
    } 
   else if (u && u?.role?.title === 'Editor') {
      setShow(u?.role?.title)
    }
  else if (u && u?.role?.title === 'Author') {
      setShow(u?.role?.title)
    }
    else if (u && u?.role?.title === 'Subscriber') {
      setShow(u?.role?.title)
    }
    else {
      setShow('home')
    }
  }, [show])

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const LinkItems = [

    { name: 'Users', href: '/Dashboard/AdminDashboard/UserList', show: 'Admin' },
    { name: 'Roles', href: '/Dashboard/AdminDashboard/RoleList', show: 'Admin' },
    { name: 'My profile', href: '/Dashboard/AdminDashboard/Profile', show: 'Admin' },
    { name: 'Settings', href: '/', show: 'Admin' },
    // { name: 'Pages', href: '/Dashboard/AdminDashboard/CreatePages', show: 'Admin' },
    { name: 'Pages', href: '/Dashboard/AdminDashboard/PageList', show: 'Admin' },

    
    { name: 'My profile', href: '/Dashboard/AdminDashboard/Profile', show: 'Editor' },
    { name: 'Pages', href: '/Dashboard/AdminDashboard/PageList', show: 'Editor' },
    
    { name: 'Settings', href: '/', show: 'Editor' },

    { name: 'My profile', href: '/Dashboard/AdminDashboard/Profile', show: 'Author' },
    { name: 'Pages', href: '/Dashboard/AdminDashboard/PageList', show: 'Author' },
    { name: 'Settings', href: '/', show: 'Author' },

    { name: 'My profile', href: '/Dashboard/AdminDashboard/Profile', show: 'Subscriber' },

    { name: 'Home', href: '/', show: 'home' },
    { name: 'Services', href: '/', show: 'home' },
    { name: 'Terms and condition', href: '/', show: 'home' },
    { name: 'About us', href: '/', show: 'home' },
    { name: 'Help', href: '/', show: 'home' },

  ]


  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon >{children}</MenuIcon>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Typography color="inherit">
            {
              accessToken ?
                <Profile>
                  <Avatar alt="Remy Sharp" ></Avatar>
                </Profile>
                : 'Account'}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {LinkItems?.map((text, index) => (
            text.show === show &&
            <ListItem disablePadding sx={{ display: 'block' }} key={text.name}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
                href={text.href}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text.name} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />

      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <div >
          {children}
        </div>
      </Box>
    </Box>
  );
}