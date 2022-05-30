import React from 'react';
import Container from '@mui/material/Container';
import Navbar from 'react-bootstrap/Navbar'
import { useAuth } from "../context/AuthContext";
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { perfilUsuario } from '../firebase';
import 'bootstrap/dist/css/bootstrap.min.css';


const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const { logout, user } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error(error.message);
    }
  };



  return (
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
  <Container>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link  href="/">Home</Nav.Link>
      <Nav.Link href="/nutricion">Nutricion</Nav.Link>
      <Nav.Link href="">Retos</Nav.Link>
    </Nav>
    <Nav>
    <NavDropdown title="Perfil" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Info</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Social</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item eventKey={2} onClick={handleLogout}>Cerrar Sesión</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
  );
};
export default ResponsiveAppBar;