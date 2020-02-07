import React, {Component} from 'react';
import {connect} from 'react-redux';
import fetchAccounts from './actions/fetchAccounts';
import AccountsContainer from './containers/AccountsContainer';

const ACCOUNTS_FETCH_URL = 'http://localhost:3000/api/v1/accounts'

class App extends Component {

    render() {
        return (
            <div className="App">
                <AccountsContainer />
            </div>
        );
    }
}

export default connect()(App);