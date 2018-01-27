import React, { Component } from 'react';
import ReactDOM from 'react-dom'
// import { Provider } from 'react-redux'
// import ReduxPromise from 'redux-promise'
import TripTime from '../containers/TripTime'
import '../App.css';


export default class App extends Component {
  handleSubmitDirections() {
    const origin = document.querySelector('.origin-input').value,
      destination = document.querySelector('.destination-input').value
      if(origin.length>0 && destination.length>0) {
        // check returned object for keys
        // this.setState({ time: fetchTripTime(origin, destination) })
      }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <TripTime />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}
