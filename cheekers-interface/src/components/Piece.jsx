import { useState, useEffect} from 'react'

const Piece = ({tiles, num, pieces}) => {


  const grabPiece = async ()=> {
    pieces.map((piece) => {
      if (piece.tile_id === tiles[num].id) {
        // console.log(piece)
      }
    })
  }

  setTimeout(() => {grabPiece()}, 1000)

  return (
    <div className="piece">
    </div>
  )
}

export default Piece