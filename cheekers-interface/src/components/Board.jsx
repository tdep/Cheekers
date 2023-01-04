import Square from "./Square"
import { useState, useEffect } from "react"

const Board = ({
  selectedPiece, 
  setSelectedPiece, 
  selectedTile, 
  setSelectedTile
}) => {

  const squares = [1, 2, 3, 4] //An array (squares) which is mapped over to create columns. 
  const [tiles, setTiles] = useState([])
  const [pieces, setPieces] = useState([])
  let num = -1

  useEffect(() =>{
    const request = async () => {
      let req = await fetch("http://localhost:3000/tiles")
      let res = await req.json()
      setTiles(res)
    }
    request()
  }, [])

  useEffect(() => {
    const request = async () => {
      let req = await fetch("http://localhost:3000/pieces")
      let res = await req.json()
      setPieces(res)
    }
    request()
  }, [])
  
  return (
    <div className="play-board">
      {
        squares.map((yCoor, y) => {
          const columnId = `col-${yCoor}` //Each column is given an id using the numbers in the squares array 
          return(
            <div //Then each column returns a div where the squares array is mapped over again for each column 
            className="column"
            id={columnId}
            >
              {
                squares.map((xCoor, x) => { //The second map generates the squares and x-coordinates which are combined with the column numbers to create the coordinates 
                  { num += 1 }
                  return(
                    <>
                      <Square 
                        xAxis={xCoor} 
                        yAxis={yCoor} 
                        tiles={tiles} 
                        num={num} 
                        pieces={pieces} 
                        selectedPiece={selectedPiece} 
                        setSelectedPiece={setSelectedPiece} 
                        selectedTile={selectedTile} 
                        setSelectedTile={setSelectedTile} /> 
                    </>
                  )
                })
              }
            </div>
          )
        })
      }
    </div>
  )

}

export default Board