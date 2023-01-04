import { useState, useEffect} from 'react'

const Piece = ({tiles, num, pieces}) => {
  const [pieceSelected, setPieceSelected] = useState(false) //state for dom rendering
  
  const pieceSelector = () => {
    let tileId = tiles[num].id
    let tileCoord = {x:tiles[num].x_coordinate, y:tiles[num].y_coordinate}
    
    pieces.map((piece) => {
      let selectedPiece = []
      let pieceTileId = piece.tile_id
      if (tileId === pieceTileId) {
        piece.selected = !piece.selected
        selectedPiece.push(piece)
        console.log('piece:', selectedPiece[0])
      }
    })

    setPieceSelected(!pieceSelected) //state for dom rendering

  }
  return (
    <div 
      className="piece"
      select={!pieceSelected ? "false" : "true"}
      onClick={pieceSelector}
      style={{
        background: (
          pieceSelected ? "darkred" : "red"
        )
      }}
    >
    </div>
  )
}

export default Piece
// setTimeout(() => {grabPiece()}, 1000)