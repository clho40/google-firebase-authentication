import React from 'react';
import PropTypes from 'prop-types';
import { withRouter  } from 'react-router-dom';


import * as routes from '../constants/Routes'

import FontIcon from 'material-ui/FontIcon';
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';

const Navigation = (props, { authUser }) => (
    <div>
        {authUser
            ? <NavigationAuth />
            : <NavigationNonAuth />
        }
    </div>
)

Navigation.contextTypes = {
    authUser: PropTypes.object,
};

const NavigationAuth = withRouter(({ history }) => {
    return (
        <Paper zDepth={1}>
            <BottomNavigation >
                <BottomNavigationItem
                    label="Home"
                    icon={<FontIcon className="material-icons">home</FontIcon>}
                    onClick={() => { history.push(routes.LANDING) }}
                />
                <BottomNavigationItem
                    label="Chat"
                    icon={<FontIcon className="material-icons">chat</FontIcon>}
                    onClick={() => { history.push(routes.CHATS) }}
                />
                <BottomNavigationItem
                    label="Account"
                    icon={<FontIcon className="material-icons">account_circle</FontIcon>}
                    onClick={() => { history.push(routes.ACCOUNT) }}
                />
            </BottomNavigation>
        </Paper>
    )
})

const NavigationNonAuth = withRouter(({ history }) => {
    return (
        <Paper zDepth={1}>
            <BottomNavigation >
                <BottomNavigationItem
                    label="Login"
                    icon={<FontIcon className="material-icons">person</FontIcon>}
                    onClick={() => { history.push(routes.LOGIN) }}
                />
                <BottomNavigationItem
                    label="Register"
                    icon={<FontIcon className="material-icons">create</FontIcon>}
                    onClick={() => { history.push(routes.REGISTER) }}
                />
            </BottomNavigation>
        </Paper>
    )
})

export default Navigation;