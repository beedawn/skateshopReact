import React from "react";

import MyNavbar from "./MyNavbar";
import MyCarousel from "./MyCarousel";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import ProductView from "./ProductView";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import SingleProduct from "./SingleProduct";
import PRODUCTS from "../shared/Products";
import { useState } from "react";

function Main() {
  const products = PRODUCTS;
  const [cart, setCartItems, setQty] = useState([]);

  const addNewItem = (product, addQty) => {
    // console.log('test')
    // console.log(cart.length)
    // console.log(addQty)
    if (cart.includes(product)) {
      if (addQty != undefined) {
        // console.log("test incrementer")
        console.log("Product QTY " + product.qty)
        // console.log(product.qty + parseInt(addQty))
        // console.log(typeof(product.qty))
        // console.log(typeof(parseInt(addQty)))
        product.qty = product.qty + parseInt(addQty);
      } else {
        return;
      }
    } else {
      setCartItems([...cart, product]);
      // product.qty=parseInt(addQty)
      console.log("After cart" + cart.length);
    }
  };

  const handleChange = (product) => (event) => {
    console.log(event.target.value);
    console.log("product qty" + product.qty);
    console.log(product);
    product.qty=product.qty+parseInt(event.target.value);
    // addNewItem(product, event.target.value);
  };

  return (
    <div>
      <MyNavbar cart={cart} />
      <MyCarousel />

      <Switch>
        <Route
          path="/home"
          render={(props) => (
            <Home {...props} products={products} cart={cart} />
          )}
        />
        <Route
          path="/product/:p"
          render={(props) => (
            <SingleProduct
              products={products}
              setCartItems={setCartItems}
              addNewItem={addNewItem}
              cart={cart}
              {...props}
              product={props.match.params.p}
              handleChange={handleChange}
            />
          )}
        />
        <Route path="/about" component={About} cart={cart} />
        <Route path="/contact" component={Contact} cart={cart} />
        <Route
          path="/category/:id"
          render={(props) => (
            <ProductView
              products={products}
              cart={cart}
              {...props}
              category={props.match.params.id}
            />
          )}
        />

        <Redirect to="/home" />
      </Switch>
      <Footer />
    </div>
  );
}

export default Main;
