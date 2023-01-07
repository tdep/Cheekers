import Board from './Board'
import Message from './Message'
import Login from './Login'

const BattlePage = ({ players, loggedIn, setLoggedIn, currentPlayer, setCurrentPlayer}) => {

  return(
    <div className="battlepage">
      <div className="board">
        <Board />
        <div className="messaging">
          <Login players={players} setLoggedIn={setLoggedIn} currentPlayer={currentPlayer} setCurrentPlayer={setCurrentPlayer} />
          <Message players={players} currentPlayer={currentPlayer}/>
        </div>
        
      </div>
    </div>
  )
}

export default BattlePage