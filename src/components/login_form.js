import React, {Component} from 'react';
import rightArrow from '../assets/images/right_arrow.png';
import leftArrow from '../assets/images/left_arrow.png';

class LoginForm extends Component {
    render() {
        return (
            <div className='loginFormContainer'>
                <form>
                    <div>
                        <div>Username</div>
                        <input type="text" />
                    </div>
                    <div>
                        <div>Password</div>
                        <input type="text"/>
                    </div>
                    <button className="loginBtn"><img src={rightArrow}/></button>
                </form>

                <div className="registerSection">
                    <h2>New User?</h2>
                    <p>Create an account, it takes less than 3 minutes!</p>
                    <button className="registerBtn"><img src={leftArrow}/></button>
                </div>
            </div>
        )
    }
}

export default LoginForm;