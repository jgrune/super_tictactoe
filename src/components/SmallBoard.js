import React, {Component} from 'react'
import Cell from './Cell'
import Eval from '../util/Eval'
import '../index.css'

class SmallBoard extends Component {
  constructor(){
    super()
    this.state = {
      cellIndeces: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      wonBy: "",
      boardLayout: {
        1: "",
        2: "",
        3: "",
        4: "",
        5: "",
        6: "",
        7: "",
        8: "",
        9: ""
      }
    }
  }

updateBoardLayout(i, xVal){
  this.state.boardLayout[i] = xVal ? "X" : "O"
  this.forceUpdate()
  if(Eval.evalBoard(this.state.boardLayout)){
    this.setState({
      wonBy: Eval.evalBoard(this.state.boardLayout)
    }, () => this.props.bigBoardEval(this.props.boardIndex, this.state.wonBy))
  }
}

allowableClick(){
  if(!this.props.allowableBoard || this.props.allowableBoard === this.props.boardIndex){
    return true
  } else {
    return false
  }
}

render(){

  let cells = this.state.cellIndeces.map ( (i) => {
    return (
      <Cell updateBoardLayout={this.updateBoardLayout.bind(this)} nextTurn={this.props.nextTurn}
      turn={this.props.turn}
      allowableClick={this.allowableClick.bind(this)}
      key={i}
      cellIndex={i}/>
    )
  })

  if (this.state.wonBy){
    return(
      <div className="boardWin">
        {this.state.wonBy}
      </div>
    )
  } else {
    return(
      <div className="smallBoard">
        {cells}
      </div>
    )
  }
}
}

export default SmallBoard
