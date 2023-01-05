import {Link} from "react-router-dom"
import {useState} from 'react'

const PlayerPage = ({setPlayerOne, setPlayerTwo}) => {

  const handleSubmitOne = async (e) => {
    e.preventDefault()
    let req = await fetch("http://localhost:3000/players", {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ 
        name: e.target.content.value, 
        number: 1,
        number_pieces: 12
       })
    })
    let res = await req.json()
    if (req.ok) {
      setPlayerOne(res)
    }  }
  //  const handleSubmitTwo = async (e) => {
  //   e.preventDefault()
  //   let playerTwo = setPlayerTwo(e.target.content.value)
  //   let req = await fetch("http://localhost:3000/players", {
  //     method: 'POST',
  //     headers: {'Content-Type': 'application/json'},
  //     body: JSON.stringify({ 
  //       name: e.target.content.value, 
  //       number: 2,
  //       number_pieces: 12
  //      })
  //   })
  //   let res = await req.json()
  //   if (req.ok) {
  //     setPlayerTwo(res)
  // } }

  return(
    <div className="player-page">
      <div className="player-holder">
        <div className="player-name">
          <h2 className="player-font">Playerrrrrr</h2>
          <form onSubmit={handleSubmitOne}>
            <input name="content" placeholder="name please..." cols="30" rows="10" />
            <button type="submit">🤌</button>
          </form>         
        </div>
        {/* <div className="player-name">
          <h2 className="player-font">Player 2</h2>
          <form onSubmit={handleSubmitTwo}>
            <input name="content" placeholder="name please..." cols="30" rows="10" />
            <button type="submit">🤌</button>
          </form>
        </div> */}
    </div>
      <Link to="game" className="start-btn">Let's Play Bitch</Link>
    </div>
  )
}

export default PlayerPage;