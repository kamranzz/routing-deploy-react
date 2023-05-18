import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import {
  Box,
  Typography,
  Container,
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Home = () => (
  <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <Helmet>
      <title>Home</title>
    </Helmet>
    <Typography variant="h3">Home</Typography>
  </Box>
);

const About = () => (
  <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <Helmet>
      <title>About</title>
    </Helmet>
    <Typography variant="h3">About</Typography>
  </Box>
);

const Contact = () => (
  <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <Helmet>
      <title>Contact</title>
    </Helmet>
    <Typography variant="h3">Contact</Typography>
  </Box>
);

const Services = () => (
  <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <Helmet>
      <title>Services</title>
    </Helmet>
    <Typography variant="h3">Services</Typography>
  </Box>
);

const Login = () => (
  <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <Helmet>
      <title>Login</title>
    </Helmet>
    <Typography variant="h3">Login</Typography>
  </Box>
);

const Register = () => (
  <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <Helmet>
      <title>Register</title>
    </Helmet>
    <Typography variant="h3">Register</Typography>
  </Box>
);

const NotFound = () => (
  <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <Helmet>
      <title>Page Not Found</title>
    </Helmet>
    <Typography variant="h3">Page Not Found</Typography>
  </Box>
);

const NavBar = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 950);
    };

    handleResize(); // Check initial width

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          {isMobile ? (
            <IconButton
              color="inherit"
              aria-label="menu"
              edge="start"
              onClick={toggleDrawer}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <>
              <Button color="inherit" component={Link} to="/">
                Home
              </Button>
              <Button color="inherit" component={Link} to="/about">
                About
              </Button>
              <Button color="inherit" component={Link} to="/contact">
                Contact
              </Button>
              <Button color="inherit" component={Link} to="/services">
                Services
              </Button>
              <Button color="inherit" component={Link} to="/login">
                Login
              </Button>
              <Button color="inherit" component={Link} to="/register">
                Register
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>

      {isMobile && (
        <Drawer anchor="left" open={openDrawer} onClose={toggleDrawer}>
          <List>
            <ListItem button component={Link} to="/">
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button component={Link} to="/about">
              <ListItemText primary="About" />
            </ListItem>
            <ListItem button component={Link} to="/contact">
              <ListItemText primary="Contact" />
            </ListItem>
            <ListItem button component={Link} to="/services">
              <ListItemText primary="Services" />
            </ListItem>
            <ListItem button component={Link} to="/login">
              <ListItemText primary="Login" />
            </ListItem>
            <ListItem button component={Link} to="/register">
              <ListItemText primary="Register" />
            </ListItem>
          </List>
        </Drawer>
      )}
    </>
  );
};

const App = () => (
  <Router>
    <HelmetProvider>
      <div>
        <NavBar />
        <Container maxWidth="xl" sx={{ marginTop: '80px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Container>
      </div>
    </HelmetProvider>
  </Router>
);

export default App;
