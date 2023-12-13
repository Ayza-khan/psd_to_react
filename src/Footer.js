import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
function Footer(){
    const caption_roll = new URL(
        "C:/Users/nfc/Documents/project_react/psd/psd-to-react/src/captain-logo.gif",
        import.meta.url
      );
    return(
        <footer className=" wow animate__animated animate__fadeInDown" data-wow-duration="2s">
        <div className="d-flex justify-content-center flex-column align-items-center position__text mt-4 footer__content">
        <div className="extra--marg">
            <a href="/"><img className="footer-logo wow animate__animated animate__flipInX" data-wow-duration="3s"
                src={caption_roll} alt=""/></a>
        </div>
        <p className="banner__captain mb-0 mt-5 wow animate__animated animate__fadeInUp" data-wow-duration="2s">captain</p>
        <h1 className="roller__text mb-0 wow animate__animated animate__fadeInUp" data-wow-duration="2s">roll</h1>
        <div className="position_links d-flex justify-content-center wow animate__animated animate__fadeInUp"
            data-wow-duration="3s">
            <a className="footer-link2" aria-current="page" href="/"><FontAwesomeIcon icon={faDiscord} className="mx-2" size="2x" color="black"> </FontAwesomeIcon></a>
            <a className="footer-link2" href="/"><FontAwesomeIcon icon={faTwitter} className="mx-2" size="2x" color="black"> </FontAwesomeIcon></a>
        </div>
        </div>
         </footer>
    );
} 
export default Footer;