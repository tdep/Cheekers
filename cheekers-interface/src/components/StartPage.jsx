import {Link} from "react-router-dom"

const StartPage = () => {
  return(
    <>
    <div className="start">
      <h2 className="start-page">CHEEKERS</h2>
      <Link to="game" className="start-btn">Play!</Link>

    </div>
    </>
  )
}

export default StartPage;