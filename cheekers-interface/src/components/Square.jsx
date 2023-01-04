import { useState, useEffect } from 'react'
import Piece from "./Piece"

const Square = ({xAxis, yAxis, tiles, num, pieces}) => {
  const [occupied, setOccupied] = useState(false)
  const [tileSelected, setTileSelected] = useState(false)
  let opacity = 1.0
  let coordinates = `(${xAxis}, ${yAxis})`
  
  const mouseOver = (e) => {
    e.target.style.opacity = (opacity - 0.2)
  }

  const mouseOut = (e) => {
    e.target.style.opacity = opacity
  }
  const handleClick = async () => {
    let tileId = tiles[num].id
    // const tileOccupiedObject = { occupied: tiles[num].occupied = !tiles[num].occupied }
    const tileSelectedObject = { selected: tiles[num].selected = !tiles[num].selected}
    let req = await fetch(`http://localhost:3000/tiles/${tileId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(tileSelectedObject)
    })
    console.log('tile:', tiles[num])
    let res = await req.json()
    if (req.ok) {
      console.log('response is', res)
    } else {
      alert('Somting weent veerty wong')
    }
    setTileSelected(!tileSelected)
    // setTimeout(() => {test()}, 1000)


  }
  return ( 
    
    <div
      className="square"
      id={coordinates} //The id of each square = the coordinate variable 
      select={!tileSelected ? "false" : "true"} //Sets an occupied property for the element
      onClick={handleClick}
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
        opacity: (!tileSelected ? opacity : (opacity = opacity - 0.2))
      }}       
    >
      {pieces.map((piece) => {
        if(piece.tile_id === tiles[num].id) {
          return(
            <Piece tiles={tiles} num={num} pieces={pieces}/>
          )
        }
      })}
    </div>
  )
}

export default Square