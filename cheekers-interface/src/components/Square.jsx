import { useState } from 'react'

const Square = ({xAxis, yAxis, tiles, x, y, num}) => {
  const [occupied, setOccupied] = useState(false)

  let coordinates = `(${xAxis}, ${yAxis})`
  
  
  const test = () => {
    return(
      tiles[num].occupied = !tiles[num].occupied,
      console.log(tiles[num].occupied)
    )
  }
  
  
  const handleClick = (e) => {
    setOccupied(!occupied)
    setTimeout(() => {test()}, 1000)


  }
  return ( 
    
    <div
    className="square"
    id={coordinates} //The id of each square = the coordinate variable 
    occupied={!occupied ? "false" : "true"} //Sets an occupied property for the element
    onClick={handleClick}
    style={{
      background: (
        (
          (yAxis % 2 > 0) ? //If y is odd
          (((yAxis % 2 > 0) && (xAxis % 2 == 0)) ? //If y is odd and x is even
          "black" : "tan") :
          ((yAxis % 2 == 0) && (xAxis % 2 > 0)) ? //If y is even and x is odd
          "black" : "tan"
          )
          )
        }}
        
        >
        <p>
        {/* {tiles[num].active?"true":"false"} */}
      </p>
    </div>
  )
}

export default Square