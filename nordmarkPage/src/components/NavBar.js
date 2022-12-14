import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {useEffect, useState} from 'react';
import logo from '../assets/img/zirkel-transparent.png'
import navIcon3 from '../assets/img/nav-icon3.svg'


export const NavBar = () => {

    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return(
            <Navbar bg="light" expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} alt="Logo"/>
                    </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                    <Nav.Link href="#nordmark" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Die Nordmark</Nav.Link>
                    <Nav.Link href="#veranstaltungen" className={activeLink === 'veranstaltungen' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('veranstaltungen')}>Veranstaltungen</Nav.Link>
                </Nav>
                <span className="navbar-text">
                    <div className="social-icon">
                        <a href="https://www.instagram.com/amv_nordmark/" target="_blank" rel="noreferrer"><img src={navIcon3} alt=""/></a>
                    </div>
                    <button className="vvd" onClick={() => console.log('connect')}>
                        <Nav.Link href="#connect" onClick={() => onUpdateActiveLink('connect')}>Kontakt</Nav.Link>
                    </button>
                </span>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        );
        }