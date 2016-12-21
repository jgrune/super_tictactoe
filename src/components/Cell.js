import React, {Component} from 'react'
var classNames = require('classnames')
import '../index.css'

class Cell extends Component {
  constructor(){
    super()
    this.state = {
      xVal: true
    }
  }

  clickOn(evt, firstPlayerTurn){
    // first check if cell is within an allowable board
    if(this.props.allowableClick()){
      // if cell has no value
      if(!evt.target.innerHTML){
        // check who's turn it is
        if(firstPlayerTurn){
          evt.target.append("X")
        } else {
          evt.target.append("O")
        }
        // set x-value in state to either true or false
        this.setState({
          xVal: firstPlayerTurn
        }, () => {
          this.props.updateBoardLayout(this.props.cellIndex, this.state.xVal)

// ********* FIX THIS ************
// nextTurn needs to run AFTER updateBoardLayout - but this seems super hacky

          setTimeout(() => this.props.nextTurn(this.props.cellIndex), 0)
        }
      )

    }
  }
}

render(){
  // classes for coloring of x's and o's
  let classes = classNames({
    'cell': true,
    'x': this.state.xVal,
    'o': !this.state.xVal
  })

  return(
    <div className={classes} onClick={(evt) => this.clickOn(evt, this.props.firstPlayerTurn)}></div>
  )
}
}

export default Cell
