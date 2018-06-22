import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Neighbour from './Neighbour';
import { MyContext } from './Context';

class MyProvider extends Component {
  state = {
    firstName: 'Tom', lastName: 'Holland', age: 24, country: 'America', job: 'Actor',
  }
  render() {
    return (
      <MyContext.Provider value={{
        state: this.state, growOld: () => this.setState({ age: this.state.age + 1 })
      }}>
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

class Family extends Component {
  render() {
    return (
      <div>
        <Person />
      </div>
    );
  }
}

class Person extends Component {
  render() {
    return (
      <div>
        <MyContext.Consumer>
          {(context) => (
            <React.Fragment>
              <p>Name : {context.state.firstName} {context.state.lastName} </p>
              <p>Age : {context.state.age}</p>
              <p><button onClick={context.growOld}>click me</button></p>
            </React.Fragment>
          )}
        </MyContext.Consumer>
      </div>
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
            <Family />
            <br />
            <Neighbour />
          </div>
        </MyProvider>
      </div>
    );
  }
}

export default App;
