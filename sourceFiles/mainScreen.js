import React, { Text, Component, Alert, Button} from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {

    constructor(props) {
      super(props);
      this.state = {
        url:'sa',
        CSR:'true'
      };
      this.handleInputChange = this.handleInputChange.bind(this);
      this.onClickButton = this.onClickButton.bind(this);
    };

    handleInputChange(event){
        var target = event.target;
        var value = target.value;

        this.state.url = value;
        //alert(this.state.url)


    };
    onClickButton(event){
        !this.state.url ? alert('Enter a valid url') : alert(this.state.url)
    }


    createButton= function (name) {
        return <button> {name} </button>;
    };

      createButtons= function (nameList) {
        //   alert(nameList.length)
        return nameList.length >0 ? nameList.map(this.createButton): null;
    };

    renderCSR = function(){
        return   this.state.url ? <h3 className="CSR"> This is CSR: {this.state.CSR}</h3> : null ;
    }


  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to SALT!!!</h1>
        </header>
        <p className="App-intro">
          Enter the <code>url</code> of the website that you want to analze !!!
        </p>

        {this.createButtons(['1','2','3'])}

        <form>
          <input type="text"
            name="url"
            placeholder="Enter url here..."
            onChange={this.handleInputChange}
          />
          <button onClick={this.onClickButton}>
            Scan it!
            </button>
            {this.renderCSR()}
        </form>
      </div>

    );
  }
}


export default App;
