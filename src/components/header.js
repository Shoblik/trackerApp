import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <div className="headerContainer">
            <Link to="/homepage"><h1>Tracker App</h1></Link>
            <div className="subtitle">
                <p>Analytics for various things</p>
            </div>
            <div className='logo'></div>
        </div>
    )
}
export default Header;