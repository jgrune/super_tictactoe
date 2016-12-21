import React, {Component} from 'react'
import SmallBoard from './SmallBoard'
import Eval from '../util/Eval'
import '../index.css'

class LargeBoard extends Component {
  constructor(){
    super()
    this.boardIndeces = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    this.state = {
      firstPlayerTurn: true,
      allowableBoard: "",
      gameWin: "",
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

  nextTurn(cellIndex){
    // set the next allowable small board equal to empty string (any board) or the value of the last cell index
    console.log(this.state.boardLayout)
    let allowableBoard = this.state.boardLayout[cellIndex]? "" : cellIndex

    // switch player turn and set the allowable next small board
    this.setState({
      firstPlayerTurn: !this.state.firstPlayerTurn,
      allowableBoard: allowableBoard
    }, console.log(this.state.boardLayout))
  }

  bigBoardEval(i, boardVal){
    let boardLayout = this.state.boardLayout
    boardLayout[i] = boardVal
    this.setState({
      boardLayout: boardLayout
    }
  )
  if(Eval.evalBoard(this.state.boardLayout)){
    this.setState({
      gameWin: Eval.evalBoard(this.state.boardLayout)
    }, this.declareWinner)
  }
}

declareWinner(){
  console.log("the game winner is " + this.state.gameWin + "!")
}

render(){
  let smallBoards = this.boardIndeces.map ( (i) => {
    return (
      <SmallBoard
        bigBoardEval={this.bigBoardEval.bind(this)}
        nextTurn={this.nextTurn.bind(this)}
        firstPlayerTurn={this.state.firstPlayerTurn}
        key={i}
        allowableBoard={this.state.allowableBoard}
        boardIndex={i} />
    )
  })

  return(
    <div className="largeBoard">
      {smallBoards}
    </div>
  )
}
}

export default LargeBoard
