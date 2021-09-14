import React, { useState } from "react";
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
} from "reactstrap";

import {
  faShoppingCart,
  } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CartModal = (props) => {
  const { buttonLabel, title, className,} = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="dark" onClick={toggle}>
      <FontAwesomeIcon icon={faShoppingCart} />
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>{title}</ModalHeader>
        <ModalBody>
          <Form>
          {props.cart.map((product) => 
           <FormGroup key={product.id}>
             <img src={product.src} style={{height: 150}} alt={product.name}/>
           <Label for="item">{product.name}</Label>
           <Input type="number" name="qty" value={product.qty} />
         </FormGroup>)}
     
            
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

export default CartModal;