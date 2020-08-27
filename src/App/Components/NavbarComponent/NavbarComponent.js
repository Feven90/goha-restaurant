import React, {useState} from 'react';
import './NavbarComponent.scss';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
  } from 'reactstrap';
      
      function NavbarComponent() {
        const [isOpen, setIsOpen] = useState(false);
        const toggle = () => setIsOpen(!isOpen);
    return (
        <div className="navbar-container">
            <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Goha</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="menu">Menu</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="location">Location</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="contact">Contact</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        </div>
    )
}

export default NavbarComponent;
