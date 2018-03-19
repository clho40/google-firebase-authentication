import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as routes from './constants/Routes'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Account from './components/Account';
import HeaderTitle from './components/HeaderTitle';
import ChatList from './components/ChatList';
import Login from './components/Login';
import Navigation from './components/Navigation';
import RegistrationPage from './components/Register';

import Authentication from './Authentication'

const App = () =>
  <MuiThemeProvider>
    <Router>
      <div>
        <HeaderTitle />
        <Route exact path={routes.ACCOUNT} component={() => <Account />} />
        <Route exact path={routes.CHATS} component={() => <ChatList />} />
        <Route exact path={routes.LOGIN} component={() => <Login />} />
        <Route exact path={routes.REGISTER} component={() => <RegistrationPage />} />
        <Navigation />
      </div>
    </Router>
  </MuiThemeProvider>

export default Authentication(App);