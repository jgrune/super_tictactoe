import React, {Component} from 'react'
import '../index.css'

class Cell extends Component {
  constructor(){
    super()
    this.state = {
      xVal: true
    }
  }

  clickOn(evt, turn){
    if(!evt.target.innerHTML){
      if(turn){
        evt.target.append("X")
      } else {
        evt.target.append("O")
      }
      this.setState({
        xVal: turn
      })
      this.props.performTurn()
    }
    console.log(this.state.xVal)

    // evaluate small board after each player turn
    this.props.updateBoardLayout(this.props.cellIndex, this.state.xVal)
  }

  render(){
    return(
      <div className="cell" onClick={(evt) => this.clickOn(evt, this.props.turn)}></div>
    )
  }
}

export default Cell