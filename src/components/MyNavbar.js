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
  Input,
} from "reactstrap";



import { faSquare, faSearch, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./MyNavBar.css";

const rightSideNavbar = {
  marginLeft: "auto",
};

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
              <NavLink href="/about">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contact">Contact</NavLink>
            </NavItem>
          </Nav>

          <Button style={rightSideNavbar}>Login</Button>
         
          <span>&nbsp;&nbsp;</span>
          <NavbarText>
            <InputGroup>
              <Input placeholder="Search" />
            </InputGroup>
          </NavbarText>


         




          <div>
            <FontAwesomeIcon icon={faSquare} />
          </div>
          <div className="icons">
          <button class="btn btn-dark my-2 my-sm-0" type="submit"><FontAwesomeIcon icon={faSearch} /> </button> <button class="btn btn-dark my-2 my-sm-0" type="submit"><FontAwesomeIcon icon={faShoppingCart} /> </button>
          </div>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default MyNavbar;
