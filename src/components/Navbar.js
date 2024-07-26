import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import menuLogo from "../assets/images/logo/round-logo.webp";

const Navigator = () => {
    return (
      <Navbar expand="lg" className="main-nav shadow" bg="light">        
        <span className="text-logo">&nbsp;&nbsp;<img src={menuLogo} class="d-inline-block align-top" alt="rounded-logo" />&nbsp;EMERALDSWISS</span>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Navbar.Brand as={NavLink} to="/"></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav mr-5" />
        <Navbar.Collapse id="basic-navbar-nav">          
          <Nav className="">
            <Nav.Link as={NavLink} to="/" activeClassName="active">
              Home <span className="separator">&nbsp;&nbsp; </span>
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about" activeClassName="active">
              About <span className="separator">&nbsp;&nbsp; </span>
            </Nav.Link>
            <Nav.Link as={NavLink} to="/ourdogs" activeClassName="active">
              Our Dogs <span className="separator">&nbsp;&nbsp;</span>
            </Nav.Link>
            <Nav.Link as={NavLink} to="/breedhealth" activeClassName="active">
              Breed Health <span className="separator">&nbsp;&nbsp;</span>
            </Nav.Link>
            <Nav.Link as={NavLink} to="/availablepuppies" activeClassName="active">
              Available Puppies <span className="separator">&nbsp;&nbsp;</span>
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contact" activeClassName="active">
              Contact Us <span className="separator">&nbsp;&nbsp;</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
  
  export default Navigator;