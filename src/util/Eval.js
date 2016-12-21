let evalBoard = {
  evalBoard(board){
    if      (board[1] === "X" && board[2] === "X" && board[3] === "X")
      return "X"
    else if (board[1] === "O" && board[2] === "O" && board[3] === "O")
      return "O"
    else if (board[4] === "X" && board[5] === "X" && board[6] === "X")
      return "X"
    else if (board[4] === "O" && board[5] === "O" && board[6] === "O")
      return "O"
    else if (board[7] === "X" && board[7] === "X" && board[9] === "X")
      return "X"
    else if (board[7] === "O" && board[8] === "O" && board[9] === "O")
      return "O"
    else if (board[1] === "X" && board[4] === "X" && board[7] === "X")
      return "X"
    else if (board[1] === "O" && board[4] === "O" && board[7] === "O")
      return "O"
    else if (board[2] === "X" && board[5] === "X" && board[8] === "X")
      return "X"
    else if (board[2] === "O" && board[5] === "O" && board[8] === "O")
      return "O"
    else if (board[3] === "X" && board[6] === "X" && board[9] === "X")
      return "X"
    else if (board[3] === "O" && board[6] === "O" && board[9] === "O")
      return "O"
    else if (board[1] === "X" && board[5] === "X" && board[9] === "X")
      return "X"
    else if (board[1] === "O" && board[5] === "O" && board[9] === "O")
      return "O"
    else if (board[3] === "X" && board[5] === "X" && board[7] === "X")
      return "X"
    else if (board[3] === "O" && board[5] === "O" && board[7] === "O")
      return "O"
    else if (board[1] && board[2] && board[3] && board[4] && board[5] && board[6] && board[7] && board[8] && board[9])
      return "TIE"
    else {
      return ""
    }
  },

  openNav() {
    document.getElementById("mySidenav").style.opacity = "1";
  },

  /* Set the width of the side navigation to 0 */
  closeNav() {
    document.getElementById("mySidenav").style.opacity = "0";
  }

}

export default evalBoard
