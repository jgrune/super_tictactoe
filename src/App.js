import React, { Component } from 'react';
import './index.css';
import LargeBoard from './components/LargeBoard'
import Rules from './components/Rules'



class App extends Component {

  render() {
    return (
      <div>
        <main>
          <h1>
            <span id="letter1">S</span>
            <span id="letter2">u</span>
            <span id="letter3">p</span>
            <span id="letter4">e</span>
            <span id="letter5">r </span>
            <br/>Tic-Tac-Toe
            </h1>
            <LargeBoard />
          </main>
          <Rules />
        </div>
      );
    }
  }

  export default App;
