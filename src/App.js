import React, {Component} from 'react';
import {connect} from 'react-redux';
import fetchAccounts from './actions/fetchAccounts';
import AccountsContainer from './containers/AccountsContainer';

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