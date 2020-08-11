import React from 'react';
import {Link} from 'react-router-dom';

const Footer = (props)=> {
  return (
    <footer className="footer">
    <div className="content has-text-centered">
    <Link to="/about"className="navLink">
    About
    </Link>
    <Link to="/delivery" className="navLink">
    Delivery
    </Link>
    <Link to="/contact" className="navLink">
    Contact
    </Link>
    <i className="fa fa-facebook-official" aria-hidden="true"></i>
    <i className="fa fa-instagram" aria-hidden="true"></i>
    <a href="https://github.com/KatKmiotek/group_project/tree/master"target="_blank" rel="noopener noreferrer">
    <i className="fa fa-github navLink" aria-hidden="true"></i>
    </a>
    </div>
    </footer>
  );
};

export default Footer;
