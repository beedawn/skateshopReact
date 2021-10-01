import React, { useState, useEffect } from "react";
import {
    Button,
  Input,
  FormGroup,
  Label,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
} from "reactstrap";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";

import { connect, useDispatch } from "react-redux";
import {removeFromCart, adjustQty} from '../state/action-creators/index'

const CartItem = ({product}) => {

    const dispatch = useDispatch();
    const [input, setInput] = useState(product.qty); //needs work
    // const { adjustQty, removeFromCart } = bindActionCreators(actionCreators, dispatch);
console.log(adjustQty(product.id, 5));
  const onChangeHandler= (e) => {
    setInput (e.target.value);
    adjustQty(product.id, e.target.value);
    console.log(adjustQty(product.id, e.target.value))

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
                  <Button onClick={()=>removeFromCart(product)} >Delete</Button>
                </InputGroup>
              </FormGroup>
    )
  };


  
  
  const mapDispatchToProps = dispatch => {
    return{
      removeFromCart: () => (id) => dispatch(removeFromCart(id)),
      adjustQty: () => (id, value) => dispatch(adjustQty(id,value))
  };
  };


  export default connect(null,mapDispatchToProps)(CartItem);