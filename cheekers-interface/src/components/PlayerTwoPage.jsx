import {Link} from "react-router-dom"

const PlayerTwoPage = ({setPlayerTwo}) => {
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    let req = await fetch('http://localhost:3000/players/2', {
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
    <div>
      <div className="player-page">
        <div className="player-holder">
          <div className="player-name">
            <h2 className="player-font">pLaYerRRrrrR:2</h2>
            <form onSubmit={handleSubmit}>
              <input name="content" placeholder="name please..." cols="30" rows="10" />
              <button type="submit">Pastafazool 🤌</button>
            </form>
          </div>
        </div>
      </div>
      <Link to="game" className="start-btn">Let's Play Bitch</Link>
    </div>
  )
}
export default PlayerTwoPage