import {Link} from "react-router-dom"

const StartPage = () => {
  return(
    <>
    <div className="start">
      <h2 className="start-page">CHEEKERS</h2>
      <Link to="playerone" className="start-btn">Get Started Player 1</Link>
      <Link to="playertwo" className="start-btn">Get Started Player 2</Link>

    </div>
    </>
  )
}

export default StartPage;