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
  Form,
  FormGroup
} from "reactstrap";

import {
  faSquare,
  faSearch,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./MyNavBar.css";
import LoginModal from "./LoginModal";
import CartModal from "./CartModal";

const rightSideNavbar = {
  marginLeft: "auto",
  bottom: "20rem",
};

const MyNavbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="sticky-top">
      <Navbar color="light" className="bg-dark p-2 " dark expand="lg">
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
                <DropdownItem href="/category/Completes">Completes</DropdownItem>
                <DropdownItem href="/category/Decks">Decks</DropdownItem>
                <DropdownItem href="/category/Trucks">Trucks</DropdownItem>
                <DropdownItem href="/category/Wheels">Wheels</DropdownItem>
                <DropdownItem href="/category/Bearings">Bearings</DropdownItem>
                <DropdownItem href="/category/Accessories">Accessories</DropdownItem>
                <DropdownItem divider />
                <DropdownItem href="/category/Clothing">Clothing</DropdownItem>
                <DropdownItem href="/category/Shoes">Shoes</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

            <NavItem>
              <NavLink href="/about">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contact">Contact</NavLink>
            </NavItem>
          </Nav>

          <div style={rightSideNavbar}>
            {" "}
            <LoginModal buttonLabel="Login" title="Login" />
          </div>

          <span>&nbsp;&nbsp;</span>
          <NavbarText>
            <Form>
              <FormGroup>
            <InputGroup>
              <Input placeholder="Search" />
              <button class="btn btn-dark my-0 my-sm-0" type="submit">
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </InputGroup>
            </FormGroup>
            </Form>
          </NavbarText>

          <div>
            <FontAwesomeIcon icon={faSquare} />
          </div>
          <div className="icons">
            <button class="btn btn-dark ml-0"><CartModal cart={props.cart} title="Shopping Cart" />
              {" "}
            </button>
          </div>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default MyNavbar;
