import Square from "./Square"
import { useState, useEffect } from "react"

const Board = () => {

  const squares = [1, 2, 3, 4, 5, 6, 7, 8] //An array (squares) which is mapped over to create columns. 
  const [tiles, setTiles] = useState([])
  const [pieces, setPieces] = useState([])
  const [thisPiece, setThisPiece] = useState({id: null, select: "false"})
  const [thatPiece, setThatPiece] = useState({id: null, select: "false"})
  const [thisTile, setThisTile] = useState({})
  const [thatTile, setThatTile] = useState({})
  let num = -1


  useEffect(() =>{
    const request = async () => {
      let req = await fetch("http://localhost:3000/tiles")
      let res = await req.json()
      setTiles(res)
    }
    request()
  }, [setTiles])

  useEffect(() => {
    const request = async () => {
      let req = await fetch("http://localhost:3000/pieces")
      let res = await req.json()
      setPieces(res)
    }
    request()
  }, [])
  
  const choosePiece = (piece) => {
    if (thisPiece.id !== piece.id) {
      setThisPiece({id: piece.id, select: "true"})
      console.log(thisPiece)
      return thisPiece
    } else if (thisPiece.id === piece.id) {
      setThatPiece({id: thisPiece.id, select: "false"})
      setThisPiece({id: null, select: "false"})
      console.log(thisPiece)
      return thisPiece
    }
  }

  const chooseTile = (tile) => {
    if (thisTile.id !== tile.id) {
      setThisTile({})
      console.log(thisTile)
      return thisTile
    } else if (thisTile.id === tile.id) {
      setThatTile({})
      setThisTile({})
      console.log(thisTile)
      return thisTile
    }
  }

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
                        thisPiece={thisPiece}
                        thatPiece={thatPiece}
                        choosePiece={choosePiece}
                        chooseTile={chooseTile} /> 
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