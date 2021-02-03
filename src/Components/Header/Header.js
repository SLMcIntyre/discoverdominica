import React from 'react';
import Container from './Container/Container';
import TravelAdvisory from './TravelAdvisory/TravelAdvisory';

const Header = () => {
    return (
        <div>
            <header className ="w-100 z-top position-absolute">
                <TravelAdvisory />
                <Container />
            </header>    
        </div>
    );
};

export default Header;