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

  clickOn(evt, turn){
    if(this.props.allowableClick()){
      if(!evt.target.innerHTML){
        if(turn){
          evt.target.append("X")
        } else {
          evt.target.append("O")
        }
        this.setState({
          xVal: turn
        }, () => this.props.updateBoardLayout(this.props.cellIndex, this.state.xVal))
        this.props.nextTurn(this.props.cellIndex)
      }
    }

  }

  render(){
    let classes = classNames({
      'cell': true,
      'x': this.state.xVal,
      'o': !this.state.xVal
    })

    return(
      <div className={classes} onClick={(evt) => this.clickOn(evt, this.props.turn)}></div>
    )
  }
}

export default Cell
