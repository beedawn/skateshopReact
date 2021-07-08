import React from 'react';
import "./styles.css";
import { Link } from 'react-router-dom';







function Home (props) {

    const products = props.products; 

    const featuredProduct = products.filter(function (el){
        return el.featured === "true";
    })
    
return(
    <div>
       <div className="container">
        <div className="content">
            <div className="row">
                <div className="col-lg-6">
                    <h4>Featured Products</h4>
                    <div className="row">
                    {featuredProduct.map(({id, name, src, price, category, featured, description}) => <div className="col-lg-4 col-sm-6 featured-col"> <Link to={'/product/' + id}><img className="featured-thumbnail" key={id} src={src} title={name} alt={description} /></Link> </div>)}
                        </div>
                        
                    </div>
                
                

                <div className="col-lg-6">
                    <h4>Featured Videos </h4>
                    <div className="row"> <video className="img-fluid" width="640" height="360" controls>
                            <source src="imgs/video.mp4" type="video/mp4" />
                            <source src="imgs/video.webm" type="video/webm" />
                            Your browser does not support the video tag.
                        </video> </div>
                    <div className="row"><video className="img-fluid" width="640" height="360" controls>
                            <source src="imgs/video_2.mp4" type="video/mp4" />
                            <source src="imgs/video_2.webm" type="video/webm" />
                            Your browser does not support the video tag.
                        </video> </div>
                </div>
            </div>
            </div>
        </div>
    </div> 


  
);
}

export default Home;