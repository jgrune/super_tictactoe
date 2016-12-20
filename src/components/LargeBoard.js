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
      boardTurn: "",
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

  nextTurn(boardIndex){
    this.setState({
      firstPlayerTurn: !this.state.firstPlayerTurn,
      boardTurn: boardIndex
    }, () =>
    console.log("the board for the next turn is board #" + this.state.boardTurn)
  )
    // Eval.evalBoard()
  }

  bigBoardEval(i, boardVal){
    console.log("this is the big board evaluation")
    this.state.boardLayout[i] = boardVal
    this.forceUpdate()
    console.log(this.state.boardLayout)
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
        <SmallBoard bigBoardEval={this.bigBoardEval.bind(this)} nextTurn={this.nextTurn.bind(this)} turn={this.state.firstPlayerTurn} key={i}
        allowableBoard={this.state.boardTurn}
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
