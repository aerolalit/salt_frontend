import React, {Text, Component, ListView, StackNavigator, Alert, Button} from 'react';
import logo from './logo.svg';
import './App.css';


var getJSON = function (url, callback) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function () {
        let status = xhr.status;
        if (status === 200)
            callback(null, xhr.response);
         else
            alert("Could not parse website.")

    };
    xhr.send();
};


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            url: '',
            response: null,
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.onClickButton = this.onClickButton.bind(this);
    };


    handleInputChange(event) {
        let target = event.target;
        let value = target.value;

        this.setState({
            url: value
        });

    };


    onClickButton(event) {
        let url = 'http://95.85.10.49:3000/analyse?url=' + this.state.url;

        getJSON(url, function (err, data) {
            this.setState({
                response: data
            })
        }.bind(this));

        if (!this.state.url) alert('Enter a valid url');
    }

    renderresult = function () {
        return <div className="row resultrow">
            <div className={"jumbotron " + (this.state.response.csr ? "good" : "bad")}>
                <h3> {this.state.response.lines[0]}</h3>
                {this.state.response.lines[1].map(function(object, i){
                    return <p key={i} >{object}</p>;
                })}
            </div>
        </div>
    };


    render() {
        return (
            <div>
                <div className="page-header">
                    <div className="container">
                        <h1>Welcome to SALT!!!</h1>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <p className="lead">Enter the url of the website that you want to analze</p>
                        <div className="input-group input-group-lg">
                            <input type="url"
                                   name="url"
                                   className="form-control"
                                   placeholder="Enter url here..."
                                   onChange={this.handleInputChange}
                            />
                            <span className="input-group-btn">
                            <button className="btn btn-default" onClick={this.onClickButton} type='button'>
                                Scan page!
                            </button>
                        </span>
                        </div>
                    </div>
                    {
                        this.state.response ? this.renderresult() : null
                    }
                </div>
            </div>


        )
    }
}


export default App;
