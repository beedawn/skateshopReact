import React from 'react';
import './Footer.css';
import { faInstagram,faTwitter,faYoutube, faCcAmex, faCcDiscover, faPaypal, faCcMastercard, faCcVisa } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Footer () {
return(
    <div>
       
       <footer className="site-footer fixed-bottom">

<div className="row">
    <div className="col-md-8 col-lg-9">
        <span className="padding-footer"><a href="#"><FontAwesomeIcon icon={faInstagram} /></a></span>
        <span className="padding-footer"><a href="#"><FontAwesomeIcon icon={faYoutube} /></a></span>
        <span className="padding-footer"><a href="#"><FontAwesomeIcon icon={faTwitter} /></a></span>
        

    </div>
    <div className="col-md-4 col-lg-3">
    <span className="padding-footer"> <FontAwesomeIcon icon={faPaypal} /></span>
    <span className="padding-footer"><FontAwesomeIcon icon={faCcAmex}/></span>
    <span className="padding-footer"><FontAwesomeIcon icon={faCcDiscover} /></span>
    <span className="padding-footer"><FontAwesomeIcon icon={faCcMastercard} /></span>
    <span className="padding-footer"><FontAwesomeIcon icon={faCcVisa} /></span>
    </div>

</div>
<div className="row">
    <div className="col-md-8 col-lg-9">
        <h5 id="copyright"> <span dangerouslySetInnerHTML={{ "__html": "&copy;" }} />Bob's Skateshop 2021</h5>
    </div>
</div>
</footer>

</div>
);
}

export default Footer;