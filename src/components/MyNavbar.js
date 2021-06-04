import React, { useState } from "react";
import {
  Collapse,
  Button,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  InputGroup,
  Input
} from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const rightSideNavbar = {
  marginLeft: 'auto'
}


const MyNavbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" className="bg-dark p-2 sticky-top" dark expand="lg">
        <NavbarBrand href="/">Bob's Skateshop</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Products
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Completes</DropdownItem>
                <DropdownItem>Decks</DropdownItem>
                <DropdownItem>Trucks</DropdownItem>
                <DropdownItem>Wheels</DropdownItem>
                <DropdownItem>Bearings</DropdownItem>
                <DropdownItem>Accessories</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Clothing</DropdownItem>
                <DropdownItem>Shoes</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

            <NavItem>
              <NavLink href="/">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Contact</NavLink>
            </NavItem>
          </Nav>
          
            <Button style={rightSideNavbar}>Login</Button>
            <span>&nbsp;&nbsp;</span>
            <NavbarText>
             
              <InputGroup >
                <Input placeholder="Search" />
              </InputGroup>
              
            </NavbarText>
         
            <div>
            <FontAwesomeIcon icon="square" /></div>
        <div >
        <FontAwesomeIcon icon="fa-search"/></div>
        </Collapse>
       
      </Navbar>
    </div>
  );
};

export default MyNavbar;
