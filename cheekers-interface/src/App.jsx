import { useState, useEffect } from 'react'
import Board from './components/Board'
import './App.css'

function App() {
  const [selectedPiece, setSelectedPiece] = useState([])
  const [selectedTile, setSelectedTile] = useState([])
  
  useEffect(() => {
    console.log('tile:', selectedTile[0])
  })

  useEffect(() => {
    console.log('piece:', selectedPiece[0])
  })

  return (
    <div >
      <Board 
        selectedPiece={selectedPiece} 
        setSelectedPiece={setSelectedPiece}
        selectedTile={selectedTile} 
        setSelectedTile={setSelectedTile} />
    </div>
  )
}

export default App
