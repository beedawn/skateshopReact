import React, { useState, useEffect } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  FormGroup,
  Label,
  Form,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  
} from "reactstrap";

import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";
import { connect } from 'react-redux';


const CartModal = (props) => {
  const [cartCount, setCartCount] = useState(0);
  useEffect(() => {
    let count = 0;
    props.cart.forEach(item => {
      count = props.cart.length;
    });
    setCartCount(count);
  }, [props.cart, cartCount]);
  const store = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const { buttonLabel, title, className } = props;
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  let priceTruncator = function(total, array){
    return parseFloat((total + (array.price* array.qty)).toFixed(2))
  }


  let totalTruncator = function(total, array){
    return parseInt((total +  array.qty))
  }
 
  let cost = store.cart.reduce(priceTruncator,0)
  let total = store.cart.reduce(totalTruncator,0);

  return (
    <div>
      <Button color="dark" onClick={toggle}>
        <FontAwesomeIcon icon={faShoppingCart} /> <div>{cartCount}</div>
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>{title}</ModalHeader>
        <ModalBody>
          <Form>
            {store.cart.map((product) => (
              <FormGroup key={product.id}>
                <img
                  src={product.src}
                  style={{ height: 150 }}
                  alt={product.name}
                />
                <Label for="item">{product.name}</Label>

                <InputGroup>
                  <Input
                    type="number"
                    name="qty"
                    onChange={props.handleChange(product)}
                    value={product.qty}
                    
                  />
                  <InputGroupAddon addonType="append" />{" "}
                  <InputGroupText for="price"  color="danger">
                    $ {product.price}
                  </InputGroupText>
                </InputGroup>
              </FormGroup>
            ))}
            
          $ {cost} Total QTY : {total}
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Do Something
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};
const mapStateToProps = state => {
  return{
    cart:state.cart.cart
  }
}

export default connect(mapStateToProps)(CartModal);
