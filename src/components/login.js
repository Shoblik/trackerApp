import React, {Component} from 'react';

import Header from './header';
import LoginForm from './login_form';

class Login extends Component {
    render() {
        return (
            <div>
                <Header />
                <LoginForm />
            </div>
        );
    }
}

export default Login;