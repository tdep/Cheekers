import {Link, Outlet} from "react-router-dom"

const PlayerOnePage = ({setPlayerOne}) => {

  const handleSubmit = async (e) => {
    e.preventDefault()
    let req = await fetch('http://localhost:3000/players/1', {
      method: "PATCH",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({name: e.target.content.value})
    })
    let res = await req.json()
    if (req.ok) {
      console.log("P-1 GO BIATCH")
    }
  }
  return(
    <div>
      <div className="player-page">
        <div className="player-holder">
          <div className="player-name">
            <h2 className="player-font">pLaYerRRrrrR:1</h2>
            <form onSubmit={handleSubmit}>
              <input name="content" placeholder="name please..." cols="30" rows="10" />
              <button type="submit">Pastafazool 🤌</button>
            </form>
          </div>
        </div>
      </div>
        <Link to="game" className="start-btn">Let's Play Bitch</Link>
        <Outlet />
    </div>
  )
}

export default PlayerOnePage
