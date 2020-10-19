import React from 'react'
import "./Footer.css"
import { faInstagram, faFacebook, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function Footer() {
    return (
        <div className="footer container-fluid" >
            <a href="https://www.instagram.com/dev_laukey/" className="footer_logo" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="https://www.facebook.com/star.devs.5" className="footer_logo" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="https://twitter.com/DLaukey" className="footer_logo" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="https://wa.link/2782jw" className="footer_logo" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faWhatsapp} /></a>
        </div >

    )
}

export default Footer