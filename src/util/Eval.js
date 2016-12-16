let evalBoard = {
  evalBoard(board){
    console.log(board)
    if (board[1] && board[2] && board[3] === "X")
      console.log("X WINS!")
  }
}

export default evalBoard
