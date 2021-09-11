import React from 'react';
import {Navbar,Nav,NavDropdown,Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation=({})=>{
    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">Systéme de pointages</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link ><Link style={{textDecoration:'none'}} to="/list">Users</Link>  </Nav.Link>
      <Nav.Link ><Link style={{textDecoration:'none'}} to="/Pointages">List</Link></Nav.Link>
     <Nav.Link><Link style={{textDecoration:'none'}} to="/AddPointage">Add pointages</Link></Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link ><Link style={{textDecoration:'none'}} to="/login">Sign In</Link></Nav.Link>
      <Nav.Link><Link  style={{textDecoration:'none'}} to="/SignUp" >Sign Up</Link></Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    )
}
export default Navigation