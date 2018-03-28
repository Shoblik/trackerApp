import React, {Component} from 'react';
import RenderTitleList from './renderListOfTitle';

class ThingsToTrack extends Component {
    constructor(props) {
        super(props);

        this.state = {
            titleArr: ['React', 'Pushups', 'Hoame'],
            titleInput: '',
        }
    }

    handleInputChange(event) {
        this.setState({titleInput: event.target.value});
    }
    submitTitle() {
        this.setState({titleArr: this.state.titleArr.concat(this.state.titleInput)});
    }

    render() {
        console.log(this.props)
        return (
            <div className="thingsToTrackContainer">
                <h2>Things to Track</h2>
                <p>Choose how you would like to track this title.</p>
                <select>
                    <option value='timeTracking'>Time Tracking</option>
                    <option value='count'>Frequency</option>
                </select>
                <div className="inputHandler">
                    <span>Title:</span>
                    <input onChange={(e) => this.handleInputChange(e)} value={this.state.titleInput} className='trackInput' type='text' />
                    <button onClick={(e) => this.submitTitle()} className='trackSubmit'>Enter</button>
                </div>
                <RenderTitleList data={this.state.titleArr} clickable={false}/>
            </div>
        )
    }
}

export default ThingsToTrack;