import React from 'react';
import champagnereefsnorkeling from '../../assets/images/champagne-reef-snorkeling.jpg';
import batiboubeach from '../../assets/images/batiboubeach.jpeg';
import turtle from '../../assets/images/turtle.jpeg';
import classes from '../ItineraryCards/ItineraryCards.module.css';
import { MDBMask, MDBView, MDBContainer, MDBRow, MDBCol } from "mdbreact";


const ItineraryCards = () => {
    return (
        <div className={classes.ItineraryCards}>
            <MDBContainer className="mt-5">
                <MDBRow>
                    <MDBCol md="4" className={classes.imgWrapper}>
                        <MDBView hover zoom>
                        <img
                        src={champagnereefsnorkeling} 
                        className={classes.hoverZoom}
                        alt="Champagne Reef"/>

                        <h2>Day 1</h2>

                        <MDBMask className="flex-center">
                            <p className="white-text"></p>
                        </MDBMask>
                        <p>Champagne Reef</p>
                        </MDBView>
                    </MDBCol>

                    <MDBCol md="4" className={classes.imgWrapper}>
                        <MDBView hover zoom>
                        <img
                        src={batiboubeach} 
                        className={classes.hoverZoom}
                        alt="Batibou Beach"/>

                        <h2>Day 2</h2>
                    
                        <MDBMask className="flex-center">
                            <p className="white-text"></p>
                        </MDBMask>
                        <p>Batibou Beach</p>


                        </MDBView>
                    </MDBCol>

                    <MDBCol md="4" className={classes.imgWrapper}>
                        <MDBView hover zoom>
                        <img
                        src={turtle} 
                        className={classes.hoverZoom}
                        alt="Turtle"/>

                        <h2 className="flex-center">Day 3</h2>
                        <p className="white-text">L'abym (la sourcier) means "the Abyss"</p>

                        {/* <MDBMask className="flex-center">
                            <p className="white-text">Zoom effect</p>
                        </MDBMask> */}

                        </MDBView>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </div>
    );
};

export default ItineraryCards;