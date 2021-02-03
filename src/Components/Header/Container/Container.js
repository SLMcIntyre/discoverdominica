import React from 'react';
import classes from './Container.module.css';
import Button from '../../Button/Button';
// import divingtripsitinerary  from '../../../assets/images/diving-trips-itinerary.jpeg';
import Jumbotron from './Jumbotron/Jumbotron';
import Navbar from '../Container/NavBar/NavBar';


const Container = () => {
    return (
        <div className={classes.Container}>
            {/* <Button>BOOK A TRIP</Button> */}
            <div className="container">
                <div className="list">
                    <div className= "hero position-relative">
                    <Button a href="https://discoverdominica.bookdirect.net/#/lodgings?campaign=headerlink" target="_blank">BOOK A TRIP</Button>
                    <Navbar />
                    <Jumbotron />

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Container;