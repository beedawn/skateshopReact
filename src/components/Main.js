import React from "react";

import MyNavbar from "./MyNavbar";
import MyCarousel from "./MyCarousel";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import ProductView from "./ProductView";
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import SingleProduct from './SingleProduct';
import PRODUCTS from '../shared/Products';
import { useState } from 'react';


function Main() {
  const products = PRODUCTS;
  const [cart, setCartItems] = useState([]);

  const addNewItem = (product) => {
    console.log('test')
    console.log(cart.length)
    setCartItems([...cart, product]);
  }; 

  
  return (
    <div>
      <MyNavbar cart={cart} />
      <MyCarousel />

      <Switch>
        <Route path="/home" render={(props) => (<Home {...props} products={products}  cart={cart} /> )} />
        <Route path="/product/:p" render={(props) => (<SingleProduct products={products} setCartItems={setCartItems} addNewItem={addNewItem} cart={cart} {...props} product={props.match.params.p} /> )} />
        <Route path="/about" component={About} cart={cart} />
        <Route path="/contact" component={Contact} cart={cart}/>
        <Route path="/category/:id" render={(props) => (<ProductView products={products} cart={cart} {...props} category={props.match.params.id} />
        )} />
         
        
         
       
        <Redirect to="/home" />
      </Switch>
      <Footer />
    </div>
  );
}

export default Main;
