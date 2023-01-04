import {Link} from "react-router-dom"
import {useState} from "react"

const PlayerPage = () => {

  const [players, setPlayers] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault()
    let req = await fetch(`http://localhost:3000/players`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({name: e.target.content.value})
    })
  }

  return(
    <div>
      <div className="player-holder">
        <div className="player-name">
          <h2>Player 1</h2>
          <form onSubmit={handleSubmit}>
            <input name="content" placeholder="name please..." cols="30" rows="10" />
            <button type="submit">🤌</button>
          </form>
        </div>
        <div className="player-name">
          <h2>Player 2</h2>
          <form onSubmit={handleSubmit}>
            <input name="content" placeholder="name please..." cols="30" rows="10" />
            <button type="submit">🤌</button>
          </form>
        </div>
    </div>
      <Link to="game" className="start-btn">Let's Play Bitch</Link>
    </div>
  )
}

export default PlayerPage;