import React from 'react';
import './Footer.css';
import { faInstagram,faTwitter,faYoutube, faCcAmex, faCcDiscover, faPaypal, faCcMastercard, faCcVisa } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Footer () {
return(
    <div>
       
       <footer className="site-footer">

<div className="row">
    <div className="col-md-8 col-lg-9">
        <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
        <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
        <a href="#"><FontAwesomeIcon icon={faYoutube} /></a>

    </div>
    <div className="col-md-4 col-lg-3">
    <FontAwesomeIcon icon={faCcAmex} />
    <FontAwesomeIcon icon={faCcDiscover} />
    <FontAwesomeIcon icon={faPaypal} />
    <FontAwesomeIcon icon={faCcMastercard} />
    <FontAwesomeIcon icon={faCcVisa} />
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