import React, {Component} from 'react';
const ACCOUNTS_FETCH_URL = 'http://localhost:3000/api/v1/accounts'

class App extends Component {

    componentDidMount() {
        fetch(ACCOUNTS_FETCH_URL, {
            method: 'GET'
        })
        .then(response => response.json())
        .then(jsonResponse => console.log(jsonResponse));
    }

    render() {
        return (
            <div className="App">
                App
            </div>
        );
    }
}

export default App;