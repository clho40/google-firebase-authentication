import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

import LogoutButton from './Logout';

const HeaderTitle = () => {
    return (
        <div>
            <AppBar
                title="Title"
                iconElementRight={<FlatButton label="Logout" />}
                showMenuIconButton={false}
            />
        </div>
    )
}

export default HeaderTitle