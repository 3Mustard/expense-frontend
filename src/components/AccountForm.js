import React, { Component } from 'react';

class AccountForm extends Component {

    state = {
        name: '',
        balance: ''
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = () => {
        
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Account Name: </label>
                    <input type="text" placeholder="Name" name="name" value={this.state.name} onChange={this.handleChange}/>
                    <label>Account Balance: </label>
                    <input type="text" placeholder="Balance" name="balance" value={this.state.balance} onChange={this.handleChange}/>
                    <input type="submit"/>
                </form>
            </div>
        );
    }
} 

export default AccountForm;