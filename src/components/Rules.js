import React, { Component } from 'react'
import '../index.css';
import {Modal} from 'react-bootstrap'
import {Button} from 'react-bootstrap'

class Rules extends Component {

  render() {
    return (
      <Modal {...this.props} bsSize="small" aria-labelledby="contained-modal-title-sm">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-sm">
            <span id="title">Game Rules</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Win three games of Tic Tac Toe in a row.
            You may only play in the big field that
            corresponds to the last small field your
            opponent played. If you are sent to a
            small board that is already decided, you can
            move freely.</p>

        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default Rules
