import React, {Component} from 'react';
import rightArrow from '../assets/images/right_arrow.png';
import leftArrow from '../assets/images/left_arrow.png';

class LoginForm extends Component {
    constructor(props) {
        super(props);

     this.state = {
         username: '',
         password: '',
     }
    }
    handleInputChange(event, selectedInput) {
        if (selectedInput === 'username') {
            this.setState({username : event.target.value});
        } else {
            this.setState({password : event.target.value});
        }
    }
    handleSubmit(e) {
        e.preventDefault();
        console.log('Username: ', this.state.username);
        console.log('Password: ', this.state.password);

    }
    render() {
        return (
            <div className='loginFormContainer'>
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <div>
                        <div>Username</div>
                        <input onChange={(e) => this.handleInputChange(e, 'username')} type="text" value={this.state.username} />
                    </div>
                    <div>
                        <div>Password</div>
                        <input onChange={(e) => this.handleInputChange(e, 'password')} type="password" value={this.state.password} />
                    </div>
                    <button className="loginBtn"><img src={rightArrow}/></button>
                </form>

                <div className="registerSection">
                    <h2>New User?</h2>
                    <p>Create an account, it takes less than 3 minutes!</p>
                    <button type="submit" className="registerBtn"><img src={leftArrow}/></button>
                </div>
            </div>
        )
    }
}

export default LoginForm;