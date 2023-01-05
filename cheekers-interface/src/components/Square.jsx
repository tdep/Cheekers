import { useState, useEffect } from 'react'
import Piece from "./Piece"

const Square = ({ xAxis, yAxis, tiles, num, pieces, thisPiece, choosePiece, chooseTile }) => {

  // const [occupied, setOccupied] = useState(false)
  const [isTileSelected, setIsTileSelected] = useState(false)
  const [selectedTile, setSelectedTile] = useState([])
  const [selectedPiece, setSelectedPiece] = useState([])

  let opacity = 1.0

  const tileSelector = async () => {
    let tile = tiles[num]
    let thisTileId = tile.id
    // const tileOccupiedObject = { occupied: tiles[num].occupied = occupied }
    const tileSelectedObject = { selected: tile.selected = !tile.selected } //set selected attribute for tile object
    let req = await fetch(`http://localhost:3000/tiles/${thisTileId}`, {
      method: "PATCH",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(tileSelectedObject) //send the tile object selection attr. to the db
    })
    let res = await req.json()
    if (req.ok) {
      // console.log('response is', res)
    } else {
      alert('Somting weent veerty wong')
    }
    setSelectedTile([tile])
  }

  const occupyChecker = async (e) => { //prevent selecting a tile twice?
    let tileElement = e.target
    if (tileElement.hasChildNodes()) {
      console.log(tileElement.childNodes[0])
    } else {
      tileSelector()
    }
  }

  const mouseOver = (e) => { //change tile opacity on mouseOver
    e.target.style.opacity = (opacity - 0.2)
  }

  const mouseOut = (e) => { //return tile opacity to normal on mouseOut
    e.target.style.opacity = opacity
  }

  const handleTileClick = (e) => {
    occupyChecker(e)
    setIsTileSelected(!isTileSelected) //is the tile selected?
    // setTimeout(() => {test()}, 1000)
  }

  useEffect(() => {

  }, [selectedTile])


  return ( 

    
    <div
      className="square"
      select={!isTileSelected ? "false" : "true"} //Sets an occupied property for the element
      onClick={handleTileClick}
      onMouseOver={mouseOver}
      onMouseOut={mouseOut}
      style={{
        background: (
            (
              (yAxis % 2 > 0) ? //If y is odd
              (((yAxis % 2 > 0) && (xAxis % 2 == 0)) ? //If y is odd and x is even
              "black" : "tan") :
              ((yAxis % 2 == 0) && (xAxis % 2 > 0)) ? //If y is even and x is odd
              "black" : "tan"
            )
        ),
        // opacity: (!isTileSelected ? opacity : (opacity = opacity - 0.2))
      }}       
    >
      {pieces.map((piece) => {
        if(piece.tile_id === tiles[num].id) {
          return(
            <Piece 
              tiles={tiles} 
              num={num} 
              pieces={pieces}
              id={piece.id}
              selectedPiece={selectedPiece}
              setSelectedPiece={setSelectedPiece}
              thisPiece={thisPiece}
              choosePiece={choosePiece}
 />
          )
        }
      })}
    </div>


  )
}

export default Square