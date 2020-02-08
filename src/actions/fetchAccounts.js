export function fetchAccounts() {
    //dispatch sends results to accountReducer.js as action/action.type/action.payload
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/accounts')
        .then(response => response.json())
        .then(accounts => dispatch({
            type: 'FETCH_ACCOUNTS',
            payload: accounts
        }));
    }
}