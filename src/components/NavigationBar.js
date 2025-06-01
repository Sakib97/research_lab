import { useState } from 'react';
import styles from '../css/Navbar.module.css';
import { Navbar, Nav, NavDropdown, Container, Button } from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';
import useScrollDirection from '../hooks/useScrollDirection';
import { Link } from 'react-router-dom';
import brand from '../assets/brand.png'; // Assuming you have a brand image
const NavigationBar = () => {
    const [showOffcanvas, setShowOffcanvas] = useState(false);

    const handleClose = () => setShowOffcanvas(false);
    const handleShow = () => setShowOffcanvas(true);
    const showNavbar = useScrollDirection();
    // console.log("Navbar visibility:", showNavbar);

    return (
        <div>

            <Navbar bg="light" expand="lg"
                // className="shadow-sm mb-3"
                className={`shadow-sm fixed-top ${showNavbar ? styles.navbarShow : styles.navbarHide}`}
            >
                <Container>
                    <Navbar.Brand href="/">
                        {/* <span role="img" aria-label="logo">🧪</span>  */}
                        <img
                            alt=""
                            src={brand}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        /> &nbsp;
                        <span style={{ fontWeight: 'bold' }}>ECE Research Lab</span>
                    </Navbar.Brand>

                    {/* Offcanvas Toggle Button */}
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} onClick={handleShow}>
                        {/* <i class="fa-solid fa-ellipsis-vertical"></i> */}
                    </Navbar.Toggle>
                    {/* Offcanvas Component */}
                    <Navbar.Offcanvas
                        restoreFocus={false}
                        id={`offcanvasNavbar-expand-lg`}
                        show={showOffcanvas}
                        onHide={handleClose}
                        aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                                Menu
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Nav.Link as={Link} to="/"
                                    onClick={handleClose}
                                >

                                    Home</Nav.Link>

                                {/* <Nav.Link href="#publications">Publications</Nav.Link> */}
                                <Nav.Link
                                    as={Link} to="/#ongoing-projects"
                                    // href="/#ongoing-projects"
                                    onClick={handleClose}>
                                    Ongoing Projects</Nav.Link>

                                <Nav.Link
                                    as={Link} to="/#completed-projects"
                                    // href="/#completed-projects"
                                    onClick={handleClose}>
                                    Completed Projects</Nav.Link>

                                <Nav.Link as={Link} to="/people"
                                    onClick={handleClose}
                                >People</Nav.Link>

                                <Nav.Link as={Link} to="/contact"
                                    onClick={handleClose}>Contact</Nav.Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavigationBar;