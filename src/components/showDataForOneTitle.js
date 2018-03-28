import React, {Component} from 'react';
import rightArrow from '../assets/images/right_arrow.png';

class ShowDataForOneTitle extends Component {
    render() {
        console.log(this.props);
        return (
            <div className="titleDataContainer">
                <h1>{this.props.match.params.title}</h1>
                <div className="btnContainer">
                    <button>Reset Data</button>
                    <button>Set a Goal</button>
                    <button>Edit Data</button>
                </div>
                <h2>Set a time period</h2>
                <div>
                    <input className='dateSelection' type="date" />
                    {/*<img src={rightArrow} />*/}
                    <input className='dateSelection' type="date" />
                </div>
                <button className="calculateBtn">Calculate</button>
                </div>
        )
    }
}

export default ShowDataForOneTitle;