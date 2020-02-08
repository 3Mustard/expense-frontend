import React, { Component } from 'react';
import {connect} from 'react-redux';

//Components
import AccountsIndex from '../components/AccountsIndex';
import AccountForm from '../components/AccountForm';

//functions
import {fetchAccounts} from '../actions/fetchAccounts';

class AccountsContainer extends Component {

    componentDidMount() {
        this.props.fetchAccounts();
    }

    render () {
        return (
            <div>
                <AccountForm/>
                <AccountsIndex accounts={this.props.accounts}/>                
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