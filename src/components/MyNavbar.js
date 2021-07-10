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

const style = {
  textDecoration: 'none'
}

const navBarDropdownStyle = {
color:'#000000'
}
const MyNavbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="sticky-top">
      <Navbar color="light" className="bg-dark p-2 " dark expand="lg">
      <Link to="/" style={style}><NavbarBrand>Bob's Skateshop</NavbarBrand></Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
            <Link to="/" style={style}><NavLink to="/">Home</NavLink></Link>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Products
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem><Link to="/category/Completes" style={(navBarDropdownStyle, style)}>Completes</Link></DropdownItem>
                <DropdownItem ><Link to="/category/Decks" style={style}>Decks</Link></DropdownItem>
                <DropdownItem ><Link to="/category/Trucks" style={style}>Trucks</Link></DropdownItem>
                <DropdownItem ><Link to="/category/Wheels" style={style}>Wheels</Link></DropdownItem>
                <DropdownItem><Link to="/category/Bearings" style={style}>Bearings</Link></DropdownItem>
                <DropdownItem> <Link to="/category/Accessories" style={style}>Accessories</Link></DropdownItem>
                <DropdownItem divider />
                <DropdownItem><Link to="/category/Clothing" style={style}>Clothing</Link></DropdownItem>
                <DropdownItem><Link to="/category/Shoes" style={style}>Shoes</Link></DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

            <NavItem>
             <Link to="/about" style={style}> <NavLink>About</NavLink></Link>
            </NavItem>
            <NavItem>
            <Link to="/contact" style={style}><NavLink>Contact</NavLink></Link>
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
