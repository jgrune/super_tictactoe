import React, { Component } from 'react'
import Eval from '../util/Eval'
import '../index.css';


class Rules extends Component {

  render(){
    return(
      <div>
        <div id="mySidenav" className="sidenav">
          <a href="#" className="closebtn" onClick={Eval.closeNav}>&times;</a>
          <p>Win three games of Tic Tac Toe in a row.
            You may only play in the big field that
            corresponds to the last small field your
            opponent played. When your are sent to a
            field that is already decided, you can
            choose freely.</p>
        </div>

        <span id="rules" onClick={Eval.openNav}><strong>Game Rules</strong></span>
    </div>
  )
}
}

export default Rules
