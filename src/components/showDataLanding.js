import React, {Component} from 'react';
import Header from './header';
import RenderTitleList from './renderListOfTitle';

class ShowDataLanding extends Component {
    render() {
        const dummyData = ['React', 'Pushups', 'Hoame'];
        return (
            <div>
                <Header />
                <RenderTitleList history = {this.props.history} data={dummyData} clickable={true}/>
            </div>
        )
    }
}

export default ShowDataLanding;