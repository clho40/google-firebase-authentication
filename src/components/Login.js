import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import { RegistrationLink } from './Register';
import { auth } from '../firebase';
import * as routes from '../constants/Routes';

import TextField from 'material-ui/TextField';

const LoginPage = ({ history }) =>
    <div>
        <h1>Login</h1>
        <LoginForm history={history} />
    </div>

const byPropKey = (propertyName, value) => () => ({
    [propertyName]: value,
});

const INITIAL_STATE = {
    email: '',
    password: '',
    error: null,
};

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = { ...INITIAL_STATE };
    }

    onSubmit = (event) => {
        const { email, password } = this.state;

        const { history } = this.props;

        auth.doSignInWithEmailAndPassword(email, password)
            .then(() => {
                this.setState(() => ({ ...INITIAL_STATE }));
                history.push(routes.LANDING);
            })
            .catch(error => {
                this.setState(byPropKey('error', error));
            });

        event.preventDefault();
    }

    render() {
        const {
            email,
            password,
            error,
            } = this.state;

        const isInvalid =
            password === '' ||
            email === '';

        return (
            <form className="pure-form pure-form-aligned" onSubmit={this.onSubmit}>
                <fieldset>
                    {error && <p>{error.message}</p>}
                    <div className="pure-control-group">
                        <label htmlFor="email">Email Address</label>
                        <input
                            id="email"
                            value={email}
                            onChange={event => this.setState(byPropKey('email', event.target.value))}
                            type="text"
                            placeholder="Email Address"
                        />
                    </div>
                    <div className="pure-control-group">
                        <label htmlFor="password">Password</label>
                        <input
                            id="password"
                            value={password}
                            onChange={event => this.setState(byPropKey('password', event.target.value))}
                            type="password"
                            placeholder="Password"
                        />
                    </div>
                    <div className="pure-controls">
                        <button disabled={isInvalid} type="submit" className="pure-button pure-button-primary">Login</button>
                        <RegistrationLink />
                    </div>
                </fieldset>
            </form>
        );
    }
}

const LoginLink = () =>
    <p>
        Already have an account?
    {' '}
        <Link to={routes.LOGIN}>Login</Link>
    </p>

export default withRouter(LoginPage);

export {
    LoginForm,
    LoginLink,
};