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
  
  const handleChange = (product) => (event) => {
     product.qty=parseInt(event.target.value);
  };

  return (
    <div>
      <MyNavbar handleChange={handleChange} />
      <MyCarousel />

      <Switch>
        <Route
          path="/home"
          render={(props) => (
            <Home products={products} />
          )}
        />
        <Route
          path="/product/:p"
          render={(props) => (
            <SingleProduct
              products={products}
              product={props.match.params.p}
              handleChange={handleChange}
            />
          )}
        />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route
          path="/category/:id"
          render={(props) => (
            <ProductView
              products={products}
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
