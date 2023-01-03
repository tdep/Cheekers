import { useState, useEffect} from 'react'

const Piece = () => {
  const [pieces, setPieces] = useState([])

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
      {console.log(pieces[1])}
    </div>
  )
}

export default Piece