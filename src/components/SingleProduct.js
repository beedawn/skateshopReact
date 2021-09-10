import React from 'react';
import CartModal from './CartModal';
import "./styles.css";
import { Link } from 'react-router-dom';




function SingleProduct (props) {
    const cat = props.product;
    const products = props.products;
    const setCartItems = props.setCartItems;

    const addNewItem = props.addNewItem;
const filteredProduct = products.filter(function (el){
    return el.id === cat;
})



if(filteredProduct.length === 0)
{return( <div>
    404 Error - Not Found
</div>)}
    return(
<div>

<div class="container">
    <div class="content">
        <div class="row">
            <div class="col pb-4">
            {filteredProduct.map(({category, featured, description}) => 
                <Link to={'/category/' + category}><i class="fa fa-backward mr-2"></i>Back to {category}</Link>
            )}
            </div>
        </div>
        <div class="row">
            <div class="col-lg-7">
                {filteredProduct.map(({id, name, src, price, category, featured, description}) => 
           <div className="col-lg-7 "> 
                <img className="product-page-img" key={id} src={src} title={name}  /> 
                    
            </div>)}
            </div>
            <div class="col-lg-5">
            {filteredProduct.map((product) => 
            <div>
                <h3 class="product-page-h3">{product.brand}</h3>
                <h4 class="product-page-h4">{product.name} </h4>
                <hr />
                <p>{product.description}
                </p>
                <p>${product.price}</p>
                <form onSubmit={props.handleSubmit}>
                    <div class="form-group row">
                        <label for="qtySelect" class="mr-3 col-2 col-form-label">Qty:</label>
                        <input type="number" class="form-control col-3 col-md-2" id="qtySelect" onChange={props.handleChange(product)}></input>
                            
                    </div>
                    <div class="row">
                        <div class="col">
                            <button type="button" class="btn btn-primary" onClick={() => {addNewItem(product)}}>Add to Cart</button>
                        
                         <button type="button" class="btn btn-outline-primary">Buy
                                Now</button>
                        </div>
                    </div>
            
                </form>
                </div>)}
                <hr />
                <p id="shipping">Pick up is always free. Free shipping available on orders over $50.</p>
            </div>
        </div>
    </div>
    </div>
    </div>
   
    
    
     
    

    );
    }
    
    export default SingleProduct;