import React, {Component} from 'react'
import SmallBoard from './SmallBoard'
import Eval from '../util/Eval'
import '../index.css'

class LargeBoard extends Component {
  constructor(){
    super()
    this.boardIndeces = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    this.state = {
      firstPlayerTurn: true
    }
  }

  performTurn(){
    this.setState({
      firstPlayerTurn: !this.state.firstPlayerTurn
    })
    Eval.evalBoard()
  }

  render(){
    let smallBoards = this.boardIndeces.map ( (i) => {
      return (
        <SmallBoard performTurn={this.performTurn.bind(this)} turn={this.state.firstPlayerTurn} key={i} />
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
