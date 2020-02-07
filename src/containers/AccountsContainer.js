import React, { Component } from 'react';
import AccountsIndex from '../components/AccountsIndex';
import AccountForm from '../components/AccountForm';

class AccountsContainer extends Component {

    render () {
        return (
            <div>
                <AccountForm/>
                <AccountsIndex/>                
            </div>
        );
    }
}

export default AccountsContainer;