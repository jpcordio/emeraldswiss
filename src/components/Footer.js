import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons'; 

function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className="container mt-5" id="footer">
      <footer>
        <div className="row">
          <div className="col-12 text-center">
            <a href="https://www.facebook.com/profile.php?id=100088444510951" target="_blank" rel="noopener noreferrer" className="social-icon social-icon-facebook">
              <FontAwesomeIcon icon={faFacebookF} size="" />
            </a>
            <a href="https://www.instagram.com/emerald_swissbmd" target="_blank" rel="noopener noreferrer" className="social-icon social-icon-instagram">
              <FontAwesomeIcon icon={faInstagram} size="" />
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-center mt-3">
            <p>
              Copyright © {year} emeraldswiss.com - <span className="font-dancing">Where Beauty Meets Boundless Love</span>
              <br />
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;