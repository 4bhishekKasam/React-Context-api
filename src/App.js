import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Neighbour from './Neighbour';
import { MyContext } from './Context';

class MyProvider extends Component {
  state = {
    firstName: 'Tom',
    lastName: 'Holland',
    age: 24,
    country: 'America',
    job: 'Actor',
  }
  render() {
    return (
      <MyContext.Provider value={{ state: this.state }}>
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <MyProvider value={{ state: this.state }}>
          <div>
            <p>I am in App component</p>
            <hr />
            <div className="childDiv">
              <Neighbour />
            </div>

          </div>
        </MyProvider>
      </div>
    );
  }
}

export default App;
