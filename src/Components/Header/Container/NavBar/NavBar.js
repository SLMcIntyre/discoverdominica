import React, { useState } from 'react';
import logomain from '../../../../assets/images/logo-main.png';
import reefdiver from '../../../../assets/images/reefdiver.jpeg';
import cruiseandsnorkel from '../../../../assets/images/cruise-and-snorkel.jpg';
import wanderlust from '../../../../assets/images/wanderlust.jpeg';
import classes from '../NavBar/NavBar.module.css';
import Dropdown from 'react-bootstrap/Dropdown';


function Navbar (props)  {
    // constructor(props) {
    //     super(props);

    //     this.toggle = this.toggle.bind(this);
    //     this.onMouseEnter = this.onMouseEnter.bind(this);
    //     this.onMouseLeave = this.onMouseLeave.bind(this);
    //     this.state = {
    //         dropdownOpen: false
    //     };
    // }

    // toggle() {
    //     this.setState(prevState => ({
    //         dropdownOpen: !prevState.dropdownOpen
    //     }));
    // }

    // onMouseEnter() {
    //     this.setState({dropdownOpen: true});
    // }

    // onMouseLeave() {
    //     this.setState({dropdownOpen: false});
    // }

    // render () {

    const [isOpen, updateIsOpen] = useState(false);

    return (
        <nav className={classes.NavBar}>
            <div>
            <ul>
             
                <li className={classes.navItemDropdown}>
                <Dropdown
                {...props}
                onMouseOver={() => updateIsOpen(true)}
                onFocus={() => updateIsOpen(true)}
                onMouseLeave={() => updateIsOpen(false)}
                onBlur={() => updateIsOpen(false)}
                toggle={() => updateIsOpen(!isOpen)}
                isOpen={isOpen} />

                  {/* onMouseOver={this.onMouseEnter} 
                 onMouseLeave={this.onMouseLeave}
                  isOpen={this.state.dropdownOpen}
                toggle={this.toggle} */}

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
                <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="https://discoverdominica.com/en/experiences" role="button" aria-haspopup="true" aria-expanded="false">EXPERIENCES</a>
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
                <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="https://discoverdominica.com/en/accommodations" role="button" aria-haspopup="true" aria-expanded="false">FOOD AND LODGING</a>
                <div className="dropdown-menu">
                <a className="dropdown-item" href="https://discoverdominica.com/en/hotels">HOTELS</a>
                <a className="dropdown-item" href="https://discoverdominica.com/en/restaurants">RESTAURANTS</a>
                <a className="dropdown-item" href="https://discoverdominica.com/en/apartments">APARTMENTS</a>
                <a className="dropdown-item" href="https://discoverdominica.com/en/cottages">COTTAGES</a>
                <a className="dropdown-item" href="https://discoverdominica.com/en/guesthouses">GUEST HOUSES</a>
                <div className="dropdown-image"> <img src= {wanderlust} alt= " " className = "wanderlust" /> 
                </div>
                <p>FEATURED HOTEL</p>
                <a className="featured-dropdown-item" href="https://discoverdominica.com/en/places/90/wanderlust-caribbean">WANDERLUST CARIBBEAN</a>
                </div>
                </li>
            </ul>

            <ul>
                <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="https://discoverdominica.com/en/getting-here" role="button" aria-haspopup="true" aria-expanded="false">GETTING HERE</a>
                <div className="dropdown-menu">
                <a className="dropdown-item" href="https://discoverdominica.com/en/travel-advisory-for-dominica">TRAVEL ADVISORY</a>
                <a className="dropdown-item" href="https://discoverdominica.com/en/airlines">AIRLINES</a>
                <a className="dropdown-item" href="https://discoverdominica.com/en/cruise-guests">CRUISE GUESTS</a>
                <a className="dropdown-item" href="https://discoverdominica.com/en/island-hoppingferries">ISLAND HOPPING/FERRIES</a>
                <a className="dropdown-item" href="https://discoverdominica.com/en/island-transportation">ISLAND TRANSPORTATION</a>
                <a className="dropdown-item" href="https://discoverdominica.com/en/useful-information">USEFUL INFORMATION</a>
                </div>
                </li>
            </ul>
 
            </div>

        </nav>
    );
};

export default Navbar;