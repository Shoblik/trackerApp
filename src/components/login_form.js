import React, {Component} from 'react';
import rightArrow from '../assets/images/right_arrow.png';
import leftArrow from '../assets/images/left_arrow.png';


class LoginForm extends Component {
    constructor(props) {
        super(props);

     this.state = {
         username: '',
         password: '',
         active: false,
     }
    }
    handleInputChange(event, selectedInput) {
        if (selectedInput === 'username') {
            this.setState({username : event.target.value});
        } else {
            this.setState({password : event.target.value});
        }
    }
    handleLoginSubmit(e) {
        e.preventDefault();

        if (this.state.username === 'Simon Hoblik' && this.state.password == 123) {
            this.props.history.push('/homepage');
        } else {
            console.log('wrong password');
        }
    }
    handleSignUpSubmit(e) {
        e.preventDefault();

    }
    flipPanel() {
        let ele = document.querySelector('.flip-container');
        console.log(ele);
        ele.classList.toggle('active');

        let front = document.querySelector('.front');
        let back = document.querySelector('.back');

        if (ele.classList.contains('active')) {
            front.style.transform = 'rotateY(180deg)';
            back.style.transform = 'rotateY(0deg)';
        } else {
            front.style.transform = 'rotateY(0deg)';
            back.style.transform = 'rotateY(180deg)';
        }
    }

    render() {
        return (
            <div className="flip-container">
                <div className="flipper">
                    <div className="front">
                        <div className='loginFormContainer'>
                            <form onSubmit={(e) => this.handleLoginSubmit(e)}>
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
                                <button onClick={this.flipPanel} type="submit" className="registerBtn"><img src={leftArrow}/></button>
                            </div>
                        </div>
                    </div>
                    <div className="back">
                        <form onSubmit={(e) => this.handleSignUpSubmit(e)}>
                            <h2>Register</h2>
                            <div>
                                <div>Username</div>
                                <input type='text' />
                            </div>
                            <div>
                                <div>Password</div>
                                <input type="password"/>
                            </div>
                            <div>
                                <div>Confirm Password</div>
                                <input type="password" />
                            </div>
                            <div>
                                <div>Name</div>
                                <input type='text' />
                            </div>
                            <div>
                                <div>Email</div>
                                <input type='text' />
                            </div>
                            <button onClick={this.flipPanel} type="submit" className="registerBtn"><img src={leftArrow}/></button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginForm;