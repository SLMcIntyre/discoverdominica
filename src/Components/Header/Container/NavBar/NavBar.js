import React from 'react';
import logomain from '../../../../assets/images/logo-main.png';
import reefdiver from '../../../../assets/images/reefdiver.jpeg';
import cruiseandsnorkel from '../../../../assets/images/cruise-and-snorkel.jpg';
import classes from '../NavBar/NavBar.module.css';


const Navbar = () => {
    return (
        <nav className={classes.NavBar}>
            <div>
            <ul>
                <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="https://discoverdominica.com/en/dominica" role="button" aria-haspopup="true" aria-expanded="false">DOMINICA</a>
                <div className="dropdown-menu">
                <a className="dropdown-item" href="https://discoverdominica.com/en/history-culture">HISTORY & CULTURE</a>
                <a className="dropdown-item" href="https://discoverdominica.com/en/must-see-dominica">MUST-SEE DOMINICA</a>
                <div className="dropdown-image"> <img src= {reefdiver} alt= " " className = "reefdiver" /> 
                </div>
                <p>MUST-SEE</p>
                <a className="featured-dropdown-item" href="https://discoverdominica.com/en/places/76/champagne-r%C3%A9cif">CHAMPAGNE REEF</a>
                </div>
                </li>
            </ul>

            <ul>
                <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="https://discoverdominica.com/en/dominica" role="button" aria-haspopup="true" aria-expanded="false">EXPERIENCES</a>
                <div className="dropdown-menu">
                <a className="dropdown-item" href="https://discoverdominica.com/en/itineraries">ITINERARIES</a>
                <a className="dropdown-item" href="https://discoverdominica.com/en/adventures">ADVENTURES</a>
                <a className="dropdown-item" href="https://discoverdominica.com/en/tour-operators">TOUR OPERATORS</a>
                <a className="dropdown-item" href="https://discoverdominica.com/en/events-calendar">EVENT CALENDAR</a>
                <div className="dropdown-image"> <img src= {cruiseandsnorkel} alt= " " className = "cruiseandsnorkel" /> 
                </div>
                <p>SAMPLE ITINERARY</p>
                <a className="featured-dropdown-item" href="https://discoverdominica.com/en/lists/2/diving-trips">DIVING STAYS</a>
                </div>
                </li>
            </ul>
            </div>

            <img src= {logomain} alt= " " classNameName = "logomain" /> 

            <div>
            <ul>
                <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="https://discoverdominica.com/en/dominica" role="button" aria-haspopup="true" aria-expanded="false">FOOD AND LODGING</a>
                <div className="dropdown-menu">
                <a className="dropdown-item" href="https://discoverdominica.com/en/history-culture">HOTELS</a>
                <a className="dropdown-item" href="https://discoverdominica.com/en/must-see-dominica">RESTAURANTS</a>
                <a className="dropdown-item" href="https://discoverdominica.com/en/must-see-dominica">APARTMENTS</a>
                <a className="dropdown-item" href="https://discoverdominica.com/en/must-see-dominica">COTTAGES</a>
                <a className="dropdown-item" href="https://discoverdominica.com/en/must-see-dominica">GUEST HOUSES</a>
                <div className="dropdown-image"> <img src= {reefdiver} alt= " " className = "reefdiver" /> 
                </div>
                <p>FEATURED HOTEL</p>
                <a className="featured-dropdown-item" href="https://discoverdominica.com/en/places/76/champagne-r%C3%A9cif">WANDERLUST CARIBBEAN</a>
                </div>
                </li>
            </ul>

            <ul>
                <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="https://discoverdominica.com/en/dominica" role="button" aria-haspopup="true" aria-expanded="false">GETTING HERE</a>
                <div className="dropdown-menu">
                <a className="dropdown-item" href="https://discoverdominica.com/en/itineraries">TRAVEL ADVISORY</a>
                <a className="dropdown-item" href="https://discoverdominica.com/en/adventures">AIRLINES</a>
                <a className="dropdown-item" href="https://discoverdominica.com/en/tour-operators">CRUISE GUESTS</a>
                <a className="dropdown-item" href="https://discoverdominica.com/en/events-calendar">ISLAND HOPPING/FERRIES</a>
                <a className="dropdown-item" href="https://discoverdominica.com/en/events-calendar">ISLAND TRANSPORTATION</a>
                <a className="dropdown-item" href="https://discoverdominica.com/en/events-calendar">USEFUL INFORMATION</a>
                </div>
                </li>
            </ul>
 
            </div>

        </nav>
    );
};

export default Navbar;