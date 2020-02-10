import React from 'react';
import {Route, Link} from 'react-router-dom';

const AccountsIndex = (props) => {
    return (
        <div>
            {props.accounts.map(account => 
                <li key={account.id}>
                    <Link to={`/accounts/${account.id}`}>{account.name}</Link>
                </li> )}
        </div>
    );
}

export default AccountsIndex;