import { useState, useEffect} from 'react'

const Piece = ({tiles, num}) => {
  const [pieces, setPieces] = useState([])

  const grabPiece = async ()=> {
    pieces.map((piece) => {
      if (piece.tile_id === tiles[num].id) {
        console.log(piece)
      }
    })
  }

  setTimeout(() => {grabPiece()}, 1000)


  useEffect(() =>{
    const request = async () => {
      let req = await fetch("http://localhost:3000/pieces")
      let res = await req.json()
      setPieces(res)
    }
    request()
  }, [])
  return (
    <div className="piece">
    </div>
  )
}

export default Piece