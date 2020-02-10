import React, { Component } from 'react';
import TransactionsForm from '../components/TransactionForm';
import TransactionsIndex from '../components/TransactionsIndex';

//recieves prop: account
class TransactionsContainer extends Component {

    render() {
        return (
            <div>
                Transactions container 
                <TransactionsForm/>
                <TransactionsIndex transactions={this.props.account && this.props.account.transactions}/>
            </div>
        );
    }
}

export default TransactionsContainer;