import React from "react";

import MyNavbar from "./MyNavbar";
import MyCarousel from "./MyCarousel";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

function Main() {
  return (
    <div>
      <MyNavbar />
      <MyCarousel />

      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        {/* <Route exact path='/directory' render={() => <Directory campsites={this.props.campsites} />} />
                     
                           <Route exact path='/contactus' render={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm} feedback={postFeedback}/> } />
                            <Route exact path='/aboutus' render={() => <About partners={this.props.partners} /> } /> */}
        <Redirect to="/home" />
      </Switch>
      <Footer />
    </div>
  );
}

export default Main;
