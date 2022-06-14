import React from 'react';
import classes from './Header.module.css';
import logo from '../../../assets/images/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav,Navbar,Container, NavLink} from 'react-bootstrap'
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import { Link } from 'react-router-dom';




const Header = () =>{

    return<>
        <Navbar expand="lg" className={classes['nav-bg']}>
            <Container>
                <Navbar.Brand to="/" className={classes['nav-logo']}>
                    <img src={logo} alt=""/>
                </Navbar.Brand>
                <Navbar.Toggle style={{boxShadow: "none"}}> 
                    <DensityMediumIcon style={{fill: "white", width: "32px", height: "32px"}}/>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className={classes['nav-list']}>
                        <Link to="/">Home</Link>
                        <Link to="/Home">SERVICES</Link>
                        <Link to="#">ABOUT US</Link>
                        <Link to="#">PRICING</Link>
                        <Link to="#">TRAINER</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
        
}
export default Header ;