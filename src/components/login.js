import React, {Component} from 'react';

import Header from './header';
import LoginForm from './login_form';

class Login extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <Header />
                <LoginForm history={this.props.history} />
            </div>
        );
    }
}

export default Login;