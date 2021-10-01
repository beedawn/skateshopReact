import React, { useState } from "react";
import {
    Button,
  Input,
  FormGroup,
  Label,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
} from "reactstrap";


import { connect, useDispatch } from "react-redux";
import {removeFromCart, adjustQty} from '../state/action-creators/index'

const CartItem = ({product, adjustQty, removeFromCart}) => {
    const dispatch = useDispatch();
   
    const [input, setInput] = useState(product.qty); 
  const onChangeHandler= (e) => {
    setInput (e.target.value);
    adjustQty(product.id, e.target.value);
   
    

  }
    return(
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
                    onChange={onChangeHandler}
                    value={input}
                  />
                  <InputGroupAddon addonType="append" />{" "}
                  <InputGroupText for="price" color="danger">
                    $ {product.price}
                  </InputGroupText>
                  <Button onClick={() => dispatch(removeFromCart(product))}>Delete</Button>
                </InputGroup>
              </FormGroup>
    )
  };


  
  
  const mapDispatchToProps = {
      removeFromCart: ((id) => removeFromCart(id)),
      adjustQty: ((id, value) => adjustQty(id,value))
  };
  


  export default connect(null,mapDispatchToProps)(CartItem);