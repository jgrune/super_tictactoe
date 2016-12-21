import React, { Component } from 'react';
import './index.css';
import LargeBoard from './components/LargeBoard'
import Rules from './components/Rules'
import {Button} from 'react-bootstrap'


class App extends Component {
  constructor(){
    super()
    this.state = {
      smShow: false
     }
    }

  render() {
    let smClose = () => this.setState({ smShow: false });

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

            <Button id="rules" bsStyle="primary" onClick={()=>this.setState({ smShow: true })}>
              Game Rules
            </Button>
            <Rules show={this.state.smShow} onHide={smClose} />

            <LargeBoard />

          </main>
          <Rules />
        </div>
      );
    }
  }

  export default App;
