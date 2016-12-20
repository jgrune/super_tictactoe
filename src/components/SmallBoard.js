import React, {Component} from 'react'
var classNames = require('classnames')
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
  let boardLayout = this.state.boardLayout
  boardLayout[i] = xVal ? "X" : "O"
  this.setState({
    boardLayout: boardLayout
  })
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
  let classes = classNames({
    'smallBoard': true,
    'active': this.props.allowableBoard === this.props.boardIndex
  })

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
      <div className={classes}>
        {cells}
      </div>
    )
  }
}
}

export default SmallBoard
