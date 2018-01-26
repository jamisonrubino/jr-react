import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ReduxPromise from 'redux-promise'

import './App.css';

export default class App extends Component {

  handleSubmitDirections() {
    const input1 = document.querySelectorAll('input')[0],
      input2 = document.querySelectorAll('input')[1]

    if(input1.value && input2.value) {
      // Google Places Directions API fetch
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        // Set up Google Places autocomplete
        // <TripTime
        //   origin={}
        //   destination={}
        //   time={}
        //   changeOirigin={e=>this.setState({origin: e.target.value})}
        //   changeDestination={e=>this.setState({destination: e.target.value})}
        //   submit={()=>this.handleSubmitDirections()}
        //   />

        // <MusicSource
        //   source={}
        //   inputData={}
        //   />

        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}
