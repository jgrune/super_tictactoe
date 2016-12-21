import React, {Component} from 'react'
import SmallBoard from './SmallBoard'
import Eval from '../util/Eval'
import GifModel from '../models/Gif'
import '../index.css'

class LargeBoard extends Component {
  constructor(){
    super()
    this.boardIndeces = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    this.state = {
      firstPlayerTurn: true,
      allowableBoard: "",
      gameWin: "",
      gif: "",
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
    let allowableBoard = this.state.boardLayout[cellIndex]? "" : cellIndex

    // switch player turn and set the allowable next small board
    this.setState({
      firstPlayerTurn: !this.state.firstPlayerTurn,
      allowableBoard: allowableBoard
    })
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
    }, this.fetchGif())
  }
}

fetchGif(){
  GifModel.all().then( (res) => {
    let i = Math.floor(Math.random() * res.data.data.length)
    console.log(i)
    this.setState({
      gif: res.data.data[i].images.fixed_height.url
    })
  })
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

  if(this.state.gameWin === "TIE"){
    return(
      <div className="winner">
        It's a Tie! <br/><br/>
      <h3><a href="/">Play Again?</a></h3>
      </div>
    )
  } else if(this.state.gameWin){
    return(
      <div className="winner">
        Congratulations! Player {this.state.gameWin} wins!<br/><br/>
      <img src={this.state.gif} alt="congrats giffy"/><br/>
        <h3><a href="/">Play Again?</a></h3>
      </div>
    )
  } else {
    return(
      <div className="largeBoard">
        {smallBoards}
      </div>
    )
  }
}
}

export default LargeBoard
