import { useState } from "react";
import { Link } from "react-router-dom";

const Login = ({ players, setLoggedIn, currentPlayer, setCurrentPlayer }) => {

  const [formData, setFormData] = useState({
    name: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    players.some(player => {
      if (player.name === formData.name) {
        setCurrentPlayer(player)
        setLoggedIn(true)
      } else {
        console.log("get cho bitch ass outta hiaa")
      }
    })
  }
  

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value})
  }


  return (
    <div className="login">
      <form className='login-form' onSubmit={e => handleSubmit(e)}>
        <h2>Login</h2>
        <input type='text' placeholder='Name' value={formData.name} name='name' onChange={e => handleChange(e)} ></input>
        <button className='login-btn' type='submit'>Login</button>
      </form>
      <Link to="game">TO Game</Link>
    </div>
  )
}

export default Login