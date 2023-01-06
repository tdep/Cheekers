import {Link} from "react-router-dom"
import {useState} from 'react'

const PlayerPage = ({setPlayerOne, setPlayerTwo}) => {
let player_id 
  const handleSubmit = async (e) => {
    e.preventDefault()
    let req = await fetch(`http://localhost:3000/players/${player_id}`, {
      method: "PATCH",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: e.target.content.value })
    })
    let res = await req.json()
    if (req.ok) {
      console.log("P-2 GO BIATCH")
    }
  }

  return(
    <div className="player-page">
      <div className="player-holder">
        <div className="player-name">
          <h2 className="player-font">Playerrrrrr</h2>
          <form onSubmit={handleSubmit}>
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