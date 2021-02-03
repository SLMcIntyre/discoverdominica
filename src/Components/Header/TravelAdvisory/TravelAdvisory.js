import React from 'react';
import classes from './TravelAdvisory.module.css';

const TravelAdvisory = () => {
    return (
        <div className={classes.TravelAdvisory} >
          <i className="fas fa-exclamation-triangle" aria-hidden="true"></i> <span className={classes.TravelAlert}>Travel Advisory</span> <a href="https://discoverdominica.com/travel-advisory-for-dominica" class= "text-white text-uppercase">Read More</a>
        </div>
    );
};

export default TravelAdvisory;