import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { auth } from '../firebase';

import { LoginLink } from './Login';

import * as routes from '../constants/Routes';

const INITIAL_STATE = {
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null,
    checkTerms: false,
};

const byPropKey = (propertyName, value) => () => ({
    [propertyName]: value
});

const RegistrationPage = ({ history }) =>
    <div>
        <h1>Registration</h1>
        <RegistrationForm history={history} />
    </div>

class RegistrationForm extends Component {
    constructor(props) {
        super(props);
        this.state = { ...INITIAL_STATE };
    }

    onSubmit = (event) => {
        const {
            username,
            email,
            passwordOne,
          } = this.state;

        const {
            history,
          } = this.props;

        auth.doCreateUserWithEmailAndPassword(email, passwordOne)
            .then(authUser => {
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
            username,
            email,
            passwordOne,
            passwordTwo,
            error,
            checkTerms,
          } = this.state;

        const isInvalid =
            passwordOne !== passwordTwo ||
            passwordOne === '' ||
            email === '' ||
            username === '' ||
            !checkTerms;

        return (
            <form className="pure-form pure-form-aligned" onSubmit={this.onSubmit}>
                <fieldset>
                    {error && <p>{error.message}</p>}
                    <div className="pure-control-group">
                        <label htmlFor="username">Full Name</label>
                        <input
                            id="username"
                            value={username}
                            onChange={event => this.setState(byPropKey('username', event.target.value))}
                            type="text"
                            placeholder="Full Name"
                        />
                        <span className="pure-form-message-inline">This is a required field.</span>
                    </div>
                    <div className="pure-control-group">
                        <label htmlFor="email">Email Address</label>
                        <input
                            id="email"
                            value={email}
                            onChange={event => this.setState(byPropKey('email', event.target.value))}
                            type="text"
                            placeholder="Email Address"
                        />
                        <span className="pure-form-message-inline">This is a required field.</span>
                    </div>
                    <div className="pure-control-group">
                        <label htmlFor="passwordOne">Password</label>
                        <input
                            id="passwordOne"
                            value={passwordOne}
                            onChange={event => this.setState(byPropKey('passwordOne', event.target.value))}
                            type="password"
                            placeholder="Password"
                        />
                        <span className="pure-form-message-inline">This is a required field.</span>
                    </div>
                    <div className="pure-control-group">
                        <label htmlFor="passwordTwo">Confirm Password</label>
                        <input
                            id="passwordTwo"
                            value={passwordTwo}
                            onChange={event => this.setState(byPropKey('passwordTwo', event.target.value))}
                            type="password"
                            placeholder="Confirm Password"
                        />
                        <span className="pure-form-message-inline">This is a required field.</span>
                    </div>
                    <div className="pure-controls">
                        <label htmlFor="cbxTnC" className="pure-checkbox">
                            <input id="cbxTnC" type="checkbox"
                                onChange={event => this.setState(byPropKey('checkTerms', event.target.checked))}
                            />
                            I've read the terms and conditions
                        </label>
                        <button disabled={isInvalid} type="submit" className="pure-button pure-button-primary">Register</button>
                        <LoginLink />
                    </div>
                </fieldset>
            </form>
        );
    }
}

const RegistrationLink = () =>
    <p>
        Don't have an account?
    {' '}
        <Link to={routes.REGISTER}>Register</Link>
    </p>

export default withRouter(RegistrationPage);

export {
    RegistrationForm,
    RegistrationLink,
};