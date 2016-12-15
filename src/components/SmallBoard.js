import React, {Component} from 'react'
import Cell from './Cell'
// import Eval from '../util/Eval'
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
  this.setState({
    boardLayout: {
      1: xVal
    }
  })
  console.log(this.state.boardLayout)
}

render(){
  let cells = this.state.cellIndeces.map ( (i) => {
    return (
      <Cell updateBoardLayout={this.updateBoardLayout.bind(this)} performTurn={this.props.performTurn} turn={this.props.turn} key={i} cellIndex={i}/>
    )
  })

  return(
    <div className="smallBoard">
      {cells}
    </div>
  )
}
}

export default SmallBoard