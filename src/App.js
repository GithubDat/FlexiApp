import React, { Component } from 'react';
import Flexi from './components/Flexi';
import './App.css';

const flexiConfig = {
  items: [
      {
      "name": "Dattatraya",
      "label": "Person's Name",
      "type": "TextField",
      },
      {
      "name": "states",
      "label": "Person's state",
      "type": "DropDown",
      "values": [
                    "Maharashtra",
                    "Kerala",
                    "Tamil Nadu"
                ]
      }
  ]
};

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      name:''
    }
  }

  render() {
    return (
      <div className="App">
        <Flexi
          name={this.state.name}
          onSubmit={this.onFlexiSubmit}
          config={flexiConfig}
          handleChange={(name, value) => this.setState({ [name]: value })}
          />
      </div>
    );
  }

  onFlexiSubmit=()=>{
    console.log("Submit called");
  }
}

export default App;
