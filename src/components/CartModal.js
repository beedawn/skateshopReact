import React, { useState, useEffect } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
} from "reactstrap";

import CartItem from "./CartItem";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect, useSelector, useDispatch } from "react-redux";




const CartModal = (props, {item}) => {

  const [cartCount, setCartCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    let count = 0;
    props.cart.forEach((item) => {
      count += item.qty;
    });

    setCartCount(count);
  }, [props.cart, cartCount]);
  const store = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const { title, className } = props;

  useEffect(() => {
    let items= 0;
    let price = 0;

    props.cart.forEach(item =>{
      items += item.qty;
      price += item.qty * item.price;
    })
    setTotalPrice(price);
    setTotalItems(items);
  }, [
    props.cart,
    totalPrice,
    totalItems,
    setTotalPrice,
    setTotalItems,
  ]);

  const toggle = () => setModal(!modal);

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
              
              <CartItem product={product}/>
              
            ))}
            $ {totalPrice.toFixed(2)} Total QTY : {totalItems}
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

const mapStateToProps = (state) => {
  return {
    cart: state.cart.cart,
  };
};


export default connect(mapStateToProps)(CartModal);
