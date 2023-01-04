import {Link} from "react-router-dom"

const StartPage = () => {
  return(
    <>
    <div>
      <h2>CHEEKERS</h2>
      <Link to="players" className="start-btn">Get Started,loser</Link>
    </div>
    </>
  )
}

export default StartPage;