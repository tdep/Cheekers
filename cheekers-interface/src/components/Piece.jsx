import { useState, useEffect } from 'react'

const Piece = ({ tiles, num, pieces, id }) => {
  
  const [selectedPiece, setSelectedPiece] = useState([])
  let isPieceSelected = false
  let thisPieceId = 0

  
  const pieceSelector = () => { //click handler to pick pieces
    let tileId = tiles[num].id
    let tileCoord = {x:tiles[num].x_coordinate, y:tiles[num].y_coordinate}
    
    pieces.map((piece) => {
      let pieceTileId = piece.tile_id
      thisPieceId = piece.id
      if (tileId === pieceTileId) {
        console.log(piece)
        // piece.selected = !piece.selected
        // setSelectedPiece([piece])
        // console.log(selectedPiece[0].selected)
      }
    })
    //for the selected piece, if the tile at position 2 of the selected tile array
    //property selected is false, send a patch request to change the tile_id of the 
    //selected piece, to the id of the the tile at position 2
  }

  const handlePieceClick = () => {
    pieceSelector()
    // console.log(selectedPiece[0]?.id)
    // setTimeout(() => {pieceSelector()}, 1000)
  }

  useEffect(() => {
    // console.log('piece:', selectedPiece[0])
  }, [selectedPiece])


  return (

    <div 
      className="piece"
      id={id}
      select=""
      onClick={() => {handlePieceClick()}}
      style={{background: ((selectedPiece[0]?.id == id) ? "darkred" : "red")}}
    >
    </div>
  )
}

export default Piece