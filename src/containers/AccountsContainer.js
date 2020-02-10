import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Route, Switch} from 'react-router-dom';

//Components
import AccountsIndex from '../components/AccountsIndex';
import AccountForm from '../components/AccountForm';

//functions
import {fetchAccounts} from '../actions/fetchAccounts';
import Account from '../components/Account';

class AccountsContainer extends Component {

    componentDidMount() {
        this.props.fetchAccounts();
    }

    //use render when passing props to functional component 
    render () {
        return (
            <div>
                <Switch>
                    <Route path='/accounts/new' component={AccountForm}/>
                    <Route path='/accounts/:id' render={(routerProps) => <Account {...routerProps} accounts={this.props.accounts}/>}/>      
                    <Route path='/accounts' render={(routerProps) => <AccountsIndex {...routerProps} accounts={this.props.accounts}/>}/>   
                </Switch>
            </div>
        );
    }
}

//state is from redux store, see accountReducer.js
const mapStateToProps = state => {
    return {
        accounts: state.accounts
    };
}

export default connect(mapStateToProps, {fetchAccounts})(AccountsContainer);