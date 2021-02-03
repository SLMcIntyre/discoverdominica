import React from 'react';
import logomain from '../../assets/images/logo-main.png';
import kalinagobaranaaute from '../../assets/images/kalinago-barana-aute.jpg';
import classes from '../Footer/Footer.module.css';

const Footer = () => {
    return (
        <div className={classes.Footer}>
        <img src= {kalinagobaranaaute} alt= "Kalinago basket " className={classes.backgroundimage} /> 

          <div className ="logo py-5 px-gutter"  >
              <div className ="d-flex flex-column">
                  <img src= {logomain} alt= " " className= {logomain} width = '300px' /> 
              </div>
          </div>
        </div>
    );
};

export default Footer;