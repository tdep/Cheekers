import {Link} from "react-router-dom"

const PlayerPage = () => {

  const handleSubmitOne = async (e) => {
    e.preventDefault()
    let req = await fetch("http://localhost:3000/players/1", {
      method: 'PATCH',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        name: e.target.content.value,
      })
    })
  }
   const handleSubmitTwo = async (e) => {
    e.preventDefault()
    let req = await fetch("http://localhost:3000/players/2", {
      method: 'PATCH',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        name: e.target.content.value,
      })
    })
  }

  return(
    <div className="player-page">
      <div className="player-holder">
        <div className="player-name">
          <h2 className="player-font">Player 1</h2>
          <form onSubmit={handleSubmitOne}>
            <input name="content" placeholder="name please..." cols="30" rows="10" />
            <button type="submit">🤌</button>
          </form>         
        </div>
        <div className="player-name">
          <h2 className="player-font">Player 2</h2>
          <form onSubmit={handleSubmitTwo}>
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