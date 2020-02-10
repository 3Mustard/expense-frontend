import React from 'react';
import Account from './Account';

const AccountsIndex = ({accounts}) => {
    return (
        <div>
            {accounts.map(account => <li key={account.id}><Account account={account}/></li> )}
        </div>
    );
}

export default AccountsIndex;