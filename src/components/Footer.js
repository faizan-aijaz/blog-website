
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div style={contentStyle}>
        <div>
          <h3>Contact Us</h3>
          <p>Email: info@example.com</p>
          <p>Phone: +1 (123) 456-7890</p>
        </div>
        <div>
          <h3>Follow Us</h3>
          <div style={socialMediaStyle}>
            {/* Social media icons */}
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={30} style={iconStyle} />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={30} style={iconStyle} />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={30} style={iconStyle} />
            </a>
          </div>
        </div>
      </div>
      <div style={copyrightStyle}>
        <p>&copy; 2023 BLOGIFY</p>
      </div>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: '#543b1b',
  color: '#fff',
  paddingTop: '20px',
  marginTop: '30px',
  paddingLeft: '20px',
  paddingRight:'20px'
};

const contentStyle = {
  display: 'flex',
  justifyContent: 'space-between',
};

const socialMediaStyle = {
  display: 'flex',
  gap: '10px',
};

const iconStyle = {
  color: '#fff',
};

const copyrightStyle = {
  textAlign: 'center',
  marginTop: '20px',
};

export default Footer;
