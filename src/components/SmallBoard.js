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
    // temporary variable assignment required in order to update board layout object
    let boardLayout = this.state.boardLayout

    // grab 'x' or 'o' value from cell
    boardLayout[i] = xVal ? "X" : "O"

    // actually set the board state
    this.setState({
      boardLayout: boardLayout
    })

    // evaluate small board for win condition
    if(Eval.evalBoard(this.state.boardLayout)){
      this.setState({
        wonBy: Eval.evalBoard(this.state.boardLayout)
      }, () => {

        // if small board has been won, evaluate big board for win condition
        console.log('small board has been won by ' + this.state.wonBy)
        this.props.bigBoardEval(this.props.boardIndex, this.state.wonBy)
      })
    }
  }

  allowableClick(){
    if(!this.props.allowableBoard || this.props.allowableBoard === this.props.boardIndex){
      return true
    }
  }

  render(){
    let classes = classNames({
      'smallBoard': true,
      'active': !this.props.allowableBoard || (this.props.allowableBoard === this.props.boardIndex)
    })

    let winClasses = classNames({
      'boardWin': true,
      'x': this.state.wonBy === "X",
      'o': this.state.wonBy === "O"
    })

    let cells = this.state.cellIndeces.map ( (i) => {
      return (
        <Cell
          updateBoardLayout={this.updateBoardLayout.bind(this)}
          nextTurn={this.props.nextTurn}
          firstPlayerTurn={this.props.firstPlayerTurn}
          allowableClick={this.allowableClick.bind(this)}
          key={i}
          cellIndex={i}/>
      )
    })

    if (this.state.wonBy){
      return(
        <div className={winClasses}>
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
