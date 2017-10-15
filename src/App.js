// import {
//   StackNavigator, TabNavigator
// } from 'react-navigation';
// import MainScreen from './MainScreen'
// import ProfileScreen from './ProfileScreen'
//
// const BasicApp = StackNavigator({
//   Main: {screen: MainScreen},
//   Profile: {screen: ProfileScreen},
// });
//
// export default BasicApp;

import React, { Text, Component,ListView, StackNavigator, Alert, Button} from 'react';
import logo from './logo.svg';
import './App.css';


var getJSON = function(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
      var status = xhr.status;
      if (status == 200) {
        callback(null, xhr.response);
      } else {
        callback(status);
      }
    };
    xhr.send();
};


class App extends Component {

    constructor(props) {
      super(props);
      this.state = {
        url:'',
        CSR:'true',
        submitClicked: false,
        isLoading:true,
        text:''

      };
      this.handleInputChange = this.handleInputChange.bind(this);
      this.onClickButton = this.onClickButton.bind(this);
    };



    handleResult = function(){
        if(this.state.submitClicked && this.state.url != null){
            // this.state.submitClicked = false;
            return [<h3 className="CSR">Showing Result for {this.state.url}</h3>, <h4 className="CSR"> This is CSR: {this.state.CSR}</h4>,
                    <h5 className="text"> {this.state.text}</h5>]
        }

        else {
            return null;
        }
    }


    handleInputChange(event){
        var target = event.target;
        var value = target.value;

        this.setState({
            url:value
        });

    };



    onClickButton(event){
        this.setState({
            submitClicked:true
        })

        let url = 'http://www.randomtext.me/api/';

        getJSON(url, function(err, data) {
            if (err != null) {
                alert('Something went wrong: ' + err);
            } else {
                // alert(JSON.stringify(data));
                this.setState({
                    text: JSON.stringify(data)
                })
            }
       }.bind(this));

        if(!this.state.url) alert('Enter a valid url');
    }


    createButton= function (name) {
        return <button> {name} </button>;
    };

     createButtons= function (nameList) {
        //   alert(nameList.length)
        return nameList.length >0 ? nameList.map(this.createButton): null;
    };



  render() {



    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to SALT!!!</h1>
        </header>
        <p className="App-intro">
          Enter the <code>url</code> of the website that you want to analze !!!
        </p>


        <form >
          <input className="App-input" type="text"
            name="url"
            placeholder="Enter url here..."

            onChange={this.handleInputChange}
          />
          <button className="Scan-button" onClick={this.onClickButton} type='button'>
            Scan page!
            </button>
            {this.handleResult()}

        </form>
      </div>

    );
  }
}




export default App;
