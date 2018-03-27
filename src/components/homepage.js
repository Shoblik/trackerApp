import React, {Component} from 'react';
import Header from './header';
import rightArrow from '../assets/images/right_arrow.png';
import {Link} from 'react-router-dom';


class Homepage extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="toTrackingContainer">
                    <h3>What would you like to track today?</h3>
                    <Link to='/trackingConfig'><button className="arrow-button"><img src={rightArrow} /></button></Link>
                </div>
                <div className="toShowDataContainer">
                    <h3>SHOW ME THE DATA!</h3>
                    <button className="arrow-button"><img src={rightArrow} /></button>
                </div>
                <div className="toLogDataContainer">
                    <h3>Log Data Here</h3>
                    <button className="arrow-button"><img src={rightArrow} /></button>
                </div>
            </div>
        );
    }
}

export default Homepage;