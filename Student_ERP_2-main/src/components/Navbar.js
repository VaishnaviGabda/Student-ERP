import React from 'react';
import './Navbar.css'
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom'

function Navbar1() {

  const history = useHistory()
  const handleLogin = () =>{
    history.push("/login")
  }

  return <>
  <Navbar id="navbar" expand="lg">
  <Container fluid>
  <div></div>
    <Navbar.Brand id='logo' href="#">LinkCode</Navbar.Brand>
    <Navbar.Toggle id="sidebar" aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '80px' }}
        navbarScroll
      >
        <Nav.Link id='menus' href="#">Home</Nav.Link >
        <Nav.Link id='menus' href="#">About</Nav.Link >
        <Nav.Link id='menus' href="#">Contact us</Nav.Link >
      </Nav>
    </Navbar.Collapse>
    <Button className='login' onClick={handleLogin}>Log in</Button>
  </Container>
</Navbar>
  </>;
}

export default Navbar1;
