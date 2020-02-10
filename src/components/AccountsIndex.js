import React from 'react';
import Account from './Account';

const AccountsIndex = ({accounts}) => {
    return (
        <div>
            {accounts.map(account => <div key={account.id}><Account account={account}/></div> )}
        </div>
    );
}

export default AccountsIndex;