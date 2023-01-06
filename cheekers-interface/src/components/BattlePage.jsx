import Board from './Board'
import Message from './Message'

const BattlePage = ({players, currentPlayer}) => {

  return(
    <div className="battlepage">
      <Board />
      <Message players={players} currentPlayer={currentPlayer}/>
    </div>
  )
}

export default BattlePage