import React from 'react';
import "./styles.css";
import { Link } from 'react-router-dom';





function ProductView (props) {
    const cat = props.category;
    const products = props.products;

const filteredProduct = products.filter(function (el){
    return el.category === cat;
})

if(cat==="All"){
    return(
    <div>
            <div className="container">
            <div className="content">
                <div className="row product-listing">
                    
                        <h4>All Products</h4>
                        <div className="row">
           {products.map(({id, name, src, price, category, featured, description}) => 
           <div className="col-lg-4 product-col"> 
              <Link to={'/product/' + id}> <img className="product-thumbnail" key={id} src= {`/skateshop/${src}`} title={name}  /> </Link>
                    <div className="product-overlay">{name}</div>
                        <div className="product-overlay-price">{price}</div> 
            </div>)}
         
         
           </div>
        </div>
          
                            
    
                    
    
                </div>
            </div> 
         </div>
       );
    
}
if(filteredProduct.length === 0)
{return( <div>
    404 Error - Not Found
</div>)}
    return(
        <div>
            <div className="container">
            <div className="content">
                <div className="row product-listing">
                    
                        <h4>{cat}</h4>
                        <div className="row">
           {filteredProduct.map(({id, name, src, price, category, featured, description}) => 
           <div className="col-lg-4 product-col"> 
              <Link to={'/product/' + id}> <img className="product-thumbnail" key={id} src={`/skateshop/${src}`} title={name}  /> </Link>
                    <div className="product-overlay">{name}</div>
                        <div className="product-overlay-price">{price}</div> 
            </div>)}
         
         
           </div>
        </div>
          
                            
    
                    
    
                </div>
            </div> 
         </div>
       
    
     
    

    );
    }
    
    export default ProductView;