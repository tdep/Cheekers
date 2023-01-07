import { useState, useEffect } from 'react'
import React from "react"
import './App.css'

import StartPage from './components/StartPage'
import Login from "./components/Login"
import BattlePage from "./components/BattlePage"
import { 
  BrowserRouter, 
  Routes, 
  Route 
} from "react-router-dom"

const App = () => {
  
  const [players, setPlayers] = useState([])
  const [currentPlayer, setCurrentPlayer] = useState([])
  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    let request = async () => {
      let req = await fetch("http://localhost:3000/players")
      let res = await req.json()
      setPlayers(res)
    }
    request()
  }, [setPlayers])


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartPage />} />
        {/* <Route path="/" element={<Login  players={players} setLoggedIn={setLoggedIn} currentPlayer={currentPlayer} setCurrentPlayer={setCurrentPlayer}/>} /> */}
        <Route path="/game" element={<BattlePage players={players} loggedIn={loggedIn} setLoggedIn={setLoggedIn} currentPlayer={currentPlayer} setCurrentPlayer={setCurrentPlayer} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
