import React, {Component} from 'react';
import SecondaryHeader from './secondary_header';
import ThingsToTrack from './things_to_track';
import {Link} from 'react-router-dom';

class TrackingConfig extends Component {
    render() {
        return (
            <div>
                <Link to="/homepage"><SecondaryHeader/></Link>
                <ThingsToTrack history = {this.props.history}/>
            </div>
        )
    }
};

export default TrackingConfig;