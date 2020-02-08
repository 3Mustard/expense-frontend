import React from 'react';

const AccountsIndex = ({accounts}) => {
    return (
        <div>
            {accounts.map(account => <li key={account.id}>{account.name} - {account.balance}</li> )}
        </div>
    );
}

export default AccountsIndex;