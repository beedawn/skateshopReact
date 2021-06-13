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
            <div className="container">
            <div className="content">
                <div className="row product-listing">
                    
                        <h4></h4>
                        <a href="/category/All">Back to all Products</a>
                        <div className="row">
           {filteredProduct.map(({id, name, src, price, category, featured, description}) => 
           <div className="col-6 col-md-4 product-col"> 
                <img className="product-thumbnail" key={id} src={src} title={name}  /> 
                    <div className="product-overlay">{name}</div>
                        <div className="product-overlay-price">{price}</div> 
            </div>)}
         <button onClick={addNewItem}>hello</button>
         
           </div>
        </div>
          
                            
    
                    
    
                </div>
            </div> 
         </div>
       
    
     
    

    );
    }
    
    export default SingleProduct;