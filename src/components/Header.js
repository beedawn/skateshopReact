import React from 'react';

function Header () {
return(
    <div>
        <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="index.html">Bob's Skateshop</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
                <a className="nav-link" href="index.html">Home<span className="sr-only">(current)</span></a>
            </li>

            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Products
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="products.html#completes">Completes</a>
                    <a className="dropdown-item" href="products.html#decks">Decks</a>
                    <a className="dropdown-item" href="products.html#trucks">Trucks</a>
                    <a className="dropdown-item" href="products.html#wheels">Wheels</a>
                    <a className="dropdown-item" href="products.html#bearings">Bearings</a>
                    <a className="dropdown-item" href="products.html#accessories">Accessories</a>

                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="products.html#clothing">Clothing</a>
                    <a className="dropdown-item" href="products.html#shoes">Shoes</a>

                </div>
            </li>
            <a className="nav-link" href="about.html">About</a>
            <a className="nav-link" href="contact.html">Contact</a>
        </ul>

        <button className="btn btn-light mx-lg-2" data-toggle="modal" data-target="#loginModal">Login</button>
        <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-dark my-2 my-sm-0" type="submit"><i className="fa fa-search"></i></button>
        </form>
        <div className="shopping-cart"><button className="btn btn-dark" data-toggle="modal"
                data-target="#shoppingCartModal"><a href="#"><i className="fa fa-shopping-cart"></i></a></button>
        </div>
    </div>
    </nav>
    <div className="modal fade" id="shoppingCartModal" tabindex="-1" role="dialog" aria-labelledby="shoppingCartModal"
    aria-hidden="true">
    <div className="modal-dialog" role="document">
        <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">Shopping Cart</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className="modal-body">
                <div className="container">
                    <form action="submit">
                        <div className="row">
                            <div className="col-3"> </div>
                            <div className="col-3 col-form-label">Item</div>
                            <div className="col-2 col-form-label">Price</div>
                            <div className="col-2"><label for="qtySelectCheckout"
                                className="col-form-label">Qty</label></div>
                            <div className="col-2"> </div>
                        </div>
                        <div className="row form-group">
                            <div className="col-3"> <img src="imgs/priyanuch-konkaew-wYG0QiyhrVY-unsplash.jpg"
                                    className="img-thumbnail" /></div>
                            <div className="col-3 align-self-center">Plastic Complete</div>
                            <div className="col-2 align-self-center">$29.99</div>
                            <div className="col-2 align-self-center"><select className="form-control"
                                    id="qtySelectCheckout">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select></div>
                            <div className="col-1 align-self-center"><a href="#"><i className="fa fa-trash"></i> </a></div>
                        </div>




                        <div className="row form-group">
                            <div className="col-3"> <img src="imgs/the-nigmatic-4B6pzUjkYBo-unsplash.jpg"
                                    className="img-thumbnail" /></div>
                            <div className="col-3 align-self-center">Black Wheels</div>
                            <div className="col-2 align-self-center">$29.99</div>
                            <div className="col-2 align-self-center"><select className="form-control"
                                    id="qtySelectCheckout">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select></div>
                            <div className="col-1 align-self-center"><a href="#"><i className="fa fa-trash"></i> </a></div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Checkout</button>
            </div>
        </div>
    </div>
</div>







<div className="modal fade" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="loginModalLabel"
    aria-hidden="true">
    <div className="modal-dialog" role="document">
        <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Login</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className="modal-body">
                <form>
                    <div className="form-group">
                        <label for="inputEmail">Email address</label>
                        <input type="email" className="form-control" id="inputEmail" aria-describedby="emailHelp"
                            placeholder="Enter email" />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone
                            else.</small>
                    </div>
                    <div className="form-group">
                        <label for="inputPassword">Password</label>
                        <input type="password" className="form-control" id="inputPassword" placeholder="Password" />
                    </div>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="check1" />
                        <label className="form-check-label" for="check1">Remember password?</label>
                    </div>


                    <div className="mt-3">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="submit" className="btn btn-primary">Login</button>
                        <a href="#signupModal" data-toggle="modal"><button type="button"
                                className="float-right btn btn-success" id="signupButton">Sign
                                Up</button></a>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>



<div className="modal fade" id="signupModal" tabindex="-1" role="dialog" aria-labelledby="loginModalLabel"
    aria-hidden="true">
    <div className="modal-dialog" role="document">
        <div className="modal-content">
            <div className="modal-header signup">
                <h5 className="modal-title" id="exampleModalLabel">Sign Up</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true" className="signUpModalClose">&times;</span>
                </button>
            </div>
            <div className="modal-body">
                <form>
                    <div className="form-group">
                        <label for="inputEmail">Email address</label>
                        <input type="email" className="form-control" id="inputEmail" aria-describedby="emailHelp"
                            placeholder="Enter email" />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone
                            else.</small>
                    </div>
                    <div className="form-group">
                        <label for="inputPassword">Password</label>
                        <input type="password" className="form-control" id="inputPassword" placeholder="Password" />
                    </div>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="check1" />
                        <label className="form-check-label" for="check1">Remember password?</label>
                    </div>


                    <div className="mt-3">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>

                        <button type="submit" formaction="signup.html" className="btn btn-success">Sign
                            Up</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>




<div className="row">
    <div className="col-sm-12 col-md-8 col-lg-5 col-xl-4 carousel-overlay">
        <h2> Bob's Skateshop</h2>
    </div>
</div>


<div className="carousel slide" data-ride="carousel">
    <div className="carousel-inner">
        <div className="carousel-item active">
            <img className="d-block w-100 carousel-img-control" src="imgs/jared-tomasek-_j65wtWbMbs-unsplash.jpg"
                alt="First slide" />

        </div>
        <div className="carousel-item">
            <img className="d-block w-100 carousel-img-control2"
                src="imgs/mateo-avila-chinchilla-Yt2bU-A088w-unsplash.jpg" alt="Second slide" />
        </div>
        <div className="carousel-item">
            <img className="d-block w-100 carousel-img-control" src="imgs/izzy-park-ETqZh_Oe5iE-unsplash.jpg"
                alt="Third slide" />
        </div>
    </div>
</div>

</div>
);
}

export default Header;