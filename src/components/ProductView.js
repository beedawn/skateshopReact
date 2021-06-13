import React from 'react';
import PRODUCTS from '../shared/Products';
import "./styles.css";





function ProductView (props) {
    const cat = props.category;
    

const filteredProduct = PRODUCTS.filter(function (el){
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
           {PRODUCTS.map(({id, name, src, price, category, featured, description}) => 
           <div className="col-6 col-md-4 product-col"> 
              <a href={'/product/' + id}> <img className="product-thumbnail" key={id} src={src} title={name}  /> </a>
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
           <div className="col-6 col-md-4 product-col"> 
              <a href={'/product/' + id}> <img className="product-thumbnail" key={id} src={src} title={name}  /> </a>
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