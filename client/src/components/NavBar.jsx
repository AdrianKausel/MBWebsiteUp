import React from "react";
import { useContext } from "react";
import NavBarContext from "../context/NavBarContext";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, Navigate } from "react-router-dom";



const NavBar =({contactRef})=> {

    const context = useContext(NavBarContext)






    return (
        <Navbar  className="color-nav" fixed="top" expand="lg">
            <Container>
                <h1 className="maintitle"><span className="maintitle2">M&B</span>GROUP </h1>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                        <Link className="links" to='/' style={{textDecoration: 'none', color: 'black'}}>Home</Link>
                        <Link className="links" to='/' style={{textDecoration: 'none', color: 'white'}}>Quienes Somos</Link>
                        <Link className="links" to='/' style={{textDecoration: 'none', color: 'white'}}>Clientes</Link>
                    </Nav>
                    <Nav>
                        <React.Fragment>
                        <Link className="links" to='/registerUserType1'  style={{textDecoration: 'none', color: 'white'}}>Contacto</Link>
                        </React.Fragment>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}


export default NavBar;