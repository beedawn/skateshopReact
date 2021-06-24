import React from 'react';
import PRODUCTS from '../shared/Products';
import "./styles.css";





function SingleProduct (props) {
    const cat = props.product;

    const addNewItem = () => {
        this.setState({cart: [...this.state.cart, this.state.input]});
      }; 
const filteredProduct = PRODUCTS.filter(function (el){
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
                <a href={'/category/' + category}><i class="fa fa-backward mr-2"></i>Back to {category}</a>
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
            {filteredProduct.map(({name, price, brand, category, featured, description}) => 
            <div>
                <h3 class="product-page-h3">{brand}</h3>
                <h4 class="product-page-h4">{name} </h4>
                <hr />
                <p>{description}
                </p>
                <p>${price}</p>
                <form>
                    <div class="form-group row">
                        <label for="qtySelect" class="mr-3 col-2 col-form-label">Qty:</label>
                        <select class="form-control col-3 col-md-2" id="qtySelect">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                    <div class="row">
                        <div class="col">
                            <button type="submit" class="btn btn-primary">Add to Cart</button>
                        
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