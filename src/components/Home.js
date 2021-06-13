import React from 'react';
import PRODUCTS from '../shared/Products';
import "./styles.css";

const featuredProduct = PRODUCTS.filter(function (el){
    return el.featured === "true";
})


function Home () {
return(
    <div>
       
       {featuredProduct.map(({id, name, src, price, category, featured, description}) => <div className="col-4 product-col"> <img className="featured-thumbnail" key={id} src={src} title={name} alt={description} /> </div>)}
     
       {featuredProduct[0].name}
       

       <div className="container">
        <div className="content">
            <div className="row">
                <div className="col-lg-6">
                    <h4>Featured Products</h4>
                    <div className="row">
                        <div className="col-4 product-col">
                            <a href="product_page.html"><img src={process.env.PUBLIC_URL + '/imgs/priyanuch-konkaew-wYG0QiyhrVY-unsplash.jpg'}
                                    alt="" className="featured-thumbnail" /></a>
                            <a href="product_page.html"><img src="imgs/maksym-zakharyak-IjPWFZncmxs-unsplash.jpg" alt=""
                                    className="featured-thumbnail" /></a>
                            <a href="product_page.html"><img src="imgs/zachary-staines-jhMt5TTqJS0-unsplash.jpg" alt=""
                                    className="featured-thumbnail" /></a>
                        </div>
                        <div className="col-4 product-col">
                            <a href="product_page.html"> <img src="imgs/nijwam-swargiary-fk4e0R8Xw9I-unsplash.jpg" alt=""
                                    className="featured-thumbnail img-fluid" /></a>
                            <a href="product_page.html"> <img src="imgs/yangbeiyao-yu-XQcQcHfppo4-unsplash.jpg" alt=""
                                    className="featured-thumbnail img-fluid" /></a>
                            <a href="product_page.html"> <img src="imgs/chris-haws-1qOU_X8h7hw-unsplash.jpg" alt=""
                                    className="featured-thumbnail img-fluid" /></a>

                        </div>
                        <div className="col-4 product-col">
                            <a href="product_page.html"> <img src="imgs/maxwell-nelson-1iFe4x06qwc-unsplash.jpg" alt=""
                                    className="featured-thumbnail img-fluid" /></a>
                            <a href="product_page.html"> <img src="imgs/niket-nigde-9N3rS-xLfkI-unsplash.jpg" alt=""
                                    className="featured-thumbnail img-fluid" /></a>
                            <a href="product_page.html"> <img src="imgs/hello-i-m-nik-wMMfcoH2j-o-unsplash.jpg" alt=""
                                    className="featured-thumbnail img-fluid" /></a>
                        </div>
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


       {/* */}

</div>
);
}

export default Home;