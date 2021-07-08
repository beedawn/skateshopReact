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
import { Link } from 'react-router-dom';

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
        <NavbarBrand><Link to="/">Bob's Skateshop</Link></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink to="/">Home</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Products
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem><Link to="/category/Completes">Completes</Link></DropdownItem>
                <DropdownItem ><Link to="/category/Decks">Decks</Link></DropdownItem>
                <DropdownItem ><Link to="/category/Trucks">Trucks</Link></DropdownItem>
                <DropdownItem ><Link to="/category/Wheels">Wheels</Link></DropdownItem>
                <DropdownItem><Link to="/category/Bearings">Bearings</Link></DropdownItem>
                <DropdownItem> <Link to="/category/Accessories">Accessories</Link></DropdownItem>
                <DropdownItem divider />
                <DropdownItem><Link to="/category/Clothing">Clothing</Link></DropdownItem>
                <DropdownItem><Link to="/category/Shoes">Shoes</Link></DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

            <NavItem>
              <NavLink to="/about"><li>About</li></NavLink>
            </NavItem>
            <NavItem>
              <NavLink><Link to="/contact">Contact</Link></NavLink>
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
