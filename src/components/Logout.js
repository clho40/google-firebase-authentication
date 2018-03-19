import React from 'react';
import { auth } from '../firebase';

import FlatButton from 'material-ui/FlatButton';

const LogoutButton = () => <FlatButton label="Logout" onClick={auth.doSignOut} />

export default LogoutButton;