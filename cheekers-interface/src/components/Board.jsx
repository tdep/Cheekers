import Square from "./Square"
import Piece from "./Piece"
import { useState } from "react"

const Board = () => {
  const squares = [1, 2, 3, 4, 5, 6, 7, 8] //An array (squares) which is mapped over to create columns. 
  // const [occupied, setOccupied] = useState(false) //A state variable set to false in order to represent whether a square is occupied
  // const handleClick = (e) => { //Used to set whether a square is occupied or not
  //   setOccupied(!occupied)
  //   return (
  //     <>
  //       {occupied}
  //     </>
  //   )
  // }
  
  return (
    <div className="play-board">
      {
        squares.map((yCoor, i) => {
          const columnId = `col-${yCoor}` //Each column is given an id using the numbers in the squares array 
          return(
            <div //Then each column returns a div where the squares array is mapped over again for each column 
            className="column"
            id={columnId}
            >
              {
                squares.map((xCoor, j) => { //The second map generates the squares and x-coordinates which are combined with the column numbers to create the coordinates 
                  
                  return(
                    <>
                      <Square xAxis={xCoor} yAxis={yCoor}/> 
                    </>
                  )
                })
              }
            </div>
          )
        })
      }
      <Piece />
    </div>
  )

}

export default Board