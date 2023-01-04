import { useState } from 'react'
import React from "react"
import BattlePage from './components/BattlePage'
import StartPage from './components/StartPage'
import PlayerPage from './components/PlayerPage'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {

  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<StartPage />}/>
          <Route path="players" element={<PlayerPage />}/>
          <Route path="players/game" element={<BattlePage />}/>
      </Routes>
    </BrowserRouter>
    // <div >
    //   {/* <Board /> */}
    //   <Message />
    // </div>
  )
}

export default App
