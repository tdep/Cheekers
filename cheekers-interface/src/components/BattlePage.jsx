import Board from './Board'
import Message from './Message'

const BattlePage = ({playerOne, playerTwo}) => {
  console.log(playerOne, playerTwo)
  return(
    <div className="battlepage">
      <Board />
      <Message playerOne={playerOne} playerTwo={playerTwo}/>
    </div>
  )
}

export default BattlePage