import { useState, useEffect } from 'react'

const Piece = ({
  tiles, 
  num, 
  pieces
}) => {
  
  const [isPieceSelected, setIsPieceSelected] = useState(false) //state for dom rendering
  const [selectedPiece, setSelectedPiece] = useState([])

  const alreadySelected = (e) => {
    if (selectedPiece[0] === e) {
      console.log('already selected:', e.id)
    }
  }

  const pieceSelector = () => { //click handler to pick pieces
    let tileId = tiles[num].id
    let tileCoord = {x:tiles[num].x_coordinate, y:tiles[num].y_coordinate}
    
    pieces.map((piece) => {
      let pieceTileId = piece.tile_id
      
      if (tileId === pieceTileId) {
        piece.selected = !piece.selected
        alreadySelected(piece)
        setSelectedPiece([piece])
      }
    })
    //for the selected piece, if the tile at position 2 of the selected tile array
    //property selected is false, send a patch request to change the tile_id of the 
    //selected piece, to the id of the the tile at position 2
  }


  const handlePieceClick = () => {
    pieceSelector()
    // setTimeout(() => {pieceSelector()}, 1000)
    setIsPieceSelected(!isPieceSelected) //state for dom rendering
    
  }

  useEffect(() => {
    console.log('piece:', selectedPiece[0])
  }, [selectedPiece])
  return (
    <div 
      className="piece"
      select={!isPieceSelected ? "false" : "true"}
      onClick={() => {handlePieceClick()}}
      style={{background: (!isPieceSelected ? "red" : "darkred")}}
    >
    </div>
  )
}

export default Piece