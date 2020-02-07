import React, {Component} from 'react';
const FETCH_URL = 'http://localhost:3000/api/v1/accounts'

class App extends Component {

    componentDidMount() {
        fetch(FETCH_URL)
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