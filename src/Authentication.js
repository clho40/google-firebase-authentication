import React from 'react';
import { firebase } from './firebase';
import PropTypes from 'prop-types';

const Authentication = (Component) => {
    class Authentication extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                authUser: null,
            };
        }

        getChildContext() {
            return {
              authUser: this.state.authUser
            };
          }

        componentDidMount() {
            firebase.auth.onAuthStateChanged(authUser => {
                authUser
                    ? this.setState(() => ({ authUser }))
                    : this.setState(() => ({ authUser: null }));
            });
        }

        render() {
            return (
                <Component />
            )
        }
    }
    Authentication.childContextTypes = {
        authUser: PropTypes.object
      };
    return Authentication;
}

export default Authentication;