import { useState, useEffect } from 'react'

const Piece = ({ tiles, num, pieces, id, choosePiece, selectedPiece, setSelectedPiece, thisPiece}) => {

  const pieceUpdater = async () => {
    let thisPieceId = selectedPiece.id
    const pieceSelectedObject = { selected: selectedPiece.selected = !selectedPiece.selected }
    let req = await fetch(`http://localhost:3000/pieces/${thisPieceId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(pieceSelectedObject)
    })
    let res = await req.json()
    if (req.ok) {
      console.log('piece response is', res)
    }
  }
  
  let currentPiece = (piece) => {
    if (thisPiece.id === piece.id) {
      return "true"
    } else {
      return "false"
    }
  }

  return (

    <>
      {
        pieces.map((piece) => {
          let tileId = tiles[num].id
          let pieceTileId = piece.tile_id
          if (tileId === pieceTileId) { //selects the piece that is only where the mouse clicks
            return(
              <div 
                className="piece"
                id={id}
                select={currentPiece(piece)}
                onClick={() => {choosePiece(piece)}}
                style={{background: (thisPiece.id===piece.id)?"darkred":"red"}}
              >
              </div>
            )
          }
        })
      }
    </>
  )
}

export default Piece