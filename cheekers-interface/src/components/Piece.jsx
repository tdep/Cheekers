import { useState, useEffect} from 'react'

const Piece = ({tiles, num, pieces}) => {
  const [selected, setSelected] = useState(false)
  
  const pieceSelector = () => {
    let tileId = tiles[num].id
    let tileCoord = {x:tiles[num].x_coordinate, y:tiles[num].y_coordinate}
    
    pieces.map((piece) => {
      let selectedPiece = []
      let pieceTileId = piece.tile_id
      if (tileId === pieceTileId) {
        piece.selected = !piece.selected
        selectedPiece.push(piece)
        console.log(selectedPiece[0])
      }
    })

    setSelected(!selected)

  }
  return (
    <div 
      className="piece"
      selected={!selected ? false : true}
      onClick={pieceSelector}
      id="no"
    >
    </div>
  )
}

export default Piece
// setTimeout(() => {grabPiece()}, 1000)