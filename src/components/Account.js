import React from 'react';

const Account = ({account}) => {

    return (
        <li>
            {account.name} - {account.balance}
        </li>
    );
}

export default Account;