import { useState } from 'react'

const Square = (xAxis, yAxis) => {
  const [occupied, setOccupied] = useState(false)
  let coors = xAxis
  let coordinates = `(${coors.xAxis}, ${coors.yAxis})`
  
  const handleClick = (e) => {
    setOccupied(!occupied)
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
            (coors.yAxis % 2 > 0) ? //If y is odd
              (((coors.yAxis % 2 > 0) && (coors.xAxis % 2 == 0)) ? //If y is odd and x is even
                "black" : "tan") :
              ((coors.yAxis % 2 == 0) && (coors.xAxis % 2 > 0)) ? //If y is even and x is odd
                "black" : "tan"
          )
        )
      }}
      
    ></div>
  )
}

export default Square